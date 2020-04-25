import {Injectable} from '@nestjs/common';
import {Task, TaskStatus} from './task.model';
import {v4 as uuidv4} from 'uuid';
import {TaskFilterDto} from './dto/task-filter.dto';

@Injectable()
export class TasksService {

  private tasks: Array<Task> = [];

  getTaskWithFilters(filterDto: TaskFilterDto): Array<Task> {
    const {status, search} = filterDto;
    let tasks = this.getAllTasks();

    if (status) {
      tasks = this.tasks.filter(task => status === task.status);
    }
    if (search) {
      tasks = this.tasks.filter(task => task.title?.includes(search)
        || task.description?.includes(search));
    }

    return tasks;
  }

  getTask(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  createTask(task: Task): Task {
    task.id = uuidv4();
    task.status = TaskStatus.OPEN;
    this.tasks.push(task);
    return task;
  }

  updateTask(task: Task): Task {
    const taskIndex = this.tasks.findIndex(t => t.id === task.id);
    this.tasks[taskIndex] = task;
    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  private getAllTasks(): Array<Task> {
    return this.tasks;
  }
}
