// Type declarations for helpers.js used by VSCode/TS tooling.

/**
 * CSS property names available on CSSStyleDeclaration (camelCase).
 * Examples: "backgroundColor", "border", "marginTop", "display", etc.
 */
type CssProperty = keyof CSSStyleDeclaration;

declare function onEvent(id: string, event: string, handler: EventListenerOrEventListenerObject): void;

declare function setProperty(id: string, property: CssProperty, value: string | number): void;

declare function playSound(url: string, loop?: boolean): void;

declare function setText(id: string, text: string): void;

declare function getText(id: string): string | null;

declare function setValue(id: string, value: string): void;

declare function getValue(id: string): string | null;

declare function setImageURL(id: string, url: string): void;