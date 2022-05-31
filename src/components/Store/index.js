import todos from "./modules/todos";
import { createStore } from "vuex";
const Store = createStore({
  modules: {
    todos,
  },
});

// Create store
export default Store;
