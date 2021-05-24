import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
import { PresenceService } from './_services/presence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
baseUrl = environment.apiUrl;
  title = 'Dating App';
  users: any;
  constructor(private http: HttpClient, private service: AccountService,
     private presence: PresenceService) {

  }

  ngOnInit(): void {   
    this.setCurrentUser();
  }

  getUsers() {
    this.http.get(this.baseUrl+"users")
      .subscribe(response => { this.users = response },
        error => { console.log(error) }
      );
  }

  setCurrentUser() {    
    const user: User = JSON.parse(localStorage.getItem('user'));
    if(user)
    {
    this.service.setCurrentUser(user);
    this.presence.createHubConnection(user);
    }
  }

}
