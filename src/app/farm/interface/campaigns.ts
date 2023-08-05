

export interface Campaigns{
    Id: string;
Name: string;
Description: string;
Reauired_Items: string;
Goals_To_Achieve: string;
Campign_Type: string;

}

export interface CampaignsColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }