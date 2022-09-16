<template>
  <div class="modal portfolio-details" @click="$emit('close-modal')">
    <div class="modal-dialog modal-dialog-center portfolio-modal">
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
                      <span class="project-label">Topics:</span>
                      <span class="project-label-value">
                        <ul class="topics">
                          <li
                            v-for="(topic, index) in details.topics"
                            :key="index"
                          >
                            <span class="badge">{{ topic }}</span>
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
                      <span class="project-label">Type:</span>
                      <span class="project-label-value">{{
                        details.private ? "Private" : "Public"
                      }}</span>
                    </li>
                    <li class="col-12 col-sm-6">
                      <span class="project-label">Link:</span>
                      <span
                        ><a :href="details.html_url" target="_blank">{{
                          details.html_url
                        }}</a></span
                      >
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
