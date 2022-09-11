import {
  v4 as uuidv4
} from "uuid";

export const state = () => ({
  cart: [],
  projectData: []
});

export const getters = {
  cartCount: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + +next.count, 0);
  },
  totalPrice: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + +next.combinedPrice, 0);
  }
};

export const mutations = {
  addToCart: (state, formOutput) => {
    formOutput.id = uuidv4();
    state.cart.push(formOutput);
  },
  updateProjectData: (state, data) => {
    state.projectData = data;
  }
};

export const actions = {
  async getProjectData({
    state,
    commit
  }) {
    if (state.projectData.length) return;

    try {
      await fetch(
          "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants", {
            headers: {
              "Content-Type": "application/json",
            }
          }
        )
        .then(response => response.json())
        .then(data => {
          commit("updateProjectData", data);
        });
    } catch (err) {
      console.log(err);
    }
  }
};
