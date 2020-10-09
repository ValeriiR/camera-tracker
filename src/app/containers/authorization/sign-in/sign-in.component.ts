import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['user', [Validators.required]],
      password: ['123qwe', Validators.required]
    });
  }

  public submit(): void {
    const usersModel: ILoginModel = this.loginForm.getRawValue();
    this.authService.signin(usersModel);
  }
}
