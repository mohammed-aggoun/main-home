import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPagesRoutingModule } from './my-pages-routing.module';
import { MainHomeModule } from '../main-home/main-home.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MyPagesRoutingModule,
    MainHomeModule
  ]
})
export class MyPagesModule { }
