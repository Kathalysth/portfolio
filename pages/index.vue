<template>
  <!-- <HomeComponent /> -->
  <AboutComponent />
</template>

<script>
import HomeComponent from "../components/HomeComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";
export default {
  name: "IndexPage",
  components: { HomeComponent, AboutComponent },
};
</script>
