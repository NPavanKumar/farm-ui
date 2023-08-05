

export interface FarmField{
    Id: string;
Tally_Field_Id: string;
Farmer_Id: string;
Village_Id: string;
Survey_Nos: string;
Mapping_Data_Id: string;
Gate_GPS_Lattitude: string;
Gate_GPS_Longitude: string;
Farmer_Supervisor_Id: string;

}

export interface FarmFieldColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }