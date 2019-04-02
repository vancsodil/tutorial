import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AddStudentRequest, AddStudentResponse, GroupData, GetGroupsResponse } from 'src/app/types/types';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-studentadd',
  templateUrl: './studentadd.component.html',
  styleUrls: ['./studentadd.component.scss']
})
export class StudentaddComponent implements OnInit {

  addStudentForm: FormGroup = null;
  groups: GroupData[] = [];

  constructor(private apiService: ApiService) { 
    this.addStudentForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      username: new FormControl('',[Validators.required]),
      group: new FormControl('0',[Validators.required])
    });
    apiService.getGroups().subscribe({
      next: (getGroupsResponse: GetGroupsResponse)=>{
        this.groups = getGroupsResponse.groups;
      },
      error: (httpErrorResponse: HttpErrorResponse)=>{
        console.log(httpErrorResponse.message);
      }
    })
  }

  ngOnInit() {
  }

  addStudent(){
    if(!this.addStudentForm.valid) return;

    const addStudentRequest: AddStudentRequest = {
      name: this.addStudentForm.get("name").value,
      username: this.addStudentForm.get("username").value,
      group: this.addStudentForm.get("group").value
    };

    this.apiService.addStudent(addStudentRequest).subscribe({
      next: (addStudentResponse: AddStudentResponse) => {

      },
      error: (httpErrorResponse: HttpErrorResponse) => {
        console.log(httpErrorResponse.message);
      }
    })

  }

}
