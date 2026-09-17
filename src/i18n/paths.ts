/** `lang: undefined` emits the Spanish page at the root ("/about");
 *  `lang: "en"` emits the prefixed one ("/en/about"). */
export const langPaths = () => [
  { params: { lang: undefined } },
  { params: { lang: "en" } },
];
