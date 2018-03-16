import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserCreateComponent} from './user-create/user-create.component';


const routes: Routes = [
  {path: 'usermanagement', component: UserListComponent},
  {path: 'usermanagement/create', component: UserCreateComponent},
  {path: 'usermanagement/edit/:id', component: UserCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermanagementRoutingModule { }
