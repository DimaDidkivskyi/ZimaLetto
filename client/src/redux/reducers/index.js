import { combineReducers } from "redux";

import filters from "./filters";
import clothes from "./clothes";
import cart from "./cart";

const rootReducer = combineReducers({
    filters,
    clothes,
    cart,
});

export default rootReducer;
