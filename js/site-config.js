/* ============================================================
   Site configuration — the ONE place that says which trip this
   dashboard instance is currently showing.

   This deployment shows the Midriff Islands trip. It is a
   separate deployed copy of the same shell used for Bonaire —
   per the platform's Phase 3 roadmap ("build the second real
   trip as proof the data-swap model works"), css/, js/,
   index.html, and pages/*.html below are UNCHANGED from the
   Bonaire deployment except for this one line.
   ============================================================ */

window.ACTIVE_TRIP = "midriff-islands-2026";
