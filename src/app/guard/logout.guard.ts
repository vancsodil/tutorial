import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class LogoutGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {

    }

    canActivate() {

        if (this.userService.isLoggedIn) {
            this.router.navigateByUrl("/");
        }

        return true;
    }

} 