import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'Returns all tasks' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get task by id' })
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  @ApiOperation({ summary: 'Create task' })
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  @Put()
  updateTask(@Body() task: UpdateTaskDto) {
    return this.tasksService.updateTask(task);
  }

  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  @Patch()
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}
