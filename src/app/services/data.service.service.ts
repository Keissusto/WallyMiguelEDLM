import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataDS } from '../common/data-ds';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor( private http: HttpClient){
    
  }

  loadApi(): Observable<DataDS[]>
  {
    return this.http.get<DataDS[]>("../../assets/datos/ds.json")
  }

}
