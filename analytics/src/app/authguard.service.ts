import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate() {
        console.log('AuthGuard#canActivate called');
        if (null != localStorage.getItem("role")) {
            return true;
        } else {
            this.router.navigate(['\login']);
            return false;
        }
    }
    //Constructor 
    constructor(private router: Router) { }
}