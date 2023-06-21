const RTK = window.RTK;

const counterSlice = RTK.createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment: state => {
      state.counter++;
    },
    decrement: state => {
      state.counter--;
    }
  }
});

const store = RTK.configureStore({
  reducer: counterSlice.reducer
});

function render() {
  const state = store.getState();
  const counterEl = document.getElementById('counter');
  counterEl.innerText = state.counter;
}

render();
store.subscribe(render);

const incrementBtn = document.getElementById('increment');
incrementBtn.addEventListener('click', () => {
  store.dispatch(counterSlice.actions.increment());
});

const decrementBtn = document.getElementById('decrement');
decrementBtn.addEventListener('click', () => {
  store.dispatch(counterSlice.actions.decrement());
});
