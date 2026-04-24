export interface TaskItem {
  id: number;
  name: string;
  description: string;
  hoursLogged: number;
  projectName: string;
};

export type TaskListResponse = {
  data: TaskItem[];
};