import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  //loggedIn = false;
  constructor(public service: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login() {
    this.service.login(this.model).subscribe(response => {
      console.log('Login works');
      //this.loggedIn = true;
    }, error => {
      console.log('Error');
    });
  }

  getCurrentUser() {
    this.service.currentUser$.subscribe(
      user => {
        //this.loggedIn = !!user;
      },
      error => console.log(error)
    );
  }

  logout() {
    this.service.logout();
    //this.loggedIn = false;
  }

}
