/** Shared surface + focus recipes. Kept here so one edit reaches every card. */

export const CARD =
  "rounded-xl border border-surface-border bg-gradient-to-br from-surface-from to-surface-to shadow-surface";

// Gradient stops are custom properties, so they were never animatable here anyway;
// transition-colors covers the border and the text that do change.
export const CARD_HOVER =
  "transition-colors duration-200 hover:from-surface-hover-from hover:to-surface-hover-to";

/** Defined once in theme.css; see the note there on why it is a shorthand. */
export const FOCUS = "focus-ring";

/** Outer radius = inner radius + padding, so nested corners stay concentric. */
export const CARD_PAD = "p-4";
export const INNER_RADIUS = "rounded-lg";

export const BUTTON =
  "inline-flex min-h-11 items-center gap-2 rounded-lg border border-surface-border px-3 py-2 text-sm font-semibold text-content-primary transition-colors duration-150 hover:bg-content-accent/10 active:scale-[0.96] [transition-property:color,background-color,scale] motion-reduce:active:scale-100";

export const CHIP =
  "inline-flex items-center gap-1.5 rounded-md border border-surface-border/60 bg-content-accent/5 px-2 py-1 text-sm text-content-secondary";
