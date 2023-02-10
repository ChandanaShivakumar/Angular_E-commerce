import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { UserService } from "src/app/user.service";
import * as userActions from "src/app/user/user.actions"
import { IUser } from "../user";

@Injectable()
export class userEffect {
    constructor(private actions$: Actions,
        private _userservice: UserService) {}

    @Effect()
    loadUsers$: Observable<Action> = this.actions$.pipe(
        ofType<userActions.LoadUsers> (
            userActions.UserActionTypes.LOAD_USER
        ),
        mergeMap((actions: userActions.LoadUsers) =>
            this._userservice.getUserList().pipe(
                map((users: IUser[]) =>
                    new userActions.LoadUsersSuccess(users)
                ),
                catchError(err => of(new userActions.LoadUsersFail(err)))
            )
        )
    );
}