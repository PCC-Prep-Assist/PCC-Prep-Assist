PCC PREP ASSIST 4.0.0 - INTERNES GITLAB

LOCAL USE
1. Extract the complete ZIP archive.
2. Open index.html.

GITLAB PAGES
1. Read START-HIER-GITLAB.md.
2. Upload every file and folder to the root of a new internal GitLab project.
3. Wait until the pages pipeline is green.
4. Open the internal URL shown under Deploy > Pages.
5. Configure Pages access control before sharing the URL.

AUTOMATIC UPDATES
Version 4.0.0 checks for updates at startup, when the app returns to the foreground, when connectivity is restored and every 60 seconds while active. New versions are loaded automatically when the device is online.

If an installed app still shows an older interface, open UPDATE-APP.html once. It clears only PCC Prep Assist caches and reloads the current index.html.

The interface CSS and JavaScript are bundled inside index.html, so the main application also works when opened locally from the extracted folder.
