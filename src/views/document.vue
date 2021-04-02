<template>
  <div class="bg-dark">
    <div class="circle" @click="toggleOpen">
      <v-icon class="white--text">mdi-close</v-icon>
      <div class="text-center my-13 hidden-on-true d-none">
        <div
          class="text-links mt-4"
          v-for="item in links"
          :key="item.id"
          :class="{ active: item.active }"
        >
          <router-link :to="{ name: item.routes }" class="item-link">
            {{ item.link }}
          </router-link>
        </div>
      </div>
    </div>

    <div class="icons d-flex justify-center">
      <div class="text-center" v-for="item in firstIcon" :key="item.id">
        <v-icon class="mx-6" color="success" size="35"
          >{{ item.icon }} <br />
        </v-icon>
        <div class="text-cap">{{ item.text }}</div>
      </div>
      <div class="px-3"></div>
      <div class="text-center" v-for="item in secondIcon" :key="item.id">
        <v-icon class="mx-6" color="success" size="35"
          >{{ item.icon }} <br />
        </v-icon>
        <div class="text-cap">{{ item.text }}</div>
      </div>
    </div>

    <div>
      <!-- <svg viewBox="0 95 416 800">
        <path
          d="M287.1 784c-18.4 0-35.3 9-46.4 23.7 -7.5 9.9-19.4 16.3-32.7 16.3s-25.3-6.4-32.7-16.3c-11-14.7-28-23.7-46.4-23.7H0v112h416V784H287.1z"
        ></path>
      </svg> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstIcon: [
        { icon: "mdi-view-dashboard", routes: "", text: "Dashboard" },
        { icon: "mdi-credit-card", routes: "", text: "Trade Accounts" },
      ],
      secondIcon: [
        { icon: "mdi-account", routes: "", text: "Profile" },
        { icon: "mdi-router", routes: "", text: "Platforms" },
      ],
      links: [
        { link: "Trading", routes: "index", active: true },
        { link: "Contest", routes: "contest" },
        { link: "Partnership", routes: "" },
        { link: "Profile", routes: "" },
        { link: "Promotions", routes: "" },
        { link: "Documents", routes: "" },
        { link: "Announcements", routes: "" },
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
  background-color: $main-bg;
  overflow: hidden;

  .icons {
    position: absolute;
    top: 90vh;
    .text-cap {
      font-size: 12px;
    }
  }

  .circle {
    z-index: 2;
    position: absolute;
    bottom: (13%);
    right: (42%);
    left: (42%);
    height: (4%/0.56);
    background: linear-gradient(to top, #a8ff78, #42b574);
    border-radius: 50%;
    transition: 0.25s cubic-bezier(0.25, 0, 0, 1),
      bottom 0.25s cubic-bezier(0.5, 0, 0.25, 1); //Bottom is slower to go down
    i {
      position: absolute;
      top: 20%;
      right: 22%;
      display: grid;
      place-items: center;
      font-size: 1.5rem;
      height: 2rem;
      width: 2rem;
      border-radius: 100%;
      color: white;
      transform: rotate(45deg);
      transition: 0.25s ease;
      cursor: pointer;
    }
  }
  svg {
    width: 100%;
    display: block;
    path {
      transition: 0.25s cubic-bezier(0.25, 0, 0, 1);
      fill: white;
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
      bottom: (9%/0.56);
      right: (2%/0.26);
      left: (2%/0.26);
      height: (30%/0.56);
      border-radius: 5%;
      transition: 0.25s cubic-bezier(0.25, 0, 0, 1),
        bottom 0.25s cubic-bezier(0.1, 0.1, 0, 1); //Bottom is faster to go up
      transition-delay: 0.015s;
      i {
        transform: rotate(0deg);
        right: 5%;
        top: 5%;
      }
      .hidden-on-true {
        transition-delay: 0.015;
        .text-links {
          font-size: 20px;
          cursor: pointer;
        }
        .item-link {
          text-decoration: none;
          color: inherit;
        }
        .active {
          background-color: #a8ff78;
          margin: 0 15px;
          padding: 10px 0;
          border-radius: 5px;
          color: #fff;
        }
      }
    }
    svg {
      path {
        d: path(
          "M287.1 784c-18.4 0-37.1 0-53.1 0 -12.4 0-12.6 0-26 0s-13.6 0-26 0c-18 0-34.8 0-53.1 0H0v112h416V784H287.1z"
        );
      }
    }
  }
}
</style>