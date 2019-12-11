import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";

const ErrorsReducer =  combineReducers({
  session: sessionErrorsReducer
});

export default ErrorsReducer;