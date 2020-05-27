import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { Directive, HostBinding, HostListener } from '@angular/core';
import { SharedService } from '../shared.service';
import { ShopComponent } from 'src/app/shop/shop.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <header>
    <div id="skip-container">
      <a href="#target" class="skip-link">Skip to Main Content</a>
    </div>

      <div class="head-banner">
        <img id="truck-icon" src="../../assets/truck_screenshot.png" alt=""><p>We are shipping during COVID-19.</p>
      </div>
      <nav class="navbar">
          <div class="navbar-brand">
            <div style="padding: 0 20px">
              <a routerLink="/" aria-label="Shop TP home" id="home-link" class="navbar-item" style="background-color: #fff; display: block !important">
                <img src="../../assets/toilet-paper.png" alt="Shop TP" role="img" width="95" height="60" style="max-height:none !important">
              </a>
            </div>
              <button id="hamburger-button" class="navbar-burger burger" [ngClass]="{ 'is-active': navbarOpen }" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" (click)="toggleNavbar()">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </button>
          </div>

          <div id="navMenu" class="navbar-menu" [ngClass]="{ 'is-active': navbarOpen }">
            <div id="js-nav-links" class="navbar-end">
              <a routerLink="/shop" routerLinkActive="active" class="navbar-item js-nav-link">Shop <span class="current-page sr-only"></span></a>
              <a routerLink="/about" routerLinkActive="active" class="navbar-item js-nav-link">About <span class="current-page sr-only"></span></a>
              <a routerLink="/contact" routerLinkActive="active" class="navbar-item js-nav-link">Contact <span class="current-page sr-only"></span></a>
            </div>
            <div id="cart-link-container" class="navbar-end">
              <a id="cart-link" href="#" class="navbar-item" style="margin:0">
                <img alt="cart" src="../../assets/commerce-and-shopping.svg" width="45" height="45">
                <div *ngIf="cartCount > 0" class='badge badge-warning' id='lblCartCount'> {{ cartCount }} <span class="sr-only"> items</span> </div>
              </a>
            </div>
          </div>
      </nav>
    </header>

  `,
  styles: [`
    #cart-link {
      position: relative;
    }
    .badge {
      position: absolute;
      top: 20px;
      right: 8px;
      color: #fff;
      background-color: #202e3b;
      padding-left: 9px;
      padding-right: 9px;
      -webkit-border-radius: 9px;
      -moz-border-radius: 9px;
      border-radius: 9px;
    }
    .badge-warning[href] {
      background-color: #c67605;
    }
  `]
})

export class HeaderComponent implements OnInit {

  cartCount: number;

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private sharedService: SharedService, private router: Router) { 
  }
  
  ngOnInit(): void {
    this.sharedService.sharedMessage.subscribe(cartCount => this.cartCount = cartCount);
  }


}
