import { Component, computed, signal } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  imports: [TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {
  tasks = signal<Task[]>([
    { id: 1, title: 'Lire le cours Angular', dueDate: '2026-11-15', done: false },
    { id: 2, title: 'Installer le CLI', dueDate: '2026-11-16', done: false },
    { id: 3, title: 'Créer TaskFlow', dueDate: '2026-11-17', done: false }
  ]);
  count = computed(() => this.tasks().length);
  private nextId = 4;

  add() {
    const task: Task = {
      id: this.nextId,
      title: `Nouvelle tâche ${this.nextId}`,
      dueDate: '2026-11-20',
      done: false
    };
    this.nextId++;
    this.tasks.update(items => [...items, task]);
  }

  clear() {
    this.tasks.set([]);
  }

  onCompleted(id: number) {
    this.tasks.update(items =>
      items.map(t => (t.id === id ? { ...t, done: true } : t))
    );
  }
}