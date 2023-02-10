import { Action } from "@ngrx/store";
import { IUser } from "src/app/user";

export enum UserActionTypes{
    LOAD_USER = "[IUser] Load Users",
    LOAD_USER_SUCCESS = "[IUser] Load Users Success",
    LOAD_USER_FAIL = "[IUser] Load Users Fail"
}

export class LoadUsers implements Action{
    readonly type = UserActionTypes.LOAD_USER
}

export class LoadUsersSuccess implements Action{
    readonly type = UserActionTypes.LOAD_USER_SUCCESS

    constructor(public payload: IUser[]){}
}

export class LoadUsersFail implements Action{
    readonly type = UserActionTypes.LOAD_USER_FAIL

    constructor(public payload: string){}
}

export type Actions = LoadUsers | LoadUsersSuccess | LoadUsersFail;