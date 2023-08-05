

export interface Workflow{
    Id: string;
Name: string;
Link: string;
Description: string;

}

export interface WorkflowColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }