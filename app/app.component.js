"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var kanban_service_1 = require('./service/kanban.service');
var AppComponent = (function () {
    function AppComponent(_kanbanService) {
        this._kanbanService = _kanbanService;
        this.name = 'Basic ToDo App';
    }
    AppComponent.prototype.getBoards = function () {
        this.boards = this._kanbanService.getBoards();
        console.log(this.boards);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getBoards();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'todo-app',
            providers: [kanban_service_1.KanbanService],
            template: "\n  <h1>{{name}}</h1>\n  <div *ngFor=\"let board of boards\">\n      <h3>Name: {{ board.name }}</h3>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [kanban_service_1.KanbanService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map