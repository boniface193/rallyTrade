<template>
  <div class="px-4">
    <div
      class="d-flex align-center justify-center mb-8"
      style="position: relative"
    >
      <!-- go to previous page -->
      <router-link
        :to="{
          name: 'ProductPage',
          params: {
            id: this.$route.params.id,
          },
        }"
        style="text-decoration: none"
      >
        <span class="back-btn">
          <v-icon style="font-size: 25px">mdi-chevron-left</v-icon>
        </span>
      </router-link>
      <!-- title -->
      <h3 class="align-self-center">Product Details</h3>
    </div>

    <div class="mt-5">
      <h5 class="mb-4">Description</h5>
      <p class="mb-5 secondary--text" style="font-size: 14px">
        MacBook Pro 2013, core i5, 128 GB SSD, 8GB, 13", 12 hours battery,
        backlit keyboard, Multi-Touch 1.8GHz dual-core intel core i5 processor
        with 3MB shared L3 cache (Turbo boost up to 2.9GHz) 8GB of 1,600MHz
        LPDDR3 RAM 128GB PCle- based flash storage 13 inch, 1440 x 900 pixel
        display. Intel HD Graphics 600011ac Wi-Fi (IEEE 802.11a/b/g/n
        compatible); Bluetooth 4.0 Ports: 2 x USB 3; 1 x Thunderbolt 2; 1 x SDXC
        card slot; 1 x 3.5mm headphone jackdual microphones 720p Facetime HD
        camera, full-size backlit keyboard with ambient light sensor, and
        Multi-touch trackpad. 54-watt hour battery Height: 0.3 - 1.7cm (0.11 -
        0.68in) Width: 32.5cm (12.8in) Depth: 22.7cm (8.94in) Weight: 1.35kg
        (2.96lb)
      </p>

      <h5 class="mb-4">Key Features</h5>
      <p class="mb-5 secondary--text" style="font-size: 14px">
        128GB or 256GB PCle-based flash storage 13 inch 1440 x 900-pixel display
        8GB of 1600 MHz LPDDR3 RAM Intel HD Graphics 6000 1.8GHz dual-core Intel
        Core i5 processor with 3MB Operating System: Mac OS X Product Warranty:
        1 year
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductDetails",
};
</script>
<style lang="scss" scoped>
.back-btn {
  position: absolute;
  left: 0px;
  top: 0;
}
</style>