<template>
  <div class="container">
    <form action="" class="form-group" @submit.prevent="onFilter()">
      <input
        placeholder="Inserisci il nome del personaggio che vuoi cercare"
        type="text"
        class="form-control"
        v-model="filters.searchedName"
      />
      <button type="submit" class="my-btn">Avvia ricerca</button>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.container {
  padding: 24px 8px;
  form {
    display: flex;
    .my-btn {
      background-color: bisque;
      border: 1px solid rgb(251, 217, 175);
      border-radius: 4px;
      margin-left: 24px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      filters: {
        searchedName: "",
      },
    };
  },
  emits: ["search"],
  methods: {
    onFilter() {
      console.log(this.filters.searchedName);
      this.$emit("search", { ...this.filters });
    },
  },
};
</script>
