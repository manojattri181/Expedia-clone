const Data = {
    data: ''
}

export const AppReducer = (state = Data,action) => {
    const {type,payload} = action
    switch(type){
        default: return state
    } 
}
