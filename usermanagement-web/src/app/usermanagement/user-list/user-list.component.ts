import { Component, OnInit } from '@angular/core';
import { UsermanagementService } from '../usermanagement.service';
import {User} from '../User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UsermanagementService]
})
export class UserListComponent implements OnInit {

 private users: User[];

  constructor(private usermanagementService: UsermanagementService,private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.usermanagementService.findAll().subscribe(
      users => {
        this.users = users;
      },
      err =>{
        console.log(err);
      }

    )
  }

  redirectNewUserPage() {
    this.router.navigate(['/usermanagement/create']);
  }
 
  editUserPage(user: User) {
    if (user) {
      this.router.navigate(['/usermanagement/edit', user.id]);
    }
  }
 
  deleteUser(user: User) {
    if (user) {
      this.usermanagementService.deleteUserById(user.id).subscribe(
        res => {
          this.getAllUsers();
          this.router.navigate(['/usermanagement']);
          console.log('done');
        }
      );
    }
  }

}
