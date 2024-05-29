import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { NgClass } from '@angular/common';
import { LoginService } from '../../../Services/Login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule, RouterLink, ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html'
})

export class LoginComponent {

  loginForm: FormGroup;

  constructor(private loginService: LoginService, private fb: FormBuilder) {   
    
    this.loginForm = this.fb.group({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  }); }

  enableLoginButton: boolean = false;



  handleLoginSubmit(): void {
    if (this.loginForm.valid) {
      const {username, password} = this.loginForm.value;
      this.loginService.login(username, password).subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })

    }
  }

}
