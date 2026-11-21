import { Component } from '@angular/core';
import { Header } from './header/header';
import { TaskList } from './task-list/task-list';
import { Catalogue } from './catalogue/catalogue';

@Component({
  selector: 'app-root',
  imports: [Header, TaskList, Catalogue],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}