<template>
  <nav>
    <ul>
      <li
        v-for="el in menu"
        :key="el.id"
        @click="setActivePage(el.id)"
        :class="{
          active: activePage === el.id ? true : false,
          'animate__animated animate__fadeIn':
            activePage === el.id ? true : false,
        }"
      >
        <button>
          <div class="icon">
            <font-awesome-icon :icon="['fas', el.icon]" />
          </div>
          <h4>{{ el.name }}</h4>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["setActivePage", "activePage"],
  data() {
    return {
      menu: [
        {
          id: 1,
          name: "Home",
          icon: "house-chimney",
        },
        {
          id: 2,
          name: "About",
          icon: "address-card",
        },
        {
          id: 3,
          name: "Portfolio",
          icon: "briefcase",
        },
        {
          id: 4,
          name: "Contact",
          icon: "envelope-open",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
