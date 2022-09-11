<template>
  <div class="page" :class="{ 'active-page': isActive }">
    <div class="page-title">
      <h1 class="page-title-main">
        My
        <span>Portfolio</span>
      </h1>
      <div class="page-title-secondary">Works</div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "PortfolioPage",
  props: ["isActive"],
};
</script>
