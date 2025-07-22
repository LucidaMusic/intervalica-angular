import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SheetData } from 'src/app/models/sheet-data.model';

@Component({
  selector: 'app-modal',
  templateUrl: './create-sheet-modal.component.html',
  styleUrls: ['./create-sheet-modal.component.css']
})
export class ModalComponent {
  sheetData: SheetData = new SheetData('', '', 120, 440);

  constructor(public dialogRef: MatDialogRef<ModalComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (Object.values(this.sheetData).every(value => value != null)) {
      this.dialogRef.close(this.sheetData);
    }
  }
}
