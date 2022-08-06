import { globalCss } from "./stitches.config";

const globalStyles = globalCss({
  "@import": [
    "url('https://unpkg.com/modern-css-reset/dist/reset.min.css')",
    "url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700&display=swap')",
  ],
  "*": {
    boxSizing: "border-box",
    noSpace: true,
  },
});

export default globalStyles;
