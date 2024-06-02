import { Component, OnInit } from '@angular/core';
import { IUser } from '../../core/models/interfaces/IUser';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../core/services/user/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../core/models/classes/User';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  userList:IUser[]=[];
  userobj:User=new User();

  constructor(private http:HttpClient,private usersrv:UserService){

  }

  ngOnInit(): void {
    this.getAllUser();

  }

  getAllUser(){
    this.usersrv.getAllUser().subscribe((res:any)=>{
      this.userList=res.data;
    })
  }

  onEdit(id:any){
this.userobj=id;
  }

  onUpdate(){
    this.usersrv.UpdateUser(this.userobj).subscribe((res:any)=>{
      if(res.result){
        alert("data updated successfully");
        this.getAllUser();
      }
      else{
        alert(res.message);
      }
    })
  }

  onDelete(uid:any){
this.usersrv.DeleteUser(uid.userId).subscribe((res:any)=>{
if(res.result){
  alert("data deleted successfully");
  this.getAllUser();
}
else{
  alert(res.message);
}
})
  }

  onreset(){
this.userobj=new User();
  }

}
