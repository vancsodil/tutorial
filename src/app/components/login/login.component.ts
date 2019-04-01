import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { studystreamanimations } from 'src/app/animations/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PENDING } from '@angular/forms/src/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [studystreamanimations.slidein]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup=null;
  loginFormServerError: string = null;

  constructor(private userService: UserService, private router: Router) { 
    this.loginForm=new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }

  ngOnInit() {
  }

  login() {

    this.loginFormServerError = null;

    if(this.loginForm.valid){
      let email: string=this.loginForm.get("email").value;
      let password: string=this.loginForm.get("password").value;
      this.userService.login();
      this.router.navigateByUrl("/");
    }
    else{
      console.log(this.loginForm.get("email").errors);
      this.loginFormServerError = "asdasd";
    }

  }

}
