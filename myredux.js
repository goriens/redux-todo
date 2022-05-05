const init = {
  counter: 0,
};
const INC_COUNT = "INC_COUNT";

//Action
const inCount = { type: INC_COUNT, payload: 1 };
//reducer
const reducer = (store, { type, payload }) => {
  switch (type) {
    case INC_COUNT:
      return { counter: store.counter + payload };
    default:
      return store;
  }
};

//Js classes
class Store {
  constructor(reducer, init) {
    this.reducer = reducer;
    this.store = init;
  }
  getState() {
    return this.store;
  }
  dispatch(action) {
    this.store = this.reducer(this.store, action);
  }
}
const store = new Store(reducer, init);
console.log(store.getState());

store.dispatch(inCount);
console.log(store.getState());
