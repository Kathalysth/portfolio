<template>
  <div class="experience-card">
    <div class="card-body">
      <h3>{{ number }}</h3>
      <p>
        <span class="d-inblock">{{
          text.split(" ").slice(0, -1).join(" ")
        }}</span>
        <span class="d-block">{{ text.split(" ").pop() }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: ["number", "text"],
};
</script>
