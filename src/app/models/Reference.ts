class Reference {
    noteId: string | null;
    chordId: string | null;

    constructor(noteId: string | null = null, chordId: string | null = null) {
        this.noteId = noteId;
        this.chordId = chordId;
    }
}