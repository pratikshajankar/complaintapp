import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http:HttpClient) { }

  getAllComplaint(){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_COMPLAINT);
  }

  getComplaintReceivedbyDept(){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_COMPLAINT_RECEIVED_BY_DEPT);
  }

  getComplaintCreadedbyUser(uid:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_COMPLAINT_CREATED_BY_USER+uid);
  }


  AddComplaint(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.ADD_COMPLAINT,obj)
  }

  UpdateComplaint(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.UPDATE_COMPLAINT,obj);
  }

  DeleteComplaint(id:any){
    return this.http.delete(APIConstant.API_URL+APIConstant.DELETE_COMPLAINT+id);
  }

 

  getStatus(){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_COMPLAINT_STATUS);
  }
}
