import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class ParentdeptService {

  constructor(private http:HttpClient) { }

  getAllparentdept(){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_DEPARTMENT);
  }

  Adddepartment(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.ADD_DEPARTMENT,obj);
  }

  UpdateDepartment(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.UPDATE_DEPARTMENT,obj);
  }

  DeleteDepartment(id:any){
    return this.http.delete(APIConstant.API_URL+APIConstant.DELETE_DEPARTMENT+id);
  }
}
