import { fetchUsers } from '../../data/routines';

export const exampleDataReducer = (state = {}, action) => {
  console.log('example data reducer action', action);
  return state;
};

export const exampleComplexDataReducer = (state = {}, action) => {
  console.log('example complex data reducer action', action);
  return state;
};

export const usersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case fetchUsers.SUCCESS:
      return payload.users || [];
    default:
      return state;
  }
};

export default exampleDataReducer;
