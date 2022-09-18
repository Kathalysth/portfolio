

export const state = () => ({
  repos: [
    {
    name:"Invoicing Web Application",
    description:"An Invoicing application built with Reactjs and Nodejs. it allows contractors submit work related invoices to a backend server for validation and approval.",
    image:"",
    client:"Employers",
    tools:["React", "NodeJS", "MongoDB", "LDAP", "AD"],
    dateCompleted:"2022-04-15",
    website:"Internally Consumed"
  },
    {
    name:"Student Information Management System (PWA) ",
    description:"Build a progressive web-app that manages students and lecturers from a university's department.",
    image:"",
    client:"Collaboration",
    tools:["React", "NodeJS", "MongoDB", "Express"],
    dateCompleted:"Ongoing Collaboration",
    website:""
  },
    {
    name:"Portfolio Website",
    description:"Built a Vuejs web-app with NuxtJS that showcases my portfolio, skills, experiences and a quick and easy way to reach out to me.",
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
    client:"Employers",
    tools:["React", "Nodejs", "Sass", "MongoDB", "AD", "LDAP", "Rest-Api"],
    website:"itdima.herokuapp.com",
    dateCompleted:"2021-11-15"
  },
    {
    name:"Service Management Portal - Helpdesk",
    description:"An Application built with reactJs and NodeJS for making ICT service request and incident reporting within the company.",
    image:"",
    client:"Employers",
    tools:["React", "Nodejs", "Sass", "MongoDB", "Vitejs", "LDAP", "AD", "Rest-Api"],
    dateCompleted:"2022-08-29",
    website:"Internally Consumed"
  },
],
  projectData: []
});


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
