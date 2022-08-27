import axios from 'axios'
import { CREATE_FAILURE, CREATE_REQUEST, CREATE_SUCCESS, SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from './actionTypes'


export const Signigfun = (data) => dispatch => {
  dispatch({ type: SIGNIN_REQUEST })

  axios.post("https://expedia-apiproject.herokuapp.com/auth/login",data)
    .then((response) => {
   //   dispatch({ type: SIGNIN_SUCCESS, payload: response.data.token })
      dispatch({ type: SIGNIN_SUCCESS, payload: response.data})
      // console.log(response)
    }).catch((e) => {
      dispatch({ type: SIGNIN_FAILURE })
      // console.log(e)
    })
}


export const Createaccount = (data) => dispatch => {
  dispatch({ type: CREATE_REQUEST })

  axios.post("https://expedia-apiproject.herokuapp.com/auth/register",data)
    .then((response) => {
      dispatch({ type: CREATE_SUCCESS, payload: response.data.data })
      // console.log(response)
    }).catch((e) => {
      dispatch({ type: CREATE_FAILURE, payload: e.response.data.errors})
      // console.log(e.response.data.errors)
    })
}