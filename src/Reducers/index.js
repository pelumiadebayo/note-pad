import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import postReducer from "./postReducers";

const rootReducer = combineReducers({
    form: formReducer,
    posts: postReducer
});

export default rootReducer;