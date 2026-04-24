
import { Modal } from "@/components/ui/Modal";
import TaskForm from "../TaskForm/TaskForm";

interface AddTaskModalProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

export default function AddTaskModal({ isOpen, setOpen }: AddTaskModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={setOpen} title="Add New Entry">
      <TaskForm setOpen={setOpen} />
    </Modal>
  );
}
