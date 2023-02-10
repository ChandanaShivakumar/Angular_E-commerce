import * as userActions from "src/app/user/user.actions";
import { IUser } from "../user";
import * as fromRoot from "src/app/user/state/app-state"

export interface UserState {
    users: IUser[],
    loading: boolean,
    loaded: boolean,
    error: string
}

export interface AppState extends fromRoot.AppState {
    users: UserState
}

export const initialState: UserState = {
    users: [],
    loading: false,
    loaded: false,
    error: ""
}

export function userReducer(
    state = initialState, 
    action: userActions.Actions
    ): UserState {
        switch(action.type){
            case userActions.UserActionTypes.LOAD_USER :{
                return{
                    ...state,
                    loading: true
                }
            }

            case userActions.UserActionTypes.LOAD_USER_SUCCESS :{
                return{
                    ...state,
                    loading: false,
                    loaded: true,
                    users: action.payload
                }
            }

            case userActions.UserActionTypes.LOAD_USER_FAIL :{
                return {
                   ...state,
                    users: [],
                    loading: false,
                    loaded: false,
                    error: action.payload
                }
            }

            default :{
                return state;
            }
        }
    }