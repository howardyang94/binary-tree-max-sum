import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { UserService, AuthenticationService, AlertService } from '@/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];
    treeString;
    maxSum;
    loading = false;
    // disableReset = true;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        // this.loadAllUsers();
    }

    // deleteUser(id: number) {
    //     this.userService.delete(id)
    //         .pipe(first())
    //         .subscribe(() => this.loadAllUsers());
    // }

    // private loadAllUsers() {
    //     this.userService.getAll()
    //         .pipe(first())
    //         .subscribe(users => this.users = users);
    // }
    submit(tree: string) {
        // tree = '{"tree": "' + tree + '"}'
        // const obj = {tree: tree}
        // console.log(tree);
        // console.log(JSON.stringify(obj));
        if (tree === '') {
            this.clear();
            return;
        }
        this.alertService.clear();

        this.treeString = tree.trim();
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
                this.clear();
                this.alertService.error(error);
                this.loading = false;
            });
    }
    clear() {
        this.alertService.clear();
        this.treeString = '';
        this.maxSum = '';
        // this.disableReset = true;
    }
}