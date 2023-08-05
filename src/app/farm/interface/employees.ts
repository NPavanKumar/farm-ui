

export interface Employees{
    Id: string;
First_Name: string;
Last_Name: string;
Father_Name: string;
Photo_Id: string;
Mobile_Number1: string;
Mobile_Number2: string;
Banking_Id: string;
Email: string;
Address: string;
Notes: string;
Permanent_Employee: string;
Employee_Type_Id: string;

}

export interface EmployeesColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }