import { Component, OnInit } from '@angular/core';
import { User } from '../../User';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'user-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message: string;
  newUser: User = new User();
  constructor(private authService: AuthenticationService,
    private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  registerUser() {
    let message = "UserId already exists! Choose anything else";
    // console.log("Register User data:", this.newUser);
    this.authService.registerUser(this.newUser).subscribe(data => {
      // console.log("User registered", data);
      this.router.navigate(['/login']);
    }, error => {
      this.snackBar.open(message, '', {
        duration: 2000
      });
    });
  }
}
