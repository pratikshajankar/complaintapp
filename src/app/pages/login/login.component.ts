import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';
import { Login } from '../../core/models/classes/login';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {


  showLogin:boolean=true;


loginobj:Login=new Login()

constructor(private loginsrv:LoginService,private router:Router){}

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

  toggleForms() {
    this.showLogin = !this.showLogin;
  }
}
