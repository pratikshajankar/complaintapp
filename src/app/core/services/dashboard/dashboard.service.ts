import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getAdminDash(){
    return this.http.get(APIConstant.API_URL+APIConstant.ADMIN_DASH);
  }

  getEmployeeDash(){
    return this.http.get(APIConstant.API_URL+APIConstant.USER_DASH);
  }
}
