import { Modal } from "@/components/ui/Modal";
import { TaskFormValues } from "@/validators/tasks";
import { EditTaskModalProps } from "@/types/tasks";
import TaskForm from "../TaskForm/TaskForm";

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