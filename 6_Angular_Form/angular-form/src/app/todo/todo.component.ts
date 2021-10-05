import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
  id = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: this.id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.content.reset();
    }
  }

  toggleTodo(value: number) {
    this.todos[value].complete = !this.todos[value].complete;
  }


}
