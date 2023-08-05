

export interface Document_Type{
    Id: string;
Name: string;

}

export interface Document_TypeColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }