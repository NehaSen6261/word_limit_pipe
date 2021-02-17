import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { MessageService } from './message.service';
import {FormsModule} from '@angular/forms';
import { Employees } from './employees';
import { WelcomePipe } from './welcome.pipe';
import { BoldPipe } from './bold.pipe';
import { ReversePipe } from './reverse.pipe';
import { LimitwordPipe } from './limitword.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StudentComponent,
    FacultyComponent,
    WelcomePipe,
    BoldPipe,
    ReversePipe,
    LimitwordPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [MessageService,Employees],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
