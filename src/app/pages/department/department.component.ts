import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ParentdeptService } from '../../core/services/parentdepartment/parentdept.service';
import { CommonModule } from '@angular/common';
import { IParentDepartment } from '../../core/models/interfaces/IParentDept';
import { Parentdept } from '../../core/models/classes/parentdept';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit {

  showsidediv:boolean=false;

  savebtn:boolean=false;
  updatebtn:boolean=false;

parentdeptList:IParentDepartment[]=[];
parentdeptobj:Parentdept=new Parentdept();

  constructor(private http:HttpClient,private parentdeptsrv:ParentdeptService){}

  ngOnInit(): void {
    this.getAllDept();
    
  }

  getAllDept(){
    this.parentdeptsrv.getAllparentdept().subscribe((res:any)=>{
      this.parentdeptList=res.data;
    })
  }

  onEdit(obj:any){
this.parentdeptobj=obj;
  }

  onDelete(id:any){
    this.parentdeptsrv.DeleteDepartment(id.departmentId).subscribe((res:any)=>{
      if(res.result){
        alert("data deleted successfully");
        this.getAllDept();
      }
      else{
        alert(res.message);
      }
    })

  }

  onSave(){
this.parentdeptsrv.Adddepartment(this.parentdeptobj).subscribe((res:any)=>{
  if(res.result){
    alert("data saved successfully");
    this.getAllDept();
  }
  else{
    alert(res.message);
  }
})
  }

  onUpdate(){
this.parentdeptsrv.UpdateDepartment(this.parentdeptobj).subscribe((res:any)=>{
  if(res.result){
    alert("data updated successfully");
  }
  else{
    alert(res.message);
  }
})
  }

  onReset(){
    this.parentdeptobj= new Parentdept();
  }

  showupdatebtn(){
    this.savebtn=false;
    this.updatebtn=true;
  }

  Showsavebtn(){
    this.savebtn=true;
    this.updatebtn=false;
  }



}
