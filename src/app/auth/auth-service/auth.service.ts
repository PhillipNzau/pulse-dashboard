import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Login, LoginRes } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl = environment.loginUrl;


  constructor(
   private http: HttpClient
  ) { }

  add(loginData:Login) {
    return this.http.post<LoginRes>(this.loginUrl, loginData).pipe(
      map((res:LoginRes) => {
        console.log('the res', res);
      })
    )

  }
}
