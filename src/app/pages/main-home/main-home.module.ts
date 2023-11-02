



import { MainHomeRoutingModule } from './main-home-routing.module';
import { MainHomeComponent } from './main-home.component';




import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { SwiperModule } from 'swiper/angular';

// module
import { NavbarsModule } from 'src/app/shared/navbars/navbars.module';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { HeroComponent } from './hero/hero.component';
import { LandingPagesComponent } from './landing-pages/landing-pages.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    MainHomeComponent,
    HeroComponent,
    LandingPagesComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MainHomeRoutingModule,
    NgxTypedJsModule,
    SwiperModule,
    NavbarsModule,
    UiModule,
  ]
})
export class MainHomeModule { }
