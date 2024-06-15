import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import {thunk} from "redux-thunk"
import { correct } from "./Correct"
import { reducer } from "./Reducer"
let a=combineReducers({
    b:reducer,
    valueStore:correct
})
export let store=legacy_createStore(a,applyMiddleware(thunk))