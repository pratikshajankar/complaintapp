import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllUser(){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_USER);
  }

  AddUser(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.ADD_NEW_USER,obj);
  }

  UpdateUser(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.UPDATE_USER,obj);
  }

  DeleteUser(id:any){
    return this.http.delete(APIConstant.API_URL+APIConstant.DELETE_USER+id);
  }

  
}
