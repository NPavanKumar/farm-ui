

export interface PlantationIdentification{
    Id: string;
First_Name: string;
Last_Name: string;
Father_Name: string;
Mobile_Number1: string;
Farmer_Photo_Id: string;
Mobile_Number2: string;
Banking_Id: string;
Email: string;
Employee_Id: string;
Land_Photo_Id: string;
Plantation_Date: string;
Farmer_Id: string;
Notes: string;
Referral_Farmer_Id: string;
Existing_Crop_Id: string;
Samplings_Nursary_Batch_Id: string;
Created_Date: string;
Created_By: string;

}

export interface PlantationIdentificationColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }