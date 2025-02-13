import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly api = "https://entertainment-web-app-backend-ytl3.onrender.com"
  private readonly _http = inject(HttpClient);

  login(email: string, password: string): Observable<{ token: string }> {

    const headers = new HttpHeaders().set('useAuth', 'n');

    return this._http.post<{ token: string }>(`${this.api}/login`, 
      { email, password }, { headers } ,
    ).pipe(
      map((tokenResponse) => {
        localStorage.setItem('token', tokenResponse.token)
        return tokenResponse;
      })
    );
  }


  createAccount(email: string, password: string): Observable<{ message: string }> {
    return this._http.post<{ message: string }>(`${this.api}/create-user`, { email, password });
  }

}
