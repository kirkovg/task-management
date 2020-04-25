import {Converter} from '../../converter';
import {TaskDto} from '../dto/task.dto';
import {Task} from '../task.model';
import {Injectable} from '@nestjs/common';

@Injectable()
export class TaskDtoToTaskConverter implements Converter<TaskDto, Task> {

  convert(taskDto: TaskDto): Task {
    const task = new Task();
    task.title = taskDto.title;
    task.description = taskDto.description;
    task.status = taskDto.status;
    return task;
  }
}
