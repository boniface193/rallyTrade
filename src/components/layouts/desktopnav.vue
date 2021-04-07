<template>
  <div>
    <v-card>
      <!---------------------------- side drawer ------------------------->

      <v-navigation-drawer
        class="rounded-0"
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        :absolute="absolute"
        :app="changeApp"
        dark
        color="main_bg"
        width="220"
      >
        <v-list-item class="pa-2 mt-3">
          <v-list-item-avatar>
            <svg
              class="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
              />
            </svg>
          </v-list-item-avatar>
          <v-list-item-title class="font-weight-medium fs-4"
            >Rally Trade</v-list-item-title
          >
          <v-btn
            icon
            @click="toggleMini"
            class="ma-3 miniToggle"
            id="miniToggle"
          >
            <v-icon>mdi-menu-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider class="mx-1 mb-3"></v-divider>

        <v-list dense class="mr-1">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            class="py-1 my-2"
            :to="{ name: item.route }"
            active-class="active"
          >
            <v-list-item-icon>
              <v-icon color="icon_color">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <v-item active-class="chang">{{ item.title }}</v-item>
                
                </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="mx-1 mb-5"></v-divider>

          <v-list-item
            v-for="item in item"
            :key="item.title"
            link
            class="py-1 my-2"
            :to="{ name: item.route }"
            active-class="active"
          >
            <v-list-item-icon>
              <v-badge color="pink" dot v-if="item.active"></v-badge>
              <v-icon color="icon_color" light>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
    <!---------------------------- side drawer ------------------------->
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false,
      absolute: null,
      changeApp: null,
      drawer: null,
      items: [
        {
          title: "Trading",
          icon: "mdi-home-outline",
          route: "trading",
          active: true,
        },
        { title: "Contest", icon: "mdi-magnify", route: "contest" },
        {
          title: "Partnership",
          icon: "mdi-chart-box-outline",
          route: "partnership",
        },
        {
          title: "Profile",
          icon: "mdi-file-multiple-outline",
          route: "profile",
        },
      ],

      item: [
        { title: "Promotions", icon: "mdi-cart-outline", route: "promotion" },
        { title: "Documents", icon: "mdi-cog-outline", route: "document" },
        {
          title: "Announcements",
          icon: "mdi-comment-text-outline",
          active: true,
          route: "announcement",
        },
      ],
      mini: true,
    };
  },

  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },

  methods: {
    handleResize() {
      if (window.innerWidth <= 425) {
        this.absolute = true;
        this.changeApp = false;
      } else {
        this.absolute = false;
        this.changeApp = true;
      }

      if (window.innerWidth >= 1400) {
        this.mini = false;
        document.querySelector("#miniToggle").classList.add("d-none");
      } else {
        document.querySelector("#miniToggle").classList.remove("d-none");
      }
    },

    toggleMini() {
      if (this.mini == true) {
        this.mini = false;
      } else {
        this.mini = true;
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
$logo: #fb8c00;
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

.active {
  color: transparent !important;
  border-left: 2px solid $logo;
}
.chang {
  color: $logo !important;
}
</style>