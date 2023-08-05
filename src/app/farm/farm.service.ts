import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FarmService {
  APIURL = environment.baseUrl;
  public userRoleIds: any;

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
  };

  uploadHttpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
    })
  };

  resetForm(e: MouseEvent, formGroup: FormGroup) {
    e.preventDefault();
    formGroup.reset();
    for (const key in formGroup.controls) {
        if (formGroup.controls.hasOwnProperty(key)) {
            formGroup.controls[key].markAsPristine();
            formGroup.controls[key].updateValueAndValidity();
        }
    }
}

  getApps(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllApps`)
}

getAppById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthApps?Id=` + id)
}

  addApp(addApp: any): any {
    console.log(addApp);
    return this.http.post(`${this.APIURL}addApp`, addApp, this.httpOptions)
}

updateApp(appId: any, appDetails: any): any {
  console.log(appId);
  return this.http.put(`${this.APIURL}AuthApps/` + appId, appDetails, this.httpOptions)
}

deleteRecord(functionName: any, id: any) {
    switch (functionName) {
        case 'application':
            return this.http.delete(`${this.APIURL}AuthApps/` + id, this.httpOptions)
            break;
    }
    return null;
}

validatePermissionWithRole(permission: any): any {
  // if (this.userRoleIds == UserRoles.SuperAdmin || this.userRoleIds == UserRoles.Admin) {
  //     return { insert: true, update: true, delete: true };
  // } else {
  //     console.log('else block :: ', JSON.parse(localStorage.getItem('authRoles')));
  //     return JSON.parse(localStorage.getItem('authRoles'));
  //     // return { insert: true, update: true, delete: false };
  // }
  return  { insert: true, update: true, delete: true };
}


 getAuthorisation(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllAuthorisation`)
}

getAuthorisationById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthAuthorisation?Id=` + id)
}

  addAuthorisation(addAuthorisation: any): any {
    return this.http.post(`${this.APIURL}addAuthorisation`, addAuthorisation, this.httpOptions)
}

updateAuthorisation(AuthorisationId: any, AuthorisationDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + AuthorisationId, AuthorisationDetails, this.httpOptions)
}


searchAuthorisation(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchAuthorisation?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getBroadcast_Message(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllBroadcast_Message`)
}

getBroadcast_MessageById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthBroadcast_Message?Id=` + id)
}

  addBroadcast_Message(addBroadcast_Message: any): any {
    return this.http.post(`${this.APIURL}addBroadcast_Message`, addBroadcast_Message, this.httpOptions)
}

updateBroadcast_Message(Broadcast_MessageId: any, Broadcast_MessageDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + Broadcast_MessageId, Broadcast_MessageDetails, this.httpOptions)
}


searchBroadcast_Message(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchBroadcast_Message?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getCampaign_Types(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllCampaign_Types`)
}

getCampaign_TypesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthCampaign_Types?Id=` + id)
}

  addCampaign_Types(addCampaign_Types: any): any {
    return this.http.post(`${this.APIURL}addCampaign_Types`, addCampaign_Types, this.httpOptions)
}

updateCampaign_Types(Campaign_TypesId: any, Campaign_TypesDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + Campaign_TypesId, Campaign_TypesDetails, this.httpOptions)
}


searchCampaign_Types(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchCampaign_Types?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getCampaigns(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllCampaigns`)
}

getCampaignsById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthCampaigns?Id=` + id)
}

  addCampaigns(addCampaigns: any): any {
    return this.http.post(`${this.APIURL}addCampaigns`, addCampaigns, this.httpOptions)
}

updateCampaigns(CampaignsId: any, CampaignsDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + CampaignsId, CampaignsDetails, this.httpOptions)
}


searchCampaigns(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchCampaigns?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getCrop_Variety(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllCrop_Variety`)
}

getCrop_VarietyById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthCrop_Variety?Id=` + id)
}

  addCrop_Variety(addCrop_Variety: any): any {
    return this.http.post(`${this.APIURL}addCrop_Variety`, addCrop_Variety, this.httpOptions)
}

updateCrop_Variety(Crop_VarietyId: any, Crop_VarietyDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + Crop_VarietyId, Crop_VarietyDetails, this.httpOptions)
}


searchCrop_Variety(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchCrop_Variety?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getDistricts(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllDistricts`)
}

getDistrictsById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthDistricts?Id=` + id)
}

  addDistricts(addDistricts: any): any {
    return this.http.post(`${this.APIURL}addDistricts`, addDistricts, this.httpOptions)
}

updateDistricts(DistrictsId: any, DistrictsDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + DistrictsId, DistrictsDetails, this.httpOptions)
}


searchDistricts(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchDistricts?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getDocument_Type(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllDocument_Type`)
}

getDocument_TypeById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthDocument_Type?Id=` + id)
}

  addDocument_Type(addDocument_Type: any): any {
    return this.http.post(`${this.APIURL}addDocument_Type`, addDocument_Type, this.httpOptions)
}

updateDocument_Type(Document_TypeId: any, Document_TypeDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + Document_TypeId, Document_TypeDetails, this.httpOptions)
}


searchDocument_Type(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchDocument_Type?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getDocuments(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllDocuments`)
}

getDocumentsById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthDocuments?Id=` + id)
}

  addDocuments(addDocuments: any): any {
    return this.http.post(`${this.APIURL}addDocuments`, addDocuments, this.httpOptions)
}

updateDocuments(DocumentsId: any, DocumentsDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + DocumentsId, DocumentsDetails, this.httpOptions)
}


searchDocuments(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchDocuments?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getEmployee_Roles(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllEmployee_Roles`)
}

getEmployee_RolesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthEmployee_Roles?Id=` + id)
}

  addEmployee_Roles(addEmployee_Roles: any): any {
    return this.http.post(`${this.APIURL}addEmployee_Roles`, addEmployee_Roles, this.httpOptions)
}

updateEmployee_Roles(Employee_RolesId: any, Employee_RolesDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + Employee_RolesId, Employee_RolesDetails, this.httpOptions)
}


searchEmployee_Roles(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchEmployee_Roles?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getEmployee_Types(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllEmployee_Types`)
}

getEmployee_TypesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthEmployee_Types?Id=` + id)
}

  addEmployee_Types(addEmployee_Types: any): any {
    return this.http.post(`${this.APIURL}addEmployee_Types`, addEmployee_Types, this.httpOptions)
}

updateEmployee_Types(Employee_TypesId: any, Employee_TypesDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + Employee_TypesId, Employee_TypesDetails, this.httpOptions)
}


searchEmployee_Types(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchEmployee_Types?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getEmployees(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllEmployees`)
}

getEmployeesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthEmployees?Id=` + id)
}

  addEmployees(addEmployees: any): any {
    return this.http.post(`${this.APIURL}addEmployees`, addEmployees, this.httpOptions)
}

updateEmployees(EmployeesId: any, EmployeesDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + EmployeesId, EmployeesDetails, this.httpOptions)
}


searchEmployees(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchEmployees?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getFarm_Diseases(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllFarm_Diseases`)
}

getFarm_DiseasesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthFarm_Diseases?Id=` + id)
}

  addFarm_Diseases(addFarm_Diseases: any): any {
    return this.http.post(`${this.APIURL}addFarm_Diseases`, addFarm_Diseases, this.httpOptions)
}

updateFarm_Diseases(Farm_DiseasesId: any, Farm_DiseasesDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + Farm_DiseasesId, Farm_DiseasesDetails, this.httpOptions)
}


searchFarm_Diseases(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchFarm_Diseases?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getFarmer_Group(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllFarmer_Group`)
}

getFarmer_GroupById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthFarmer_Group?Id=` + id)
}

  addFarmer_Group(addFarmer_Group: any): any {
    return this.http.post(`${this.APIURL}addFarmer_Group`, addFarmer_Group, this.httpOptions)
}

updateFarmer_Group(Farmer_GroupId: any, Farmer_GroupDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + Farmer_GroupId, Farmer_GroupDetails, this.httpOptions)
}


searchFarmer_Group(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchFarmer_Group?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getFarmer_login_visit_logs(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllFarmer_login_visit_logs`)
}

getFarmer_login_visit_logsById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthFarmer_login_visit_logs?Id=` + id)
}

  addFarmer_login_visit_logs(addFarmer_login_visit_logs: any): any {
    return this.http.post(`${this.APIURL}addFarmer_login_visit_logs`, addFarmer_login_visit_logs, this.httpOptions)
}

updateFarmer_login_visit_logs(Farmer_login_visit_logsId: any, Farmer_login_visit_logsDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + Farmer_login_visit_logsId, Farmer_login_visit_logsDetails, this.httpOptions)
}


searchFarmer_login_visit_logs(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchFarmer_login_visit_logs?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getFarmer_trip_sheets(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllFarmer_trip_sheets`)
}

getFarmer_trip_sheetsById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthFarmer_trip_sheets?Id=` + id)
}

  addFarmer_trip_sheets(addFarmer_trip_sheets: any): any {
    return this.http.post(`${this.APIURL}addFarmer_trip_sheets`, addFarmer_trip_sheets, this.httpOptions)
}

updateFarmer_trip_sheets(Farmer_trip_sheetsId: any, Farmer_trip_sheetsDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + Farmer_trip_sheetsId, Farmer_trip_sheetsDetails, this.httpOptions)
}


searchFarmer_trip_sheets(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchFarmer_trip_sheets?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getFarmers(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllFarmers`)
}

getFarmersById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthFarmers?Id=` + id)
}

  addFarmers(addFarmers: any): any {
    return this.http.post(`${this.APIURL}addFarmers`, addFarmers, this.httpOptions)
}

updateFarmers(FarmersId: any, FarmersDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + FarmersId, FarmersDetails, this.httpOptions)
}


searchFarmers(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
  
  return of({
    data: [
      {
        'First_Name' : 'AAAAAAA', 'Last_Name': 'BBBBBBB', 'Father_Name' : 'CCCCCCC', 'Mobile_Number1': '123456794567898', 
      },
      {
        'First_Name' : 'DDDDDDDD', 'Last_Name': 'EEEEEEE', 'Father_Name' : 'FFFFFFFF'
      }

    ]
  });
  
  console.log(`${this.APIURL}SearchFarmers?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder );
    return this.http.get<any>(`${this.APIURL}SearchFarmers?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getFarmers_Login(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllFarmers_Login`)
}

getFarmers_LoginById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthFarmers_Login?Id=` + id)
}

  addFarmers_Login(addFarmers_Login: any): any {
    return this.http.post(`${this.APIURL}addFarmers_Login`, addFarmers_Login, this.httpOptions)
}

updateFarmers_Login(Farmers_LoginId: any, Farmers_LoginDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + Farmers_LoginId, Farmers_LoginDetails, this.httpOptions)
}


searchFarmers_Login(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchFarmers_Login?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getFarmField(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllFarmField`)
}

getFarmFieldById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthFarmField?Id=` + id)
}

  addFarmField(addFarmField: any): any {
    return this.http.post(`${this.APIURL}addFarmField`, addFarmField, this.httpOptions)
}

updateFarmField(FarmFieldId: any, FarmFieldDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + FarmFieldId, FarmFieldDetails, this.httpOptions)
}


searchFarmField(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchFarmField?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getField_Visit(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllField_Visit`)
}

getField_VisitById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthField_Visit?Id=` + id)
}

  addField_Visit(addField_Visit: any): any {
    return this.http.post(`${this.APIURL}addField_Visit`, addField_Visit, this.httpOptions)
}

updateField_Visit(Field_VisitId: any, Field_VisitDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + Field_VisitId, Field_VisitDetails, this.httpOptions)
}


searchField_Visit(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchField_Visit?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getLogins(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllLogins`)
}

getLoginsById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthLogins?Id=` + id)
}

  addLogins(addLogins: any): any {
    return this.http.post(`${this.APIURL}addLogins`, addLogins, this.httpOptions)
}

updateLogins(LoginsId: any, LoginsDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + LoginsId, LoginsDetails, this.httpOptions)
}


searchLogins(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchLogins?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getLogins_Log(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllLogins_Log`)
}

getLogins_LogById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthLogins_Log?Id=` + id)
}

  addLogins_Log(addLogins_Log: any): any {
    return this.http.post(`${this.APIURL}addLogins_Log`, addLogins_Log, this.httpOptions)
}

updateLogins_Log(Logins_LogId: any, Logins_LogDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + Logins_LogId, Logins_LogDetails, this.httpOptions)
}


searchLogins_Log(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchLogins_Log?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getMandal_Blocks(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllMandal_Blocks`)
}

getMandal_BlocksById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthMandal_Blocks?Id=` + id)
}

  addMandal_Blocks(addMandal_Blocks: any): any {
    return this.http.post(`${this.APIURL}addMandal_Blocks`, addMandal_Blocks, this.httpOptions)
}

updateMandal_Blocks(Mandal_BlocksId: any, Mandal_BlocksDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + Mandal_BlocksId, Mandal_BlocksDetails, this.httpOptions)
}


searchMandal_Blocks(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchMandal_Blocks?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getNursary(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllNursary`)
}

getNursaryById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthNursary?Id=` + id)
}

  addNursary(addNursary: any): any {
    return this.http.post(`${this.APIURL}addNursary`, addNursary, this.httpOptions)
}

updateNursary(NursaryId: any, NursaryDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + NursaryId, NursaryDetails, this.httpOptions)
}


searchNursary(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchNursary?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getNursary_Batches(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllNursary_Batches`)
}

getNursary_BatchesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthNursary_Batches?Id=` + id)
}

  addNursary_Batches(addNursary_Batches: any): any {
    return this.http.post(`${this.APIURL}addNursary_Batches`, addNursary_Batches, this.httpOptions)
}

updateNursary_Batches(Nursary_BatchesId: any, Nursary_BatchesDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + Nursary_BatchesId, Nursary_BatchesDetails, this.httpOptions)
}


searchNursary_Batches(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchNursary_Batches?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getPhotos(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllPhotos`)
}

getPhotosById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthPhotos?Id=` + id)
}

  addPhotos(addPhotos: any): any {
    return this.http.post(`${this.APIURL}addPhotos`, addPhotos, this.httpOptions)
}

updatePhotos(PhotosId: any, PhotosDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + PhotosId, PhotosDetails, this.httpOptions)
}


searchPhotos(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchPhotos?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getPlantationIdentification(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllPlantationIdentification`)
}

getPlantationIdentificationById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthPlantationIdentification?Id=` + id)
}

  addPlantationIdentification(addPlantationIdentification: any): any {
    return this.http.post(`${this.APIURL}addPlantationIdentification`, addPlantationIdentification, this.httpOptions)
}

updatePlantationIdentification(PlantationIdentificationId: any, PlantationIdentificationDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + PlantationIdentificationId, PlantationIdentificationDetails, this.httpOptions)
}


searchPlantationIdentification(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchPlantationIdentification?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getPoaching_FFB(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllPoaching_FFB`)
}

getPoaching_FFBById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthPoaching_FFB?Id=` + id)
}

  addPoaching_FFB(addPoaching_FFB: any): any {
    return this.http.post(`${this.APIURL}addPoaching_FFB`, addPoaching_FFB, this.httpOptions)
}

updatePoaching_FFB(Poaching_FFBId: any, Poaching_FFBDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + Poaching_FFBId, Poaching_FFBDetails, this.httpOptions)
}


searchPoaching_FFB(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchPoaching_FFB?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getReferral_Source(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllReferral_Source`)
}

getReferral_SourceById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthReferral_Source?Id=` + id)
}

  addReferral_Source(addReferral_Source: any): any {
    return this.http.post(`${this.APIURL}addReferral_Source`, addReferral_Source, this.httpOptions)
}

updateReferral_Source(Referral_SourceId: any, Referral_SourceDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + Referral_SourceId, Referral_SourceDetails, this.httpOptions)
}


searchReferral_Source(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchReferral_Source?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getStates(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllStates`)
}

getStatesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthStates?Id=` + id)
}

  addStates(addStates: any): any {
    return this.http.post(`${this.APIURL}addStates`, addStates, this.httpOptions)
}

updateStates(StatesId: any, StatesDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + StatesId, StatesDetails, this.httpOptions)
}


searchStates(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchStates?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getTraining_Videos(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllTraining_Videos`)
}

getTraining_VideosById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthTraining_Videos?Id=` + id)
}

  addTraining_Videos(addTraining_Videos: any): any {
    return this.http.post(`${this.APIURL}addTraining_Videos`, addTraining_Videos, this.httpOptions)
}

updateTraining_Videos(Training_VideosId: any, Training_VideosDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + Training_VideosId, Training_VideosDetails, this.httpOptions)
}


searchTraining_Videos(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchTraining_Videos?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getVillages(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllVillages`)
}

getVillagesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthVillages?Id=` + id)
}

  addVillages(addVillages: any): any {
    return this.http.post(`${this.APIURL}addVillages`, addVillages, this.httpOptions)
}

updateVillages(VillagesId: any, VillagesDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + VillagesId, VillagesDetails, this.httpOptions)
}


searchVillages(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchVillages?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

 getWorkflow(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}getAllWorkflow`)
}

getWorkflowById(id: any): Observable<any> {
  return this.http.get<any>(`${this.APIURL}AuthWorkflow?Id=` + id)
}

  addWorkflow(addWorkflow: any): any {
    return this.http.post(`${this.APIURL}addWorkflow`, addWorkflow, this.httpOptions)
}

updateWorkflow(WorkflowId: any, WorkflowDetails: any): any {
  return this.http.put(`${this.APIURL}AuthApps/` + WorkflowId, WorkflowDetails, this.httpOptions)
}


searchWorkflow(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
    return this.http.get<any>(`${this.APIURL}SearchWorkflow?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
}

importExcel(file: any) {
  console.log('Service File');
  console.log(`${this.APIURL}UploadFile/UploadExcel`);
  // return this.http.post(`${this.APIURL}UploadFile/UploadExcel`, file, this.uploadHttpOptions);
  const formData = new FormData();
    formData.append('file', file);

    return this.http.request(new HttpRequest(
      'POST',
      `${this.APIURL}UploadFile/UploadExcel`,
      formData,
      {
        reportProgress: true
      }));
}


// Services List

}
