import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Model/customer.model';
import { User } from 'src/app/Model/user.model';
import { AdminService } from 'src/app/Service/admin.service';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signUpForm: FormGroup;
customer: Customer;
user: User;
msg: string;
authService: any;
admin: any;


  constructor(private adminService: AdminService, private customerservice:CustomerService, private router:Router){

  }

  ngOnInit(): void {
    //this.adminService
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required ]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repassword: new FormControl('', [Validators.required])
    });


  }
  onSignUp(){
    this.customer = {

      name: this.signUpForm.value.name,
      contact:this.signUpForm.value.contact,

      user: {
        username: this.signUpForm.value.username,
        password: this.signUpForm.value.password
      }
    };
    /* password is == repassword */
    let repassword = this.signUpForm.value.repassword;
    if(! (this.signUpForm.value.password == repassword) ){
      this.msg = 'Passwords do not match';
    }
    else{
      this.customerservice.postCustomer(this.customer).subscribe({
        next: (data)=>{
          //naviagate the User to Login
          this.authService.msg$.next('SignUp Success!!')
          this.router.navigateByUrl('/login');
        },
        error: (err)=>{
          //display error message
        }
      });
    }
  }

}
