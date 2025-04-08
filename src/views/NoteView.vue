<template>
    <div class="container shadow-lg p-4 mb-5 bg-white rounded mt-5">
        <h3 class="mb-4 text-center">Create a Note</h3>
        <form @submit.prevent="storeData">
            <div class="mb-3">
                <label for="title" class="form-label">Your Note's Title</label>
                <input type="text" class="form-control" name="title_text" id="title" placeholder="Enter title" required>
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">Your Note's Main Content</label>
                <textarea class="form-control" name="note_text" id="content" rows="4" placeholder="Enter note content" required></textarea>
            </div>
            <button class="btn btn-dark w-100">Save Note</button>
        </form>
    </div>
</template>

<script setup>
    function storeData() {
        sessionStorage.setItem("title", document.getElementById("title").value);
        sessionStorage.setItem("content", document.getElementById("content").value);
        window.open("/display-note", "_self");
    }
</script>