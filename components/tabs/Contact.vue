<template>
  <div class="page contactpage" :class="{ 'active-page': isActive }">
    <div class="page-wrapper">
      <PageHeader :title="'Get in touch'" :secondaryTitle="'contact'" />
      <div class="row">
        <div class="contact col-12 col-lg-5 addr">
          <h3>REACH OUT!</h3>
          <p>
            Feel free to get in touch with me. I am open to discussing new
            projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <address>
            <font-awesome-icon :icon="['fas', 'map']" />
            <h5>Address Point</h5>
            <p>Plot 5043 Danube estate, maitama, Abuja.</p>
          </address>
          <address>
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <h5>SEND a mAIL</h5>
            <p>ambassadorehigimetor@gmail.com</p>
          </address>
          <address>
            <font-awesome-icon :icon="['fas', 'square-phone']" />
            <h5>Call</h5>
            <p>+2349036356829</p>
          </address>
          <!-- <ul>
          <li>
            <a
              href="https://linkedin.com/in/ambassador-chris-ehigimetor"
              target="_blank"
              ><font-awesome-icon :icon="['fab', 'linkedin']"
            /></a>
          </li>
          <li>
            <a href="https://instagram.com/bishopsirhchris" target="_blank"
              ><font-awesome-icon :icon="['fab', 'instagram']"
            /></a>
          </li>
          <li>
            <a href="https://twitter.com/bishopsirhchris" target="_blank"
              ><font-awesome-icon :icon="['fab', 'twitter']"
            /></a>
          </li>
        </ul> -->
        </div>
        <div class="col-12 col-lg-6">
          <form class="contactform">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <input type="text" placeholder="Your Name" />
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <input type="text" placeholder="Your Email" />
                </div>
              </div>
              <div class="col-12 col-lg-12">
                <div class="form-group">
                  <input type="text" placeholder="Subject" />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <textarea type="" placeholder="Message" rows="5"></textarea>
                </div>
              </div>
              <div class="col-12">
                <button class="button">
                  <span class="btn-text">Send Message</span>
                  <font-awesome-icon
                    :icon="['fas', 'paper-plane']"
                    class="btn-icon"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "../PageHeader.vue";
export default {
  name: "ContactPage",
  props: ["isActive"],
  components: { PageHeader },
};
</script>
