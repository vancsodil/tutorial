import { Injectable } from "@angular/core";
import { ApiService, PostLoginResponse } from './api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UserService {

    isLoggedIn: boolean = false;

    constructor(private apiService: ApiService) {

    }

    login() {

        this.apiService.postLogin("asdads", "afaf").subscribe({
            next: (data: PostLoginResponse) => {
                if (data.result == 0) {
                    console.log(data.userData);
                } else {
                    console.log(data.errorMessage);
                }
            },
            error: (error: HttpErrorResponse) => {
                console.log(error.message);
            }
        })

        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }

}