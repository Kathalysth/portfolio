<template>
  <nav>
    <ul>
      <li>
        <div class="icon"><MaterialIconHome /></div>
        <h4>Home</h4>
      </li>
      <li>
        <div class="icon"><MaterialIconAccount /></div>
        <h4>About</h4>
      </li>
      <li>
        <div class="icon"><MaterialIconBriefcaseAccount /></div>
        <h4>Portfolio</h4>
      </li>
      <li>
        <div class="icon"><MaterialIconCardAccountMail /></div>
        <h4>Contact</h4>
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
