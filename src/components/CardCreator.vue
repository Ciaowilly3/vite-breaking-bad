<template>
  <div class="container bg-white">
    <div
      class="px-5 py-3 d-flex justify-content-around align-items-center flex-wrap gap-3"
    >
      <div
        class="card-container"
        v-for="(pearson, index) in store.peopleList"
        :key="(pearson, index)"
      >
        <h5>{{ pearson.name }}</h5>
        <h6>Some details:</h6>
        <ul>
          <li>Weight: {{ pearson.mass }}</li>
          <li>Hair color: {{ pearson.hair_color }}</li>
          <li>Gender: {{ pearson.gender }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card-container {
  background-color: #2e3a46;
  padding: 4px 8px;
  border-radius: 6px;
  flex-basis: 18%;
  flex-shrink: 0;
  text-align: center;
  h5 {
    color: antiquewhite;
  }
  h6 {
    color: rgb(247, 240, 230);
  }
  ul {
    text-align: start;
    list-style: georgian;
    color: aliceblue;
    padding-inline-start: 0;
    padding-bottom: 8px;
    display: block;
    width: fit-content;
    margin: auto;
    li {
      border-bottom: 1px solid aliceblue;
      padding: 8px;
    }
  }
}
</style>
<script>
import { store } from "../store.js";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>
