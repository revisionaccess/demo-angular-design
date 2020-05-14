import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-header></app-header>

    <router-outlet></router-outlet>

    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title$: Observable<string>;

  constructor( private router: Router, private activatedRoute: ActivatedRoute, titleService: Title  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)).subscribe(() => {
      const mainHeader = document.querySelector('h1')
      if (mainHeader) {
        mainHeader.focus();
      }
    });
  }
}
