import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = []

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks(). subscribe(tasks => this.tasks = tasks)
  }

  toggleReminder(id: number): void {
    this.taskService.toggleReminder(id)
  }

  toggleDone(id: number): void {
    this.taskService.toggleDone(id)
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id)
  }
}