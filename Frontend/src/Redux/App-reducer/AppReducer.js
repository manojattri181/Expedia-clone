import * as types from "./actionTypes";

const Data = {
    data: [],
    isLoading:false,
    isError:false
}

export const AppReducer = (state = Data,action) => {
    const {type,payload} = action;
    switch(type){
         case types.GET_DATA_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false
            }
            case types.GET_DATA_SUCCESS:
                return{
                   ...state,
                   data:payload,
                   isLoading:false,
                   isError:false    
                }
              case types.GET_DATA_FALIURE:
                return{
                    ...state,
                    isError:true,
                    isLoading:false
                }  
                // filter data request 
                case types.FILTER_DATA_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false
            }
            case types.FILTER_DATA_SUCCESS:
                return{
                   ...state,
                   data:payload,
                   isLoading:false,
                   isError:false    
                }
              case types.FILTER_DATA_FALIURE:
                return{
                    ...state,
                    isError:true,
                    isLoading:false
                }
              default:
                 return state
    } 
}
