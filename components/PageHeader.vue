<template>
  <div class="page-title">
    <h1 class="page-title-main">
      {{ title.split(" ").slice(0, -1).join(" ") }}
      <span>{{ title.split(" ").pop() }}</span>
    </h1>
    <div class="page-title-secondary">{{ secondaryTitle }}</div>
  </div>
</template>
<script>
export default {
  name: "PageHeader",
  props: ["title", "secondaryTitle"],
};
</script>
