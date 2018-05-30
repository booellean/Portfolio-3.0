import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { WebdevComponent } from './webdev/webdev.component';
import { DesignComponent } from './design/design.component';
import { IllustrationComponent } from './illustration/illustration.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WebdevComponent,
    DesignComponent,
    IllustrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
