<template>
  <div class="bg-dark">
    <div class="circle" @click="toggleOpen">
      <v-icon class="white--text">mdi-close</v-icon>
      <div class="text-center my-3 hidden-on-true d-none">
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
      </div>
    </div>
    <svg viewBox="0 0 416 896">
      <path
        d="M287.1 784c-18.4 0-35.3 9-46.4 23.7 -7.5 9.9-19.4 16.3-32.7 16.3s-25.3-6.4-32.7-16.3c-11-14.7-28-23.7-46.4-23.7H0v112h416V784H287.1z"
      ></path>
    </svg>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { link: "Trading", routes: "trading" },
        { link: "Contest", routes: "contest" },
        { link: "Partnership", routes: "partnership" },
        { link: "Profile", routes: "profile" },
        { link: "Promotions", routes: "promotion" },
        { link: "Documents", routes: "document" },
        { link: "Announcements", routes: "announcement" },
      ],
    };
  },

  methods: {
    toggleOpen() {
      if (
        document.querySelector(".bg-dark").classList.contains("open") == false
      ) {
        document.querySelector(".bg-dark").classList.add("open");
        document.querySelector(".hidden-on-true").classList.remove("d-none");
      } else {
        document.querySelector(".hidden-on-true").classList.add("d-none");
        document.querySelector(".bg-dark").classList.remove("open");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap");

$font-family: "Inter", sans-serif;
$bg-color: #252954;
$body-color: #9b9ca7;
$main-bg: #0e0e23;
$logo: #4255d4;
:root {
  --delay: 0s;
}

.active {
  background-color: #a8ff78;
  border-radius: 5px;
}

* {
  outline: none;
  box-sizing: border-box;
  color: $body-color;
  font-family: $font-family;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
.bg-dark {
  display: flex;
  justify-content: center;
  .circle {
    z-index: 2;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 10%;
    padding: 8%;
    background: $bg-color;
    border-radius: 50%;
    transition: 0.25s cubic-bezier(0.25, 0, 0, 1),
      bottom 0.25s cubic-bezier(0.5, 0, 0.25, 1); //Bottom is slower to go down
    i {
      position: fixed;
      text-align: center;
      bottom: (4%/0.317);
      font-size: 1.5rem;
      color: white;
      transform: rotate(45deg);
      transition: 0.25s ease;
      cursor: pointer;
    }
  }
  svg {
    width: 100%;
    display: block;
    bottom: 0;
    position: fixed;

    path {
      transition: 0.25s cubic-bezier(0.25, 0, 0, 1);
      fill: $main-bg;
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
      bottom: 17%;
      right: (2%/0.26);
      left: (2%/0.26);
      height: fit-content;
      border-radius: 5%;
      position: fixed;
      transition: 0.25s cubic-bezier(0.25, 0, 0, 1),
        bottom 0.25s cubic-bezier(0.1, 0.1, 0, 1); //Bottom is faster to go up
      transition-delay: 0.015s;
      i {
        transform: rotate(0deg);
        right: 13%;
        top: -200px;
        display: none;
      }
    }
    svg {
      width: 100%;
      display: block;
      bottom: 0;
      position: fixed;
      path {
        d: path(
          "M287.1 784c-18.4 0-37.1 0-53.1 0 -12.4 0-12.6 0-26 0s-13.6 0-26 0c-18 0-34.8 0-53.1 0H0v112h416V784H287.1z"
        );
      }
    }
  }
}
</style>