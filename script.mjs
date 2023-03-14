const CONFIG = {
    moduleID: "foundry-simply-pf2e-vol1",
    journalFlag: "isSimplyPF2e",
    cssClass: "simply-pf2e"
}

Hooks.on("renderJournalSheet", (app, html, data) => {
  const journal = app.document;
  if ( journal.getFlag(CONFIG.moduleID, CONFIG.journalFlag) ) html[0].classList.add(CONFIG.cssClass);
});

Hooks.on("renderJournalPageSheet", (app, html, data) => {
  const journal = app.document.parent;
  if ( journal.getFlag(CONFIG.moduleID, CONFIG.journalFlag) ) html[0].classList.add(CONFIG.cssClass);
});