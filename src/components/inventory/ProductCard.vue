<template>
  <div class="card-container">
    <router-link
      :to="{ name: 'ProductPage', params: { id: product.id, createLink: false } }"
      style="text-decoration: none"
    >
      <div class="card-top">
        <div class="image-container">
          <img :src="product.image" alt=""/>
        </div>
      </div>
      <div class="card-bottom">
        <h5 class="mb-1" style="color: black">{{ product.name }}</h5>
        <p class="secondary--text mb-2" style="font-size: 11px">
          &#8358;{{ product.price_label }}
        </p>
        <p class="mb-0" style="color: #5064cc">&#8358;5k - &#8358;10k</p>
        <p class="secondary--text" style="font-size: 10px">
          Recommended profit
        </p>

        <div class="add-btn">+</div>
      </div>
      <p class="points">50pts</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: ["product"],
};
</script>
<style lang="scss" scoped>
.card-container {
  min-width: 18%;
  height: 255px;
  position: relative;
  margin: auto 1%;
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
      text-align: center;
      img {
        width: 80%;
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
    min-width: 22.5%;
    margin: auto 1%;
  }
}
@media (max-width: 750px) {
  .card-container {
    min-width: 30%;
    margin: auto 1.5%;
  }
}
@media (max-width: 550px) {
  .card-container {
    min-width: 45%;
     margin: auto 2%;
  }
}
</style>