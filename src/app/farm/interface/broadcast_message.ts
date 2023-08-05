

export interface Broadcast_Message{
    Id: string;
Message_Text: string;
Employee_Id: string;
Farmer_id: string;
Farmer_Supervisor_Id: string;
Message_Sent_Date: string;

}

export interface Broadcast_MessageColumn {
    name: string;
    displayName:string;
    width:string;
    sortOrder: any;
    filterMultiple: boolean;
    sortDirections: any;
    showFilter: boolean;
  }