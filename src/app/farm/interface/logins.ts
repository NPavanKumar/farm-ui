

export interface Logins{
    Id: string;
Login: string;
Password: string;
Email: string;
Mobile: string;
Notes: string;

}

export interface LoginsColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }