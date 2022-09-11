<template>
  <div class="page" :class="{ 'active-page': isActive }">
    <div class="page-title">
      <h1 class="page-title-main">
        About
        <span>Me</span>
      </h1>
      <div class="page-title-secondary">RESUME</div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  props: ["isActive"],
};
</script>
