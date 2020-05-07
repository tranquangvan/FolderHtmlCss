import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { ComponentFourComponent } from './component-four/component-four.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ComponentFourComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
