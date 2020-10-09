import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './containers/authorization/sign-in/sign-in.component';
import { HeaderComponent } from './containers/nav-bar/header/header.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { SettingsComponent } from './containers/settings/settings.component';
import { CamerasComponent } from './containers/cameras/cameras.component';
import { ReportingComponent } from './containers/reporting/reporting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HeaderComponent,
    SettingsComponent,
    CamerasComponent,
    ReportingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    TranslateModule.forRoot()
  ],
  exports: [
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
