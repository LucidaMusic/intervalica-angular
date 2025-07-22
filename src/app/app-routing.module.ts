import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ScoreDetailsComponent } from './components/score-details/score-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'score-details', component: ScoreDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
