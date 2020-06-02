import { Component, OnInit, ViewChild } from '@angular/core';
import { CropperComponent } from 'angular-cropperjs';
import { ModalController } from '@ionic/angular';

@Component({
  templateUrl: './ngx-image-cropper.component.html',
  styleUrls: ['./ngx-image-cropper.component.css']
})
export class NgxImageCropperComponent {

  sourceImage: any;
  @ViewChild('angularCropper') public angularCropper: CropperComponent;

  scaleValX = 1;
  scaleValY = 1;

  cropperOptions: any = {
    dragMode: 'crop',
    aspectRatio: 1,
    autoCrop: true,
    movable: true,
    zoomable: true,
    scalable: true,
    autoCropArea: 0.8,
  };

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit(): void { }

  ok() {
    let croppedImgB64String: string = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
    this.modalController.dismiss(croppedImgB64String, 'ok');
  }

  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }
 
}
