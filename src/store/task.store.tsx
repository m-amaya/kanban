import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface TaskStore {
  task?: Task;
  viewTask: (task: Task) => void;
  updateTitle: (title: string) => void;
  updateDescription: (description: string) => void;
  updateStatus: (status: string) => void;
  addSubtask: () => void;
  updateSubtask: (opts: Partial<Subtask>, idx: number) => void;
  removeSubtask: (idx: number) => void;
  resetTask: () => void;
}

const TaskContext = createContext({} as TaskStore);

export const TaskProvider: FC<PropsWithChildren> = (props) => {
  const [task, setTask] = useState<Task>();

  const viewTask: TaskStore["viewTask"] = (task) => setTask(task);

  const updateTitle: TaskStore["updateTitle"] = (title) => {
    if (task) {
      setTask({ ...task, title });
    }
  };

  const updateDescription: TaskStore["updateDescription"] = (description) => {
    if (task) {
      setTask({ ...task, description });
    }
  };

  const updateStatus: TaskStore["updateStatus"] = (status) => {
    if (task) {
      setTask({ ...task, status });
    }
  };

  const addSubtask: TaskStore["addSubtask"] = () => {
    if (task) {
      setTask({
        ...task,
        subtasks: [...task.subtasks, { title: "", isCompleted: false }],
      });
    }
  };

  const updateSubtask: TaskStore["updateSubtask"] = (
    { title, isCompleted = false },
    idx: number,
  ) => {
    if (task && task.subtasks[idx]) {
      const subtasks = task.subtasks;
      const updatedSubtask = subtasks[idx];
      if (title) {
        updatedSubtask.title = title;
      }
      if (isCompleted != updatedSubtask.isCompleted) {
        updatedSubtask.isCompleted = isCompleted;
      }
      subtasks[idx] = updatedSubtask;
      setTask({ ...task, subtasks });
    }
  };

  const removeSubtask: TaskStore["removeSubtask"] = (idx) => {
    if (task && task.subtasks[idx]) {
      const subtasks = task.subtasks;
      subtasks.splice(idx, 1);
      setTask({ ...task, subtasks });
    }
  };

  const resetTask: TaskStore["resetTask"] = () => {
    console.log("reset task");
    setTask({ title: "", description: "", status: "", subtasks: [] });
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        viewTask,
        updateTitle,
        updateDescription,
        updateStatus,
        addSubtask,
        updateSubtask,
        removeSubtask,
        resetTask,
      }}
      {...props}
    />
  );
};

export const useTaskStore = () => useContext(TaskContext);
