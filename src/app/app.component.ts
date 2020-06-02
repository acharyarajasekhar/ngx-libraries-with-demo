import { Component } from '@angular/core';
import { NgxImageCropperService } from 'projects/ngx-image-cropper/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  originalImage: string | ArrayBuffer;
  croppedImage: any;

  constructor(
    private ngxImageCropperService: NgxImageCropperService
  ) { }

  onFileChange(e) {

    this.readFile(e.target.files[0]).then((dataURI: any) => {
      this.originalImage = dataURI;
      this.ngxImageCropperService.crop(dataURI).then(croppedImage => {
        this.croppedImage = croppedImage;
      })
    });

  }

  readFile(file: Blob) {

    return new Promise((res) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = event => {
        res(reader.result);
      };
    })

  }

}
