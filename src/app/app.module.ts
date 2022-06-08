import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DinosComponent } from './dinos/dinos.component';
import { DinoDetailComponent } from './dino-detail/dino-detail.component';
import { DinoListComponent } from './components/dino-list/dino-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DinosComponent,
    DinoDetailComponent,
    DinoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
