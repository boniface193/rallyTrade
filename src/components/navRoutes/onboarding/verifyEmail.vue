<template>
  <div>
    <Skeleton logoWidth="220px" pageTitle="Verify Email" imgWidth="180px">
      <div class="text-center my-7">
        <h3>Thank you for registering!</h3>
        <p>
          An email has been sent to you. Please open it and click the link
          inside to activate your account!
        </p>
      </div>
    </Skeleton>
  </div>
</template>

<script>
import Skeleton from "@/components/navRoutes/onboarding/skeleton.vue";
export default {
  components: {
    Skeleton,
  }
};
</script>

<style>
</style>