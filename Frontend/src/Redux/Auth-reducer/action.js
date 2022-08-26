import axios from 'axios'
import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from './actionTypes'


export const Signigfun = (data) => dispatch => {
  dispatch({ type: SIGNIN_REQUEST })

  axios.post("https://reqres.in/api/login",data)
    .then((response) => {
      dispatch({ type: SIGNIN_SUCCESS, payload: response.data.token })
      console.log(response.data.token)
    }).catch((e) => {
      dispatch({ type: SIGNIN_FAILURE })
    })
}
