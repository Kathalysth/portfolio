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

<style></style>
