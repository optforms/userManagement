import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsermanagementService} from "../usermanagement.service";
import {User} from '../User';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  providers: [UsermanagementService]
})
export class UserCreateComponent implements OnInit, OnDestroy {

  id: number;
  user: User;

  userForm: FormGroup;

  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private usermanagementService: UsermanagementService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
      this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required,
      Validators.pattern("[^ @]*[^ @]*")
      ])
    });


    if (this.id) { //edit form
      this.usermanagementService.findById(this.id).subscribe(
        user => {
            this.id = user.id;
            this.userForm.patchValue({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          });
         },error => {
          console.log(error);
         }
      );
 
    }
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

  onSubmit(){


    if(this.userForm.valid){
      if(this.id){
        let user: User = new User(this.id,
          this.userForm.controls['firstName'].value,
          this.userForm.controls['lastName'].value,
        this.userForm.controls['email'].value);
        this.usermanagementService.saveUser(user).subscribe();
      }else{
    let user: User = new User(null,
    this.userForm.controls['firstName'].value,
    this.userForm.controls['lastName'].value,
  this.userForm.controls['email'].value);
  this.usermanagementService.saveUser(user).subscribe();
    }
    }
    this.userForm.reset();
    this.router.navigate(['/usermanagement']);
  }

  redirectUserPage() {
    this.router.navigate(['/usermanagement']);
 
  }

}
