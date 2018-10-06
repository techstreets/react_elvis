
export const exampleDataReducer = (state = {}, action) => {
  console.log('example data reducer action', action);
  return state;
};

export const exampleComplexDataReducer = (state = {}, action) => {
  console.log('example complex data reducer action', action);
  return state;
};

export const usersReducer = (state = [], action) => {
  if (action.type === 'USER_FETCH_SUCCEEDED') {
    return action.users || [];
  }
  return state;
};

export default exampleDataReducer;
