import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNOUT } from "./actionTypes";

const signInData = {
  token: "",
  isAuth: true,
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
    case SIGNOUT: 
      return {
        ...state,
        isAuth: false
      }
    default:
      return state;
  }
};
