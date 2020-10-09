import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  signin(usersModel: ILoginModel): void {
    const subscription = this.http.get(`http://localhost:3000/auth`).subscribe((loginModel: ILoginModel) => {
      if (usersModel.login === loginModel.login && usersModel.password === loginModel.password) {
        this.setCurrentUserData(loginModel);
        this.setUserAuthenticated(true);
        this.router.navigate(['']);
        this.getCurrentUserData();
        subscription.unsubscribe();
      } else {
        alert('Incorrect email or password');
      }
    });
  }

  signOut(): void {
    this.setUserAuthenticated(false);
    sessionStorage.clear();
    this.router.navigate(['/signin']);
  }

  setUserAuthenticated(value: boolean): void {
    sessionStorage.setItem('userIsAuthenticated', value.toString());
  }

  isUserAuthenticated(): boolean {
    return (sessionStorage.getItem('userIsAuthenticated') === 'true');
  }

  setCurrentUserData(user: ILoginModel): void {
    console.log(user);
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUserData(): ILoginModel {
    const currentUserJson = sessionStorage.getItem('currentUser');
    return JSON.parse(currentUserJson) as ILoginModel;
  }
}
