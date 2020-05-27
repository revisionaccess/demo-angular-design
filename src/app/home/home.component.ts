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
            <h1 id="target" class="title" tabindex="-1" focus>
              Get All The TP You Can Carry
            </h1>
            <h2 class="subtitle">
              Stock Up Like You're Prepping For Doomsday!
            </h2>
          </div>
        </div>
      </section>
      <section class="level" style="background-color: #f1f1f1; width:100%; padding: 0 30px; height: 500px; margin:0">
        <div class="level-left" style="width:50%;">
          <div class="level-item" style="width:100%; padding: 10px; text-align:center;">
            <img src="../../assets/tp-shirt-gray-background.jpg" alt="A gray t-shirt with text I survived the great toilet paper shortage of 2020" style="max-height:440px;">
          </div>
        </div>
        <!-- https://www.ebay.com/itm/Toilet-Paper-Shortage-2020-Humor-Mens-Graphic-Novelty-Sarcasm-Funny-T-Shirt-Tee/283822288682?hash=item4215206f2a:m:m_jVTtDDQtUycMKw_A8GLiA&var=585250630131 -->
        <div class="level-right" style="width:50%">
          <div class="level-item" style="width:100%; padding: 40px; text-align:center">
            <h2 id="featured-item-title">
              <span class="sr-only">Featured item </span>
              Toilet Paper Shortage T-Shirt
            </h2>
            <p id="featured-item-desc">The new standard in toilet paper-related apparel. BUY IT.</p>
            <button id="shopNowBtn">Shop now - $14.95</button>
          </div>
        </div>
      </section>
      <section class="level" style="background-color: #dddddd; max-height: 300px; padding: 100px 0">
        <div class="level-item has-text-centered" style="width:33%; padding: 0 20px;">
          <div>
            <p class="quote">"I was blown away by the quality"</p>
            <p id="bathroom-insider">Bathroom Insider</p>
          </div>
        </div>
        <div class="level-item has-text-centered" style="width:33%;">
          <div>
            <div id="stars" aria-hidden="true" style="margin-bottom:20px;">
              <span class="star"><img src="../../assets/star.png" width="19"></span>
              <span class="star"><img src="../../assets/star.png" width="19"></span>
              <span class="star"><img src="../../assets/star.png" width="19"></span>
              <span class="star"><img src="../../assets/star.png" width="19"></span>
              <span class="star"><img src="../../assets/star.png" width="19"></span>
            </div>
            <p class="subtitle" style="font-weight:600; font-size: 1.5em !important; letter-spacing: 0.5px;">Over 2,000 five-star reviews</p>
          </div>
        </div>
        <div class="level-item has-text-centered" style="width:33%;">
        <div>
            <p class="quote">"Might be the best TP over $20"</p>
            <p id="the-seat">The Seat</p>
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
