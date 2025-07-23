import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/create-sheet-modal/create-sheet-modal.component';
import { AppRoutingModule } from './app-routing.module';
import { ScoreDetailsComponent } from './components/score-details/score-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MusicControlsBarComponent } from './components/music-controls-bar/music-controls-bar.component';
import { SheetViewComponent } from './components/sheet-view/sheet-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    ScoreDetailsComponent,
    NavbarComponent,
    MusicControlsBarComponent,
    SheetViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
