import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SheetData } from 'src/app/models/sheet-data.model';

@Component({
  selector: 'app-score-details',
  templateUrl: './score-details.component.html',
  styleUrls: ['./score-details.component.css']
})
export class ScoreDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  sheetData!: SheetData;
  @ViewChild('sheetTitle') sheetTitle!: ElementRef;
  @ViewChild('sheetAuthor') sheetAuthor!: ElementRef;
  @ViewChild('sheetBpm') sheetBpm!: ElementRef;
  @ViewChild('sheetFirstRootFreq') sheetFirstRootFreq!: ElementRef;

  private spans: HTMLSpanElement[] = []; // Almacena los spans creados

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.sheetData = history.state;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.automaticallyFitContentInInput(this.sheetTitle.nativeElement);
      this.automaticallyFitContentInInput(this.sheetAuthor.nativeElement);
      this.automaticallyFitContentInInput(this.sheetBpm.nativeElement);
      this.automaticallyFitContentInInput(this.sheetFirstRootFreq.nativeElement);
    });
  }

  automaticallyFitContentInInput(element: HTMLInputElement) {
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.whiteSpace = 'nowrap';
    span.style.fontSize = window.getComputedStyle(element).fontSize;
    span.style.fontWeight = window.getComputedStyle(element).fontWeight;
    span.style.fontFamily = window.getComputedStyle(element).fontFamily;
    span.style.position = 'fixed';
    document.body.appendChild(span);
    this.spans.push(span); // Almacena el span en el array

    let offset: number;
    if (element.type === 'text') {
      offset = 0;
    } else if (element.type === 'number') {
      offset = 20;
    } else {
      console.error("Not contemplated");
    }

    const updateInputWidth = () => {
      span.textContent = element.value || element.placeholder;
      element.style.width = `${span.offsetWidth + offset}px`;
    };

    element.addEventListener('input', updateInputWidth);
    updateInputWidth();
  }

  ngOnDestroy(): void {
    // Elimina los spans del DOM al destruir el componente
    this.spans.forEach(span => {
      document.body.removeChild(span);
    });
    this.spans = []; // Limpia el array
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = 'Tienes cambios no guardados. ¿Estás seguro de que quieres salir?';
  }
}
