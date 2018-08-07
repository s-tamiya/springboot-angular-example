import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  providers: [ UserService ]
})
export class UserCreateComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.userService.findById(id)
      .subscribe(user => this.user = user);
  }

  saveUser(): void {
    if (this.user.id) {
      this.userService.updateUser(this.user)
        .subscribe(user => this.user = user);
    } else {
      this.userService.saveUser(this.user)
        .subscribe(user => this.user = user);
    }
  }

  goBack(): void {
    this.location.back();
  }

}
