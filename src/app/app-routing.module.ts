import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'footer',component:HomeComponent
  },
  {
    path:'our-products',component:OurProductsComponent
  },
  {
    path:'pricing',component:PricingComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact-us',component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
