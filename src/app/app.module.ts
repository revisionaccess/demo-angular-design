import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopComponent } from './shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedService } from './shared.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BadButtonComponent } from './bad-button/bad-button.component';
import { AccessibleButtonComponent } from './accessible-button/accessible-button.component';
import { FocusDirective } from './focus.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent,
    AboutComponent,
    ContactComponent,
    BadButtonComponent,
    AccessibleButtonComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SharedService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
