import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Uder } from './uder';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
             _url ='http://localhost:3000/enr';
  constructor(private http:HttpClient) { }

  enroll(user : Uder){
   return this.http.post<any>(this._url, user);
  }
}
