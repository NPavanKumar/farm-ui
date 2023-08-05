

export interface Documents{
    Id: string;
Name: string;
Doc_Type_Id: string;
Picture: string;

}

export interface DocumentsColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }