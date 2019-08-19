import { AuthenticationService } from "./authentication.service";
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../_models';


describe('Authentication Service', () => {
    let authenticationService: AuthenticationService;
    beforeEach(() => { 
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            providers: [AuthenticationService], //\
          });
          authenticationService = TestBed.get(AuthenticationService); //
    });

    it('should be created', () => {
        // const service: UsersService = TestBed.get(UsersService);
        expect(authenticationService).toBeTruthy();
    });
    describe('get currentUserValue', () => {
        it('should return currentUser', () => {
            let currentUser = new User()
            currentUser = {
                id: 2,
                username: 'user@email.com',
                password: 'password',
                firstName: 'Jim',
                lastName: 'Carey',
                token: 'token'
            };
            // currentUser.currentU
;
            // authenticationService.currentUserValue
            let spy = spyOnProperty(authenticationService, 'currentUserValue', 'get').and.returnValue(currentUser);
            
            expect(authenticationService.currentUserValue).toEqual(currentUser);
            expect(spy).toHaveBeenCalled();
        });
    });

});

