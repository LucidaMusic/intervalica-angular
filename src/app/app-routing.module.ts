import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SheetViewComponent } from './components/sheet-view/sheet-view.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sheet-view', component: SheetViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
