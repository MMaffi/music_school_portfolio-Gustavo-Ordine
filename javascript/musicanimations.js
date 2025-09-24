// Music notes animation
function createMusicNotes() {
    const notesContainer = document.getElementById('musicNotes');
    const notes = ['♪', '♫', '♩', '♬'];
    
    for (let i = 0; i < 15; i++) {
        const note = document.createElement('div');
        note.className = 'note';
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        note.style.left = Math.random() * 100 + 'vw';
        note.style.animationDelay = Math.random() * 15 + 's';
        note.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
        notesContainer.appendChild(note);
    }
}

createMusicNotes();