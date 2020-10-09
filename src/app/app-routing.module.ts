import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './containers/authorization/sign-in/sign-in.component';
import { CamerasComponent } from './containers/cameras/cameras.component';
import { AuthGuard } from './containers/guards/auth.guard';
import { ReportingComponent } from './containers/reporting/reporting.component';
import { SettingsComponent } from './containers/settings/settings.component';


const routes: Routes = [
  { path: '', redirectTo: '/cameras', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'cameras', component: CamerasComponent, canActivate: [AuthGuard] },
  { path: 'reporting', component: ReportingComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
