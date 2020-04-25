import {Converter} from '../../converter';
import {TaskDto} from '../dto/task.dto';
import {Task} from '../task.model';
import {Injectable} from '@nestjs/common';

@Injectable()
export class TaskToTaskDtoConverter implements Converter<Task, TaskDto> {

  convert(task: Task): TaskDto {
    const dto = new TaskDto();
    dto.id = task.id;
    dto.title = task.title;
    dto.description = task.description;
    dto.status = task.status;
    return dto;
  }
}
