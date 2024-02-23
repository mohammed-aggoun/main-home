import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiDevComponent } from './ui-dev/ui-dev.component';

const routes: Routes = [{ path: '', component: UiDevComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiDevRoutingModule { }
