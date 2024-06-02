import { Component, OnInit } from '@angular/core';
import { Admindash } from '../../core/models/classes/AdminDash';
import { Userdash } from '../../core/models/classes/UserDash';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from '../../core/services/dashboard/dashboard.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  role:string="";
  userdata:any;
  userid:number=0;

  Adminobj:Admindash=new Admindash();
  Empobj:Userdash=new Userdash();

  constructor(private http:HttpClient,private dashsrv:DashboardService){
    
    const userdatastring=localStorage.getItem('localuserdata');
    if(userdatastring){
    this.userdata=JSON.parse(userdatastring);
    this.role=this.userdata.role;
    this.userid=this.userdata.userId;
  }
  else{
    console.error("No data found in localstorage");
  }
  }

  ngOnInit(): void {
    if(this.userdata.role=='Employee'){
this.getEmpDash();
    }
    if(this.userdata.role=='Admin'){
this.getAdminDash();
    }
  
  }

  getAdminDash(){
this.dashsrv.getAdminDash().subscribe((res:any)=>{
  this.Adminobj=res.data[0];
})
  }

  getEmpDash(){
this.dashsrv.getEmployeeDash(this.userid).subscribe((res:any)=>{
  this.Empobj=res.data[0];
})
  }

}
