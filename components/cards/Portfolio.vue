<template>
  <figure class="portfolio-card">
    <img :src="require('@/assets/' + avatar)" />
    <div class="content-title">
      <div>
        <h6>{{ title }}</h6>
        <p>{{ description }}</p>
      </div>
    </div>
  </figure>
</template>
<script>
export default {
  name: "PortfolioCard",
  props: ["avatar", "title", "description"],
};
</script>
