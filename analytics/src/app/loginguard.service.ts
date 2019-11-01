import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class loginGuard implements CanActivate {
    canActivate() {
        console.log('loginGuard#canActivate called');
        if (null != localStorage.getItem("role")) {
            this.router.navigate(['\dashboard']);
        } 
        return true;
    }
    //Constructor 
    constructor(private router: Router) { }
}