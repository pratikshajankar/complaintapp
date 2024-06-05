import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IParentDepartment } from '../../core/models/interfaces/IParentDept';
import { ParentdeptService } from '../../core/services/parentdepartment/parentdept.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChilddepartmentService } from '../../core/services/childdept/childdepartment.service';
import { IChildDept } from '../../core/models/interfaces/IChildDept';
import { Complaint } from '../../core/models/classes/Complaint';
import { ComplaintService } from '../../core/services/complaint/complaint.service';

@Component({
  selector: 'app-newcomplaint',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './newcomplaint.component.html',
  styleUrl: './newcomplaint.component.css'
})
export class NewcomplaintComponent implements OnInit {

  parentdeptId:number=0;
  

  deptList:IParentDepartment[]=[];
  childdeptList:IChildDept[]=[];

  complaintobj:Complaint=new Complaint();

  constructor(private http:HttpClient,private parentdeptsrv:ParentdeptService,private childdeptsrv:ChilddepartmentService,private complaintsrv:ComplaintService){

  }


  ngOnInit(): void {
    this.getAllparentDept();
    this.getChildDept();

    const userData=localStorage.getItem('localuserdata');
    if(userData!=null){
      this.complaintobj.userId=JSON.parse(userData).userId;
    }
  }

  getAllparentDept(){
    this.parentdeptsrv.getAllparentdept().subscribe((res:any)=>{
      this.deptList=res.data;
    })
  }

  getChildDept(){
    this.childdeptsrv.getChildDeptbyParentDept(this.parentdeptId).subscribe((res:any)=>{
      this.childdeptList=res.data;
    })
  }


 oncreate(){
    this.complaintsrv.AddComplaint(this.complaintobj).subscribe((res:any)=>{
      if(res.result){
        alert("Complaint created successfully");
        
      }
      else{
        alert(res.message);
      }
    })
  }
}

