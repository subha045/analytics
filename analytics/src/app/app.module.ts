import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { LoginComponent } from "./components/authentication/components/login/login.component";
import { RegisterComponent } from "./components/authentication/components/register/register.component";
import { AuthenticationService } from './components/authentication/authentication.service';
import { FlexLayoutModule } from "@angular/flex-layout";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip'
import { APP_BASE_HREF } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AuthGuard } from './authguard.service';
import { loginGuard } from './loginguard.service';


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginGuard]
  }, {
    path: 'register', component: RegisterComponent
  }, {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  }, {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
]

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ScrollingModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, RegisterComponent,
    LoginComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, AuthenticationService, AuthGuard, loginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
