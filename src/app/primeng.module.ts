import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';

const modPrimeNg: any = [
  ButtonModule,
  CardModule,
  InputTextModule,
  ToastModule,
  TableModule
] ;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modPrimeNg,
    ButtonModule
  ], exports: [
    modPrimeNg
  ]
})
export class PrimengModule { }
