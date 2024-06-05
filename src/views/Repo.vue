<script setup>
import RepoData from "../components/RepoData.vue";
</script>

<template>
  <div class="main">
    <div class="icon">
      <h4>my repos</h4>
    </div>
    <CreateNew v-if="showForm" @repoCreated="refreshRepos" />
    <div class="repo-card">
      <RepoData />
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.repo-card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

h4 {
  color: #e0e0e0;
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  width: 100%;
  text-align: center;
}

.icon {
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
}
</style>
