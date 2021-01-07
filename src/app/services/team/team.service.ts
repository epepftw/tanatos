import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private _http: HttpClient) { }

  get_team() {
    return this._http.get(`${environment.api}${environment.team}`)
  }
}
