import { Component, OnInit } from '@angular/core';
import { IChildDept } from '../../core/models/interfaces/IChildDept';
import { ChildDept } from '../../core/models/classes/ChildDept';
import { HttpClient } from '@angular/common/http';
import { ChilddepartmentService } from '../../core/services/childdept/childdepartment.service';
import { ParentdeptService } from '../../core/services/parentdepartment/parentdept.service';
import { IParentDepartment } from '../../core/models/interfaces/IParentDept';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-childdepartment',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './childdepartment.component.html',
  styleUrl: './childdepartment.component.css'
})
export class ChilddepartmentComponent implements OnInit {

  showsidediv:boolean=false;

  savebtn:boolean=false;
  updatebtn:boolean=false;

  parentdeptList:IParentDepartment[]=[];

childdeptList:IChildDept[]=[];
childdeptobj:ChildDept=new ChildDept();

constructor(private http:HttpClient,private childdeptsrv:ChilddepartmentService,private parentdeptsrv:ParentdeptService){

}

  ngOnInit(): void {
this.getAllChildDept();
this.getAllParentDept();
  }

  getAllParentDept(){
this.parentdeptsrv.getAllparentdept().subscribe((res:any)=>{
this.parentdeptList=res.data;
})
  }

  getAllChildDept(){
    this.childdeptsrv.getAllChildDept().subscribe((res:any)=>{
      this.childdeptList=res.data;
    })
  }

  onSave(){
    this.childdeptsrv.AddChildDept(this.childdeptobj).subscribe((res:any)=>{
      if(res.result){
        alert("data saved successfully");
        this.getAllChildDept();
      }
      else{
        alert(res.message);
      }
    })
  }

  onUpdate(){
    this.childdeptsrv.UpdateChildDept(this.childdeptobj).subscribe((res:any)=>{
      if(res.result){
        alert("data updated successfully");
        this.getAllChildDept();
      }
      else{
        alert(res.message);
      }
    })
  }

  onEdit(obj:any){
    this.childdeptobj=obj;
  }

  onDelete(id:any){
    this.childdeptsrv.DeleteChildDept(id.childDeptId).subscribe((res:any)=>{
      if(res.result){
        alert("data deleted successfully");
        this.getAllChildDept();
      }
      else{
        alert(res.message);
      }
    })
  }

  onReset(){
    this.childdeptobj=new ChildDept();
  }

Showsavebtn(){
this.savebtn=true;
this.updatebtn=false;
}

showupdatebtn(){
  this.savebtn=false;
  this.updatebtn=true;
}

}
