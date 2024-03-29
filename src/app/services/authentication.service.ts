import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User{
  constructor(
    public status:string,) {}
  
}

export class JwtResponse{
  constructor(public jwttoken:string,) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

constructor(private httpClient:HttpClient) {}

authenticate(username: string, password: string) {
  return this.httpClient.post<any>('',{username,password}).pipe(
  map(userData => {sessionStorage.setItem('username',username);
    let tokenStr= 'Bearer '+userData.token;
    sessionStorage.setItem('token', tokenStr);
    return userData;
    }));
  }
  

isUserLoggedIn() {
  let user = sessionStorage.getItem('username')
    return !(user === null)
}

logOut() {
    sessionStorage.removeItem('username')
}
}
