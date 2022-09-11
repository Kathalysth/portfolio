<template>
  <main class="tab-content">
    <Home :isActive="isActive(1)" />
    <About :isActive="isActive(2)" />
    <Portfolio :isActive="isActive(3)" />
    <Contact :isActive="isActive(4)" />
  </main>
</template>

<script>
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Portfolio from "../components/Portfolio.vue";
import Contact from "../components/Contact.vue";
export default {
  name: "IndexPage",
  props: ["activePage"],
  components: { Home, About, Portfolio, Contact },
  methods: {
    isActive(pageNumber) {
      const active = this.activePage === pageNumber ? true : false;
      return active;
    },
  },
};
</script>
