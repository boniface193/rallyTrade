<template>
  <div class="card-container">
    <div class="card-top">
      <div class="image-container">
        <img src="@/assets/images/fire.svg" />
      </div>
    </div>
    <div class="card-bottom">
      <h5 class="mb-1">MacBook Pro 2013</h5>
      <p class="secondary--text mb-2" style="font-size: 11px">N200,000.00</p>
      <p class="mb-0" style="color: #5064cc">N5k-10k</p>
      <p class="secondary--text" style="font-size: 10px">Recommended profit</p>
      <router-link :to="{ name: 'ProductPage', params: { id: productId}}" style="text-decoration: none">
        <div class="add-btn">+</div>
      </router-link>
    </div>
    <p class="points">50pts</p>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: ["productId"]
};
</script>
<style lang="scss" scoped>
.card-container {
  min-width: 18%;
  height: 255px;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  .card-top {
    width: 80%;
    height: 143px;
    background: #f3f5ff;
    border-radius: 12px;
    z-index: 2;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    .image-container {
      width: 100%;
      height: 110px;
      margin: auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .card-bottom {
    width: 100%;
    height: 180px;
    padding: 80px 12px 12px 12px;
    bottom: 0;
    background: #fff;
    border-radius: 12px;
    margin: -50px auto 0px auto;
    position: absolute;
    z-index: 1;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    .add-btn {
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      border-radius: 50%;
      background: #5064cc;
      position: absolute;
      justify-content: center;
      right: 10px;
      bottom: 25px;
      font-size: 25px;
      color: #fff;
      cursor: pointer;
      &:hover {
        background: #758bfc;
      }
    }
  }
  .points {
    background: #ffba00;
    color: #fff;
    padding: 2px 5px;
    position: absolute;
    font-size: 12px;
    top: -8px;
    right: 0px;
    z-index: 3;
    border-radius: 8px;
  }
}
@media (max-width: 1150px) {
  .card-container {
    min-width: 23%;
  }
}
@media (max-width: 750px) {
  .card-container {
    min-width: 30%;
  }
}
@media (max-width: 550px) {
  .card-container {
    min-width: 47%;
  }
}
</style>