import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  peopleList: [],
  activeFilters: {},
});

export function fetchPeople() {
  axios
    .get("https://swapi.dev/api/people/", {
      params: {
        ...store.activeFilters,
      },
    })
    .then((resp) => {
      store.peopleList = resp.data.results;
      console.log(store.peopleList);
    });
}
