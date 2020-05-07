import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div class="head-banner">
        <img id="truck-icon" src="../../assets/truck_screenshot.png"><p>We are shipping during COVID-19.</p>
      </div>
      <nav class="navbar">
          <div class="navbar-brand">
            <div style="padding: 0 20px">
              <a aria-label="Shop TP home" class="navbar-item" href="/" style="background-color: #fff; display: block !important">
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
            <div id="js-nav-links" class="navbar-end" style="font-size: 1.4em; font-weight:400; margin-left: 15%; text-transform: uppercase;">
              <a href="/shop" class="navbar-item js-nav-link">Shop</a>
              <a href="#" class="navbar-item js-nav-link">About</a>
              <a href="#" class="navbar-item js-nav-link">Contact</a>
            </div>
            <div id="cart-link-container" class="navbar-end">
              <a id="cart-link" href="#" class="navbar-item" style="margin:0">
                <img alt="cart" src="../../assets/commerce-and-shopping.svg" width="45" height="45">
                <span *ngIf="cartCount > 0" class='badge badge-warning' id='lblCartCount'> 5 </span>
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
      right: 12px;
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


  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() { 
    //
  }

  cartCount:Number;

  receiveCartIncrement($event) {
    this.cartCount = $event;
  }

  ngOnInit(): void {
  }

}
