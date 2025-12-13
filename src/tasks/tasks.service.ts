import { Injectable } from '@nestjs/common';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(task: Task) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return task;
  }

  updateTask() {
    return 'Task updated successfully';
  }

  deleteTask() {
    return 'Task deleted successfully';
  }

  updateTaskStatus() {
    return 'Task status updated successfully';
  }
}
