import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MeNoob } from './noob';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoobsService {
  private _url: string="/assets/data/noobs.json"

  constructor( private http:HttpClient) { }
  getNoobs():Observable<MeNoob[]>{
    return this.http.get<MeNoob[]>(this._url)
     .pipe(catchError(this.errorHandler))

  }
  errorHandler(error: HttpErrorResponse){
         return throwError(error.message || "server error");
  }
}
