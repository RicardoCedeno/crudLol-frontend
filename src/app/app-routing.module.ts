import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';
import { ListChampionsComponent } from './list-champions/list-champions.component';
import { RegisterChampionComponent } from './register-champion/register-champion.component';

const routes: Routes = [
  {path: 'championslist', component:ListChampionsComponent},
  {path: 'register', component:RegisterChampionComponent},
  {path: 'champion-details/:id', component: ChampionDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
