

export interface Farm_Diseases{
    Id: string;
Name: string;
Remidies: string;
Photo_Id1: string;
Photo_Id2: string;

}

export interface Farm_DiseasesColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }