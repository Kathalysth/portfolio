import {
  v4 as uuidv4
} from "uuid";

export const state = () => ({
  repos: [],
  projectData: []
});

export const getters = {
 
};

export const mutations = {
  updateProjectData: (state, data) => {
    state.projectData = data;
  },
  updateRepoData: (state, data) => {
    state.repos = data;
  }
};

export const actions = {
  async getRepos({
    state,
    commit
  }) {
    if (state.repos.length) return;

    try {
      await fetch("https://api.github.com/users/kathalysth/repos")
        .then(response => response.json())
        .then(data => {
          commit("updateRepoData", data);
        });
    } catch (err) {
      console.log(err);
    }
  }
};
