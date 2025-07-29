
import { getModeById, Modes, Mode } from './Mode';
import { Note } from './Note';


class Chord {
  name: string | null;
  id: number | null;
  reference: Reference;
  mode: Mode;
  notes: {
    root: Note[];
    mode: Note[];
    extensiones: Note[];
  };
  duration: number | null; // Pulsos de duración

  constructor();
  constructor(name: string | null, id: number | null, reference: Reference, mode: Mode);
  constructor(name?: string | null, id?: number | null, reference?: Reference, mode?: Mode, duration?: number | null) {
    this.name = name || null; // Asigna null si no se proporciona
    this.id = id || null; // Asigna null si no se proporciona
    this.reference = reference || new Reference(); // Asigna un nuevo objeto Reference si no se proporciona
    this.mode = mode || Modes['MAJOR']; // Asigna un nuevo objeto Mode si no se proporciona
    this.notes = {
      root: [],
      mode: [],
      extensiones: [],
    };
    this.duration = duration || null;
  }




  static getMaxAndMinFreqs(chord: Chord): { maxFreq: number; minFreq: number } {
    const chordFreqs = this.getAllFreqs(chord);
    const maxFreq = Math.max(...chordFreqs);
    const minFreq = Math.min(...chordFreqs);
    return { maxFreq, minFreq };
  }

  static getAllFreqs(chord: Chord): (number)[] {
    return [
      ...chord.notes.root.map(note => note.freq).filter(value => value != null),
      ...chord.notes.mode.map(note => note.freq).filter(value => value != null),
    ];
  }

  static createTriadNotes(rootFreq: number, modeId: string): Chord {
    const chord = new Chord();
    chord.notes.root = [{
      freq: rootFreq,
      id: null,
      interval: null,
      octave: null,
    }];
    chord.notes.mode = getModeById(modeId)
      .intervals
      .map((interval: { numberValue: number }) => ({
        freq: interval.numberValue * rootFreq,
        id: null,
        interval: null,
        octave: null,
      }));

    return chord;
  }
}

export { Chord };