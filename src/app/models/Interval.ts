class Interval {
    id: string;
    name: string;
    stringValue: string;
    numberValue: number;

    constructor(id: string, name: string, stringValue: string, numberValue: number) {
        this.id = id;
        this.name = name;
        this.stringValue = stringValue;
        this.numberValue = numberValue;
    }

    static intervals: Map<string, Interval> = new Map([
        ['UNISON', new Interval('1', 'Unísono', '1', 1)],
        ['MINOR_SECOND', new Interval('2m', 'Segunda menor', '16/15', 16 / 15)],
        ['MAJOR_SECOND', new Interval('2M', 'Segunda mayor', '9/8', 9 / 8)],
        ['MINOR_THIRD', new Interval('3m', 'Tercera menor', '6/5', 6 / 5)],
        ['MAJOR_THIRD', new Interval('3M', 'Tercera mayor', '5/4', 5 / 4)],
        ['PERFECT_FOURTH', new Interval('4P', 'Cuarta justa', '4/3', 4 / 3)],
        ['TRITONE', new Interval('4T', 'Tritono', '45/32', 45 / 32)],
        ['PERFECT_FIFTH', new Interval('5P', 'Quinta justa', '3/2', 3 / 2)],
        ['MINOR_SIXTH', new Interval('6m', 'Sexta menor', '8/5', 8 / 5)],
        ['MAJOR_SIXTH', new Interval('6M', 'Sexta mayor', '5/3', 5 / 3)],
        ['MINOR_SEVENTH', new Interval('7m', 'Séptima menor', '16/9', 16 / 9)],
        ['DOMINANT_SEVENTH', new Interval('7D', 'Séptima de dominante', '7/4', 7 / 4)],
        ['MAJOR_SEVENTH', new Interval('7M', 'Séptima mayor', '15/8', 15 / 8)]
    ]);

    static getIntervalById(intervalId: string): Interval | null {
        for (const interval of Interval.intervals.values()) {
            if (interval.id === intervalId) {
                return interval;
            }
        }
        console.error("Error al buscar intervalo con id: ", intervalId);
        return null;
    }
}

export {
    Interval
};
