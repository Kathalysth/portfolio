<template>
  <nav>
    <ul>
      <li>
        <h4>Home</h4>
        <div class="icon"><MaterialIconHome /></div>
      </li>
      <li>
        <h4>About</h4>
        <div class="icon"><MaterialIconAccount /></div>
      </li>
      <li>
        <h4>Portfolio</h4>
        <div class="icon"><MaterialIconBriefcaseAccount /></div>
      </li>
      <li>
        <h4>Contact</h4>
        <div class="icon"><MaterialIconCardAccountMail /></div>
      </li>
    </ul>
  </nav>
</template>

<script>
// import { mapGetters } from "vuex";s
import AppLogo from "./NuxtLogo.vue";

export default {
  components: {
    AppLogo,
  },
};
</script>

<style lang="scss" scoped></style>
