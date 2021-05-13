import { combineReducers } from "redux";

import filtersReducer from "./filters";
import clothesReducer from "./clothes";

const rootReducer = combineReducers({
    filters: filtersReducer,
    clothes: clothesReducer,
});

export default rootReducer;
