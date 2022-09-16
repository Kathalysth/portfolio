<template>
  <div class="modal portfolio-details" @click="$emit('close-modal')">
    <div class="modal-dialog modal-dialog-center portfolio-modal">
      <div class="modal-content portfolio-modal">
        <span class="close">&times;</span>
        <!-- details -->
        <div class="modal-body">
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
