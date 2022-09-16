<template>
  <div class="skill-card">
    <div
      role="progressbar"
      :aria-valuenow="number"
      aria-valuemax="100"
      :style="{ '--value': number }"
    ></div>
    <h6>{{ text }}</h6>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: ["number", "text"],
};
</script>
