import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SingleComponent } from './single/single.component';
import { MenuComponent } from './menu/menu.component';
import { MultipleComponent } from './multiple/multiple.component';
import { InfoComponent } from './info/info.component';
import { TutorialComponent } from './tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SingleComponent,
    MenuComponent,
    MultipleComponent,
    InfoComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
