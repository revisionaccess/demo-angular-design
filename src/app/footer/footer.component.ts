import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <p>
      footer works!
    </p>
    <div>Icons made by <a href="https://www.flaticon.com/authors/elias-bikbulatov" title="Elias Bikbulatov">Elias Bikbulatov</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
