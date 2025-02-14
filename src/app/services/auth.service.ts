import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly api = "https://entertainment-web-app-backend-ytl3.onrender.com/verify-token"
  private readonly _http = inject(HttpClient);

  verifyToken(): Observable<{ valid: boolean }> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this._http.get<{ valid: boolean }>(this.api, { headers })
  }
}
