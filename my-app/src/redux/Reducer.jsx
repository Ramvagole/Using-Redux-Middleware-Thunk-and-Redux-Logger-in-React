let a={}

export function reducer(state=a,action){
    switch(action.type){
        case "Submit":
            return {...state,[action.id]:action.payload}
        default:
            return state
    }
}