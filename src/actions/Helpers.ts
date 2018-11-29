import { Action } from "redux";

export enum ActionType {
    OPEN_DRAWER,
    CLOSE_DRAWER,
    OPEN_ALERT,
    CLOSE_ALERT,
    OPEN_SPINNER,
    CLOSE_SPINNER,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    SET_USER_CLAIMS_REQUEST,
    SET_USER_CLAIMS_SUCCESS,
    SET_USER_CLAIMS_FAIL,
    CURRENT_USER
}

export interface IAppAction extends Action<ActionType> {
    payload?: any;
}
