

export interface Photos{
    Id: string;
Photo_Type: string;
Photo_Blob: string;

}

export interface PhotosColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }