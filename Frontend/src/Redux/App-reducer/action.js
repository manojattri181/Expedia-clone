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

export const GetSingleProduct = (id)=>(dispatch)=>{
    dispatch({type:types.GET_SINGLE_PRODUCT_REQUEST})
    return axios.get(`https://expedia-apiproject.herokuapp.com/stays/${id}`,).then((res)=>{
        // console.log(res);
        dispatch({type:types.GET_SINGLE_PRODUCT_SUCCESS ,payload:res.data})
    }).catch((err)=>{
        dispatch({type:types.GET_SINGLE_PRODUCT_FALIURE})
    })
};