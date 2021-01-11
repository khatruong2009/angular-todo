import { Component, OnInit } from '@angular/core';
import { Todo } from "./../../app/models/Todos";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
      content:"First Todo",
      completed: false
    },
    {
      content: "Second Todo",
      completed: true
    }
  ]
  }

  toggleDone (id) {
    this.todos.map((v, i) => {
      if (i == id) v.completed != v.completed;


      return v;
    })
  }

}
