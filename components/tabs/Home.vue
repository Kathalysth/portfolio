<!-- Please remove this file from your project -->
<template>
  <div
    class="page homepage fade"
    :class="{
      'active-page': isActive,
      'animate__animated animate__zoomIn': isActive,
    }"
  >
    <div class="container-fluid">
      <div class="content-wrapper row">
        <div class="details col-12 col-lg-8">
          <div>
            <img
              class="img-mobile"
              :src="require('@/assets/my-portrait.jpg')"
            />
            <h1>
              Chris Ehigimetor.
              <span>Frontend Developer</span>
            </h1>
            <p>
              I'm a Javascript Developer that focuses on front-end frameworks
              such as React, Vue, NuxtJS and NextJS. I have a passion for Design
              Systems, Web Accessibility, Open Source Contribution, and System
              Integration. To grow I focus on contributing to open source
              projects.
            </p>
            <button class="button" @click="setShowModal">
              <span class="btn-text">See More</span>
              <font-awesome-icon
                :icon="['fas', 'arrow-right']"
                class="btn-icon"
              />
            </button>
          </div>
        </div>
        <div class="portrait col-12 ms-auto cod"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: ["isActive", "setShowModal"],
};
</script>
