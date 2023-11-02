import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'landing', loadChildren: () => import('./landings/landings.module').then(m => m.LandingsModule) },
  // { path: 'pages', loadChildren: () => import('./other/other.module').then(m => m.OtherModule) },

  //{ path: '', loadChildren: () => import('src/app/pages/main-home/main-home.module').then(m => m.MainHomeModule) },
  { path: '', loadChildren: () => import('./my-pages/my-pages.module').then(m => m.MyPagesModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
