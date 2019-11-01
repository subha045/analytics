import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Location } from '@angular/common';
import { RegisterComponent } from './register.component';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatToolbarModule, MatSnackBarModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';



const testConfig = {
    userData: {
        firstName: 'test',
        lastName: 'testLast',
        userId: 'testUser',
        password: 'testPass'
    }
}

fdescribe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;
    let authService: AuthenticationService;
    let spyUser: any;
    let routes: Router;
    let location: Location;

    class AuthServiceStub {
        currentUser: any;

        constructor() {

        }

        Register(credentials) {
            if (credentials.userId == testConfig.userData.userId) {
                console.log('data:::', this.currentUser);
                return of(credentials.userId);
            } else {
                return of(false);
            }
        }
    }

    class dummy {

    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterComponent],
            imports: [FormsModule, MatFormFieldModule, MatInputModule,
                MatButtonModule, BrowserAnimationsModule, HttpClientModule, MatToolbarModule, MatSnackBarModule,
                RouterTestingModule.withRoutes(
                    [{ path: '', component: dummy }]
                )
            ],
            providers: [{ provide: AuthenticationService, useClass: AuthServiceStub }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        routes = TestBed.get(Router);
        fixture = TestBed.createComponent(RegisterComponent);
        location = TestBed.get(Location);
        component = fixture.componentInstance;
        fixture.detectChanges();
        fixture.debugElement.injector.get(AuthenticationService);
    });

    it('should create app component', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should contain four input box for firstName, lastName, userId and password', () => {
        let firstName = fixture.debugElement.query(By.css('.inputFirstName'));
        let lastName = fixture.debugElement.query(By.css('.inputLastName'));
        let userId = fixture.debugElement.query(By.css('.inputId'));
        let password = fixture.debugElement.query(By.css('.inputPass'));
        let userButton = fixture.debugElement.query(By.css('.register-user'));

        let firstNameInput = firstName.nativeElement;
        let lastNameInput = lastName.nativeElement;
        let userIdInput = userId.nativeElement;
        let passwordInput = password.nativeElement;
        let userButtonInput = userButton.nativeElement;

        expect(firstNameInput).toBeTruthy();
        expect(lastNameInput).toBeTruthy();
        expect(userIdInput).toBeTruthy();
        expect(passwordInput).toBeTruthy();
        expect(userButtonInput).toBeTruthy();
    });

    it('should redirect to register if registered successfully', async(() => {
        let firstName = fixture.debugElement.query(By.css('.inputFirstName'));
        let lastName = fixture.debugElement.query(By.css('.inputLastName'));
        let userId = fixture.debugElement.query(By.css('.inputId'));
        let password = fixture.debugElement.query(By.css('.inputPass'));
        let userButton = fixture.debugElement.query(By.css('.register-user'));

        let firstNameInput = firstName.nativeElement;
        let lastNameInput = lastName.nativeElement;
        let userIdInput = userId.nativeElement;
        let passwordInput = password.nativeElement;
        let userButtonInput = userButton.nativeElement;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            firstNameInput.value = 'test';
            lastNameInput.value = 'test';
            userIdInput.value = 'testuser'+Math.floor(Math.random()*100);
            passwordInput.value = 'testpass';
            userIdInput.dispatchEvent(new Event('inptut'));
            passwordInput.dispatchEvent(new Event('inptut'));
            userButtonInput.click();
        }).then(() => {
            expect(location.path()).toBe('');
        });
    }));
});
