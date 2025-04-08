<template>
    <div class="container shadow-lg p-4 mb-5 bg-white rounded mt-5">
        <h3 class="mb-4 text-center">Your Note</h3>
        <div class="mb-3">
            <label class="form-label fw-bold">Your Note's Title</label>
            <div class="p-2 border rounded bg-light" id="title"></div>
        </div>
        <div class="mb-3">
            <label class="form-label fw-bold">Your Note's Main Content</label>
            <div class="p-3 border rounded bg-light" id="content"></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

function loadData() {
    document.getElementById("title").textContent = sessionStorage.getItem("title");
    document.getElementById("content").textContent = sessionStorage.getItem("content");
}

onMounted(() => {
    loadData();
});
</script>