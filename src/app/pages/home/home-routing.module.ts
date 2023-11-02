import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PortfolioComponent } from '../landings/portfolio/portfolio.component';

const routes: Routes = [{ path: '', component: HomeComponent }];
//const routes: Routes = [{ path: '', component: PortfolioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
