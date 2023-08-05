

export interface Referral_Source{
    Id: string;
Name: string;
Description: string;

}

export interface Referral_SourceColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }