import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  constructor(private _http: HttpClient) { }

  get_testimonial() {
    return this._http.get(`${environment.api}${environment.testimonial}`)
  }
}
