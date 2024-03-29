import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};
  registerForm :FormGroup;
  validationErrors: string[]=[];
  maxDate: Date;
  constructor(private accountService: AccountService,private fb:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.intitializeForm();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() -18);
  }
  intitializeForm()
  {   
    this.registerForm = this.fb.group({
      gender: ['male'],
      username: ['', Validators.required],
      knownAs: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', [Validators.required, this.matchValues('password')]]
    })
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value 
        ? null : {isMatching: true}
    }
  }
  
  register() {
    console.log('jkfsfaksdf');
    this.accountService.register(this.registerForm.value).subscribe(
      user => {
        this.router.navigateByUrl('/members');        
      },
      error=>{
        this.validationErrors = error;
      }
    )
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
