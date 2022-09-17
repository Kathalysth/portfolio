<template>
  <div class="modal portfolio-details" @click="$emit('close-modal')">
    <div
      class="modal-dialog modal-dialog-centered portfolio-modal about modal-dialog-scrollable modal-xl"
    >
      <div class="modal-content portfolio-modal">
        <span class="close">&times;</span>
        <!-- details -->
        <div class="modal-body" @click.stop>
          <About />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import About from "./tabs/About.vue";
export default {
  name: "AppModal",
  components: {
    About,
  },
};
</script>
