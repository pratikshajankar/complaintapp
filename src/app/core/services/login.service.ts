import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getlogin(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.GET_LOGIN,obj)
  }
}
