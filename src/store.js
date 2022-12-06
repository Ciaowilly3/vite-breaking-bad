import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  peopleList: [],
});

export function fetchPeople() {
  axios.get("https://swapi.dev/api/people/").then((resp) => {
    store.peopleList = resp.data.results;
    console.log(store.peopleList);
  });
}
