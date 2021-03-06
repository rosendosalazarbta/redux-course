import transactionsActions from '../actions/transactions';

const initialState = {};

const transactionsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case transactionsActions.types.TRANSACTION_ADD: {
      const { transaction } = payload;

      const newState = { ...state };
      newState[transaction.id] = { ...transaction };

      return newState;
    }
    case transactionsActions.types.TRANSACTION_REMOVE: {
      const { transaction } = payload;

      const newState = { ...state };
      delete newState[transaction.id];

      return newState;
    }
    default:
      return state;
  }
};

export default transactionsReducer;
