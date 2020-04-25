import {Module} from '@nestjs/common';
import {TasksController} from './tasks.controller';
import {TasksService} from './tasks.service';
import {TaskToTaskDtoConverter} from './converter/task-to-task-dto.converter';
import {TaskDtoToTaskConverter} from './converter/task-dto-to-task.converter';
import {TaskDtoMergeConverter} from './converter/task-dto-merge.converter';

@Module({
  controllers: [TasksController],
  providers: [
    TasksService,
    TaskToTaskDtoConverter,
    TaskDtoToTaskConverter,
    TaskDtoMergeConverter
  ]
})
export class TasksModule {
}
