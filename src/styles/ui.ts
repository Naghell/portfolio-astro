/** Shared surface + focus recipes. Kept here so one edit reaches every card. */

/** Every tile on every page: flat, one tone step from the page. */
export const CARD = "rounded-2xl bg-surface p-5 sm:p-6";

export const CARD_HOVER = "transition-colors duration-200 hover:bg-surface-hover";

/** Card title, the same size and colour on every page. */
export const CARD_TITLE = "text-balance text-xl font-semibold text-content-primary";

/** Defined once in theme.css; see the note there on why it is a shorthand. */
export const FOCUS = "focus-ring";

/** Inner radius = outer radius - padding, so nested corners stay concentric. */
export const INNER_RADIUS = "rounded-lg";

export const BUTTON =
  "inline-flex min-h-11 items-center gap-2 rounded-lg bg-surface-inset px-3 py-2 text-sm font-semibold text-content-primary transition-[color,background-color,scale] duration-150 hover:text-content-accent active:scale-[0.96] motion-reduce:active:scale-100";

export const CHIP =
  "inline-flex items-center gap-1.5 rounded-md bg-surface-inset px-2 py-1 text-sm text-content-secondary";
