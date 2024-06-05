<template>
  <header class="px-2">
    <RouterLink class="logo" to="/">
      <img
        alt=" logo"
        class="main-logo"
        src="@/assets/e-logo-white.png"
        height="8"
      />
      <img
        alt=" logo"
        class="name-logo"
        src="@/assets/e-name-logo.png"
        height="6"
      />
    </RouterLink>

    <div
      @click="reposStore.showForm = !reposStore.showForm"
      class="font-bold cursor-pointer create"
    >
      <p>create new</p>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
        />
      </svg>
    </div>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/repos">repos</RouterLink>
        <CreateNew v-if="reposStore.showForm" @repoCreated="refreshRepos" />
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import CreateNew from "../components/CreateNew.vue";
import { useReposStore } from "../stores/Repos.js";
const reposStore = useReposStore();

const showForm = ref(false);
</script>

<style scoped>
header {
  border-bottom: 1px solid #5b5b5b;
  padding: 3rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.main-logo {
  width: 6rem;
}

nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}
nav a {
  font-weight: 600;
}

nav a::after {
  height: 1.5px;
  width: 0;
  content: "";
  display: block;
  background-color: white;
  transition: width 0.5s;
}
nav a:hover::after {
  width: 100%;
}

.router-link-active::after {
  content: "";
  display: block;
  width: 100%;
  height: 1.5px;
  background-color: white;
}

.router-link-active {
  color: white;
}

.name-logo {
  width: 10rem;
}

svg {
  display: none;
}

.create {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 600;
}

@media (max-width: 480px) {
  header {
    padding: 3rem 2rem;

    height: 4rem;
  }
  .main-logo {
    width: 4rem;
  }

  .name-logo {
    visibility: hidden;
  }

  svg {
    display: flex;
    width: 100%;
    width: 1.5rem;
    fill: #5b5b5b;
  }

  .create p {
    display: none;
  }
}
@media (max-width: 701px) {
  header {
    padding: 3rem 2rem;

    height: 4rem;
  }
  .main-logo {
    width: 4rem;
  }

  .name-logo {
    visibility: hidden;
  }

  svg {
    display: flex;
    width: 100%;
    width: 1.5rem;
    fill: #5b5b5b;
  }

  .create p {
    display: none;
  }
}
</style>
