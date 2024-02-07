import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private _httpClient:HttpClient) { }
  getProducts(): Observable<any>{
    return this._httpClient.get<any>(`${environment.apiUrl}&${environment.key}`)
  }

  changeLocation(key:any): Observable<any>{
    return this._httpClient.get(`${environment.apiUrlforlocation}${key}&${environment.key}`)
  }
}
