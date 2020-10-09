import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { locale as english } from 'src/assets/i18n/en';
import { locale as russian } from 'src/assets/i18n/ru';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'camera-tracker';

  constructor(
    public authService: AuthenticationService,
    public translateService: TranslateService
  ) {
    this.translateService.setTranslation(english.lang, english.data, true);
    this.translateService.setTranslation(russian.lang, russian.data, true);
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  ngOnInit() {

  }
}
