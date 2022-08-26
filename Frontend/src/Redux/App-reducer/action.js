import axios from "axios"
import * as types from "./actionTypes"

export const GetData = (params)=>(dispatch)=>{
    dispatch({type:types.GET_DATA_REQUEST})
    return axios.get("https://expedia-apiproject.herokuapp.com/stays",params).then((res)=>{
        console.log(res);
        dispatch({type:types.GET_DATA_SUCCESS ,payload:res.data.data.stays})
    }).catch((err)=>{
        dispatch({type:types.GET_DATA_FALIURE})
    })
};