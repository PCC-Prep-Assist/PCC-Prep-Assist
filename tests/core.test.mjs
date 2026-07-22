import test from "node:test";
import assert from "node:assert/strict";
import {
  DOCUMENTS,
  buildSequencePro,
  buildSequencePure,
  getModuleInfo,
  getProAssemblyGroups,
  getProConnectorGroups,
  getProIseGuidance,
  sanitizeState,
  validatePro,
} from "../assets/core.js";

test("E801 exhibition mode uses SW1 as the board", () => {
  const info = getModuleInfo("E801", 3);
  assert.deepEqual(info.exhibition, [
    ["Board", "SW1"],
    ["Setting", "1 OFF"],
  ]);
});

test("pro sequence preserves original AU numbers when positions contain a gap", () => {
  const sequence = buildSequencePro({
    iseType: "",
    aus: ["", "E801", "", ""],
  });
  assert.deepEqual(
    sequence.map((item) => item.code),
    ["SSU", "SB2", "E801"],
  );
  assert.equal(sequence[2].auNumber, 2);
});

test("pro validation rejects a C module after E801", () => {
  const result = validatePro({ iseType: "", aus: ["E801", "C503", "", ""] });
  assert.equal(result.status, "error");
  assert.deepEqual(result.invalidPositions, [2]);
});

test("all C703 modules must be before all C503 modules", () => {
  const result = validatePro({
    iseType: "",
    aus: ["C703", "C503", "C703", ""],
  });
  assert.equal(result.status, "error");
  assert.deepEqual(result.invalidPositions, [1, 2, 3]);
});

test("valid C and E order passes", () => {
  const result = validatePro({
    iseType: "ISE NEO",
    aus: ["C703", "C503", "E801", "E801"],
  });
  assert.equal(result.status, "valid");
  assert.equal(result.errors.length, 0);
});

test("an internal empty AU position is reported as a warning", () => {
  const result = validatePro({ iseType: "", aus: ["C503", "", "E801", ""] });
  assert.equal(result.status, "warning");
  assert.deepEqual(result.warningPositions, [2]);
});

test("connector groups retain the configured AU position", () => {
  const groups = getProConnectorGroups({
    iseType: "ISE NEO",
    aus: ["", "C703", "", ""],
  });
  assert.ok(groups.some((group) => group.title === "SB2"));
  assert.ok(groups.some((group) => group.title === "AU2 · C703"));
});

test("pure sequence always contains SSU", () => {
  const sequence = buildSequencePure({ e402: false, c303: false });
  assert.deepEqual(
    sequence.map((item) => item.code),
    ["SSU"],
  );
});

test("assembly groups scale eSBl and cSBl cartons with module counts", () => {
  const groups = getProAssemblyGroups({
    iseType: "",
    aus: ["C503", "C503", "E801", "E801"],
  });
  assert.equal(
    groups.filter((group) => group.id.startsWith("assembly-esbl-")).length,
    2,
  );
  assert.equal(
    groups.filter((group) => group.id.startsWith("assembly-csbl-")).length,
    2,
  );
});

test("stored state is sanitized", () => {
  const state = sanitizeState({
    mode: "unexpected",
    pro: { aus: ["C503", "BAD"] },
    pure: { e402: 1 },
  });
  assert.equal(state.mode, "pro");
  assert.deepEqual(state.pro.aus, ["C503", "", "", ""]);
  assert.equal(state.pro.iseType, "");
  assert.equal(state.pure.e402, true);
});

test("legacy ISE NEO state is migrated", () => {
  const state = sanitizeState({ pro: { iseNeo: true } });
  assert.equal(state.pro.iseType, "ISE NEO");
});

test("classic ISE activates the required exhibition settings", () => {
  const guidance = getProIseGuidance({ iseType: "ISE" });
  assert.equal(guidance.ssuSw14, "2");
  assert.deepEqual(guidance.moduleFacts, [
    ["Board", "PMC2"],
    ["Setting", "6 ON"],
  ]);
  assert.deepEqual(guidance.sbFacts, [["SW14", "2"]]);
});

test("ISE NEO keeps SSU SW14 at 4 without classic ISE settings", () => {
  const guidance = getProIseGuidance({ iseType: "ISE NEO" });
  assert.equal(guidance.ssuSw14, "4");
  assert.deepEqual(guidance.moduleFacts, []);
  assert.deepEqual(guidance.sbFacts, []);
});

test("classic ISE is included in the physical sequence", () => {
  const sequence = buildSequencePro({ iseType: "ISE", aus: ["C503", "", "", ""] });
  assert.deepEqual(
    sequence.map((item) => item.code),
    ["SSU", "ISE", "SB1", "C503"],
  );
});

test("document library keeps the two existing Exhibition Mode documents unique", () => {
  assert.equal(DOCUMENTS.length, 27);
  assert.equal(
    DOCUMENTS.filter((document) => document.category === "Exhibition Mode").length,
    2,
  );
  assert.equal(new Set(DOCUMENTS.map((document) => document.id)).size, DOCUMENTS.length);
  assert.equal(new Set(DOCUMENTS.map((document) => document.href)).size, DOCUMENTS.length);
});

test("document library supports every supplied file type", () => {
  const types = new Set(DOCUMENTS.map((document) => document.type));
  assert.deepEqual(types, new Set(["PDF", "PNG", "RDK", "JPG", "PPTX"]));
});

test("every document has a valid folder path", () => {
  assert.ok(
    DOCUMENTS.every(
      (document) =>
        Array.isArray(document.folder) &&
        document.folder.length > 0 &&
        document.folder.every((segment) => typeof segment === "string" && segment),
    ),
  );
  assert.deepEqual(
    new Set(DOCUMENTS.map((document) => document.folder[0])),
    new Set(["pro", "pure", "leveling", "modification"]),
  );
  assert.ok(
    DOCUMENTS.some(
      (document) => document.folder.join("/") === "pro/c703/adjustment",
    ),
  );
});
