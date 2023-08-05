

export interface Campaign_Types{
    Id: string;
Name: string;
Description: string;
Things_To_Do: string;
Achievements_To_Target: string;

}

export interface Campaign_TypesColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }