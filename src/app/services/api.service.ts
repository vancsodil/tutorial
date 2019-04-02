import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PartnersLoginResponse, GetStudentsResponse, GetStudentsRequest, AddStudentRequest, AddStudentResponse, GetGroupsResponse } from '../types/types';

@Injectable()
export class ApiService {

    systemApiBaseUrl: string = "http://api.studystream.hu/system/";
    contentApiBaseUrl: string = "http://api.studystream.hu/content/";
    actualDomain: string = "alvallakozas";

    constructor(private http: HttpClient) {

    }

    partnersLogin(email: string, password: string): Observable<PartnersLoginResponse> {

        let data: FormData = new FormData();
        data.append("email", email);
        data.append("password", password);
        data.append("domain", this.actualDomain);

        return this.http.post<PartnersLoginResponse>(this.systemApiBaseUrl + "partners/login", data);

    }

    getStudents(getStudentsRequest: GetStudentsRequest): Observable<GetStudentsResponse> {
        let data: FormData = new FormData();
        data.append("start", getStudentsRequest.start.toString());
        data.append("count", getStudentsRequest.count.toString());
        data.append("order_column", getStudentsRequest.order_column);
        data.append("order_way", getStudentsRequest.order_way);
        data.append("search", getStudentsRequest.search);
        data.append("search_columns", getStudentsRequest.search_columns);
        return this.http.post<GetStudentsResponse>(this.contentApiBaseUrl + "students", data);
    }

    addStudent(addStudentRequest: AddStudentRequest): Observable<AddStudentResponse>{

        let data: FormData = new FormData();
        data.append("name", addStudentRequest.name);
        data.append("username", addStudentRequest.username);
        data.append("group", addStudentRequest.group.toString());

        return this.http.post<AddStudentResponse>(this.contentApiBaseUrl + "students/add", data);

    }

    getGroups(): Observable<GetGroupsResponse>{
        let data: FormData = new FormData();
        return this.http.post<GetGroupsResponse>(this.contentApiBaseUrl + "groups/", data);
    }

}