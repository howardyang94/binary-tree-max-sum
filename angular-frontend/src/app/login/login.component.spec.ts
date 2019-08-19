// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { LoginComponent } from './login.component';

// import { Component, OnInit, DebugElement } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { first } from 'rxjs/operators';

// import { AlertService, AuthenticationService } from '.././_services';
// // import {} from '../'
// import { BrowserModule } from '@angular/platform-browser';
// import { By } from 'protractor';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HomeComponent } from '../home';
// import { RegisterComponent } from '../register';
// import { HttpClientTestingModule } from '@angular/common/http/testing';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   let de: DebugElement;
//   let el: HTMLElement;
//   let authenticationService: AuthenticationService;
//   let alertService: AlertService;

//   beforeEach(/*async(*/() => {
//     TestBed.configureTestingModule({
//       declarations: [ LoginComponent ], 
//       imports: [
//           BrowserModule,
//           FormsModule,
//           ReactiveFormsModule,
//           HttpClientTestingModule,
//           RouterTestingModule
//         //   .withRoutes(
//         //     [{path:'', component: HomeComponent}, 
//         //     {path:'login', component: LoginComponent},
//         //     {path:'register', component: RegisterComponent}]
//         // ),
//       ],
//       providers: [AlertService, AuthenticationService]
//     }).compileComponents().then(() => {
//         const fixture = TestBed.createComponent(LoginComponent);
//         const component = fixture.componentInstance;
        
//         // de = fixture.debugElement.query(By.css('form'));
//         // el = de.nativeElement;
//         fixture.detectChanges();

//     });
//     alertService = TestBed.get(AlertService); 
//     authenticationService = TestBed.get(AuthenticationService); 

    
//   });
//   it('should be created', () => {
//     // const service: UsersService = TestBed.get(UsersService);
//     expect(component).toBeTruthy();
//   });

// //   beforeEach(() => {

// //   });

// //   it('should set loading to false', () => {
// //     expect(component.loading).toBeFalsy();
// //   });
// //   it('should set submitted to false', () => {
// //     expect(component.submitted).toBeFalsy();
// //   });
// });

import { LoginComponent } from "./login.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService, AlertService } from '../_services';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let authenticationService: AuthenticationService;
    let alertService: AlertService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[LoginComponent],
            providers: [AuthenticationService, AlertService],
            imports: [RouterTestingModule, FormsModule, 
                ReactiveFormsModule, HttpClientTestingModule]
        })//.compileComponents();
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
    it('should set loading to false', () => {
        expect(component.loading).toBeFalsy();
    });
    it('should set submitted to false', () => {
        expect(component.submitted).toBeFalsy();
    });
});

