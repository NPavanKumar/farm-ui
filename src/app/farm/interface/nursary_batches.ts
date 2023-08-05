

export interface Nursary_Batches{
    Id: string;
Name: string;
Origin: string;
Batch_Id_Supplier: string;
Supplier_Details: string;
Located_Nursery_Id: string;

}

export interface Nursary_BatchesColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }