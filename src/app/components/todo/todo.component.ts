import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../../services/todo-data.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: any;
  todo = {
    complites: false,
    title: ''
  };
  addSuccess: boolean = false;
  addError: boolean = false;

  constructor(
    public  todoService: TodoDataService
  ) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe( todos => {
      this.todos = todos;

      console.log(todos);
    }, error => {

      console.log(error);
    });
  }

  addTodo( formTodo ) {
    this.todoService.addTodo(this.todo).subscribe(todo => {
      this.todos.unshift(todo);
      this.addSuccess = true;
      formTodo.resetForm();
      setTimeout( () => {
        this.addSuccess = false;
      }, 2000);
      console.log(todo);

    }, error => {
      this.addError = true;
      setTimeout( () => {
        this.addError = false;
      }, 2000);
      console.log(error);
    });
  }
  editTodo( todo ) {
    this.todoService.editTodo(todo).subscribe(todo => {
      console.log(todo);
    }, error => {
      console.log(error);
    });
  }
}
