import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { NgxImageCropperComponent } from './ngx-image-cropper.component';

@NgModule({
  declarations: [NgxImageCropperComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    AngularCropperjsModule
  ],
  exports: [],
  entryComponents: [NgxImageCropperComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgxImageCropperModule { }
