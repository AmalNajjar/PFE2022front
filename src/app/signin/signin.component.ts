
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { LoginInfo } from 'src/app/login-info';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { first } from 'rxjs';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public signinForm!: FormGroup;
  form:any={};
  isLoginFailed=false;
  
  constructor(private fb: FormBuilder,private authService : AuthService,
    public router: Router,private token:TokenService) { }

  ngOnInit(): void {
    this.initFormBuilder()
  }
  private initFormBuilder(): void{
    this.signinForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.min(4)]],
    })
  }
  public errorMessage(formControlName: string, email?: boolean): string | void {
    if (this.signinForm.controls[formControlName]?.errors?.['required']){
      return 'Champ obligatoire'
    }
  }
  public signin(){
    this.authService.login(new LoginInfo(this.form.username,this.form.password))
  .pipe(first()).subscribe(
    data=>{
      this.isLoginFailed=false;
      this.router.navigateByUrl('/gestionDirection')
    },
    error=>{
      this.errorMessage=error.error.messsage;
      this.isLoginFailed=true;

  })
  }

}
