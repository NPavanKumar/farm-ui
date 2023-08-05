

export interface Logins_Log{
    Id: string;
Login_Id: string;
Login_datetime: string;

}

export interface Logins_LogColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }