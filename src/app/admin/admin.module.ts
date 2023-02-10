import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserlistComponent } from './userlist/userlist.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule, Actions } from '@ngrx/effects'

import { userReducer } from 'src/app/user/user.reducer'
import { userEffect } from '../user/user.effects';

@NgModule({
  declarations: [
    UserlistComponent,
    AdmindashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    StoreModule.forFeature("users", userReducer),
    EffectsModule.forFeature([userEffect])
  ]
})
export class AdminModule {}
