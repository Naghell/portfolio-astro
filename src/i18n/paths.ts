/** `lang: undefined` emits the English page at the root ("/about");
 *  `lang: "es"` emits the prefixed one ("/es/about"). */
export const langPaths = () => [
  { params: { lang: undefined } },
  { params: { lang: "es" } },
];
