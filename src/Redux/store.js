import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux"; //redux-toolkit
import { counterReducer } from "./Counter/reducer";
import { todosReducer } from "./Todos/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  //auth:authReducer
});
//function middleware(store) {
//  return function (action) {
//    return function (next) {
//      //your code
//    };
//  };
//}
//const middleware1 = (store) => (next) => (action) => {
//  if (typeof action === "function") {
//    return action(store.dispatch);
//  }
//  next(action);
//};

//express: (req, res, next)=>{}

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//console.log(store.getState());

//store.subscribe(() => {
//  console.log("store", store.getState());
//});

//store.dispatch
