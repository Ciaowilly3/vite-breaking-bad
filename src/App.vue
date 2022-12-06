<template>
  <TheHeader></TheHeader>
  <CategorySelector></CategorySelector>
  <CardCreator></CardCreator>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>

<script>
import TheHeader from "./components/TheHeader.vue";
import CategorySelector from "./components/CategorySelector.vue";
import CardCreator from "./components/CardCreator.vue";
import { store, fetchPeople } from "./store.js";
export default {
  components: { TheHeader, CategorySelector, CardCreator },
  data() {
    return {
      property: "value",
      store,
    };
  },

  mounted() {
    fetchPeople();
  },
};
</script>
