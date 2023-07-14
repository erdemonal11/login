import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "./getToken";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },

    loginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload.token));
    },

    loginFailure: (state, action) => {
      state.error = action.payload;
    },

    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
});

export const { login, loginSuccess, loginFailure, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectError = (state) => state.user.error;

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post("https://reqres.in/api/login", {
      email,
      password,
    });

    if (response.status === 200) {
      dispatch(loginSuccess({ email, password, token: response.data.token }));
    } else {
      dispatch(loginFailure("Login failed. Not recognized by API!"));
    }
  } catch (error) {
    console.log(error);
    dispatch(loginFailure("Login failed. Not recognized by API!"));
  }
};

export default userSlice.reducer;
