import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = []
  private tasksSubject = new BehaviorSubject<Task[]>([])

  constructor() { }

  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(task: Task): void {
    this.tasks.push(task)
    this.tasksSubject.next(this.tasks)
  }

  toggleReminder(id: number): void {
    const task = this.tasks.find(t => t.id === id)
    if (task) {
      task.reminder = !task.reminder
      this.tasksSubject.next(this.tasks)
    }
  }

  toggleDone(id: number): void {
    const task = this.tasks.find(t => t.id === id)
    if (task) {
      task.done = !task.done
      this.tasksSubject.next(this.tasks)
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id)
    this.tasksSubject.next(this.tasks)
  }
}
