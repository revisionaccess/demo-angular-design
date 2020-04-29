import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section>
      Home page - this is the homepage content
    </section>
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
