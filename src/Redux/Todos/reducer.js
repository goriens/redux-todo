import { ADD_TODO, DELETE, FILTER, SORT } from "./action";

//store:{counter:0}
const init = { todos: [] };
export const todosReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...store, todos: payload };
    case SORT:
      return {
        ...store,
        todos: [...store.todos].sort((a, b) =>
          a[payload] > b[payload] ? 1 : a[payload] < b[payload] ? -1 : 0
        ),
      };
    case FILTER:
      return {
        ...store,
        //todos: store.todos.filter((e) => e.title.includes(payload)),
      };
    case DELETE:
      return {
        ...store,
        todos: store.todos.filter((e) => e.id !== payload), //functions
      };
    default:
      return store;
  }
};
