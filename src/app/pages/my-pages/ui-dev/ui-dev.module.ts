import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UiDevRoutingModule } from './ui-dev-routing.module';
import { UiDevComponent } from './ui-dev/ui-dev.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconModule, Table, TableModule } from 'carbon-components-angular';

import { UIShellModule } from 'carbon-components-angular/ui-shell/ui-shell.module';

@NgModule({
  declarations: [
    UiDevComponent
  ],
  imports: [
    CommonModule,
    UiDevRoutingModule,
    RouterModule,
    SharedModule,
    TableModule,
    UIShellModule,
    IconModule
    
  ]
  
})
export class UiDevModule { }
