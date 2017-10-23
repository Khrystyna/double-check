import * as types from '../actions/action-types';

const initialState = {
  isFetching: false,
  error: null,
  user: null
};


const user = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_AUTH_LOADING:
      return {...state, isFetching: true, error: null,};

    case types.USER_AUTH_FAILED:
      return {...state, isFetching: false, error: action.error};

    case types.USER_SUCCESSFUL_SIGN_IN:
      return {...state, isFetching: false, error: null, user: action.user};

    case types.USER_SUCCESSFUL_SIGN_OUT:
      return {...state, isFetching: false, error: null, user: null};

    default:
      return state
  }
};

export default user;