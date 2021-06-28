<template>
  <div>
    <div style="background-color: #0e0e23" class="px-8 py-16 rounded-lg">
      <div class="white--text">
        <div class="h2">Settings</div>
        <div class="caption mt-3 mb-7">
          Home <v-icon size="20" color="white">mdi-chevron-right</v-icon> Pages
          <v-icon size="20" color="white">mdi-chevron-right</v-icon
          ><span class="active_link--text font-weight-bold">Settings</span>
        </div>
      </div>
      <v-row>
        <v-col :cols="3">
          <v-tabs
            v-model="tab"
            vertical
            background-color="#0e0e23"
            active-class="active_link white--text"
            hide-slider
            dark
          >
            <v-tab v-for="item in items" :key="item.tab">
              {{ item.tab }}
            </v-tab>
          </v-tabs>
        </v-col>

        <v-col :cols="9" class="white rounded">
          <v-tabs-items v-model="tab">
            <v-tab-item  v-for="item in items" :key="item.tab" class="rounded">
              <v-card flat height="320">
                <v-card-text>{{ item.content }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
// import tabs from "@/components/navRoutes/profiles/tabs.vue";
// import tab from "@/components/navRoutes/profiles/tab.vue";
export default {
  // components: { tabs, tab },
  data() {
    return {
      tab: null,
      items: [
        { tab: "Your Profile", content: "Tab 1 Content" },
        { tab: "Password", content: "Tab 2 Content" },
        { tab: "Email Notification", content: "Tab 3 Content" },
        { tab: "Integration", content: "Tab 4 Content" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.v-tab {
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
  text-transform: capitalize !important;
  display: flex;
  flex: 0 1 auto;
  font-size: 12px;
  font-weight: normal;
  justify-content: flex-start;
  letter-spacing: 0.0892857143em;
  line-height: normal;
  min-width: 90px;
  max-width: 360px;
  outline: none;
  padding: 0 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>