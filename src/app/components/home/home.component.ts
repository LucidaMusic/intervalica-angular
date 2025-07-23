import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../create-sheet-modal/create-sheet-modal.component';
import { Router } from '@angular/router';
import { SheetData } from 'src/app/models/sheet-data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public dialog: MatDialog, private router: Router) { }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe((result: SheetData | undefined) => {
      if (result) {
        this.router.navigate(['/sheet-view'], { state: result });
      }
    });
  }

  loadFile(): void {
    // Lógica para cargar un archivo
    console.log('Cargar archivo');
  }
}
