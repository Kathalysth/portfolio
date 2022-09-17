<template>
  <div class="modal portfolio-details" @click="$emit('close-modal')">
    <div
      class="modal-dialog modal-dialog-centered portfolio-modal modal-dialog-scrollable modal-xl"
    >
      <div class="modal-content portfolio-modal">
        <span class="close">&times;</span>
        <!-- details -->
        <div class="modal-body">
          <div>
            <div>
              <figure>
                <figcaption>
                  <h3>{{ details.name }}</h3>
                  <h4>{{ details.description }}</h4>
                  <ul class="row">
                    <li class="col-12 col-sm-6">
                      <span class="project-label">Tools:</span>
                      <span class="project-label-value">
                        <ul class="topics">
                          <li
                            v-for="(tool, index) in details.tools"
                            :key="index"
                          >
                            <span class="badge">{{ tool }}</span>
                          </li>
                        </ul>
                      </span>
                    </li>
                    <li class="col-12 col-sm-6">
                      <span class="project-label">Languages:</span>
                      <span class="project-label-value">{{
                        details.language
                      }}</span>
                    </li>
                    <li class="col-12 col-sm-6">
                      <span class="project-label">Website:</span>
                      <span class="project-label-value">{{
                        details.website
                      }}</span>
                    </li>
                    <li class="col-12 col-sm-6">
                      <span class="project-label">Date Completed:</span>
                      <span> {{ details.dateCompleted }} </span>
                    </li>
                  </ul>
                </figcaption>
                <div class="img-wrapper">
                  <img :src="require('@/assets/portfolio-card.jpg')" />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioDetail",
  props: ["details"],
  components: {},
};
</script>
