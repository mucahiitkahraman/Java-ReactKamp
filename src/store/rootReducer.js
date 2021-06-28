//tüm statelerimizi topladığımız yerdir.

import { combineReducers } from "redux";
import cartRedcucer from "./reducers/cartReducer";

const rootReducer = combineReducers({

    cart : cartRedcucer
})

export default rootReducer;