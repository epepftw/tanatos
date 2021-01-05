import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private _http: HttpClient) { }

  get_services() {
    return this._http.get(`${environment.api}${environment.services}`)
  }
}
