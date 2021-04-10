import { AuthService } from './auth.service';
import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private auth64 = btoa("my-trusted-client:eyJhbGciOiJIUzUxMiJ9");
  public constructor(
    protected config: ConfigService,
    protected http: HttpClient,
    protected authService: AuthService,
  ) { }

  getAccessToken() {
    return this.authService.getAccessToken();
  }

  getBaseUrl() {
    return "http://68.183.82.129:8080/aspiring4";
  }

  getDefaultHeaders() {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + this.auth64//this.getAccessToken(),
      
    });

    return headers;
  }

  GET(urlq: string, params = {}): Observable<any> {
    return this.http
      .get(this.getBaseUrl() + urlq, { headers: this.getDefaultHeaders(), params: params });
  }

  POST(urlq: string, object: any): Observable<any> {
    if (null == object) {
      object = { "blank": "blank" };
    }

    return this.http
      .post(this.getBaseUrl() + urlq, object, { headers: this.getDefaultHeaders() });
  }

  POSTRAW(urlq: string, object: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.getAccessToken(),
    });

    return this.http
      .post(this.getBaseUrl() + urlq, object, { headers: headers });
  }


  PUT(urlq: string, object: any): Observable<any> {
    if (null == object) {
      object = { "blank": "blank" };
    }

    return this.http
      .put(this.getBaseUrl() + urlq, JSON.stringify(object), { headers: this.getDefaultHeaders() });
  }

  PATCH(urlq: string, object: any): Observable<any> {
    if (null == object) {
      object = { "blank": "blank" };
    }

    return this.http
      .patch(this.getBaseUrl() + urlq, JSON.stringify(object), { headers: this.getDefaultHeaders() });
  }

  DELETE(urlq: string): Observable<any> {
    return this.http
      .delete(this.getBaseUrl() + urlq, { headers: this.getDefaultHeaders() });
  }

}
