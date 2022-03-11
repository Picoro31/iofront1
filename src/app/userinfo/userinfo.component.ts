/* eslint-disable @typescript-eslint/dot-notation */

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { interval, Subscription, timer } from 'rxjs';
import { LoginService } from '../login.service';
import { OrderService } from '../order.service';

class Orders {
  no?: any;
  name?: any;
  type?: any;
  buysale?: any;
  price?: any;
  quantity?: any;
  total?: any;
}

class login {
  username?: any;
  password?: any;
  img?: any;
}

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss'],
})
export class UserinfoComponent implements OnInit {

  orderavgsaletxn: number | undefined;
  orderavgbuytxn: number | undefined;
  orderavgsaletxn4i: any | undefined;
  orderavgbuytxn4i: any | undefined;

  orderspercbuy: number | undefined;
  orderspercsale: number | undefined;
  orderspercbuy4i: any | undefined;
  orderspercsale4i: any | undefined;

  ordersbalance: any | undefined;
  orderssumsale: any | undefined;
  orderssumbuy: any | undefined;

  ordersbalance4i: any | undefined;
  orderssumsale4i: any | undefined;
  orderssumbuy4i: any | undefined;

  orderssale: [] | undefined;
  ordersbuy: [] | undefined;

  ordersnumbersale: number | undefined;
  ordersnumberbuy: number | undefined;
  ordersnumber: number | undefined;

  ordersnumbersale4i: number | undefined;
  ordersnumberbuy4i: number | undefined;
  ordersnumber4i: number | undefined;

  productprice1: number | undefined;
  productprice2: number | undefined;
  productprice3: number | undefined;
  productprice4: number | undefined;
  productprice5: number | undefined;

  productprice4i1: number | undefined;
  productprice4i2: number | undefined;
  productprice4i3: number | undefined;
  productprice4i4: number | undefined;
  productprice4i5: number | undefined;

  ordertotal1: number | undefined;
  ordertotal2: number | undefined;
  ordertotal3: number | undefined;
  ordertotal4: number | undefined;
  ordertotal5: number | undefined;

  ordertotal4i1: number | undefined;
  ordertotal4i2: number | undefined;
  ordertotal4i3: number | undefined;
  ordertotal4i4: number | undefined;
  ordertotal4i5: number | undefined;

  orderquantity1: number | undefined;
  orderquantity2: number | undefined;
  orderquantity3: number | undefined;
  orderquantity4: number | undefined;
  orderquantity5: number | undefined;

  orderquantity4i1: number | undefined;
  orderquantity4i2: number | undefined;
  orderquantity4i3: number | undefined;
  orderquantity4i4: number | undefined;
  orderquantity4i5: number | undefined;

  orderbuysale1: string | undefined;
  orderbuysale2: string | undefined;
  orderbuysale3: string | undefined;
  orderbuysale4: string | undefined;
  orderbuysale5: string | undefined;

  orderbuysale4i1: string | undefined;
  orderbuysale4i2: string | undefined;
  orderbuysale4i3: string | undefined;
  orderbuysale4i4: string | undefined;
  orderbuysale4i5: string | undefined;

  productimg4i1: string | undefined;
  productimg4i2: string | undefined;
  productimg4i3: string | undefined;
  productimg4i4: string | undefined;
  productimg4i5: string | undefined;

  productimgi1: string | undefined;
  productimgi2: string | undefined;
  productimgi3: string | undefined;
  productimgi4: string | undefined;
  productimgi5: string | undefined;

  ordernamess4i5: string | undefined;
  ordernamessi5: string | undefined;
  ordernamess4i4: string | undefined;
  ordernamessi4: string | undefined;
  ordernamess4i3: string | undefined;
  ordernamessi3: string | undefined;
  ordernamess4i2: string | undefined;
  ordernamessi2: string | undefined;
  ordernamess4i1: string | undefined;
  ordernamessi1: string | undefined;

  ordertotals: [] | undefined;
  orderquantitys: [] | undefined;
  ordernames: [] | undefined;
  ordernos: [] | undefined;

  orders: Orders[] | undefined;
  ordertotal: number | undefined;
  quantity: number | undefined;
  orderprice: number | undefined;
  orderbuysale: string | undefined;
  ordertype: string | undefined;
  ordername: string | undefined;
  orderno: number | undefined;

  NranproductPname: number | undefined;
  ranproductPname: string | undefined;
  ranBuysale: string | undefined;
  producttype: [] | undefined;
  productPname: [] | undefined;
  productPrice: [] | undefined;
  productVolume: [] | undefined;

  subscription2!: Subscription;
  subscription!: Subscription;
  Numm: number | undefined;
  NummLog: number | undefined;

  dateTime: Date | undefined;

  fetchuser4: string | undefined;
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

  NlogUser: number | undefined;
  NlogPass: number | undefined;

  pass2: string | undefined;
  user2: string | undefined;
  img2: string | undefined;

  Nuser2: number | undefined;
  Npass2: number | undefined;

  i: number | undefined;
  i2: number | undefined;
  names: string | undefined;

  loginuser: any;
  loginimg: any;

  constructor(
    private loginService: LoginService,
    private orderService: OrderService,
    private http:  HttpClient,
    private router: Router,
    private routerA: ActivatedRoute
  ) {

    this.ordernamess4i1 = this.ordernamessi1;
    this.ordernamess4i2 = this.ordernamessi2;
    this.ordernamess4i3 = this.ordernamessi3;
    this.ordernamess4i4 = this.ordernamessi4;
    this.ordernamess4i5 = this.ordernamessi5;

    this.productimg4i1 = this.productimgi1;
    this.productimg4i2 = this.productimgi2;
    this.productimg4i3 = this.productimgi3;
    this.productimg4i4 = this.productimgi4;
    this.productimg4i5 = this.productimgi5;

    this.orderbuysale4i1 = this.orderbuysale1;
    this.orderbuysale4i2 = this.orderbuysale2;
    this.orderbuysale4i3 = this.orderbuysale3;
    this.orderbuysale4i4 = this.orderbuysale4;
    this.orderbuysale4i5 = this.orderbuysale5;

    this.orderquantity4i1 = this.orderquantity1;
    this.orderquantity4i2 = this.orderquantity2;
    this.orderquantity4i3 = this.orderquantity3;
    this.orderquantity4i4 = this.orderquantity4;
    this.orderquantity4i5 = this.orderquantity5;

    this.ordertotal4i1 = this.ordertotal1;
    this.ordertotal4i2 = this.ordertotal2;
    this.ordertotal4i3 = this.ordertotal3;
    this.ordertotal4i4 = this.ordertotal4;
    this.ordertotal4i5 = this.ordertotal5;

    this.productprice4i1 = this.productprice1;
    this.productprice4i2 = this.productprice2;
    this.productprice4i3 = this.productprice3;
    this.productprice4i4 = this.productprice4;
    this.productprice4i5 = this.productprice5;

    this.ordersnumber4i = this.ordersnumber;
    this.ordersnumberbuy4i = this.ordersnumberbuy;
    this.ordersnumbersale4i = this.ordersnumbersale;

    this.orderssumsale4i = this.orderssumsale;
    this.orderssumbuy4i = this.orderssumbuy;
    this.ordersbalance4i = this.ordersbalance;

    this.orderspercbuy4i = this.orderspercbuy;
    this.orderspercsale4i = this.orderspercsale;

    this.orderavgbuytxn4i = this.orderavgbuytxn;
    this.orderavgsaletxn4i = this.orderavgsaletxn;

    let sub = this.routerA.params.subscribe(params => {
      this.loginuser = params['user2'];
      // console.log(this.loginuser);
      fetch('http://172.20.10.10:8080/api/login/'+this.loginuser)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const logUsername = [];
        const logPassword = [];
        const logImg = [];
        for (let i = 0; i < data.recordset.length; i++) {
          logUsername.push(data.recordset[i].username);
          logPassword.push(data.recordset[i].password);
          logImg.push(data.recordset[i].img);
        }
        this.loginimg = logImg[0];
        // console.log(this.loginimg);

      });
    });
  }

  ngOnInit() {

    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date();
    });

    const source = interval(3000);
    this.subscription = source.subscribe((val) => this.genTime());

    const source2 = interval(5000);
    this.subscription2= source2.subscribe((val) => this.fetchOrder());
  }

  genTime() {

    this.dateTime = new Date();
    let sec: number = this.dateTime.getSeconds();
    console.log('sec:' + sec);
    let Numm = Math.floor(Math.random() * 1000);

    fetch('http://172.20.10.10:8080/api/productlists')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        let producttype = [];
        let productPname = [];
        let productPrice = [];
        let productVolume = [];
        let ranbuysale = ['buy', 'sale'];

        for (let i = 0; i < data.recordset.length; i++) {
          productPname.push(data.recordset[i].pname);
          productPrice.push(data.recordset[i].price);
          productVolume.push(data.recordset[i].volume);
          producttype.push(data.recordset[i].type);
        }

        // console.log(producttype);

        let ranBuysale =
          ranbuysale[Math.floor(Math.random() * ranbuysale.length)];
        let ranproductPname =
          productPname[Math.floor(Math.random() * productPname.length)];
        let NranproductPname = productPname.indexOf(ranproductPname);

        // console.log(NranproductPname)

        let ordername = ranproductPname;
        let ordertype = producttype[NranproductPname];
        let orderbuysale = ranBuysale;
        let orderprice = productPrice[NranproductPname];
        let orderquantity = Numm;
        let ordertotal = orderprice * Numm;

        fetch('http://172.20.10.10:8080/api/orders')
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            let no = data.recordset.length;
            let orderno = no + 1;
            // console.log(orderno);
            let headers = new HttpHeaders();
            headers = headers.append('Content-Type', 'application/json');

            const entryorder = {
              no: orderno,
              name: ordername,
              type: ordertype,
              buysale: orderbuysale,
              price: orderprice,
              quantity: orderquantity,
              total: ordertotal,
            };
            this.orderService.create(entryorder).subscribe({
              next: () => {
                this.fetchorder();
                orderno;
                ordername;
                ordertype;
                orderbuysale;
                orderprice;
                orderquantity;
                ordertotal;
              },
            });
          });
      });
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
    this.subscription2 && this.subscription2.unsubscribe();
  }

  fetch() {
    this.loginService.fetch().subscribe({
      next: (response: login[]) => (this.logins = response),
    });
  }

  fetchorder() {
    this.orderService.fetchorder().subscribe({
      next: (response: Orders[]) => (this.orders = response),
    });
  }

  fetchOrder() {
    fetch('http://172.20.10.10:8080/api/orders')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        let ordernames = [];
        let orderbuysales = [];
        let orderquantitys = [];
        let ordertotals = [];
        let ordersnumber = data.recordset.length;
        this.ordersnumber4i = ordersnumber;

        for (let i = 0; i < data.recordset.length; i++) {
          ordernames.push(data.recordset[i].name);
          orderbuysales.push(data.recordset[i].buysale);
          orderquantitys.push(data.recordset[i].quantity);
          ordertotals.push(data.recordset[i].total);
        }

        let ordertotal1 = ordertotals[data.recordset.length - 1];
        let ordertotal2 = ordertotals[data.recordset.length - 2];
        let ordertotal3 = ordertotals[data.recordset.length - 3];
        let ordertotal4 = ordertotals[data.recordset.length - 4];
        let ordertotal5 = ordertotals[data.recordset.length - 5];

        let orderquantity1 = orderquantitys[data.recordset.length - 1];
        let orderquantity2 = orderquantitys[data.recordset.length - 2];
        let orderquantity3 = orderquantitys[data.recordset.length - 3];
        let orderquantity4 = orderquantitys[data.recordset.length - 4];
        let orderquantity5 = orderquantitys[data.recordset.length - 5];

        let orderbuysale1 = orderbuysales[data.recordset.length - 1];
        let orderbuysale2 = orderbuysales[data.recordset.length - 2];
        let orderbuysale3 = orderbuysales[data.recordset.length - 3];
        let orderbuysale4 = orderbuysales[data.recordset.length - 4];
        let orderbuysale5 = orderbuysales[data.recordset.length - 5];

        let ordernamessi1 = ordernames[data.recordset.length - 1];
        let ordernamessi2 = ordernames[data.recordset.length - 2];
        let ordernamessi3 = ordernames[data.recordset.length - 3];
        let ordernamessi4 = ordernames[data.recordset.length - 4];
        let ordernamessi5 = ordernames[data.recordset.length - 5];

        this.ordernamess4i1 = ordernamessi1;
        this.ordernamess4i2 = ordernamessi2;
        this.ordernamess4i3 = ordernamessi3;
        this.ordernamess4i4 = ordernamessi4;
        this.ordernamess4i5 = ordernamessi5;

        this.orderbuysale4i1 = orderbuysale1;
        this.orderbuysale4i2 = orderbuysale2;
        this.orderbuysale4i3 = orderbuysale3;
        this.orderbuysale4i4 = orderbuysale4;
        this.orderbuysale4i5 = orderbuysale5;

        this.orderquantity4i1 = orderquantity1;
        this.orderquantity4i2 = orderquantity2;
        this.orderquantity4i3 = orderquantity3;
        this.orderquantity4i4 = orderquantity4;
        this.orderquantity4i5 = orderquantity5;

        this.ordertotal4i1 = ordertotal1;
        this.ordertotal4i2 = ordertotal2;
        this.ordertotal4i3 = ordertotal3;
        this.ordertotal4i4 = ordertotal4;
        this.ordertotal4i5 = ordertotal5;

        fetch('http://172.20.10.10:8080/api/productlists/' + ordernamessi1)
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            let productimgi1 = data.recordset[0].pimg;
            this.productimg4i1 = productimgi1;
            let productprice1 = data.recordset[0].price;
            this.productprice4i1 = productprice1;
            // console.log(productimgi1);
          });
        fetch('http://172.20.10.10:8080/api/productlists/' + ordernamessi2)
          .then((response) => response.json())
          .then((data) => {
            let productimgi2 = data.recordset[0].pimg;
            this.productimg4i2 = productimgi2;
            let productprice2 = data.recordset[0].price;
            this.productprice4i2 = productprice2;
          });
        fetch('http://172.20.10.10:8080/api/productlists/' + ordernamessi3)
          .then((response) => response.json())
          .then((data) => {
            let productimgi3 = data.recordset[0].pimg;
            this.productimg4i3 = productimgi3;
            let productprice3 = data.recordset[0].price;
            this.productprice4i3 = productprice3;
          });
        fetch('http://172.20.10.10:8080/api/productlists/' + ordernamessi4)
          .then((response) => response.json())
          .then((data) => {
            let productimgi4 = data.recordset[0].pimg;
            this.productimg4i4 = productimgi4;
            let productprice4 = data.recordset[0].price;
            this.productprice4i4 = productprice4;
          });
        fetch('http://172.20.10.10:8080/api/productlists/' + ordernamessi5)
          .then((response) => response.json())
          .then((data) => {
            let productimgi5 = data.recordset[0].pimg;
            this.productimg4i5 = productimgi5;
            let productprice5 = data.recordset[0].price;
            this.productprice4i5 = productprice5;
          });

        fetch('http://172.20.10.10:8080/api/orders/buysale/buy')
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          let ordersnumberbuy = data.recordset.length;
          let ordersnumbersale = ordersnumber-ordersnumberbuy;
          this.ordersnumberbuy4i = ordersnumberbuy;
          this.ordersnumbersale4i = ordersnumbersale;

          let ordersbuy = [];
          for (let i = 0; i < data.recordset.length; i++) {
            ordersbuy.push(data.recordset[i].total);
          }
          // console.log(ordersbuy);
          let orderssumbuy = ordersbuy.reduce((a,b) => a+b,0);
          this.orderssumbuy4i = (orderssumbuy*1e-6).toFixed(2);
          // console.log("sumbuy"+orderssumbuy);

          fetch('http://172.20.10.10:8080/api/orders/buysale/sale')
          .then((response) => response.json())
          .then((data) => {
          // console.log(data);
          let orderssale = [];
          for (let i = 0; i < data.recordset.length; i++) {
            orderssale.push(data.recordset[i].total);
          }
          let orderssumsale = orderssale.reduce((a,b) => a+b,0);
          this.orderssumsale4i = (orderssumsale*1e-6).toFixed(2);
          // console.log("sumsale"+orderssumsale);
          let ordersbalance = orderssumbuy-orderssumsale;
          this.ordersbalance4i = (ordersbalance*1e-6).toFixed(2);

          let orderspercbuy = ordersnumberbuy*100/ordersnumber;
          let orderspercsale = ordersnumbersale*100/ordersnumber;
          this.orderspercbuy4i = orderspercbuy.toFixed(0);
          this.orderspercsale4i = orderspercsale.toFixed(0);

          let orderavgbuytxn = (orderssumbuy*1e-6)/ordersnumberbuy;
          let orderavgsaletxn = (orderssumsale*1e-6)/ordersnumbersale;
          this.orderavgbuytxn4i = orderavgbuytxn.toFixed(2);
          this.orderavgsaletxn4i = orderavgsaletxn.toFixed(2);

          });
        });
      });
  }

  getColorStatus1(orderbuysale4i1: any) {
    return orderbuysale4i1 === 'buy' ? 'rgb(0, 16, 247)' : 'rgb(245, 4, 4)';
  }
  getColorStatus2(orderbuysale4i2: any) {
    return orderbuysale4i2 === 'buy' ? 'rgb(0, 16, 247)' : 'rgb(245, 4, 4)';
  }
  getColorStatus3(orderbuysale4i3: any) {
    return orderbuysale4i3 === 'buy' ? 'rgb(0, 16, 247)' : 'rgb(245, 4, 4)';
  }
  getColorStatus4(orderbuysale4i4: any) {
    return orderbuysale4i4 === 'buy' ? 'rgb(0, 16, 247)' : 'rgb(245, 4, 4)';
  }
  getColorStatus5(orderbuysale4i5: any) {
    return orderbuysale4i5 === 'buy' ? 'rgb(0, 16, 247)' : 'rgb(245, 4, 4)';
  }

  edituser() {
    let user2 = this.loginuser;
    let img2 = this.loginimg;
    this.router.navigate(['/edituser', {user2, img2}]);
  }
  logout() {
    this.router.navigate(['/home']);
  }
}
