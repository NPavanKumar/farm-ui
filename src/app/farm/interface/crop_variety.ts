

export interface Crop_Variety{
    Id: string;
Name: string;
Description: string;

}

export interface Crop_VarietyColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }