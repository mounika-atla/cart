import { combineReducers,createStore } from "redux";
import cartreducer from "../reducers/cartreducer";
var store=createStore(combineReducers({cart:cartreducer}));
export default store