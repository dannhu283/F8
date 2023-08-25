// import { createStore } from "https://cdn.skypack.dev/redux";

///////////////////////My Redux///////////////

function createStore(reducer) {
  let state = reducer(undefined, {});

  const subscribers = [];

  return {
    getState() {
      return state;
    },

    dispatch(action) {
      state = reducer(state, action);
      subscribers.forEach((subscriber) => subscriber());
    },

    subscribe(subscriber) {
      subscribers.push(subscriber);
    },
  };
}

//reducer
function bankReducer(state = 0, action) {
  switch (action.type) {
    case "deposite": {
      return state + action.payload;
    }
    case "withdraw": {
      return state - action.payload;
    }
    default:
      break;
  }
}

//store
const store = (window.store = createStore(bankReducer));

//actions
function actiondeposite(payload) {
  return {
    type: "deposite",
    payload,
  };
}

function actionwithdraw(payload) {
  return {
    type: "withdraw",
    payload,
  };
}

//dom events
const deposite = document.querySelector("#deposite");
const withdraw = document.querySelector("#withdraw");

//event handler
deposite.onclick = function () {
  store.dispatch(actiondeposite(10));
};

withdraw.onclick = function () {
  store.dispatch(actionwithdraw(10));
};

//listener

store.subscribe(() => {
  reder();
});

//render
function reder() {
  const output = document.getElementById("output");
  output.innerText = store.getState();
}
