<template>
  <div class="container">
    <select name="" id="" v-model="filters.gender" @change="onFilter()">
      <option value="">Select gender</option>
      <option value="male">Maschio</option>
      <option value="female">Femmina</option>
    </select>
    <select name="" id="" v-model="filters.weight" @change="onFilter()">
      <option value="">Select weight</option>
      <option value="50">Peso piuma (0-50)</option>
      <option value="51">Peso superiore(51+)</option>
    </select>
  </div>
</template>
<style lang="scss" scoped>
.container {
  padding: 24px 8px;
  select {
    border-radius: 4px;
    margin: 4px;
    padding-inline-end: 8px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      filters: {
        weight: "",
        gender: "",
      },
    };
  },
  emits: ["search"],
  methods: {
    onFilter() {
      parseInt(this.filters.weight);
      this.$emit("search", { ...this.filters });
    },
  },
};
</script>
