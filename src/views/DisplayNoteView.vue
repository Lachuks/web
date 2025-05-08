<template>
    <div class="container mb-5 mt-5">
        <h3 class="mb-4 text-center">Manas piezīmes</h3>
        <div id="notes-container" class="text-center">
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

function loadData() {
    const notes = JSON.parse(sessionStorage.getItem("notes")) || [];
    const notesContainer = document.getElementById("notes-container");

    notesContainer.innerHTML = "";
    if (notes.length === 0) {
        notesContainer.innerHTML = `<p class="text-muted">Nav piezīmju.</p>`;
        return;
    }
    notes.forEach((note, index) => {
        const noteElement = document.createElement("div");
        noteElement.className = "mb-4 p-3 border rounded bg-white text-start";
        noteElement.innerHTML = `
            <p><strong>Temats:</strong> ${note.title}</p>
            <p><strong>Piezīme:</strong> ${note.content}</p>
            <button class="btn btn-danger btn-sm mt-2" data-index="${index}">Dzēst</button>
        `;

        notesContainer.appendChild(noteElement);
    });

    const deleteButtons = notesContainer.querySelectorAll("button[data-index]");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const noteIndex = event.target.getAttribute("data-index");
            deleteNote(noteIndex);
        });
    });
}

function deleteNote(index) {
    const notes = JSON.parse(sessionStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    sessionStorage.setItem("notes", JSON.stringify(notes));
    loadData();
}

onMounted(() => {
    loadData();
});
</script>