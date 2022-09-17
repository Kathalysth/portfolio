<template>
  <div class="container">
    <div class="content">
      <AppMenu :setActivePage="setActivePage" :activePage="activePage" />
      <NuxtChild
        :activePage="activePage"
        :setShowModal="setShowModal"
        :setPortfolioDetails="setPortfolioDetails"
      />
    </div>
    <Modal v-show="showModal" @close-modal="showModal = false" />
    <PortfolioDetails
      :details="details"
      v-show="openPortfolio"
      @close-modal="openPortfolio = false"
    />
    <AppFooter />
  </div>
</template>

<script>
import AppMenu from "../components/AppMenu.vue";
import AppFooter from "../components/AppFooter.vue";
import Modal from "../components/AppModal.vue";
import PortfolioDetails from "../components/modals/PortfolioDetails.vue";
import "animate.css";
export default {
  components: {
    AppMenu,
    AppFooter,
    Modal,
    PortfolioDetails,
  },
  data() {
    return {
      activePage: 1,
      showModal: false,
      openPortfolio: false,
      details: {},
    };
  },
  methods: {
    setActivePage(clickedPage) {
      if (clickedPage !== this.activePage) {
        this.activePage = clickedPage;
      }
    },
    setShowModal() {
      this.showModal = !this.showModal;
    },
    setPortfolioDetails(repo) {
      this.details = repo;
      this.openPortfolio = true;
    },
  },
};
</script>

<style>
html {
  font-family: "Mulish", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  line-height: 1.4;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1,
h2,
h3,
h4 {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
</style>
