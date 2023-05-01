import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { ChildComponent } from './child/child.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { CustomPipePipe } from './custom-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    SignupComponent,
    SearchPipe,
    ChildComponent,
    CustomDirectiveDirective,
    CustomPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
