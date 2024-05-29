import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule, RouterLink, ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  enableLoginButton: boolean = false;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  handleLoginSubmit(): void {
    console.log(this.loginForm.value.username, this.loginForm.value.password);
  }

}
