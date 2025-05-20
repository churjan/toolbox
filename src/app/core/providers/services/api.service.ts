import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(url, options = {}) {
    return this.http.get(`${environment.apiUrl}${url}`, options);
  }

  post(url, body = {}, options = {}) {
    return this.http.post(`${environment.apiUrl}${url}`, body, options);
  }
}
