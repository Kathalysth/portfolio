<template>
  <div
    class="page portfoliopage"
    :class="{
      'active-page': isActive,
      'animate__animated animate__fadeInUp': isActive,
    }"
  >
    <div class="page-wrapper">
      <PageHeader :title="'my portfolio'" :secondaryTitle="'works'" />
      <section>
        <div>
          <div>
            <ul class="projects-list">
              <li
                v-for="repo in repos"
                :key="repo.id"
                @click="setPortfolioDetails(repo)"
              >
                <PortfolioCard
                  :avatar="image"
                  :title="repo.name"
                  :description="repo.description"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PortfolioCard from "../cards/Portfolio.vue";
import PageHeader from "../PageHeader.vue";
import { mapState } from "vuex";

export default {
  name: "PortfolioPage",
  props: ["isActive", "setPortfolioDetails"],
  components: { PortfolioCard, PageHeader },
  data() {
    return {
      image: "portfolio-card.jpg",
    };
  },
  computed: {
    ...mapState(["repos"]),
  },
};
</script>
