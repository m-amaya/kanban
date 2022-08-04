import addTaskUrl from "./svg/icon-add-task-mobile.svg";
import boardUrl from "./svg/icon-board.svg";
import checkUrl from "./svg/icon-check.svg";
import chevronDownUrl from "./svg/icon-chevron-down.svg";
import chevronUpUrl from "./svg/icon-chevron-up.svg";
import crossUrl from "./svg/icon-cross.svg";
import darkThemeUrl from "./svg/icon-dark-theme.svg";
import hideSidebarUrl from "./svg/icon-hide-sidebar.svg";
import lightThemeUrl from "./svg/icon-light-theme.svg";
import showSidebarUrl from "./svg/icon-show-sidebar.svg";
import verticalEllipsisUrl from "./svg/icon-vertical-ellipsis.svg";

const ICONS = {
  addTask: addTaskUrl,
  board: boardUrl,
  check: checkUrl,
  chevronDown: chevronDownUrl,
  chevronUp: chevronUpUrl,
  cross: crossUrl,
  darkTheme: darkThemeUrl,
  hideSidebar: hideSidebarUrl,
  lightTheme: lightThemeUrl,
  showSidebar: showSidebarUrl,
  verticalEllipsis: verticalEllipsisUrl,
};

export default ICONS;

export type IconNames = keyof typeof ICONS;
