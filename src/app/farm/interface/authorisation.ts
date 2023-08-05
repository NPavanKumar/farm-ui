

export interface Authorisation{
    Id: string;
Name: string;
Description: string;

}

export interface AuthorisationColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    sortDirections: any;
    showFilter: boolean;
  }