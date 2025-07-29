import { Interval } from './Interval';

class Note {
  id: number | null;
  interval: Interval | null; 
  octave: number | null;
  freq: number | null;

  constructor(interval: Interval, octavePonderation: number, freq: number) {
    this.id = -1; // Este es un valor inválido porque es al añadir la nota al acorde cuando tiene sentido ponerle un id
    this.interval = interval; // Clase Intervals
    this.octave = octavePonderation; // Número de octavas que sube o baja (Ej: 1, -1, 3...)
    this.freq = freq;
  }
}

export { Note };