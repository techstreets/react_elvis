import generalDataRootReducer from './general-data-root-reducer';
import exampleDataReducer, {
  exampleComplexDataReducer, usersReducer
} from './example-data-reducer';


export const appDataReducersInitState = {
  exampleData: {},
  exampleComplexData: {},
  users: [],
};

export default {
  combined: {
    exampleData: exampleDataReducer,
    exampleComplexData: exampleComplexDataReducer,
    users: usersReducer,
  },
  root: [generalDataRootReducer]
};
