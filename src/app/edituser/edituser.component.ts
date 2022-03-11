/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss'],
})
export class EdituserComponent implements OnInit {

  currentImage = null;

  editUser: any;
  editImg: any;

  constructor(
    private camera: Camera,
    private router: Router,
    private routerA: ActivatedRoute
  ) {
    let sub = this.routerA.params.subscribe(params => {
      this.editUser = params['user2'];
      this.editImg = params['img2'];
      console.log(this.editUser, this.editImg);
      });
  }

  ngOnInit() {}

  captureImage() {
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        this.currentImage = imageData;
        this.currentImage = 'data:image/jpeg;base64,' + imageData;
        // this.addPhoto(base64Image);
        console.log(this.currentImage);
      },
      (err) => {
        console.log('Image error', err);
      }
    );
  }

  editUSER(emailInput: HTMLInputElement,
    passwordInput: HTMLInputElement) {
  }

  userinfo() {
    let user2 = this.editUser;
    this.router.navigate(['/userinfo', {user2}]);
  }

}
