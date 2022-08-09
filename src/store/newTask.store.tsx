import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface NewTaskStore {
  newTask: Task;
  updateTitle: (title: string) => void;
  updateDescription: (description: string) => void;
  updateStatus: (status: string) => void;
  addSubtask: () => void;
  updateSubtask: (title: string, idx: number) => void;
  removeSubtask: (idx: number) => void;
  resetNewTask: () => void;
}

const genNewTask = () => ({
  title: "",
  description: "",
  status: "",
  subtasks: [{ title: "", isCompleted: false }],
});

const NewTaskContext = createContext({} as NewTaskStore);

export const NewTaskProvider: FC<PropsWithChildren> = (props) => {
  const [newTask, setNewTask] = useState(genNewTask());

  const updateTitle = (title: string) => setNewTask({ ...newTask, title });

  const updateDescription = (description: string) =>
    setNewTask({ ...newTask, description });

  const updateStatus = (status: string) => setNewTask({ ...newTask, status });

  const addSubtask = () =>
    setNewTask({
      ...newTask,
      subtasks: [...newTask.subtasks, { title: "", isCompleted: false }],
    });

  const updateSubtask = (title: string, idx: number) => {
    if (newTask.subtasks[idx]) {
      const subtasks = newTask.subtasks;
      const updatedSubtask = subtasks[idx];
      updatedSubtask.title = title;
      subtasks[idx] = updatedSubtask;
      setNewTask({ ...newTask, subtasks });
    }
  };

  const removeSubtask = (idx: number) => {
    if (newTask.subtasks[idx]) {
      const subtasks = newTask.subtasks;
      subtasks.splice(idx, 1);
      setNewTask({ ...newTask, subtasks });
    }
  };

  const resetNewTask = () => setNewTask(genNewTask());

  return (
    <NewTaskContext.Provider
      value={{
        newTask,
        updateTitle,
        updateDescription,
        updateStatus,
        addSubtask,
        updateSubtask,
        removeSubtask,
        resetNewTask,
      }}
      {...props}
    />
  );
};

export const useNewTaskStore = () => useContext(NewTaskContext);
