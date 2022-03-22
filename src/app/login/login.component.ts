import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  constructor(
    private auth: LoginService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  onSubmit(): void {
    const { email } = this.authForm.value;

    this.auth.setEmail = email;
    this.auth.setIsAuth = true;

    this.route.navigate(['']);
  }
}
