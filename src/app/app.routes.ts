import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { UserComponent } from './pages/user/user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ChilddepartmentComponent } from './pages/childdepartment/childdepartment.component';
import { NewcomplaintComponent } from './pages/newcomplaint/newcomplaint.component';
import { ComplaintlistComponent } from './pages/complaintlist/complaintlist.component';

export const routes: Routes = [

    {
        path:'',redirectTo:'login',pathMatch:'full'
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'',component:NavbarComponent,

        children:[

            {
                path:'user',component:UserComponent
            },
            {
                path:'dashboard',component:DashboardComponent
            },
            {
                path:'complaint',component:ComplaintComponent
            },
            {
                path:'department',component:DepartmentComponent
            },
            {
                path:'childdepartment',component:ChilddepartmentComponent
            },
            {
                path:'newcomplaint',component:NewcomplaintComponent
            },
            {
                path:'complaintlist',component:ComplaintlistComponent
            }
        ]
    }

];
