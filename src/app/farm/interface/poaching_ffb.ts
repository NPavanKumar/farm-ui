

export interface Poaching_FFB{
    Id: string;
Farmer_Id: string;
Field_Id: string;
Photo_Id: string;
Poaching_Date: string;
Notes: string;

}

export interface Poaching_FFBColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }