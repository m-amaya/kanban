/**
 * Global Namespace
 * Types declared here are for internal use only.
 * They will not be included in the build.
 */

import type { FC, SVGAttributes } from "react";

export {};

declare global {
  declare module "*.svg" {
    export const ReactComponent: FC<SVGAttributes<SVGElement>>;
    const content: FC<SVGAttributes<SVGElement>>;
    export default content;
  }

  interface Subtask {
    title: string;
    isCompleted: boolean;
  }

  interface Task {
    title: string;
    description: string;
    status: string;
    subtasks: Subtask[];
  }

  interface Column {
    name: string;
    tasks: Task[];
  }

  interface Board {
    _id: string;
    name: string;
    columns: Column[];
  }
}
