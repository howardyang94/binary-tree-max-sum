import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '.././_models';
import { UserService, AuthenticationService, AlertService } from '.././_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    currentUser: User;
    users = [];
    treeString;
    maxSum;
    loading = false;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }
    // deleteUser(id: number) {
    //     this.userService.delete(id)
    //         .pipe(first())
    //         .subscribe(() => this.loadAllUsers());
    // }
    
    // submit tree and send to backend for calculations
    submit(tree: string) {
        if (tree === '') {
            this.clear();
            return;
        }
        this.alertService.clear();

        this.treeString = tree.trim();
        // perform a quick input check, several other checks will be done by back end
        if (this.treeString.charAt(0) === 'e') {
            this.clear();
            this.alertService.error("Root of the tree cannot be null");
            return;
        }
        this.loading = true;
        
        this.userService.maxSum(this.treeString)
            .pipe(first())
            .subscribe(sum =>  {
                this.maxSum = sum;
                this.loading = false;
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
    clear() {
        this.alertService.clear();
        this.treeString = '';
        this.maxSum = '';
    }
}