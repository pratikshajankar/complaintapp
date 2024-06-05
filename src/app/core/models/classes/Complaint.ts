export class Complaint{

    "complaintId": number;
  "userId": number;
  "createdDate": "2024-06-05T10:42:15.825Z";
  "childDeptId": number;
  "complaintTitle": string;
  "complaintNo": string;
  "complaintDetails":string;
  "isAlreadyReportedThis":boolean;
  "oldComplaintNo":string;
  "complaintStatusId":  number;
  "complaintStatus":string;
  "userName":string;

  constructor(){
    this.complaintId=0;
    this.userId=0;
    this.createdDate="2024-06-05T10:42:15.825Z";
    this.childDeptId=0;
    this.complaintTitle="";
    this.complaintNo="";
    this.complaintDetails="";
    this.isAlreadyReportedThis=false;
    this.oldComplaintNo="";
    this.complaintStatusId=0;
    this.complaintStatus="";
    this.userName="";
  }

}