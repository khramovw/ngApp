import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';

// import componennt
import { AppComponent } from './app.component';
import { SendboxComponent } from "./components/sendbox/sendbox.component";
import { TestComponent } from './components/test/test.component';
import { EventComponent } from './components/event/event.component';
import { FormEventComponent } from './components/form-event/form-event.component';
import { FormValidSupplementalComponent } from './components/form-valid-supplemental/form-valid-supplemental.component';
import { TodoComponent } from './components/todo/todo.component';
import { SerchUserComponent} from "./components/serch-user/serch-user.component";

// import service
import { TodoDataService } from './services/todo-data.service';
import { GithubDataService } from "./services/github-data.service";
import { AlertComponent } from './components/alert/alert.component';
import { InfoComponent } from './components/info/info.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SendboxComponent,
    TestComponent,
    EventComponent,
    FormEventComponent,
    FormValidSupplementalComponent,
    TodoComponent,
    SerchUserComponent,
    AlertComponent,
    InfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TodoDataService, GithubDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
