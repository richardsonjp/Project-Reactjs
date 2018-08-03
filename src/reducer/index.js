import { combineReducers } from "../../node_modules/redux";
import loginnames from "./loginname";
import loginstatus from "./loginstatus";

// ini isi nya state semua

export default combineReducers({
    displaylogin: loginnames,
    statuslogin: loginstatus
})