import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: ILoginModel;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    public translateServcice: TranslateService
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUserData();
  }

  public signOut(): void {
    this.authService.signOut();
  }

  public selectLanguage(language: string): void {
    this.translateServcice.use(language);
  }
}
