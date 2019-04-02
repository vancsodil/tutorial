import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { GetStudentsResponse, StudentData, GetStudentsRequest, ColumnStructureData } from 'src/app/types/types';
import { ModalService } from 'src/app/services/modal.service';
import { StudentaddComponent } from './studentadd/studentadd.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: StudentData[] = [];
  pageNumbers: number[] = [];
  studentColumns: ColumnStructureData[] = [];
  getStudentsRequest: GetStudentsRequest = null;
  actualOrderColumn: string = null;
  actualOrderWay: "asc"|"desc" = null;

  constructor(private apiService: ApiService, private modalService: ModalService) {

    this.studentColumns = [{
      name: "ID",
      columnName: "id",
      searchable: false,
      orderable: true
    }, {
      name: "Name",
      columnName: "name",
      searchable: true,
      orderable: true
    }, {
      name: "User Name",
      columnName: "username",
      searchable: false,
      orderable: true
    },{
      name: "Group name",
      columnName: "groupName",
      searchable: false,
      orderable: true
    },{
      name: "Shift name",
      columnName: "shiftName",
      searchable: false,
      orderable: true
    },{
      name: "Unit name",
      columnName: "unitName",
      searchable: false,
      orderable: true
    }];

    this.getStudentsRequest = {
      count: 10,
      start: 0,
      order_column: this.studentColumns[0].columnName,
      order_way: "asc",
      search: "",
      search_columns: this.getSearchableColumns()
    };
  
    this.actualOrderColumn = this.studentColumns[0].columnName;
    this.actualOrderWay = this.getStudentsRequest.order_way;

    this.getStudents();

  }

  ngOnInit() {
  }

  changePage(pageNumber: number, getStudents: boolean = true): void {
    this.getStudentsRequest.start = pageNumber * 10;
    if (getStudents) this.getStudents();
  }

  order(columnName: string): void {
    if (columnName == null) return;
    if (columnName == this.actualOrderColumn) {
      this.actualOrderWay = this.actualOrderWay == "asc" ? "desc" : "asc";
    } else {
      this.actualOrderColumn = columnName;
      this.actualOrderWay = "asc";
    }
    this.getStudentsRequest.order_column = this.actualOrderColumn;
    this.getStudentsRequest.order_way = this.actualOrderWay;
    this.getStudents();
  }

  getStudents() {
    this.apiService.getStudents(this.getStudentsRequest).subscribe({
      next: (getStudentsResponse: GetStudentsResponse) => {
        console.log(getStudentsResponse);
        this.students = getStudentsResponse.students;
        let pagesNumber = Math.ceil(getStudentsResponse.studentsLengthFiltered / 10);
        this.pageNumbers = [];
        for (let i = 0; i < pagesNumber; i++) this.pageNumbers.push(i);
      },
      error: (httpErrorResponse: HttpErrorResponse) => {

      }
    })
  }

  getSearchableColumns(): string {
    let searchableColumns: string[] = [];
    for(let i = 0 ; i<this.studentColumns.length; i++){
      if(this.studentColumns[i].searchable){
        searchableColumns.push(this.studentColumns[i].columnName);
      }
    }
    return searchableColumns.join(',');
  }

  search(searhcValue: string): void{
    this.changePage(0, false);
    this.getStudentsRequest.search = searhcValue;
    this.getStudents();
  }

  addStudent() {
    this.modalService.init(StudentaddComponent, {}, {});
  }

}
