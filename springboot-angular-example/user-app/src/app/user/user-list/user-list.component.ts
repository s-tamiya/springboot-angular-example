import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [ UserService ]
})
export class UserListComponent implements OnInit {

  public users: User[];

  constructor(
    private router:  Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.findAll().subscribe(
      users => { this.users = users; },
      error => console.log(error)
    );
  }

  redirectNewUserPage() {
    this.router.navigate(['/user/create']);
  }

  editUserPage(user: User) {
    this.router.navigate(['/user/edit', user.id]);
  }

  deleteUser(user: User) {
    //this.router.navigate(['/user/edit', user.id]);
    console.log('Delete User')
  }
}
