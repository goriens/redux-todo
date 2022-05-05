export const ADD_TODO = "ADD_TODO";
export const SORT = "SORT";
export const FILTER = "FILTER";
export const DELETE = "DELETE";

////Action creator
export const addTodo = (data) => ({
  type: ADD_TODO,
  payload: data,
});

export const getTodo = () => async (dispatch) => {
  const data = await fetch("http://localhost:8080/todos").then((x) => x.json());
  dispatch(addTodo(data));
};

export const sort = (by) => {
  return {
    type: SORT,
    payload: by,
  };
};

export const filter = (text) => {
  return {
    type: FILTER,
    payload: text,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};
