export const APP_META = Object.freeze({
  name: "PCC Prep Assist",
  version: "4.0.0",
  buildDate: "2026-07-22",
});

export const AU_VALUES = Object.freeze(["", "C503", "C703", "E801"]);
export const ISE_VALUES = Object.freeze(["", "ISE NEO", "ISE"]);
export const SB_SWITCH_BY_AU = Object.freeze({
  1: "1",
  2: "3",
  3: "5",
  4: "7",
});

export const DOCUMENTS = Object.freeze([
  {
    id: "pro-pdf",
    folder: ["pro", "exhibition"],
    title: "Exhibition Mode PRO",
    titleDe: "Exhibition Mode PRO",
    description: "Reference document for cobas pro exhibition-mode settings.",
    descriptionDe: "Referenzdokument für die Exhibition-Mode-Einstellungen von cobas pro.",
    href: "Exhibition%20Mode%20Pro.pdf",
    system: "cobas pro",
    category: "Exhibition Mode",
    categoryDe: "Exhibition Mode",
    type: "PDF",
    size: "242 KB",
  },
  {
    id: "pure-pdf",
    folder: ["pure", "exhibition"],
    title: "Exhibition Mode PURE",
    titleDe: "Exhibition Mode PURE",
    description: "Reference document for cobas pure exhibition-mode settings.",
    descriptionDe: "Referenzdokument für die Exhibition-Mode-Einstellungen von cobas pure.",
    href: "ExhibitionMode_for%20pure_0.3_SW%200102.pdf",
    system: "cobas pure",
    category: "Exhibition Mode",
    categoryDe: "Exhibition Mode",
    type: "PDF",
    size: "761 KB",
  },
  {
    id: "leveling-overview",
    folder: ["leveling"],
    title: "Leveling overview",
    titleDe: "Nivellierung – Übersicht",
    description: "General reference for system leveling.",
    descriptionDe: "Allgemeine Übersicht zur Nivellierung des Systems.",
    href: "documents/leveling/leveling-overview.png",
    system: "General",
    category: "Leveling",
    categoryDe: "Nivellierung",
    type: "PNG",
    size: "97 KB",
  },
  {
    id: "leveling-ssu",
    folder: ["leveling"],
    title: "SSU leveling",
    titleDe: "SSU nivellieren",
    description: "Leveling reference for the sample supply unit.",
    descriptionDe: "Referenz zur Nivellierung der SSU.",
    href: "documents/leveling/leveling-ssu.png",
    system: "cobas pro",
    category: "Leveling",
    categoryDe: "Nivellierung",
    type: "PNG",
    size: "193 KB",
  },
  {
    id: "leveling-sb",
    folder: ["leveling"],
    title: "SB leveling",
    titleDe: "SB nivellieren",
    description: "Leveling reference for the sample buffer.",
    descriptionDe: "Referenz zur Nivellierung der SB.",
    href: "documents/leveling/leveling-sb.png",
    system: "cobas pro",
    category: "Leveling",
    categoryDe: "Nivellierung",
    type: "PNG",
    size: "260 KB",
  },
  {
    id: "leveling-ise",
    folder: ["leveling"],
    title: "ISE leveling",
    titleDe: "ISE nivellieren",
    description: "Leveling reference for the ISE module.",
    descriptionDe: "Referenz zur Nivellierung des ISE-Moduls.",
    href: "documents/leveling/leveling-ise.png",
    system: "cobas pro",
    category: "Leveling",
    categoryDe: "Nivellierung",
    type: "PNG",
    size: "175 KB",
  },
  {
    id: "leveling-c503",
    folder: ["leveling"],
    title: "C503 leveling",
    titleDe: "C503 nivellieren",
    description: "Leveling reference for the C503 analytical unit.",
    descriptionDe: "Referenz zur Nivellierung der C503-Analyseeinheit.",
    href: "documents/leveling/leveling-c503.png",
    system: "cobas pro",
    category: "Leveling",
    categoryDe: "Nivellierung",
    type: "PNG",
    size: "637 KB",
  },
  {
    id: "leveling-e801",
    folder: ["leveling"],
    title: "E801 leveling",
    titleDe: "E801 nivellieren",
    description: "Leveling reference for the E801 analytical unit.",
    descriptionDe: "Referenz zur Nivellierung der E801-Analyseeinheit.",
    href: "documents/leveling/leveling-e801.png",
    system: "cobas pro",
    category: "Leveling",
    categoryDe: "Nivellierung",
    type: "PNG",
    size: "370 KB",
  },
  {
    id: "c503-s1-adjustment",
    folder: ["modification"],
    title: "C503 – S1 Adjustment Procedure",
    titleDe: "C503 – S1-Justageanweisung",
    description: "Adjustment procedure for C503 S1.",
    descriptionDe: "Justageanweisung für C503 S1.",
    href: "documents/modification/c503-s1-adjustment-procedure.pdf",
    system: "cobas pro",
    category: "Modification",
    categoryDe: "Modifikation",
    type: "PDF",
    size: "1.7 MB",
  },
  {
    id: "c503-s1-modification",
    folder: ["modification"],
    title: "C503 – S1 Modification Procedure",
    titleDe: "C503 – S1-Modifikationsanweisung",
    description: "Modification procedure for C503 S1.",
    descriptionDe: "Modifikationsanweisung für C503 S1.",
    href: "documents/modification/c503-s1-modification-procedure.pdf",
    system: "cobas pro",
    category: "Modification",
    categoryDe: "Modifikation",
    type: "PDF",
    size: "2.0 MB",
  },
  {
    id: "c503-rdk-decoupling",
    folder: ["modification"],
    title: "C503 upgrade – ISE separation (RDK)",
    titleDe: "C503-Upgrade – ISE-Separation (RDK)",
    description: "Open the Decoupling Kit upgrade procedure in RDK.",
    descriptionDe: "Upgrade-Anweisung für das Decoupling Kit in RDK öffnen.",
    href: "https://rdkm.roche.com/search/procedures/436573?lang=en",
    system: "cobas pro",
    category: "Modification",
    categoryDe: "Modifikation",
    type: "RDK",
    size: "Online",
    external: true,
  },
  {
    id: "c503-dip-switch",
    folder: ["pro", "c503"],
    title: "C503 DIP switch settings",
    titleDe: "C503 DIP-Schaltereinstellungen",
    description: "Module-configuration DIP switch reference for C503.",
    descriptionDe: "DIP-Schalterreferenz für die C503-Modulkonfiguration.",
    href: "documents/pro/c503/dip-switch-settings.png",
    system: "cobas pro",
    category: "Switch settings",
    categoryDe: "Schaltereinstellungen",
    type: "PNG",
    size: "140 KB",
  },
  {
    id: "c703-s03-02",
    folder: ["pro", "c703", "adjustment"],
    title: "C703 S03-02 – Sample Probe Position",
    titleDe: "C703 S03-02 – Probenpipettor-Position",
    description: "Sample probe position adjustment procedure.",
    descriptionDe: "Justageanweisung für die Position des Probenpipettors.",
    href: "documents/pro/c703/adjustment/s03-02-sample-probe-position.pdf",
    system: "cobas pro",
    category: "Adjustment",
    categoryDe: "Justage",
    type: "PDF",
    size: "4.2 MB",
  },
  {
    id: "c703-s03-03",
    folder: ["pro", "c703", "adjustment"],
    title: "C703 S03-03 – Reagent Probe Position",
    titleDe: "C703 S03-03 – Reagenzpipettor-Position",
    description: "Reagent probe position adjustment procedure.",
    descriptionDe: "Justageanweisung für die Position des Reagenzpipettors.",
    href: "documents/pro/c703/adjustment/s03-03-reagent-probe-position.pdf",
    system: "cobas pro",
    category: "Adjustment",
    categoryDe: "Justage",
    type: "PDF",
    size: "4.2 MB",
  },
  {
    id: "c703-s03-06",
    folder: ["pro", "c703", "adjustment"],
    title: "C703 S03-06 – Reaction Gear",
    titleDe: "C703 S03-06 – Reaktionsgetriebe",
    description: "Reaction gear adjustment procedure.",
    descriptionDe: "Justageanweisung für das Reaktionsgetriebe.",
    href: "documents/pro/c703/adjustment/s03-06-reaction-gear.pdf",
    system: "cobas pro",
    category: "Adjustment",
    categoryDe: "Justage",
    type: "PDF",
    size: "2.4 MB",
  },
  {
    id: "c703-s03-07",
    folder: ["pro", "c703", "adjustment"],
    title: "C703 S03-07 – Ultrasonic Mixer",
    titleDe: "C703 S03-07 – Ultraschallmischer",
    description: "Ultrasonic mixer adjustment procedure.",
    descriptionDe: "Justageanweisung für den Ultraschallmischer.",
    href: "documents/pro/c703/adjustment/s03-07-ultrasonic-mixer.pdf",
    system: "cobas pro",
    category: "Adjustment",
    categoryDe: "Justage",
    type: "PDF",
    size: "4.8 MB",
  },
  {
    id: "c703-s03-08",
    folder: ["pro", "c703", "adjustment"],
    title: "C703 S03-08 – Reagent Manager and Gripper",
    titleDe: "C703 S03-08 – Reagent Manager und Greifer",
    description: "Reagent manager position and gripper assembly adjustment.",
    descriptionDe: "Justage von Reagent-Manager-Position und Greiferbaugruppe.",
    href: "documents/pro/c703/adjustment/s03-08-reagent-manager-gripper.pdf",
    system: "cobas pro",
    category: "Adjustment",
    categoryDe: "Justage",
    type: "PDF",
    size: "5.5 MB",
  },
  {
    id: "c703-s03-13",
    folder: ["pro", "c703", "adjustment"],
    title: "C703 S03-13 – ADC Photoelectric Timing",
    titleDe: "C703 S03-13 – Photoelektrisches ADC-Timing",
    description: "ADC photoelectric timing adjustment procedure.",
    descriptionDe: "Justageanweisung für das photoelektrische ADC-Timing.",
    href: "documents/pro/c703/adjustment/s03-13-adc-photoelectric-timing.pdf",
    system: "cobas pro",
    category: "Adjustment",
    categoryDe: "Justage",
    type: "PDF",
    size: "649 KB",
  },
  {
    id: "c703-s03-15",
    folder: ["pro", "c703", "adjustment"],
    title: "C703 S03-15 – Reagent Cover Position",
    titleDe: "C703 S03-15 – Reagenzabdeckungsposition",
    description: "Reagent cover position adjustment procedure.",
    descriptionDe: "Justageanweisung für die Position der Reagenzabdeckung.",
    href: "documents/pro/c703/adjustment/s03-15-reagent-cover-position.pdf",
    system: "cobas pro",
    category: "Adjustment",
    categoryDe: "Justage",
    type: "PDF",
    size: "1.4 MB",
  },
  {
    id: "c703-dip-switch",
    folder: ["pro", "c703"],
    title: "C703 DIP switch settings",
    titleDe: "C703 DIP-Schaltereinstellungen",
    description: "DIP switch reference for C703 module configuration.",
    descriptionDe: "DIP-Schalterreferenz für die C703-Modulkonfiguration.",
    href: "documents/pro/c703/dip-switch-settings.png",
    system: "cobas pro",
    category: "Switch settings",
    categoryDe: "Schaltereinstellungen",
    type: "PNG",
    size: "430 KB",
  },
  {
    id: "e801-dip-switch",
    folder: ["pro", "e801"],
    title: "E801 DIP switch settings",
    titleDe: "E801 DIP-Schaltereinstellungen",
    description: "DIP switch reference for E801 module configuration.",
    descriptionDe: "DIP-Schalterreferenz für die E801-Modulkonfiguration.",
    href: "documents/pro/e801/dip-switch-settings.png",
    system: "cobas pro",
    category: "Switch settings",
    categoryDe: "Schaltereinstellungen",
    type: "PNG",
    size: "143 KB",
  },
  {
    id: "e801-adjustment-de",
    folder: ["pro", "e801"],
    title: "E801 adjustment – German",
    titleDe: "E801 Justage – Deutsch",
    description: "German adjustment documentation for cobas pro E801.",
    descriptionDe: "Deutsche Justagedokumentation für cobas pro E801.",
    href: "documents/pro/e801/adjustment-de.pdf",
    system: "cobas pro",
    category: "Adjustment",
    categoryDe: "Justage",
    type: "PDF",
    size: "19.4 MB",
  },
  {
    id: "e801-adjustment-en",
    folder: ["pro", "e801"],
    title: "E801 adjustment – English",
    titleDe: "E801 Justage – Englisch",
    description: "English adjustment documentation for cobas pro E801.",
    descriptionDe: "Englische Justagedokumentation für cobas pro E801.",
    href: "documents/pro/e801/adjustment-en.pdf",
    system: "cobas pro",
    category: "Adjustment",
    categoryDe: "Justage",
    type: "PDF",
    size: "6.0 MB",
  },
  {
    id: "sb-gen4-switch",
    folder: ["pro", "sb"],
    title: "SB Gen. 4 switch settings",
    titleDe: "SB Gen. 4 Schaltereinstellungen",
    description: "Switch-setting reference for the fourth-generation SB.",
    descriptionDe: "Schalterreferenz für die SB der vierten Generation.",
    href: "documents/pro/sb-gen4-switch-settings.jpg",
    system: "cobas pro",
    category: "Switch settings",
    categoryDe: "Schaltereinstellungen",
    type: "JPG",
    size: "85 KB",
  },
  {
    id: "pro-dry-commissioning",
    folder: ["pro", "preparation"],
    title: "Preparing cobas pro for dry commissioning",
    titleDe: "Vorbereitung für die trockene Inbetriebnahme von cobas pro",
    description: "German preparation guide for dry commissioning.",
    descriptionDe: "Deutsche Anleitung zur Vorbereitung der trockenen Inbetriebnahme.",
    href: "documents/pro/dry-commissioning-de.pdf",
    system: "cobas pro",
    category: "Preparation",
    categoryDe: "Vorbereitung",
    type: "PDF",
    size: "49.1 MB",
  },
  {
    id: "pure-c303-adjustments",
    folder: ["pure", "c303"],
    title: "cobas pure C303 adjustments",
    titleDe: "cobas pure C303 Justagen",
    description: "PowerPoint reference for C303 adjustments.",
    descriptionDe: "PowerPoint-Referenz für C303-Justagen.",
    href: "documents/pure/c303-adjustments.pptx",
    system: "cobas pure",
    category: "Adjustment",
    categoryDe: "Justage",
    type: "PPTX",
    size: "21.0 MB",
  },
  {
    id: "pure-e402-configuration",
    folder: ["pure", "e402"],
    title: "E402 module configuration",
    titleDe: "E402 Modulkonfiguration",
    description: "Module-configuration reference for cobas pure E402.",
    descriptionDe: "Referenz zur Modulkonfiguration von cobas pure E402.",
    href: "documents/pure/e402-module-configuration.jpg",
    system: "cobas pure",
    category: "Switch settings",
    categoryDe: "Schaltereinstellungen",
    type: "JPG",
    size: "200 KB",
  },
]);

const moduleFacts = Object.freeze({
  C503: {
    accent: "cyan",
    exhibition: [
      ["Board", "PMC3"],
      ["Setting", "6 OFF"],
    ],
    positions: {
      1: [["Position note", "Do not change DIP switches", "warning"]],
      2: [
        ["Board", "PMC660"],
        ["Setting", "6 OFF, 7 ON"],
      ],
    },
  },
  C703: {
    accent: "violet",
    exhibition: [["Exhibition mode", "No", "warning"]],
    positions: {
      1: [["Position note", "No change", "warning"]],
      2: [
        ["Switch", "SW16"],
        ["Setting", "4"],
      ],
    },
  },
  E801: {
    accent: "blue",
    exhibition: [
      ["Board", "SW1"],
      ["Setting", "1 OFF"],
    ],
    positions: {
      1: [["SW2", "6 ON"]],
      2: [["SW2", "6 OFF, 7 ON"]],
      3: [["SW2", "6 ON, 7 ON"]],
      4: [["SW2", "6 OFF, 7 OFF, 8 ON"]],
    },
  },
});

export function createDefaultState() {
  return {
    mode: "pro",
    pro: { iseType: "", aus: ["", "", "", ""] },
    pure: { e402: false, c303: false },
  };
}

function resolveIseType(config) {
  if (ISE_VALUES.includes(config?.iseType)) return config.iseType;
  return config?.iseNeo ? "ISE NEO" : "";
}

export function sanitizeState(value) {
  const fallback = createDefaultState();
  if (!value || typeof value !== "object") return fallback;

  const mode = value.mode === "pure" ? "pure" : "pro";
  const aus = Array.from({ length: 4 }, (_, index) => {
    const candidate = value.pro?.aus?.[index];
    return AU_VALUES.includes(candidate) ? candidate : "";
  });

  return {
    mode,
    pro: {
      iseType: resolveIseType(value.pro),
      aus,
    },
    pure: {
      e402: Boolean(value.pure?.e402),
      c303: Boolean(value.pure?.c303),
    },
  };
}

export function getProIseGuidance(config) {
  const type = resolveIseType(config);
  return {
    type,
    ssuSw14: type === "ISE" ? "2" : type === "ISE NEO" ? "4" : "",
    moduleFacts:
      type === "ISE"
        ? [
            ["Board", "PMC2"],
            ["Setting", "6 ON"],
          ]
        : [],
    sbFacts: type === "ISE" ? [["SW14", "2"]] : [],
  };
}

export function getModuleInfo(code, auNumber) {
  const data = moduleFacts[code];
  if (!data) return null;

  return {
    code,
    accent: data.accent,
    exhibition: data.exhibition.map((row) => [...row]),
    position: (data.positions[auNumber] || []).map((row) => [...row]),
    auNumber,
  };
}

export function validatePro(config) {
  const aus = Array.from(
    { length: 4 },
    (_, index) => config?.aus?.[index] || "",
  );
  const errors = [];
  const warnings = [];
  const invalidPositions = new Set();
  const warningPositions = new Set();

  const selected = aus
    .map((code, index) => ({ code, position: index + 1 }))
    .filter((item) => item.code);

  if (selected.length === 0 && !resolveIseType(config)) {
    return {
      status: "empty",
      errors,
      warnings,
      invalidPositions: [],
      warningPositions: [],
      message: "Select modules to begin the configuration.",
    };
  }

  let seenE = false;
  aus.forEach((code, index) => {
    if (!code) return;
    if (code === "E801") seenE = true;
    if ((code === "C503" || code === "C703") && seenE) {
      invalidPositions.add(index + 1);
    }
  });
  if (invalidPositions.size > 0) {
    errors.push("C modules must be positioned before all E801 modules.");
  }

  const c703Positions = selected
    .filter((item) => item.code === "C703")
    .map((item) => item.position);
  const c503Positions = selected
    .filter((item) => item.code === "C503")
    .map((item) => item.position);
  if (c703Positions.length && c503Positions.length) {
    const lastC703 = Math.max(...c703Positions);
    const firstC503 = Math.min(...c503Positions);
    if (lastC703 > firstC503) {
      [...c703Positions, ...c503Positions].forEach((position) =>
        invalidPositions.add(position),
      );
      errors.push(
        "When C703 and C503 are combined, every C703 must be before every C503.",
      );
    }
  }

  const lastOccupied = aus.reduce(
    (last, code, index) => (code ? index : last),
    -1,
  );
  if (lastOccupied >= 0) {
    aus.slice(0, lastOccupied + 1).forEach((code, index) => {
      if (!code) warningPositions.add(index + 1);
    });
  }
  if (warningPositions.size > 0) {
    warnings.push(
      "The AU layout contains an empty position between selected modules. Verify that this gap is intended.",
    );
  }

  const status = errors.length
    ? "error"
    : warnings.length
      ? "warning"
      : "valid";
  const message =
    errors[0] || warnings[0] || "Configuration order is consistent.";

  return {
    status,
    errors,
    warnings,
    invalidPositions: [...invalidPositions].sort((a, b) => a - b),
    warningPositions: [...warningPositions].sort((a, b) => a - b),
    message,
  };
}

export function buildSequencePro(config) {
  const sequence = [{ id: "ssu", code: "SSU", type: "Module", label: "SSU" }];
  const iseType = resolveIseType(config);
  if (iseType) {
    sequence.push({
      id: iseType === "ISE NEO" ? "ise-neo" : "ise",
      code: iseType,
      type: "Module",
      label: iseType,
    });
  }

  (config?.aus || []).forEach((code, index) => {
    if (!code) return;
    const auNumber = index + 1;
    sequence.push({
      id: `sb-${auNumber}`,
      code: `SB${auNumber}`,
      type: "SB",
      label: `SB${auNumber}`,
      auNumber,
    });
    sequence.push({
      id: `au-${auNumber}`,
      code,
      type: "Module",
      label: `${code} · AU${auNumber}`,
      auNumber,
    });
  });

  return sequence;
}

export function buildSequencePure(config) {
  const sequence = [];
  if (config?.e402)
    sequence.push({ id: "e402", code: "E402", type: "Module", label: "E402" });
  sequence.push({ id: "pure-ssu", code: "SSU", type: "Module", label: "SSU" });
  if (config?.c303)
    sequence.push({ id: "c303", code: "C303", type: "Module", label: "C303" });
  return sequence;
}

export function getProConnectorGroups(config) {
  const groups = [
    {
      id: "connector-ssu",
      title: "SSU",
      subtitle: "Base unit",
      connectors: ["Alarm connector", "Line connector"],
    },
  ];

  if (resolveIseType(config) === "ISE NEO") {
    groups.push({
      id: "connector-ise",
      title: "ISE NEO",
      subtitle: "Selected module",
      connectors: ["P1271"],
    });
  }

  (config?.aus || []).forEach((code, index) => {
    if (!code) return;
    const auNumber = index + 1;
    groups.push({
      id: `connector-sb-${auNumber}`,
      title: `SB${auNumber}`,
      subtitle: `Supports ${code}`,
      connectors: ["P141"],
    });

    const connectors = {
      C503: ["P7"],
      C703: ["P2003", "P121", "P133", "P114"],
      E801: ["P41", "P40", "P32"],
    }[code];

    groups.push({
      id: `connector-au-${auNumber}`,
      title: `AU${auNumber} · ${code}`,
      subtitle: "Analytical unit",
      connectors: connectors || [],
    });
  });

  return groups;
}

function countModules(aus, code) {
  return (aus || []).filter((item) => item === code).length;
}

export function getProAssemblyGroups(config) {
  const aus = config?.aus || [];
  const groups = [];
  const hasAnyAU = aus.some(Boolean);
  const e801Count = countModules(aus, "E801");
  const c503Count = countModules(aus, "C503");
  const c703Count = countModules(aus, "C703");

  let lastCode = "";
  for (let index = aus.length - 1; index >= 0; index -= 1) {
    if (aus[index]) {
      lastCode = aus[index];
      break;
    }
  }

  if (hasAnyAU) {
    groups.push({
      id: "assembly-ssu",
      title: "Accessories · SSU",
      category: "SSU",
      items: [
        "Carton <B>: PC",
        "Carton <D>: Blue box; mounting bracket E801/C703 end with 2 screws; driveline bracket; C503 end bracket",
        ...(lastCode === "C503"
          ? [
              "Carton <E>: 1 sheet-metal cover for C503 if positioned at the end",
            ]
          : []),
      ],
    });
  }

  if (resolveIseType(config) === "ISE NEO") {
    groups.push({
      id: "assembly-ise",
      title: "Accessories · ISE",
      category: "ISE",
      items: ["ISE Neo carton: Needle; calibration CD"],
    });
  }

  if (hasAnyAU) {
    groups.push({
      id: "assembly-sb",
      title: "Accessories · SBs",
      category: "SB",
      items: ["SB carton: Calibration CD"],
    });
  }

  const seen = new Set();
  aus.forEach((code) => {
    if (!code || seen.has(code)) return;
    seen.add(code);

    if (code === "C503" && c503Count) {
      groups.push({
        id: "assembly-c503",
        title: "Accessories · C503",
        category: `C503 × ${c503Count}`,
        items: [
          "Carton <A>: Gripper",
          "Carton <B>: Calibration CD; LAN cable; needles; cover lock",
        ],
      });
    }

    if (code === "C703" && c703Count) {
      groups.push({
        id: "assembly-c703",
        title: "Accessories · C703",
        category: `C703 × ${c703Count}`,
        items: [
          "Small carton: Needles; LAN cable; C703 spacer; calibration CD",
          "Medium carton: Gripper",
        ],
      });
    }

    if (code === "E801" && e801Count) {
      groups.push({
        id: "assembly-e801",
        title: "Accessories · E801",
        category: `E801 × ${e801Count}`,
        items: [
          "Top 3 cartons: TV gripper cover; splash guard; DU cover; BM-R cover; gripper",
          "Carton (10): Needles; camera; camera cover; incubator cover for DU; bottle base; blue box (LFC cups, reservoir cups); cover lock; calibration CD",
        ],
      });
    }
  });

  if (hasAnyAU) {
    groups.push({
      id: "assembly-transportline",
      title: "Transportline carton",
      category: "Transport line",
      items: ["Weights; transport line bracket for SB"],
    });

    let consecutiveE801Pairs = 0;
    for (let index = 0; index < aus.length - 1; index += 1) {
      if (aus[index] === "E801" && aus[index + 1] === "E801")
        consecutiveE801Pairs += 1;
    }

    for (let index = 1; index <= e801Count; index += 1) {
      groups.push({
        id: `assembly-esbl-${index}`,
        title: `eSBl carton ${index}/${e801Count}`,
        category: "eSBl",
        items: [
          "LAN cable",
          ...(consecutiveE801Pairs
            ? [
                `Spacer for SB when E801 modules are consecutive${consecutiveE801Pairs > 1 ? ` × ${consecutiveE801Pairs}` : ""}`,
              ]
            : []),
        ],
      });
    }

    for (let index = 1; index <= c503Count; index += 1) {
      groups.push({
        id: `assembly-csbl-${index}`,
        title: `cSBl carton ${index}/${c503Count}`,
        category: "cSBl",
        items: ["EMC cover C503; spacer C503"],
      });
    }
  }

  return groups;
}

export function getPureSwitchInfo(config) {
  return {
    e402: config?.e402
      ? [
          ["Board", "Bottom right"],
          ["SW1", "6 ON"],
          ...(config?.c303 ? [["Combination SW2", "5 OFF, 6 ON"]] : []),
        ]
      : [],
    ssu: [
      ["Board", "Top right"],
      ["SW1", "6 ON"],
    ],
    c303: config?.c303
      ? [
          ["Board", "Top right"],
          ["SW1", "6 ON"],
        ]
      : [],
  };
}

export function getConfigurationSummary(state) {
  if (state.mode === "pure") {
    const selected = [
      state.pure.e402 ? "E402" : null,
      "SSU",
      state.pure.c303 ? "C303" : null,
    ].filter(Boolean);
    return [
      "PCC Prep Assist · cobas pure",
      `Sequence: ${selected.join(" → ")}`,
      `E402: ${state.pure.e402 ? "Yes" : "No"}`,
      `C303: ${state.pure.c303 ? "Yes" : "No"}`,
    ].join("\n");
  }

  const validation = validatePro(state.pro);
  const auLines = state.pro.aus.map(
    (code, index) => `AU${index + 1}: ${code || "—"}`,
  );
  return [
    "PCC Prep Assist · cobas pro",
    `ISE: ${resolveIseType(state.pro) || "No"}`,
    ...auLines,
    `Check: ${validation.status.toUpperCase()} · ${validation.message}`,
  ].join("\n");
}
