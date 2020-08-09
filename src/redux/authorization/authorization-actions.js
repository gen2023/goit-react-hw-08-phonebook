import { createAction } from "@reduxjs/toolkit";

export const registerRequest = createAction("authorization/registerRequest");
export const registerSuccess = createAction("authorization/registerSuccess");
export const registerError = createAction("authorization/registerError");

export const loginRequest = createAction("authorization/loginRequest");
export const loginSuccess = createAction("authorization/loginSuccess");
export const loginError = createAction("authorization/loginError");

export const logoutRequest = createAction("authorization/logoutRequest");
export const logoutSuccess = createAction("authorization/logoutSuccess");
export const logoutError = createAction("authorization/logoutError");
//получить текущего
export const getCurrentUserRequest = createAction(
  "authorization/getCurrentUserRequest"
);
export const getCurrentUserSuccess = createAction(
  "authorization/getCurrentUserSuccess"
);
export const getCurrentUserError = createAction(
  "authorization/getCurrentUserError"
);

