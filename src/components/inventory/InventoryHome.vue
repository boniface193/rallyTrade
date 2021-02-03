<template>
  <div class="px-4 px-md-10">
    <div class="d-flex align-center" style="justify-content: flex-end">
      <div class="search-container">
        <SearchBar
          placeholder="Search Inventory"
          bgColor="#F3F5FF"
          borderColor="transparent"
        />
      </div>
      <FilterIcon toolTipText="Filter Inventory" />
    </div>
    <CategoryList class="mt-6" />

    <div class="products-container pt-12 pb-5">
      <ProductCard productId="j2020ss" class="mb-7"/>
      <ProductCard productId="83993js" class="mb-7"/>
      <ProductCard productId="3930909" class="mb-7"/>
      <ProductCard productId="3930909" class="mb-7"/>
      <ProductCard productId="3930909" class="mb-7"/>
      <ProductCard productId="3930909" class="mb-7"/>
      <ProductCard productId="3930909" class="mb-7"/>
      <ProductCard productId="3930909" class="mb-7"/>
      <ProductCard productId="3930909" class="mb-7"/>
      <ProductCard productId="3930909" class="mb-7"/>
    </div>
  </div>
</template>
<script>
import SearchBar from "@/components/general/SearchBar.vue";
import FilterIcon from "@/components/general/FilterIcon.vue";
import CategoryList from "@/components/inventory/CategoryList.vue";
import ProductCard from "@/components/inventory/ProductCard.vue";
export default {
  name: "InventoryHome",
  components: { SearchBar, FilterIcon, CategoryList, ProductCard },
};
</script>
<style lang="scss" scoped>
.products-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.search-container {
  width: 400px;
}
@media (max-width: 500px) {
  .search-container {
    width: -webkit-fill-available;
  }
}
</style>