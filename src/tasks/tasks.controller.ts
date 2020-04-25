import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {TasksService} from './tasks.service';
import {Task} from './task.model';
import {TaskDto} from './dto/task.dto';
import {TaskToTaskDtoConverter} from './converter/task-to-task-dto.converter';
import {TaskDtoToTaskConverter} from './converter/task-dto-to-task.converter';
import {TaskDtoMergeConverter} from './converter/task-dto-merge.converter';
import {TaskFilterDto} from './dto/task-filter.dto';

@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService,
              private taskConverter: TaskToTaskDtoConverter,
              private taskDtoConverter: TaskDtoToTaskConverter,
              private taskDtoMergeConverter: TaskDtoMergeConverter) {
  }

  @Get('/')
  getTasks(@Query() filterDto: TaskFilterDto): Array<Task> {
    return this.tasksService.getTaskWithFilters(filterDto);
  }

  @Get('/:id')
  getTask(@Param('id') id: string): Task {
    return this.tasksService.getTask(id);
  }

  @Post('/')
  createTask(@Body() taskDto: TaskDto): Task {
    let task = this.taskDtoConverter.convert(taskDto);
    task = this.tasksService.createTask(task);
    return this.taskConverter.convert(task);
  }

  @Put('/:id')
  updateTask(@Param('id') id: string, @Body() taskDto: TaskDto) {
    let task = this.tasksService.getTask(id);
    task = this.taskDtoMergeConverter.convert(taskDto, task);
    task = this.tasksService.updateTask(task);
    return this.taskConverter.convert(task);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }
}
