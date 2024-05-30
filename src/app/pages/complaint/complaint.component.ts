import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Complaint } from '../../core/models/classes/Complaint';
import { IComplaint } from '../../core/models/interfaces/IComplaint';
import { ComplaintService } from '../../core/services/complaint/complaint.service';

@Component({
  selector: 'app-complaint',
  standalone: true,
  imports: [FormsModule,DatePipe,CommonModule],
  templateUrl: './complaint.component.html',
  styleUrl: './complaint.component.css'
})
export class ComplaintComponent implements OnInit {

  complaintList:IComplaint[]=[];
  complaintobj:Complaint=new Complaint();

  constructor(private http:HttpClient,private complaintsrv:ComplaintService){}


  ngOnInit(): void {
  this.getallComplaint();
  }

  getallComplaint(){
    this.complaintsrv.getAllComplaint().subscribe((res:any)=>{
      this.complaintList=res.data;
    })
  }

}
