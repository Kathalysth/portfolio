

export const state = () => ({
  repos: [
    {
    name:"Invoicing Web Application",
    description:"",
    image:"",
    client:"Employer",
    tools:["React", "NodeJS", "MongoDB", "LDAP", "AD"],
    dateCompleted:"2022-04-15",
    website:"Internally Consumed"
  },
    {
    name:"Student Information Management System (PWA) ",
    description:"",
    image:"",
    client:"Collaboration",
    tools:["React", "NodeJS", "MongoDB", "Express"],
    dateCompleted:"Ongoing Collaboration",
    website:""
  },
    {
    name:"Portfolio Website",
    description:"",
    image:"",
    client:"Self",
    tools:["Vue", "NuxtJs", "Sass"],
    dateCompleted:"2022-09-15",
    website:"https://kathalysth.github.io/portfolio/"
  },
    {
    name:"Intern Management Application",
    description:"",
    image:"",
    client:"Employer",
    tools:["React", "Nodejs", "Sass", "MongoDB", "AD", "LDAP"],
    website:"itdima.herokuapp.com",
    dateCompleted:"2021-11-15"
  },
    {
    name:"Service Management Portal - Helpdesk",
    description:"",
    image:"",
    client:"Employer",
    tools:["React", "Nodejs", "Sass", "MongoDB", "Vitejs", "LDAP", "AD"],
    dateCompleted:"2022-08-29",
    website:"Internally Consumed"
  },
],
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
      await fetch(process.env.GITHUB_API)
        .then(response => response.json())
        .then(data => {
          commit("updateRepoData", data.filter(d => ["kathalysth", "portfolio-nuxtjs"].map(d => d.toLowerCase()).includes(d.name.toLowerCase())));
        });
    } catch (err) {
      console.log(err);
    }
  }
};
