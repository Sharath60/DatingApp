import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  //loggedIn = false;
  constructor(public service: AccountService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.service.currentUser$);
  }

  login() {
    this.service.login(this.model).subscribe(response => {
      console.log('Login works');
      this.router.navigateByUrl('members');
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
