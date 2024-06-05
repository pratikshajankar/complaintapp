import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';
import { Login } from '../../core/models/classes/login';
import { CommonModule, DatePipe } from '@angular/common';
import { UserService } from '../../core/services/user/user.service';
import { User } from '../../core/models/classes/User';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,DatePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  currentForm:string='loginFrm';

  userObj:User=new User();


loginobj:Login=new Login();

constructor(private loginsrv:LoginService,private router:Router,private usersrv:UserService){}

 login(){
this.loginsrv.getlogin(this.loginobj).subscribe((res:any)=>{
  if(res.result){
    localStorage.setItem('localuserdata',JSON.stringify(res.data));
    if(res.data.role=="Employee"){
      this.router.navigateByUrl("dashboard");
    }else if(res.data.role=="Admin"){
      this.router.navigateByUrl("dashboard");
    }
  }
  else{
    alert(res.message);
  }
})
  }

  Registration(){
    this.usersrv.AddUser(this.userObj).subscribe((res:any)=>{
      if(res.result){
        alert("Registration Successfully");
      }
      else{
        alert(res.message);
      }
    })
    }
 

    openForm(event: Event, loginFrm:string){
      event.preventDefault();
      this.currentForm=loginFrm;
    }

   

}

