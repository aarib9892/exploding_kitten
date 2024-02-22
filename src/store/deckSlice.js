import { createSlice, configureStore } from "@reduxjs/toolkit";

const cards = ["😼", "🙅‍♂️", "🔀", "💣"];

const shuffle = () => {
  const deck = [];
  for (let i = 0; i < 5; i++) {
    let card = cards[Math.floor(Math.random() * cards.length)];
    deck.push(card);
  }
  return deck;
};

export const initialState = {
  deck: shuffle(),
  diffuseCount: 0,
  start: false,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    start(state) {  
      state.start = true
    },
  
    shuffle(state, action) {
      state.deck = shuffle();
    },
    explode(state, action) {
      if (state.diffuseCount > 0) {
        state.diffuseCount--;
        state.deck.splice(action.payload, 1);
      } else {
        alert("💣 BOOM!!!! , YOU LOST!!");
        state.start = false
        state.diffuseCount = 0;
        state.deck = shuffle();
      }
    },
    cat(state, action) {
      state.deck.splice(action.payload, 1);
    },
    diffuse(state, action) {
      state.diffuseCount++;
      state.deck.splice(action.payload, 1);
    },
    checkResult(state, action) {
      if (state.deck.length === 0) {
        alert("YOU WON!!,Champ");
        state.start = false
        state.diffuseCount = 0;
        state.deck = shuffle();
      }
    },
  },
});
