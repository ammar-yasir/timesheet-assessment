import { Modal } from "@/components/ui/Modal";
import TaskForm from "../TaskForm/TaskForm";

import { TaskFormValues } from "@/validators/tasks";

interface EditTaskModalProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  task: {
    id: number;
    name: string;
    description: string;
    projectName: string;
    hoursLogged: number;
  };
}

export default function EditTaskModal({
  isOpen,
  setOpen,
  task,
}: EditTaskModalProps) {
  const initialData: TaskFormValues = {
    name: task.name,
    description: task.description,
    projectName: task.projectName,
    hours: task.hoursLogged,
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={setOpen}
      title="Edit Entry"
    >
      <TaskForm
        setOpen={setOpen}
        initialData={initialData}
        taskId={task.id}
        mode="edit"
      />
    </Modal>
  );
}