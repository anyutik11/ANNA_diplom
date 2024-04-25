import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  controller = 'Login';
  public name = '';
  public pass = '';
  public authDto = {};


  constructor(private httpClient: HttpClient) { }

  
  login(name: string, pass: string) : Observable<boolean> {
    if (environment.fakeServer) {
      if (pass.length >=2) {
        this.name = name;
        this.pass = pass;
        this.authDto = {name, pass};
        return of(true);
      } else {
        this.name = '';
        this.pass = '';
        this.authDto = {};
        return of(false);
      }
    } else {
      return this.httpClient.post<boolean>(`${environment.host}/${this.controller}/auth`, {name, pass})
        .pipe(
          map((res: any) => {
            if (res?.ok) {
              this.name = name;
              this.pass = pass;
              this.authDto = {name, pass};
              return true;
            } else {
              this.name = '';
              this.pass = '';
              this.authDto = {};
              return  false;
            }
          })
        );
    }
  
  
  }
  

}
