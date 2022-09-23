<template>
  <div
    class="skill-card"
    :class="{
      'animate__animated animate__heartBeat': isHover,
    }"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <img :src="logo" />
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: ["number", "text", "logo"],
  data() {
    return {
      isHover: false,
    };
  },
};
</script>
