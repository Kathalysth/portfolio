<template>
  <main class="tab-content">
    <Home :isActive="isActive(1)" :setShowModal="setShowModal" />
    <About :isActive="isActive(2)" />
    <Portfolio
      :isActive="isActive(3)"
      :setPortfolioDetails="setPortfolioDetails"
    />
    <Contact :isActive="isActive(4)" />
  </main>
</template>

<script>
import Home from "../components/tabs/Home.vue";
import About from "../components/tabs/About.vue";
import Portfolio from "../components/tabs/Portfolio.vue";
import Contact from "../components/tabs/Contact.vue";
export default {
  name: "IndexPage",
  props: ["activePage", "setShowModal", "setPortfolioDetails"],
  components: { Home, About, Portfolio, Contact },
  methods: {
    isActive(pageNumber) {
      const active = this.activePage === pageNumber ? true : false;
      return active;
    },
  },
};
</script>
