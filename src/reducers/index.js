import { combineReducers } from 'redux';
import generalRootReducer from './general-root-reducer';
import exampleReducer, { exampleComplexReducer } from './example-reducer';


export function mergeReducers(reducerSets = []) {
  const reducers = [];
  let combined = {};
  for (const rs of reducerSets) {
    combined = Object.assign({}, combined, rs.combined);
    for (const rr of rs.root || []) {
      reducers.push(rr);
    }
  }
  // combined is just another root reducer
  reducers.push(combineReducers(combined));
  return (s, a) => {
    let state = s;
    for (const r of reducers) {
      state = r(state, a);
    }
    return Object.assign({}, state);
  };
}

export function mergeReducersInitState(reducerSets = []) {
  let init = {};
  for (const rs of reducerSets) {
    init = Object.assign({}, init, rs.init);
  }
}


export const appReducersInitState = {
  example: {},
  exampleComplex: {}
};

export default {
  combined: {
    example: exampleReducer,
    exampleComplex: exampleComplexReducer
  },
  root: [generalRootReducer]
};
