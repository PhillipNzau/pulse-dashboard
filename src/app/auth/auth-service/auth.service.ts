import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl = environment.loginUrl;


  constructor(
   private http: HttpClient
  ) { }

  add(loginData:any) {
    return this.http.post<any>(this.loginUrl, loginData).pipe(
      map((res:any) => {
        console.log('the res', res);
      })
    )

  }
}
