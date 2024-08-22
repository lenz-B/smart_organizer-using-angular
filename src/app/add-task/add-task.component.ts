import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  title = ''
  date = ''
  reminder = false

  constructor(private taskService: TaskService) {}

  onSubmit(): void {
    if (!this.title) return
    const newTask = {
      id: Date.now(),
      title: this.title,
      date: new Date(this.date),
      reminder: this.reminder,
      done: false
    }

    this.taskService.addTask(newTask);
    this.title = ''
    this.date = ''
    this.reminder = false
  }
}
