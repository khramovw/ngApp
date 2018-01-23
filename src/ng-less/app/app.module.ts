import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// import componennt
import { AppComponent } from './app.component';
import { SendboxComponent } from "./components/sendbox/sendbox.component";
import { TestComponent } from './components/test/test.component';
import { EventComponent } from './components/event/event.component';
import { FormEventComponent } from './components/form-event/form-event.component';
import { FormValidSupplementalComponent } from './components/form-valid-supplemental/form-valid-supplemental.component';
import { TodoComponent } from './components/todo/todo.component';

// import service
import { TodoDataService } from './services/todo-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SendboxComponent,
    TestComponent,
    EventComponent,
    FormEventComponent,
    FormValidSupplementalComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
