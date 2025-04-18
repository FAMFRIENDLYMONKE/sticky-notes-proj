document.addEventListener('DOMContentLoaded', () => {
    const addNoteButton = document.getElementById('add-note');
    const noteInput = document.getElementById('note-input');
    const notesContainer = document.getElementById('notes-container');
  
    addNoteButton.addEventListener('click', () => {
      const noteText = noteInput.value.trim();
      if (noteText === '') return;
  
      const note = document.createElement('div');
      note.classList.add('note');
      note.textContent = noteText;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.textContent = 'X';
      deleteBtn.addEventListener('click', () => {
        notesContainer.removeChild(note);
      });
  
      note.appendChild(deleteBtn);
      notesContainer.appendChild(note);
      noteInput.value = '';
    });
  });
  