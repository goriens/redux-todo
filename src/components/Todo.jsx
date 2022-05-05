import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodo, sort, deleteTodo } from "../Redux/Todos/action";

export const Todo = () => {
  const todos = useSelector((store) => store.todos.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("");

  const handleAdd = () => {
    const payload = {
      title: text,
      status: false,
    };
    fetch("http://localhost:8080/todos", {
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(() => setText(""))
      .then(() => {
        dispatch(getTodo());
      });
  };
  //const deleteTodo = () => {
  //dispatch(deleteTodo(1))
  //};

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter todos"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <select
        onChange={(e) => {
          dispatch(sort(e.target.value));
        }}
      >
        <option value="id">Sort by Id</option>
        <option value="status">Sort by Status</option>
        <option value="title">Sort by title</option>
      </select>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
      {todos
        .filter((todo) => todo.title.includes(filter))
        .map((e) => (
          <div key={e.id}>
            {e.id}. {e.title} - {e.status ? "Done" : "Not Done"}
            <button
              onClick={() => {
                dispatch(deleteTodo(e.id));
              }}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};
