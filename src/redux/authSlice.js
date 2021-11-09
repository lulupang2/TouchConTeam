import React from 'react';
import {createSlice} from '@reduxjs/toolkit';
import api from '../api';
import {Alert} from 'react-native';

const userSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    walletAddress: null,
    walletURL: null,
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
    saveWallet(state, action) {
      console.log('action', action.payload);
      const {url, address} = action.payload;
      state.walletURL = url;
      state.walletAddress = address;
      // state.walletAddress = action.payload;
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
  saveWallet,
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

export const walletGenerator = userId => async dispatch => {
  try {
    // const {data} = await api.post('me/profile/', formData);
    // dispatch(saveEditProfileSuccess());
    // dispatch(saveUserInfo(data));

    dispatch(
      saveWallet(
        'https://www.naver.com',
        '0x3215463e2184685415216ee4e4e56545656421ds121',
      ),
    );
  } catch (err) {
    console.log(err);
  }
};
export default userSlice.reducer;
