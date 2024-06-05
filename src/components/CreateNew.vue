<template>
  <div
    class="form-container bg-gray-400 items-center justify-center flex flex-col py-10 absolute left-0 right-0 bottom-0 top-0 bg-opacity-80"
    v-if="reposStore.showForm"
  >
    <div
      class="w-1/3 px-16 h-auto py-16 bg-gray-800 flex items-center justify-center flex-col relative"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        class="icon"
        @click="reposStore.showForm = !reposStore.showForm"
      >
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        />
      </svg>
      <h2 class="mb-10 text-lg text-gray-300 font-bold">
        Create New Repository
      </h2>
      <form
        @submit.prevent="createNewRepo"
        class="flex flex-col gap-4 items-center justify-center w-full"
      >
        <input
          v-model="newRepoTitle"
          type="text"
          placeholder="Repository Name"
          required
          class="w-full px-4 py-2 text-gray-700 outline-none"
        />
        <textarea
          v-model="newRepoDescription"
          placeholder="Repository Description"
          class="w-full px-4 py-2 text-gray-700 outline-none"
        ></textarea>
        <button
          type="submit"
          class="bg-gray-600 hover:bg-gray-400 w-full py-2 text-gray-800 font-bold"
        >
          Create
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useReposStore } from "../stores/Repos.js";

const reposStore = useReposStore();
const newRepoTitle = ref("");
const newRepoDescription = ref("");
const token = "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";

const createNewRepo = async () => {
  await reposStore.createRepo(
    newRepoTitle.value,
    newRepoDescription.value,
    token
  );
  newRepoTitle.value = "";
  newRepoDescription.value = "";
};
</script>

<style scoped>
.icon {
  position: absolute;
  top: 22px;
  right: 18px;
  width: 24px;
  height: 24px;
  margin-right: 1rem;
  fill: #b5b5b5;
  cursor: pointer;
}

.icon:hover {
  fill: rgb(175, 62, 62);
}

.form-container {
  z-index: 1000;
}
</style>
