import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgxImageCropperComponent } from './ngx-image-cropper.component';

@Injectable({
  providedIn: 'root'
})
export class NgxImageCropperService {

  constructor(private modalController: ModalController) { }

  public crop(sourceImageDataURI: string) {

    return new Promise(async (res) => {

      const modal = await this.modalController.create({
        component: NgxImageCropperComponent,
        componentProps: {
          sourceImage: sourceImageDataURI
        }
      })

      modal.onDidDismiss().then(result => {
        if (result.role === 'cancel') {
          res(sourceImageDataURI);
        }
        else if (result.role === 'ok') {
          res(result.data);
        }
      })

      await modal.present();

    });

  }

}
