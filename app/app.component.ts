import { Component } from '@angular/core';
import { KanbanService } from './service/kanban.service';
import { OnInit } from '@angular/core';
import { Board } from './service/board';

@Component({
  selector: 'todo-app',
  providers: [KanbanService],
  template: `
  <h1>{{name}}</h1>
  <div *ngFor="let board of boards">
      <h3>Name: {{ board.name }}</h3>
  </div>
  `,
})
export class AppComponent implements OnInit {
  name = 'Basic ToDo App';
  boards: Board[];
  constructor(private _kanbanService: KanbanService){}
  getBoards(): void {
    this.boards = this._kanbanService.getBoards();
    console.log(this.boards);
  }
  ngOnInit(): void {
    this.getBoards();
  }
}
