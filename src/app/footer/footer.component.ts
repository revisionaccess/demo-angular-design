import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer style="clear:left">
      <p>
        footer works!
      </p>
      <div>Icons made by <a href="https://www.flaticon.com/authors/elias-bikbulatov" title="Elias Bikbulatov">Elias Bikbulatov</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      <div>Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
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
