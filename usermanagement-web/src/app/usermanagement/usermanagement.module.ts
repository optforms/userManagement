import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermanagementRoutingModule } from './usermanagement-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';

@NgModule({
  imports: [
    CommonModule,
    UsermanagementRoutingModule
  ],
  declarations: [UserListComponent, UserCreateComponent]
})
export class UsermanagementModule { }
