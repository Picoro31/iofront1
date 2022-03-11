/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../email.service';

const mailUrl = 'http://172.20.10.10:8080/sendmail';

class usermail {
  from?: any;
  to?: any;
  subject?: any;
  text?: any;
}

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.scss'],
})
export class ForgetpassComponent implements OnInit {

  from1: string | undefined;
  sub1: string | undefined;
  text1: string | undefined;

  usermail: usermail[] | undefined;
  logUsername: [] | undefined;
  logPassword: any[] | undefined;
  logImg: [] | undefined;

  constructor(private emailService: EmailService,
    private http: HttpClient,
    private router: Router) {}

  ngOnInit() {}

  fetchemail() {
    return this.http.get<usermail[]>(mailUrl);
  }

  sendEmail(emailInput: HTMLInputElement) {
    fetch('http://172.20.10.10:8080/api/login')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const logUsername = [];
      const logPassword = [];
      const logImg = [];
      const logEmail = [];

      if(emailInput.value != '') {

        let NlogEmail: string | boolean;

        for (let i = 0; i < data.recordset.length; i++) {
          logUsername.push(data.recordset[i].username);
          logPassword.push(data.recordset[i].password);
          logImg.push(data.recordset[i].img);
          logEmail.push(data.recordset[i].email);
        }

        NlogEmail = logEmail.indexOf(emailInput.value) > -1;
        console.log('Email :' + ' ' + NlogEmail);

        const Nemail2 = logEmail.indexOf(emailInput.value);
        const user2 = logUsername[Nemail2];
        const pass2 = logPassword[Nemail2];
        const from1 = 'plasmafocuss@gmail.com';
        const sub1 = 'Send Your Information';
        const text1 = 'your username is +'+user2;

        console.log(NlogEmail);

        if(NlogEmail == true) {
          let headers = new HttpHeaders();
            headers = headers.append('Content-Type', 'application/json');

            const entryemail = {
              from: 'plasmafocuss@gmail.com',
              to: emailInput.value,
              subject: 'Send Your Information',
              text: 'your username and password is : '+' '+user2+'(user)'+' '+'and'+' '+pass2+'(password)',
            };

            this.emailService.create(entryemail).subscribe({
              next: () => {
                this.fetchemail();
                from1;
                emailInput.value;
                sub1;
                text1;
              },
          });
          this.router.navigate(['/userinfo']);
        } else {
          emailInput.value = '';
          alert('Wrong email address');
          console.log('Wrong email address');
        }
      } else {
        alert('Please insert your email address');
        console.log('Please insert your email address');
      }
    });
  }
}
