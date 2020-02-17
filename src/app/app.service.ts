import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get("https://beta.peoplehum.dev/api/platform-service/v1.0/country/calling-codes");
  }
}