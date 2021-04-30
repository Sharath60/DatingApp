import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-testerrors',
  templateUrl: './testerrors.component.html',
  styleUrls: ['./testerrors.component.css']
})
export class TesterrorsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  baseUrl = environment.apiUrl;
  validationErrors: string[];
  ngOnInit(): void {
  }
  get401Error() {
    this.http.get(this.baseUrl + 'buggy/auth').subscribe(response => {
      console.log(response);
    }, error => { console.log(error); });
  }
  get404Error() {
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe(response => {
      console.log(response);
    }, error => { console.log(error); });
  }
  get500Error() {
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe(response => {
      console.log(response);
    }, error => { console.log(error); });
  }
  get400Error() {
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(response => {
      console.log(response);
    }, error => { console.log(error); });
  }
  get400ValidationError() {
    this.http.post(this.baseUrl + 'account/register', {}).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.validationErrors = error;

    });
  }

}
