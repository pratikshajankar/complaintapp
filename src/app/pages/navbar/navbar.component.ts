import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RoleConstant } from '../../core/constant/RoleConstant';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  menu:any=[];
  filteredmenu:any[]=[];
  role:string="";

  constructor(private router:Router){
    this.menu=RoleConstant.menus;
    const userData=localStorage.getItem('localuserdata');
    if(userData!=null){
      const parseobj=JSON.parse(userData);
      this.role=parseobj.role;
    }


    this.menu.forEach((element: any) => {
      if (element.roles && Array.isArray(element.roles)) {
        const isRolePresent = element.roles.find((role: any) => role == this.role);
        if (isRolePresent != undefined) {
          this.filteredmenu.push(element);
        }
      } else {
        console.error('element.roles is not defined or not an array', element);
      }
    });
  }

  //   this.menu.forEach((element:any)=>{
  //     const isRolePresent=element.roles.find((role:any)=>role==this.role);
  //     if(isRolePresent!=undefined){
  //       this.filteredmenu.push(element);
  //     }
  //   });
  // }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
