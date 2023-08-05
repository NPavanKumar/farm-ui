

export interface Field_Visit{
    Id: string;
Field_Id: string;
Employee_Id: string;
Notes: string;
Field_Visit_Date: string;
Photo_Id: string;
Status_Complete: string;
Visist_Schedule_Date: string;
Prescription_Photo_Id: string;

}

export interface Field_VisitColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }