import {TaskDto} from '../dto/task.dto';
import {Task} from '../task.model';
import {Injectable} from '@nestjs/common';

@Injectable()
export class TaskDtoMergeConverter {

  convert(taskDto: TaskDto, task: Task): Task {
    task.title = taskDto.title;
    task.status = taskDto.status;
    task.description = taskDto.description;
    return task;
  }
}
