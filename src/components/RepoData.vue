<template>
  <div class="container">
    <div v-if="isLoading">Loading repositories...</div>
    <div v-else class="repos">
      <div
        v-for="repo in paginatedRepos"
        :key="repo.id"
        class="repo_container relative cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="w-4 absolute top-4 right-4 hover:text-red-500 fill-slate-700"
        >
          <path
            d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
          />
        </svg>

        <h3 class="mt-6">
          <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
        </h3>
        <span>{{ repo.description }}</span>
      </div>
    </div>
    <div v-if="repos.length > 0" class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <button @click="nextPage" :disabled="!hasNextPage">Next</button>
      <span v-if="totalPages">Page {{ currentPage }} of {{ totalPages }}</span>
    </div>
  </div>
</template>

<script setup>
import { useReposStore } from "../stores/Repos.js";
import { onMounted, computed } from "vue";

const reposStore = useReposStore();

const isLoading = computed(() => reposStore.isLoading);
const repos = computed(() => reposStore.repos);
const currentPage = computed(() => reposStore.currentPage);
const totalPages = computed(() => reposStore.totalPages);
const hasNextPage = computed(() => reposStore.hasNextPage);
const paginatedRepos = computed(() => reposStore.paginatedRepos);

const prevPage = () => {
  reposStore.prevPage();
};

const nextPage = () => {
  reposStore.nextPage();
};

onMounted(() => {
  reposStore.fetchRepos();
});
</script>

<style scoped>


.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  
}
.repos {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.repo_container {
  background-color: #2b2b2b;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1px;
  padding: 16px;
  padding-block: 24px;
  width: 400px;
  height: 300px;
  text-align: center;
  transition: all ease-in-out 0.3s;
}

.repo_container:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h3 a {
  font-weight: bold;
  font-size: 1.2rem;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.pagination button {
  background-color: #353535;
  color: #ccc;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  padding: 1rem 1.8rem;
  margin: 0 0.5rem;
  cursor: pointer;
}
.pagination button:hover {
  background-color: #454545;
  color: white;
}

.pagination button:disabled {
  background-color: #2b2b2b;
  color: #565656;
  cursor: not-allowed;
}

.pagination span {
  margin-left: 1rem;
  line-height: 2rem;
}

svg{
  fill: #454545;
  cursor: pointer;
}
svg:hover{
  fill: #595959;
  cursor: pointer;
}
</style>
