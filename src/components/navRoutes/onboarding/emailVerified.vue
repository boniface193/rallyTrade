<template>
  <div>
    <Skeleton logoWidth="220px" pageTitle="Email Verified" imgWidth="180px">
      <div class="text-center my-7">
        <h3>Your account has been activated</h3>
        <p>An email has been sent to you with the Rally Trade Credentials</p>
      </div>
    </Skeleton>
  </div>
</template>

<script>
import Skeleton from "@/components/navRoutes/onboarding/skeleton.vue";
export default {
  components: {
    Skeleton,
  },
};
</script>

<style>
</style>