<template>
  <div
    class="skill-card"
    :class="{
      'animate__animated animate__heartBeat': isHover,
    }"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <div
      role="progressbar"
      :aria-valuenow="number"
      aria-valuemax="100"
      :style="{ '--value': number }"
    ></div>
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
