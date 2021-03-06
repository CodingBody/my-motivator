import { combineReducers } from "redux";
import todoReducer from "./todo/todo.reducer";
import authReducer from "./auth/auth.reducer";
import asyncReducer from "./async/async.reducer";
import warningReducer from "./warning/warning.reducer";

const rootReducer = combineReducers({
  todoList: todoReducer,
  auth: authReducer,
  async: asyncReducer,
  warning: warningReducer
});

export default rootReducer;
