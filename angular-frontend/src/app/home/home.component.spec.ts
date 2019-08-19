import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserService, AuthenticationService, AlertService } from '.././_services';
import { User } from '../_models';
import { of } from 'rxjs';


describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let userService: UserService;
    let authenticationService: AuthenticationService;
    let alertService: AlertService;

//   let userServiceStub: Partial<UserService>;
//   userServiceStub = {
//     //   maxSum(): {6} 
//   }
//   let authenticationServiceStub: Partial<UserService>;
//   authenticationServiceStub = {  }
//   beforeEach(async(() => {
    
    // userService = TestBed.get(UserService);
    // authenticationService = TestBed.get(AuthenticationService);
    // alertService = TestBed.get(alertService);
//   }));

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers:[
                UserService, 
                AuthenticationService,
                AlertService
            ],        
            imports: [        
                HttpClientTestingModule,        
                RouterTestingModule        
            ],      
            declarations: [ HomeComponent ]    
        })//.compileComponents();    
        fixture = TestBed.createComponent(HomeComponent);    
        component = fixture.debugElement.componentInstance;    
        authenticationService = TestBed.get(AuthenticationService);

    // fixture = TestBed.createComponent(HomeComponent);
    // component = fixture.componentInstance;
    // component.currentUser.firstName = "test";
    // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should set loading to false', () => {
        expect(component.loading).toBeFalsy();
    });
});
