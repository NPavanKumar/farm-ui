

export interface Farmer_trip_sheets{
    Id: string;
Arrived_Date: string;
Net_Weight: string;
Slip_No: string;
Collection_Centre_Received: string;
Farmer_Tally_Code: string;
Farmer_Field_Id: string;

}

export interface Farmer_trip_sheetsColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }