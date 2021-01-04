import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private _http: HttpClient) { }

  get_home() {
    return this._http.get(`${environment.home}`)
  }
}

