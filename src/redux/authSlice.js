import React from 'react';
import {createSlice} from '@reduxjs/toolkit';
import api from '../api';
import {Alert} from 'react-native';

const userSlice = createSlice({
  name: 'auth',
  initialState: {
    // user: {},
    user: null,
    signUpSuccess: false,
    signUpFail: false,
    loginSuccess: false,
    loginFail: false,
    isLoggedIn: false,
    logoutSuccess: false,
    editProfileSuccess: false,
    firstConnect: true,
  },
  reducers: {
    saveSignUpSucess(state) {
      state.signUpSuccess = true;
    },
    saveSignUpFail(state, action) {
      state.signUpFail = action.payload;
    },
    resetSignUp(state) {
      state.signUpSuccess = false;
      state.signUpFail = false;
    },
    saveUserInfo(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    loginSuccess(state) {
      state.loginSuccess = true;
    },
    loginFail(state) {
      state.loginFail = true;
    },
    loginReset(state) {
      state.loginSuccess = false;
      state.loginFail = false;
    },
    logoutSuccess(state) {
      state.logoutSuccess = true;
      state.user = {};
      state.isLoggedIn = false;
    },
    logoutReset(state) {
      state.logoutSuccess = false;
    },
    saveEditProfileSuccess(state) {
      state.editProfileSuccess = true;
    },
    saveEditProfileReset(state) {
      state.editProfileSuccess = false;
    },
  },
});

export const {
  saveSignUpSucess,
  saveSignUpFail,
  resetSignUp,
  saveUserInfo,
  logoutSuccess,
  logoutReset,
  loginSuccess,
  loginReset,
  loginFail,
  saveEditProfileSuccess,
  saveEditProfileReset,
} = userSlice.actions;

export const signUp = form => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const {
      data: {user},
    } = await api.post(`users/sign-up/`, form, config);

    dispatch(saveSignUpSucess());
    dispatch(saveUserInfo(user));
  } catch (err) {
    dispatch(saveSignUpFail(err.response.data.msg));
    console.log(err.response.data.msg);
  }
};

export const login = (id, password) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const {data} = await api.post(`users/login/`, {id, password}, config);

    dispatch(saveUserInfo(data));
    dispatch(loginSuccess());
  } catch (err) {
    dispatch(loginFail());
    console.log(err);
  }
};

export const logout = () => async dispatch => {
  try {
    await api.get('users/logout');

    dispatch(logoutSuccess());
  } catch (err) {
    console.log(err);
  }
};

export const updateUserInfo = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const {data} = await api.patch('me/profile/', formData, config);

    dispatch(saveEditProfileSuccess());
    dispatch(saveUserInfo(data));
  } catch (err) {
    console.log(err);
  }
};

export default userSlice.reducer;
