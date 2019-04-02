import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { studystreamanimations } from 'src/app/animations/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { PartnersLoginResponse } from 'src/app/types/types';
import { HttpErrorResponse } from '@angular/common/http';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [studystreamanimations.slidein]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup=null;
  loginFormServerError: string = null;

  constructor(private apiService: ApiService, private router: Router, private partnerService: PartnerService) { 
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
      const email: string = this.loginForm.get("email").value;
      const password: string = this.loginForm.get("password").value;
      this.apiService.partnersLogin(email, password).subscribe({
        next: (partnersLoginResponse: PartnersLoginResponse) => {
          console.log("LOGIN SUCCESS: ", partnersLoginResponse);
          this.partnerService.login(partnersLoginResponse);
          this.router.navigateByUrl("/");
        },
        error: (httpErrorResponse: HttpErrorResponse) => {
          console.log(httpErrorResponse.message);
        }
      });
    } else {
      console.log(this.loginForm.get("email").errors);
      this.loginFormServerError = "asdasd";
    }

  }

}
