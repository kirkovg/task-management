import {TaskStatus} from '../task.model';

export class TaskDto {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
