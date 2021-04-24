import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit {
error:any;
  constructor(private router:Router) { 
    const navigationextras = this.router.getCurrentNavigation();
    this.error = navigationextras?.extras?.state?.error;
  }

  ngOnInit(): void {
  }

}
