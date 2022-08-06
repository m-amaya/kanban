import { ReactComponent as AddTask } from "./svg/icon-add-task-mobile.svg";
import { ReactComponent as Board } from "./svg/icon-board.svg";
import { ReactComponent as Check } from "./svg/icon-check.svg";
import { ReactComponent as ChevronDown } from "./svg/icon-chevron-down.svg";
import { ReactComponent as ChevronUp } from "./svg/icon-chevron-up.svg";
import { ReactComponent as Cross } from "./svg/icon-cross.svg";
import { ReactComponent as DarkTheme } from "./svg/icon-dark-theme.svg";
import { ReactComponent as HideSidebar } from "./svg/icon-hide-sidebar.svg";
import { ReactComponent as LightTheme } from "./svg/icon-light-theme.svg";
import { ReactComponent as ShowSidebar } from "./svg/icon-show-sidebar.svg";
import { ReactComponent as VerticalEllipsis } from "./svg/icon-vertical-ellipsis.svg";

const ICONS = {
  addTask: AddTask,
  board: Board,
  check: Check,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  cross: Cross,
  darkTheme: DarkTheme,
  hideSidebar: HideSidebar,
  lightTheme: LightTheme,
  showSidebar: ShowSidebar,
  verticalEllipsis: VerticalEllipsis,
};

export default ICONS;

export type IconNames = keyof typeof ICONS;
