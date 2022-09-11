<template>
  <div class="page" :class="{ 'active-page': isActive }">
    <div class="page-title">
      <h1 class="page-title-main">
        Get In
        <span>Touch</span>
      </h1>
      <div class="page-title-secondary">Contact</div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  props: ["isActive"],
};
</script>
