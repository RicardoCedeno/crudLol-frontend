import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListChampionsComponent } from './list-champions/list-champions.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterChampionComponent } from './register-champion/register-champion.component'
import { FormsModule } from '@angular/forms';
import { RefreshChampionComponent } from './refresh-champion/refresh-champion.component';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListChampionsComponent,
    RegisterChampionComponent,
    RefreshChampionComponent,
    ChampionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
