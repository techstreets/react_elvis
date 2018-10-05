
export const exampleReducer = (state = {}, action) => {
  console.log('example reducer action', action);
  return state;
};

export const exampleComplexReducer = (state = {}, action) => {
  console.log('example complex reducer action', action);
  return state;
};

export default exampleReducer;
