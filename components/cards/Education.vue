<template>
  <div class="education-card">
    <div class="icon"><img :src="icon" class="icon-img" /></div>
    <span class="timeline">{{ timeline }}</span>
    <h5>
      {{ study }} <span>{{ school }}</span>
    </h5>
    <div>
      <ul>
        <li v-for="(el, index) in description" :key="index + 1">{{ el }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationCard",
  props: ["timeline", "study", "school", "description", "icon"],
};
</script>
