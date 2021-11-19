import React from 'react';
import {Alert} from 'react-native';
import {createSlice} from '@reduxjs/toolkit';
import api from '../api';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const userSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    email: null,
    pin: null,
    sessionToken: null,
    walletAddress: null,
    walletURL: null,
    isVerified: false,

    signUpSuccess: false,
    loginSuccess: false,
    logoutSuccess: false,
    editProfileSuccess: false,
  },
  reducers: {
    saveSignUpSuccess(state) {
      state.signUpSuccess = true;
    },
    resetSignUp(state) {
      state.signUpSuccess = false;
    },
    saveUserInfo(state, action) {
      state.user = action.payload;
    },
    loginSuccess(state) {
      state.loginSuccess = true;
    },
    loginReset(state) {
      state.loginSuccess = false;
    },
    logoutSuccess(state) {
      state.logoutSuccess = true;
      state.user = null;
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
    saveEmail(state, action) {
      // action.payload = email 값
      // console.log(action.payload)
      state.email = action.payload;
      state.isVerified = true;
    },
    saveSessionToken(state, action) {
      state.sessionToken = action.payload;
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
  saveSignUpSuccess,
  resetSignUp,
  saveUserInfo,
  logoutSuccess,
  logoutReset,
  loginSuccess,
  loginReset,
  saveEditProfileSuccess,
  saveEditProfileReset,
  saveWallet,
  saveEmail,
  saveSessionToken,
} = userSlice.actions;

// export const signUp = form => async dispatch => {
//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };
//
//     const {
//       data: {user},
//     } = await api.post(`users/sign-up/`, form, config);
//
//     dispatch(saveSignUpSuccess());
//     dispatch(saveUserInfo(user));
//   } catch (err) {
//     console.log(err.response.data.msg);
//   }
// };
//
// export const logout = () => async dispatch => {
//   try {
//     await api.get('users/logout');
//
//     dispatch(logoutSuccess());
//   } catch (err) {
//     console.log(err);
//   }
// };
//
// export const updateUserInfo = formData => async dispatch => {
//   try {
//     const {data} = await api.patch('me/profile/', formData, config);
//
//     dispatch(saveEditProfileSuccess());
//     dispatch(saveUserInfo(data));
//   } catch (err) {
//     console.log(err);
//   }
// };

export const checkVerifyCode = (Email, Verification) => async dispatch => {
  try {
    const res = await api.post('emailverify', {Email, Verification}, config);
    console.log('res', res);
    if (res?.RESULT && res?.RESULT === 'success') {
      dispatch(saveEmail(Email));
    }
    // dispatch(saveEditProfileSuccess());
    // dispatch(saveUserInfo(data));
  } catch (err) {
    Alert.alert('', '서버와 통신에 실패하였습니다.');
    console.log(err.response);
  }
};

export const pinRegister = (pin, Email) => async dispatch => {
  try {
    const res = await api.post(`pinregister`, {pin, Email}, config);
    if (res?.sessionToken) {
      dispatch(saveSessionToken(res.sessionToken));
      dispatch(saveSignUpSuccess());
    }
  } catch (err) {
    Alert.alert('', '서버와 통신에 실패하였습니다.');
    console.log(err.response);
  }
};

export const pinLogin = (pin, sessionToken) => async dispatch => {
  try {
    const res = await api.post(`pinlogin`, {pin, sessionToken}, config);
    if (res?.RESULT && res?.RESULT === 'success') {
      dispatch(saveEmail(res.EMAIL));
      dispatch(loginSuccess());
    }
  } catch (err) {
    console.log(err.response);
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
    Alert.alert('', '서버와 통신에 실패하였습니다.');
    console.log(err.response);
  }
};
export default userSlice.reducer;
