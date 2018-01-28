import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// import componennt
import { AppComponent } from './app.component';
import { SendboxComponent } from './components/sendbox/sendbox.component';
import { TestComponent } from './components/test/test.component';
import { EventComponent } from './components/event/event.component';
import { FormEventComponent } from './components/form-event/form-event.component';
import { TodoComponent } from './components/todo/todo.component';
import { SerchUserComponent} from './components/serch-user/serch-user.component';
import { AlertComponent } from './components/alert/alert.component';
import { InfoComponent } from './components/info/info.component';
import { HomeComponent } from './components/home/home.component';

/*hw2 component*/
import { FormValidSupplementalComponent } from './components/form-valid-supplemental/form-valid-supplemental.component';

/*hw3 component*/
import { UserAppComponent } from './components/user-app/user-app.component';

// import service
import { TodoDataService } from './services/todo-data.service';
import { GithubDataService } from './services/github-data.service';

/*hw3 service*/
import { UserDataService} from './services/user-data.service';


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
    HomeComponent,
    UserAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TodoDataService, GithubDataService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
