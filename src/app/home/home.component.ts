import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  template: `
    <main>
      <section id="home-hero-first" class="hero is-light is-large">
        <div class="hero-body">
          <div class="container">
            <h1 class="title" tabindex="-1">
              Get All The TP You Can Handle
            </h1>
            <h2 class="subtitle">
              Stock Up Like You're Prepping For Doomsday!
            </h2>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [
    /* literally just put styles here */
  ]
})
export class HomeComponent implements OnInit {

  constructor( private sharedService: SharedService, private titleService: Title ) { }

  cartCount: number;

  title = "Home - TP Depot";

  ngOnInit(): void {
     this.titleService.setTitle(this.title);

     this.sharedService.sharedMessage.subscribe(cartCount => this.cartCount = cartCount);
  }

}
