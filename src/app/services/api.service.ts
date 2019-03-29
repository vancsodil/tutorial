import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserData {
    username: string;
    id: number;
    avatar: string;
    score?: number
}

export interface PostLoginResponse {
    result: number;
    errorMessage?: string;
    userData?: UserData;
}

let lajos: UserData | PostLoginResponse = {
    id: 12,
    avatar: "asdasd",
    username: "asdasd"
};

@Injectable()
export class ApiService {

    baseUrl: string = "http://api.com/";

    constructor(private http: HttpClient) {

    }

    postLogin(username: string, password: string): Observable<PostLoginResponse> {

        let data: FormData = new FormData();
        data.append("username", username);
        data.append("password", password);

        return this.http.post<PostLoginResponse>(this.baseUrl + "user/login", data);

    }

}