

export interface Nursary{
    Id: string;
Name: string;
Location_Village_Id: string;
Surveys_Nos: string;
Area_In_Acres: string;
Description: string;

}

export interface NursaryColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }