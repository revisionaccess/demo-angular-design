import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="footer-container">
      <div class="columns">
        <div class="column is-two-thirds">
          <div class="columns">
            <div class="column is-one-quarter">
              <ul class="padding footer-list">
                <div class="footer-list-header">Shop</div>
                <li><a href="#" title="All Products | Status">All Products</a></li>
                <li><a href="#" title="Wireless | Status">Toilet Paper</a></li>
                <li><a href="#" title="Cabled | Status">Toilet Paper Covers</a></li>
                <li><a href="#" title="Earphones | Status">Apparel</a></li>
                <li><a href="#" title="Over-Ear | Status">Towels</a></li>
                <li><a href="#" title="On-Ear | Status">Posters & Art</a></li>
                <li><a href="#" title="Studio | Status">Other Paper Products</a></li>
              </ul>
            </div>
            <div class="column is-one-quarter">
              <ul class="padding footer-list">
                <div class="footer-list-header">Info</div>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Paper Standards</a></li>
                <li><a href="#">Bulk Orders</a></li>
                <li><a href="#">Refer a Friend</a></li>
                <li><a href="#">COVID-19 Fund</a></li>
                <li><a href="#">Contact & FAQ</a></li>
                <li><a href="#">Jobs</a></li>
              </ul>
            </div>
            <div class="column is-one-quarter">
              <ul class="padding footer-list">
                <div class="footer-list-header">Connect</div>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Youtube</a></li>
              </ul>
            </div>
            <div class="column"></div>
          </div>
        </div>
        <div class="column" style="padding: 12px 40px 12px 20px;">
          <div id="subscribe-header">Subscribe</div>
          <p id="subscribe-desc">Enter your <label for="email">email address</label> below to stay updated on new products.</p>
          <div class="columns">
            <div class="column is-two-thirds">
              <input id="email" class="input" type="text" placeholder="Your Email">
            </div>
            <div class="column is-one-third">
              <button id="subscribeBtn" class="button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


/*<p>
        footer works!
      </p>
      <div>Icons made by <a href="https://www.flaticon.com/authors/elias-bikbulatov" title="Elias Bikbulatov">Elias Bikbulatov</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      <div>Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      TP app icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */