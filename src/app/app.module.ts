// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Declarations
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { HelloService } from './hello.service';

import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    JsonpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'hello', component: HelloComponent }
      {path: 'home', component: HomeComponent }
    ])
  ],
  providers:[HelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
