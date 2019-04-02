import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { PartnerService } from '../services/partner.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private partnerService: PartnerService, private router: Router) {

    }

    canActivate() {

        if (this.partnerService.isLoggedIn === false) {
            this.router.navigateByUrl("/login");
        }

        return true;
    }

} 