import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "./actionTypes";

const signInData = {
  token: "",
  isAuth: false,
  isLooding: false,
  isError: false,
};

export const AuthReducer = (state = signInData, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        isLooding: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLooding: false,
        isAuth: true,
        token: payload,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        isLooding: false,
        isError: true,
      };
    default:
      return state;
  }
};
