<template>
  <div class="bg-dark" ref="bg_class">
    <v-btn
      @click="toggleOpen"
      v-click-outside="onClickOutside"
      class="menu-btn elevation-6"
      fab
      color="white"
    >
      <v-icon dark color="main_bg"> mdi-menu </v-icon>
    </v-btn>
    <div class="circle">
      <div class="text-center my-3 hidden-on-true d-none" ref="hidden_on_true">
        <v-list color="transparent">
          <v-list-item
            v-for="item in links"
            :key="item.id"
            :to="{ name: item.routes }"
            active-class="active"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.link"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-btn
          depressed
          class="mb-3"
          dark
          color="success"
          outlined
          small
          block
          :to="{ name: 'login' }"
          >Logout</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { link: "Trading", routes: "dashboard" },
        { link: "Contest", routes: "contest" },
        { link: "Partnership", routes: "partnership" },
        { link: "Profile", routes: "profile" },
        { link: "Promotions", routes: "promotion" },
        { link: "Documents", routes: "documents" },
        { link: "Announcements", routes: "announcement" },
      ],
    };
  },

  methods: {
    toggleOpen() {
      if (this.$refs.bg_class.classList.contains("open") == false) {
        this.$refs.bg_class.classList.add("open");
        this.$refs.hidden_on_true.classList.remove("d-none");
      } else {
        this.$refs.hidden_on_true.classList.add("d-none");
        this.$refs.bg_class.classList.remove("open");
      }
    },

    onClickOutside() {
      if (this.$route.name == "register" || this.$route.name == "login") {
        return null
      } else if (this.$refs.bg_class.classList.contains("open") == true) {
        this.$refs.hidden_on_true.classList.add("d-none");
        this.$refs.bg_class.classList.remove("open");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
$font-family: "Inter", sans-serif;
$bg-color: #252954;
$body-color: #9b9ca7;
$main-bg: #0e0e23;
$blue: #4255d4;
$white: #fff;
$orange: #fb8c00;
:root {
  --delay: 0s;
}

* {
  outline: none;
  box-sizing: border-box;
  font-family: $font-family;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
.bg-dark {
  .menu-btn {
    z-index: 1;
    position: fixed;
    bottom: 0%;
    margin: 0 0 3% 5%;
  }

  @media (max-width: 280px) {
    .menu-btn {
      width: 50px !important;
      height: 50px !important;
    }
  }
  .active {
    background-color: $orange;
    border-radius: 5px;
    color: $white !important;
  }

  .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: $body-color !important;
  }
  .circle {
    display: none;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;
  }
  svg {
    width: 100%;
    display: block;
    bottom: 0;
    position: fixed;

    path {
      transition: 0.25s cubic-bezier(0.25, 0, 0, 1);
      fill: $white;
    }
  }
  &:not(.open) {
    .circle {
      cursor: pointer;
    }
    svg {
      path {
        transition-delay: 0.015s;
      }
    }
  }
  &.open {
    .circle {
      display: flex;
      justify-content: center;
      position: fixed;
      background: $white;
      z-index: 1 !important;
      bottom: 17%;
      right: (2%/0.26);
      left: (2%/0.26);
      height: fit-content;
      border-radius: 3%;
      transition: 0.025s cubic-bezier(0.25, 0, 0, 1),
        bottom 0.25s cubic-bezier(0.1, 0.1, 0, 1); //Bottom is faster to go up
      transition-delay: 0.015s;
    }
    svg {
      width: 100%;
      display: block;
      bottom: 0;
      position: fixed;
    }
  }
}
</style>