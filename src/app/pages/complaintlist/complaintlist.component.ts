import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../../core/services/complaint/complaint.service';
import { IComplaint } from '../../core/models/interfaces/IComplaint';
import { Complaint } from '../../core/models/classes/Complaint';
import { IStatus } from '../../core/models/interfaces/IStatus';

@Component({
  selector: 'app-complaintlist',
  standalone: true,
  imports: [],
  templateUrl: './complaintlist.component.html',
  styleUrl: './complaintlist.component.css'
})
export class ComplaintlistComponent implements OnInit{

  userData:any;
  role:string="";
  userId:number=0;

  statusList:IStatus[]=[];

  comList:IComplaint[]=[];
  comobj:Complaint=new Complaint();

  constructor(private comsrv:ComplaintService){}


  ngOnInit(): void {
    const userdatastring=localStorage.getItem('localuserdata');
    if(userdatastring){
      this.userData=JSON.parse(userdatastring);
      this.role=this.userData.role;
      this.comobj.userId=this.userData.userId;
      if(this.userData.role=='Admin'){
        this.getAllComplaint();
        this.getComplaintStatus();
      }
      else{
        this.getComplaintCreadedbyUserid(this.userData.userId);
      }
    }

  }

  getAllComplaint(){
this.comsrv.getAllComplaint().subscribe((res:any)=>{
this.comList=res.data;
})
  }

  getComplaintCreadedbyUserid(uid:number){
this.comsrv.getComplaintCreadedbyUser(uid).subscribe((res:any)=>{
this.comList=res.data;
})
  }

  getComplaintStatus(){
this.comsrv.getStatus().subscribe((res:any)=>{
  this.statusList=res.data;
})
  }

}
