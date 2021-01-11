import { Component, OnInit } from '@angular/core';
import { Todo } from "./../../app/models/Todos";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //uses the Todo model to make a new array that has to follow the rules of the model
  todos:Todo[];

  constructor() { }

  ngOnInit(): void {
    //create some sample todos
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

  //add functionality so that when clicked, toggles a todos completed variable
  toggleDone (id:number) {
    this.todos.map((v, i) => {
      //if the todo clicked matches the id of a todo, toggle the completed on the todo
      if (i == id) v.completed = !v.completed;


      return v;
    })
  }

  //add remove button
  removeTodo (id:number) {
    //filters and returns todos which id doesn't match the one that was clicked
    this.todos = this.todos.filter((v, i) => i !== id);
  }

}
