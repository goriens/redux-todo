import "./App.css";
import { Counter } from "./components/Counter";
import { Todo } from "./components/Todo";

function App() {
  //const state = store.getState();
  //console.log(state);
  return (
    <div className="App">
      {/*<Counter />*/}
      <Todo />
    </div>
  );
}

export default App;
