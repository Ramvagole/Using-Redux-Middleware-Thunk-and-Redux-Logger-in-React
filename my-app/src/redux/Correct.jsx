let b={data:[]}

export function correct(state=b,action){
    switch(action.type){
        case "All":
            return {...state,data:action.payload}
        default:
            return b
    }
}