<template>
    <div class="container shadow-lg p-4 mb-5 bg-white rounded mt-5">
        <h3 class="mb-4 text-center">Izveidot piezīmi</h3>
        <form @submit.prevent="storeData">
            <div class="mb-3">
                <label for="title" class="form-label">Temats</label>
                <input type="text" class="form-control" name="title_text" id="title" placeholder="Piezīmes tematika" required>
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">Piezīme</label>
                <textarea class="form-control" name="note_text" id="content" rows="4" placeholder="Piezīme" required></textarea>
            </div>
            <button class="btn btn-dark w-100">Saglabāt</button>
        </form>
    </div>
</template>

<script setup>
function storeData() {
    const notes = JSON.parse(sessionStorage.getItem("notes")) || [];
    const newNote = {
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
    };
    notes.push(newNote);
    sessionStorage.setItem("notes", JSON.stringify(notes));
    alert("Piezīme saglabāta veiksmīgi!\nDodies uz sadaļu \"Skatīt piezīmes\", lai apskatītu savas piezīmes.");
}
</script>
