import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { UpdatePwdModel } from '../../shared/models/userModel';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  changePwdUrl = environment.updatePwd
  resetPwdUrl = environment.forgotPwd
  constructor(
    private http: HttpClient
  ) { }

  changePwd(data:UpdatePwdModel) {
    return this.http.post<any>(this.changePwdUrl, data).pipe(
      map((res:any) => {
        if (res.token){
          localStorage.setItem('pdTkn', res.token);
          localStorage.setItem('pdRTkn', res.refreshToken);
        }
        else {
          return
        }
      })
    )
  }

  resetPwd(data:any) {
    return this.http.post<any>(this.resetPwdUrl, data).pipe(
      map((res:any) => {
        // console.log('ressss', res);
        
        // if (res.token){
        //   localStorage.setItem('pdTkn', res.token);
        //   localStorage.setItem('pdRTkn', res.refreshToken);
        // }
        // else {
        //   return
        // }
      })
    )
  }
}
