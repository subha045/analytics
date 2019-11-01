import { Component, OnInit } from '@angular/core';
import { User } from '../../User';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  user: User = new User();

  constructor(private authService: AuthenticationService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  loginUser() {
    if (this.user.userId == "admin" && this.user.password == "admin") {
      localStorage.setItem("role", "admin");
      this.router.navigate(['/dashboard']);
    } else if (this.user.userId == "user1" && this.user.password == "user1") {
      localStorage.setItem("role", "user");
      this.router.navigate(['/dashboard']);
    } else if (this.user.userId == "agency" && this.user.password == "agency") {
      localStorage.setItem("role", "agency");
      this.router.navigate(['/dashboard']);
    }
    else {
      this.router.navigate(['/login']);
    }

    /*    let message = "Wrong Credential. Please try again with correct one.";
        // console.log("Login user", this.user);
        this.authService.loginUser(this.user).subscribe(data => {
          // console.log("Login successful");
          if(data['token']) {
            this.authService.setToken(data['token']);
            this.router.navigate(['/gif']);
          }
          
        },error=>{
          this.snackBar.open(message, '', {
            duration: 2000
        });
        });*/
  }
}
