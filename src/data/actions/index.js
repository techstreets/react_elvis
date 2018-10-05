import { createActions, combineActions } from 'redux-actions';

const { increment, decrement } = createActions({
  INCREMENT: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount: -amount })
});


console.log('====', combineActions(increment, decrement).toString());

export { increment, decrement };
