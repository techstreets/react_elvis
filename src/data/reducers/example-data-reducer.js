
export const exampleDataReducer = (state = {}, action) => {
  console.log('example data reducer action', action);
  return state;
};

export const exampleComplexDataReducer = (state = {}, action) => {
  console.log('example complex data reducer action', action);
  return state;
};

export default exampleDataReducer;
