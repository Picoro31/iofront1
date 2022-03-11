/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

class login {
  username?: any;
  password?: any;
  img?: any;
  email?: any;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  img4: string | undefined;
  Puser4: string | undefined;
  user4: string | undefined;

  username: string | undefined;
  password: string | undefined;
  img: string | undefined;
  email: string | undefined;

  logins: login[] | undefined;
  logUsername: [] | undefined;
  logPassword: any[] | undefined;
  logImg: [] | undefined;

  pass2: string | undefined;
  user2: string | undefined;
  img2: string | undefined;

  i: number | undefined;
  i2: number | undefined;
  names: string | undefined;

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private router: Router,
  ) {
   }

  ngOnInit() {}

  fetch() {
    this.loginService.fetch().subscribe({
      next: (response: login[]) => (this.logins = response),
    });
  }

  RegesEntry(usernameInput: HTMLInputElement,
    passwordInput: HTMLInputElement,
    emailInput: HTMLInputElement) {

    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // let pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // if (emailInput.value.match(pattern)) {
    //   console.log(emailInput.value.match(pattern));
    //   console.log('email address'+usernameInput.value+passwordInput.value);
    // } else {
    //   console.log('not email address');
    // }
    fetch('http://172.20.10.10:8080/api/login')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const logUsername = [];
        const logPassword = [];
        const logImg = [];
        const logEmail = [];

        let NlogUser: string | boolean;
        let NlogPass: string | boolean;
        let NlogUserPass: string | boolean;
        let NlogPassUser: string | boolean;
        let NlogEmail: string | boolean;

        for (let i = 0; i < data.recordset.length; i++) {
          logUsername.push(data.recordset[i].username);
          logPassword.push(data.recordset[i].password);
          logImg.push(data.recordset[i].img);
          logEmail.push(data.recordset[i].email);
        }

        NlogUser = logUsername.indexOf(usernameInput.value) > -1;
        console.log('User :' + ' ' + NlogUser);
        NlogPass = logPassword.indexOf(passwordInput.value) > -1;
        console.log('Password :' + ' ' + NlogPass);
        NlogUserPass = logUsername.indexOf(passwordInput.value) > -1;
        console.log('UserPass :' + ' ' + NlogUserPass);
        NlogPassUser = logPassword.indexOf(usernameInput.value) > -1;
        console.log('PassUser :' + ' ' + NlogPassUser);
        NlogEmail = logEmail.indexOf(emailInput.value) > -1;
        console.log('Email :' + ' ' + NlogEmail);

        if(usernameInput.value != ''
          && passwordInput.value != ''
          && emailInput.value.match(pattern)
          ) {
          // emailInput.value != '') {

            if (NlogUser == false && NlogPass == false && NlogEmail == false
              && NlogUserPass == false && NlogPassUser == false
              && NlogEmail == false) {

              let headers = new HttpHeaders();
              headers = headers.append('Content-Type', 'application/json');

              const entry = {
                username: usernameInput.value,
                password: passwordInput.value,
                email: emailInput.value,
              };
              this.loginService.create(entry).subscribe({
                next: () => {
                  this.fetch();
                  usernameInput.value;
                  passwordInput.value;
                  emailInput.value;
                },
              });

              fetch('http://172.20.10.10:8080/api/login')
                .then((response) => response.json())
                .then((data) => {
                  const logUsername = [];
                  const logPassword = [];
                  const logImg = [];

                  for (let i = 0; i < data.recordset.length; i++) {
                    logUsername.push(data.recordset[i].username);
                    logPassword.push(data.recordset[i].password);
                    logImg.push(data.recordset[i].img);
                  }

                  let Nuser2 = logUsername.indexOf(usernameInput.value);
                  let user2 = logUsername[Nuser2];
                  let Npass2 = logPassword.indexOf(passwordInput.value);
                  let pass2 = logPassword[Npass2];

                  this.user4 = user2;
                  this.Puser4 = pass2;
                  console.log(this.user4);
                  console.log(this.Puser4);
                  this.router.navigate(['/userinfo']);
                  // console.log(entry);
                  usernameInput.value = '';
                  passwordInput.value = '';
                  emailInput.value = '';
                });
            } else {
              usernameInput.value = '';
              passwordInput.value = '';
              emailInput.value = '';
              this.user4 = '';
              this.Puser4 = '';
              this.img4 = '';
              // this.router.navigate(['/login']);
              alert('Changed New username, password and Email');
              console.log('Changed New username, password and Email');
            }

          console.log('null');
        } else {
          usernameInput.value = '';
          passwordInput.value = '';
          emailInput.value = '';
          alert('Please check your email address');
          console.log('Please check your email address');
        }
      });
  }
}
