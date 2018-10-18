import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CommonComponent } from './common/common.component';
import{DataServiceService} from './data-service.service';
import { ProductsComponent } from './products/products.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



const appRoutes : Routes=[
  
  {path: 'home', component:HomeComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'products', component:ProductsComponent},
  {path:'enquiry', component:EnquiryComponent},
  {path:'contact', component:ContactUsComponent},
  
  {path: '**', component:HomeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    CommonComponent,
    ProductsComponent,
    EnquiryComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
    
  ],
  providers: [
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
