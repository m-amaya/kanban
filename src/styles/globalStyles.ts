import { globalCss } from "./stitches.config";

const globalStyles = globalCss({
  "@import": [
    "url('https://unpkg.com/modern-css-reset/dist/reset.min.css')",
    "url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700&display=swap')",
  ],
  body: {
    backgroundColor: "$lightCream",
    textStyle: "default",
  },
  h1: {
    textStyle: "h1",
  },
  h2: {
    textStyle: "h2",
  },
  h3: {
    textStyle: "h3",
  },
  "*": {
    boxSizing: "border-box",
    noSpace: true,
  },
});

export default globalStyles;
