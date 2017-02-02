import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }      from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent }         from './app.component';
import { BoardComponent }   from './board.component';
import { ListComponent }      from './list.component';
import { CardComponent }  from './card.component';
import { KanbanService }          from './service/kanban.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    BoardComponent,
    ListComponent,
    CardComponent,
  ],
  providers: [ KanbanService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
