import { combineReducers } from "redux";
import { notificationReducer } from "./notification/reducer";

export const rootReducer = combineReducers({
    notification:notificationReducer
});