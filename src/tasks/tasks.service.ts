import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, CreateTaskDto, UpdateTaskDto } from './dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      return new NotFoundException(`Task with id ${id} not found`);
    }

    return taskFound;
  }

  createTask(task: CreateTaskDto) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return task;
  }

  updateTask(task: UpdateTaskDto) {
    const taskFound = this.tasks.find((t) => t.id === task.id);

    if (!taskFound) {
      return new NotFoundException(`Task with id ${task.id} not found`);
    }

    this.tasks = this.tasks.map((t) => {
      if (t.id === task.id) {
        return {
          ...t,
          ...task,
          updatedAt: new Date(),
        };
      }
      return t;
    });

    return task;
  }

  deleteTask() {
    return 'Task deleted successfully';
  }

  updateTaskStatus() {
    return 'Task status updated successfully';
  }
}
