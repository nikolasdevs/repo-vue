import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed } from "vue";

export const useReposStore = defineStore("repos", () => {
  const repos = ref([]);
  const reposPerPage = ref(2);
  const currentPage = ref(1);
  const totalPages = ref(0);
  const isLoading = ref(true);
  const showForm = ref(false);

  const fetchRepos = async () => {
    try {
      const username = "nikolasdevs";
      const url = `https://api.github.com/users/${username}/repos`;
      const response = await axios.get(url);
      repos.value = response.data;
      totalPages.value = Math.ceil(repos.value.length / reposPerPage.value);
    } catch (error) {
      console.error("Error fetching repos:", error);
      // You can set a flag in the store to indicate an error (e.g., isLoading: false, hasError: true)
    } finally {
      isLoading.value = false;
    }
  };

  const createRepo = async (name, description, token) => {
    try {
      const url = `https://api.github.com/user/repos`;
      const data = {
        name,
        description,
        private: false,
      };
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      console.log(response.data);
      await fetchRepos();
    } catch (error) {
      console.error("Error creating new repo:", error);
    } finally {
      showForm.value = false;
    }
  };

  const deleteRepo = async (repoName) => {
    try {
      const username = "nikolasdevs"; // Replace with actual username
      const url = `https://api.github.com/repos/${username}/${repoName}`;
      const response = await axios.delete(url, {
        headers: {
          Authorization: `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`,
        },
      });

      if (response.status === 204) {
        const updatedRepos = this.repos.filter(
          (repo) => repo.name !== repoName
        );
        this.repos = updatedRepos;
        this.totalPages = Math.ceil(updatedRepos.length / this.reposPerPage);
      } else {
        throw new Error("Failed to delete repository.");
      }
    } catch (error) {
      console.error("Error deleting repo:", error);
    }
  };

  const refreshRepos = () => {
    fetchRepos();
  };

  const paginatedRepos = computed(() => {
    const start = (currentPage.value - 1) * reposPerPage.value;
    const end = start + reposPerPage.value;
    return repos.value.slice(start, end);
  });

  const hasNextPage = computed(() => currentPage.value < totalPages.value);

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };

  return {
    repos,
    reposPerPage,
    currentPage,
    totalPages,
    isLoading,
    fetchRepos,
    refreshRepos,
    paginatedRepos,
    hasNextPage,
    prevPage,
    nextPage,
    showForm,
    createRepo,
  };
});
