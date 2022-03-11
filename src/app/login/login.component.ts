/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/naming-convention */
import { RouterModule, Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';


class login {
  username?: any;
  password?: any;
  img?: any;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  img4: string | undefined;
  Puser4: string | undefined;
  user4: string | undefined;

  username: string | undefined;
  password: string | undefined;
  img: string | undefined;

  logins: login[] | undefined;
  logUsername: [] | undefined;
  logPassword: any[] | undefined;
  logImg: [] | undefined;

  pass2: string | undefined;
  public user2: string | undefined;
  img2: string | undefined;

  i: number | undefined;
  i2: number | undefined;
  names: string | undefined;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  fetch() {
    this.loginService.fetch().subscribe({
      next: (response: login[]) => (this.logins = response),
    });
  }

  signinEntry(
    usernameInput: HTMLInputElement,
    passwordInput: HTMLInputElement
  ) {
    fetch('http://172.20.10.10:8080/api/login')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        const logUsername = [];
        const logPassword = [];
        const logImg = [];
        let NlogUser: string | boolean;
        let NlogPass: string | boolean;

        for (let i = 0; i < data.recordset.length; i++) {
          logUsername.push(data.recordset[i].username);
          logPassword.push(data.recordset[i].password);
          logImg.push(data.recordset[i].img);
        }
        const Nuser2 = logUsername.indexOf(usernameInput.value);
        const user2 = logUsername[Nuser2];
        const Npass2 = logPassword.indexOf(passwordInput.value);
        const pass2 = logPassword[Npass2];
        const img2 = logImg[Npass2];
        NlogUser = logUsername.indexOf(usernameInput.value) > -1;
        // console.log('User :' + ' ' + NlogUser);
        NlogPass = logPassword.indexOf(passwordInput.value) > -1;
        // console.log('Password :' + ' ' + NlogPass);
        if (NlogUser == true && NlogPass == true) {
          if (Nuser2 == Npass2) {
            this.user4 = user2;
            this.Puser4 = pass2;
            this.img4 = img2;
            // console.log(img2);
            this.router.navigate(['/userinfo', {user2,img2}]);
            usernameInput.value = '';
            passwordInput.value = '';
          } else {
            usernameInput.value = '';
            passwordInput.value = '';
            this.user4 = '';
            this.Puser4 = '';
            this.img4 = '';
            this.router.navigate(['/login']);
            alert('Wrong Username & Password');
          }
        } else {
          usernameInput.value = '';
          passwordInput.value = '';
          this.user4 = '';
          this.Puser4 = '';
          this.img4 = '';
          this.router.navigate(['/login']);
          alert('Please Insert New username and password');
        }
      });
  }

}
