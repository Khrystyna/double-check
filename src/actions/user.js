import * as types from '../actions/action-types';
import { push } from 'react-router-redux';

import { auth, googleProvider, facebookProvider } from '../firebase.js';

export function userNameUpdate(name) {
  return { type: types.USER_NAME_UPDATE, name }
}

export function userAuthLoading() {
  return { type: types.USER_AUTH_LOADING }
}

export function userSignInSuccessful(user) {
  return { type: types.USER_SUCCESSFUL_SIGN_IN, user: user }
}

export function userSignOutSuccessful() {
  return { type: types.USER_SUCCESSFUL_SIGN_OUT }
}

export function userAuthFailed(e) {
  return { type: types.USER_AUTH_FAILED, error: e }
}


export function userAuthStatusCheck() {
  return (dispatch) => {
    dispatch(userAuthLoading());

    auth.onAuthStateChanged((user) => {
        if (user) {
          dispatch(userSignInSuccessful(user));
        }
        else {
          dispatch(userSignOutSuccessful());
        }
      }
    );
  };
}


export function userSignIn(provider) {
  return (dispatch) => {
    dispatch(userAuthLoading());

    auth.signInWithPopup(provider === 'facebook' ? facebookProvider : googleProvider)
      .then((response) => {
        if (!response.user) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.user)
      .then((user) => { dispatch(userSignInSuccessful(user)); /*dispatch(push("/"));*/ })
      .catch((e) => dispatch(userAuthFailed(e)));
  };
}

// TODO:: why push doesn't work?
export function userSignOut() {
  return (dispatch) => {
    dispatch(userAuthLoading());

    auth.signOut()
      .then(() => { dispatch(userSignOutSuccessful()); /*dispatch(push("/"));*/ })
      .catch((e) => dispatch(userAuthFailed(e)));
  };
}