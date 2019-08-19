import { TestBed } from '@angular/core/testing';

import { AlertService } from "./alert.service";
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home';
import { LoginComponent } from '../login';
import { RegisterComponent } from '../register';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject, of, Observable } from 'rxjs';

describe('AlertService', () => {
    let alertService: AlertService;
    beforeEach(() => { 
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
                // .withRoutes(
                //     [{path:'', component: HomeComponent}, 
                //     {path:'login', component: LoginComponent},
                //     {path:'register', component: RegisterComponent}]
                // )
                ,
                FormsModule,
                ReactiveFormsModule
            ],
            providers: [AlertService], //\
            // declarations: [HomeComponent, LoginComponent, RegisterComponent] 
          });
          alertService = TestBed.get(AlertService); //
    });

    it('should be created', () => {
        // const service: UsersService = TestBed.get(UsersService);
        expect(alertService).toBeTruthy();
    });
    describe('getAlert', () => {
        it('should return Subject', () => {
            const subject = new Subject<any>();
            let response;
            spyOn(alertService, 'getAlert').and.returnValue(of(subject.asObservable()));
            alertService.getAlert().subscribe(res => {
                response = res;
            });
            expect(response).toEqual(subject.asObservable())
        })
    })
});
