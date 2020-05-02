import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <main>
      <section id="home-hero-first" class="hero is-light is-large">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
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

  constructor() { }

  ngOnInit(): void {
  }

}
