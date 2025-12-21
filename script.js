// State
let notes = [];
let lastNoteId = null;

// DOM Elements
const noteTitle = document.getElementById('noteTitle');
const noteContent = document.getElementById('noteContent');
const noteCategory = document.getElementById('noteCategory');
const addNoteBtn = document.getElementById('addNoteBtn');
const searchInput = document.getElementById('searchInput');
const notesContainer = document.getElementById('notesContainer');
const successBanner = document.getElementById('successBanner');
const statsSection = document.getElementById('statsSection');

// Event Listeners
addNoteBtn.addEventListener('click', createNote);
searchInput.addEventListener('input', filterNotes);
noteTitle.addEventListener('keypress', (e) => e.key === 'Enter' && noteContent.focus());
noteContent.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) createNote();
});

// Load notes from localStorage on page load
window.addEventListener('load', () => {
    const saved = localStorage.getItem('textnode_notes');
    if (saved) {
        notes = JSON.parse(saved);
        renderNotes();
        updateStats();
    }
});

// Create Note
function createNote() {
    const title = noteTitle.value.trim();
    const content = noteContent.value.trim();
    const category = noteCategory.value.trim() || 'General';

    if (!title && !content) {
        alert('Please enter a title or content');
        return;
    }

    const newNote = {
        id: Date.now(),
        title: title || 'Untitled Note',
        content: content,
        category: category,
        createdAt: new Date().toLocaleDateString()
    };

    notes.unshift(newNote);
    lastNoteId = newNote.id;
    saveNotes();
    renderNotes();
    updateStats();
    showSuccessBanner();
    clearInputs();
}

// Clear inputs
function clearInputs() {
    noteTitle.value = '';
    noteContent.value = '';
    noteCategory.value = '';
    noteTitle.focus();
}

// Delete Note
function deleteNote(id) {
    if (confirm('Are you sure you want to delete this note?')) {
        notes = notes.filter(note => note.id !== id);
        saveNotes();
        renderNotes();
        updateStats();
    }
}

// Edit Note
function editNote(id) {
    const note = notes.find(n => n.id === id);
    if (note) {
        noteTitle.value = note.title;
        noteContent.value = note.content;
        noteCategory.value = note.category;
        noteTitle.focus();
        deleteNote(id);
    }
}

// Filter Notes
function filterNotes() {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm) ||
        note.content.toLowerCase().includes(searchTerm) ||
        note.category.toLowerCase().includes(searchTerm)
    );
    renderNotes(filtered);
}

// Render Notes
function renderNotes(notesToRender = notes) {
    if (notesToRender.length === 0) {
        notesContainer.innerHTML = `
            <div class="empty-state">
                <p>${notes.length === 0 ? 'Start by creating your first note!' : 'No notes match your search.'}</p>
            </div>
        `;
        return;
    }

    notesContainer.innerHTML = notesToRender.map(note => `
        <div class="card note-card">
            <div class="note-header">
                <div>
                    <h3 class="note-title">${escapeHtml(note.title)}</h3>
                    <span class="note-category">${escapeHtml(note.category)}</span>
                </div>
            </div>
            <p class="note-content">${escapeHtml(note.content)}</p>
            <div class="note-footer">
                <span class="note-date">${note.createdAt}</span>
                <div class="note-actions">
                    <button class="btn btn-edit" onclick="editNote(${note.id})" title="Edit note">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-download" onclick="downloadNoteTxt(${note.id})" title="Download as TXT">
                        <i class="fas fa-file-alt"></i>
                    </button>
                    <button class="btn btn-download" onclick="downloadNoteJson(${note.id})" title="Download as JSON">
                        <i class="fas fa-download"></i>
                    </button>
                    <button class="btn btn-delete" onclick="deleteNote(${note.id})" title="Delete note">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Update Stats
function updateStats() {
    const totalNotes = notes.length;
    const totalCategories = new Set(notes.map(n => n.category)).size;

    document.getElementById('totalNotes').textContent = totalNotes;
    document.getElementById('totalCategories').textContent = totalCategories;

    if (totalNotes > 0) {
        statsSection.classList.remove('hidden');
    } else {
        statsSection.classList.add('hidden');
    }
}

// Show Success Banner
function showSuccessBanner() {
    successBanner.classList.remove('hidden');
}

// Close Success Banner
function closeSuccessBanner() {
    successBanner.classList.add('hidden');
}

// Save to localStorage
function saveNotes() {
    localStorage.setItem('textnode_notes', JSON.stringify(notes));
}

// Download Functions
function downloadNoteTxt(id) {
    const note = notes.find(n => n.id === id);
    if (!note) return;

    const content = `${note.title}\n${'='.repeat(note.title.length)}\n\nCategory: ${note.category}\nCreated: ${note.createdAt}\n\n${note.content}`;
    downloadFile(content, `${note.title.replace(/\s+/g, '_')}.txt`, 'text/plain');
}

function downloadNoteJson(id) {
    const note = notes.find(n => n.id === id);
    if (!note) return;

    const content = JSON.stringify(note, null, 2);
    downloadFile(content, `${note.title.replace(/\s+/g, '_')}.json`, 'application/json');
}

function downloadLastNoteTxt() {
    if (lastNoteId) downloadNoteTxt(lastNoteId);
}

function downloadLastNoteJson() {
    if (lastNoteId) downloadNoteJson(lastNoteId);
}

function downloadAllTxt() {
    let content = 'TEXTNODE - All Notes\n' + '='.repeat(30) + '\n\n';
    notes.forEach((note, index) => {
        content += `${index + 1}. ${note.title}\n`;
        content += `Category: ${note.category} | Created: ${note.createdAt}\n`;
        content += '-'.repeat(40) + '\n';
        content += note.content + '\n\n';
    });

    const date = new Date().toISOString().split('T')[0];
    downloadFile(content, `TextNode_All_Notes_${date}.txt`, 'text/plain');
}

function downloadAllJson() {
    const data = {
        app: 'TextNode',
        exportDate: new Date().toISOString(),
        totalNotes: notes.length,
        notes: notes
    };

    const content = JSON.stringify(data, null, 2);
    const date = new Date().toISOString().split('T')[0];
    downloadFile(content, `TextNode_All_Notes_${date}.json`, 'application/json');
}

// Helper function to download files
function downloadFile(content, filename, type) {
    const blob = new Blob([content], { type: type });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}
