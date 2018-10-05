import generalDataRootReducer from './general-data-root-reducer';
import exampleDataReducer, {
  exampleComplexDataReducer
} from './example-data-reducer';


export const appDataReducersInitState = {
  exampleData: {},
  exampleComplexData: {}
};

export default {
  combined: {
    exampleData: exampleDataReducer,
    exampleComplexData: exampleComplexDataReducer
  },
  root: [generalDataRootReducer]
};
