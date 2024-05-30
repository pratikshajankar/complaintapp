import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class ChilddepartmentService {

  constructor(private http:HttpClient) { }

  getAllChildDept(){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_CHILD_DEPT);
  }

  AddChildDept(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.ADD_CHILD_DEPT,obj)
  }

  UpdateChildDept(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.UPDATE_CHILD_DEPT,obj);
  }

  DeleteChildDept(id:any){
    return this.http.delete(APIConstant.API_URL+APIConstant.DELETE_CHILD_DEPT+id);
  }
}
