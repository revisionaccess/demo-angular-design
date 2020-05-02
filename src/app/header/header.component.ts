import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <nav class="navbar">
          <div class="navbar-brand">
            <div style="padding: 0 20px">
              <a class="navbar-item" href="/" style="background-color: #fff; display: block !important">
                <img src="../../assets/toilet-paper.png" role="img" width="95" height="60" style="max-height:none !important">
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
                <img src="../../assets/commerce-and-shopping.svg" width="45" height="45">
              </a>
            </div>
          </div>
      </nav>
    </header>

  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    console.log('toggleNavbar function fired');
  }

  constructor() { 
    //
  }

  ngOnInit(): void {
  }

}
