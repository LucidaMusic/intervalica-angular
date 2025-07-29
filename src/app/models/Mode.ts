import { error } from "console";
import { Interval } from "./Interval";

class Mode {
  id: string;
  name: string;
  intervals: Interval[];

  constructor(id: string, name: string, intervals: Interval[]) {
    this.id = id;
    this.name = name;
    this.intervals = intervals;
  }
}

const Modes: { [key: string]: Mode } = {
  MAJOR: new Mode("M", "Mayor", [Interval.intervals.get("MAJOR_THIRD")!, Interval.intervals.get("PERFECT_FIFTH")!]),
  MINOR: new Mode("m", "Menor", [Interval.intervals.get("MINOR_THIRD")!, Interval.intervals.get("PERFECT_FIFTH")!]),
  AUGMENTED: new Mode("aug", "Aumentado", [Interval.intervals.get("MAJOR_THIRD")!, Interval.intervals.get("MINOR_SIXTH")!]),
  DIMINISHED: new Mode("dim", "Disminuido", [Interval.intervals.get("MINOR_THIRD")!, Interval.intervals.get("TRITONE")!]),
  SUS2: new Mode("sus2", "Suspendido de segunda", [Interval.intervals.get("MAJOR_SECOND")!, Interval.intervals.get("PERFECT_FIFTH")!]),
  SUS4: new Mode("sus4", "Suspendido de cuarta", [Interval.intervals.get("PERFECT_FOURTH")!, Interval.intervals.get("PERFECT_FIFTH")!]),
};

function getModeById(id: string): Mode {
  for (const modeKey in Modes) {
    if (Modes[modeKey].id === id) {
      return Modes[modeKey];
    }
  }
  console.error("Error al buscar modo con id: " + id);
  throw error("Mode not found " + id)
}

export {
  Modes,
  Mode,
  getModeById
};
