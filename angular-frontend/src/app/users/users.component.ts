import { Component, OnInit } from '@angular/core';
import { UserService, AlertService } from '../_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];

  constructor(
    private userService: UserService,
    private alertService: AlertService
  ) { }
  
  ngOnInit() {
    this.loadAllUsers();
  }
  // deleteUser(id: number) {
  //   this.userService.delete(id)
  //     .pipe(first())
  //     .subscribe(() => this.loadAllUsers());
  // }

  private loadAllUsers() {
    this.userService.getAll()
      .pipe(first())
      .subscribe(
        users => {
          this.users = users
        },
        error => {
          this.alertService.error(error);
      });
  }
}
