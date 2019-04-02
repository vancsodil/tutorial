export interface ApiResponse{
    result: number;
}
export interface PartnersLoginResponse extends ApiResponse {
    partner: PartnersLoginPartnerData;
    company: PartnersLoginCompanyData;
}
export interface PartnersLoginPartnerData{
    access_token: string;
    email: string;
    email_validated: number;
    id: number;
    name: string;
    phone_number: string;
    phone_number_validated: number;
}
export interface PartnersLoginCompanyData {
    companyAccessToken: string;
    name: string;
    modulesTags: string[];
    domain: DomainData;
    modules: ModuleData[];
}
export interface DomainData {
    adminUrl: string;
    subdomain: string;
    url: string;
}
export interface ModuleData{
    id: number;
    name: string;
    tag: string;
}
export interface GetStudentsResponse extends ApiResponse{
    students: StudentData[];
    studentsLength: number;
    studentsLengthFiltered: number;
}
export interface StudentData{
    id: number;
    name: string;
    username: string;
    groupName: string;
    shiftName: string;
    unitName: string;
}

export interface GetStudentsRequest {
    start: number;
    count: number;
    order_column: string;
    order_way: "asc"|"desc";
    search: string;
    search_columns: string;
}

export interface ColumnStructureData {
    name: string;
    columnName: string;
    searchable: boolean;
    orderable: boolean;
}

export interface AddStudentRequest {
    name: string;
    username: string;
    group: number;
}

export interface AddStudentResponse extends ApiResponse {

}

export interface GetGroupsRequest {

}

export interface GetGroupsResponse extends ApiResponse{
    groups: GroupData[];
}

export interface GroupData{
    id: number;
    name: string;
}