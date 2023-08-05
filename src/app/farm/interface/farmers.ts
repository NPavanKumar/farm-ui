

export interface Farmers{
    Id: string;
First_Name: string;
Last_Name: string;
Father_Name: string;
Mobile_Number1: string;
Farmer_Photo_Id: string;
Mobile_Number2: string;
Banking_Id: string;
Email: string;
Supervisor_Id: string;
Tally_FarmerCode: string;
Land_Photo_Id: string;

}

export interface FarmersColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }