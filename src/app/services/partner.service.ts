import { Injectable } from "@angular/core";
import { HttpErrorResponse } from '@angular/common/http';
import { PartnersLoginResponse, PartnersLoginCompanyData, PartnersLoginPartnerData, ModuleData } from '../types/types';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class PartnerService {

    company: PartnersLoginCompanyData = null;
    partner: PartnersLoginPartnerData = null;
    isLoggedIn: boolean = false;

    constructor() {

    }

    login(partnersLoginResponse: PartnersLoginResponse) {
        this.isLoggedIn = true;
        this.company = partnersLoginResponse.company;
        this.partner = partnersLoginResponse.partner;
    }

    logout() {
        this.isLoggedIn = false;
        this.company = null;
        this.partner = null;
    }

    getPartnerAccessToken(): string {
        return this.partner == null ? null : this.partner.access_token;
    }

    getModuleTags(): string[] {
        return this.company == null ? null : this.company.modulesTags;
    }

    getModules(): ModuleData[] {
        return this.company.modules;
    }

    getModuleNameById(moduleId: number): string {
        for (let i  = 0; i < this.company.modules.length; i++) {
            if (this.company.modules[i].id == moduleId) {
                return this.company.modules[i].name;
            }
        }
        return null;
    }

    getCompanyAccessToken(): string {
        return this.company.companyAccessToken;
    }

}