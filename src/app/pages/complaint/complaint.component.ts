import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Complaint } from '../../core/models/classes/Complaint';
import { IComplaint } from '../../core/models/interfaces/IComplaint';
import { ComplaintService } from '../../core/services/complaint/complaint.service';
import { UserComponent } from '../user/user.component';
import { IUser } from '../../core/models/interfaces/IUser';
import { UserService } from '../../core/services/user/user.service';
import { IStatus } from '../../core/models/interfaces/IStatus';

@Component({
  selector: 'app-complaint',
  standalone: true,
  imports: [FormsModule,DatePipe,CommonModule],
  templateUrl: './complaint.component.html',
  styleUrl: './complaint.component.css'
})
export class ComplaintComponent implements OnInit {

  userList:IUser[]=[];
  statusList:IStatus[]=[];

  complaintList:IComplaint[]=[];
  complaintobj:Complaint=new Complaint();

  constructor(private http:HttpClient,private complaintsrv:ComplaintService,private usersrv:UserService){}


  ngOnInit(): void {
  this.getallComplaint();
  this.getAlluser();
  }

  getallComplaint(){
    this.complaintsrv.getAllComplaint().subscribe((res:any)=>{
      this.complaintList=res.data;
    })
  }

  getAlluser(){
    this.usersrv.getAllUser().subscribe((res:any)=>{
      this.userList=res.data;
    })
  }

}
