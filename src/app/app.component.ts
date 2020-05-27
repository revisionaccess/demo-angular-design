import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
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

  constructor( private router: Router, private activatedRoute: ActivatedRoute ) {}

  ngAfterContentInit() {
    // Focus to h1 on navigation
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)).subscribe(() => {
      const mainHeader = document.querySelector('h1')
      if (mainHeader) {
        mainHeader.focus();
      }
    });
  }

  // ngOnInit() {
  //   // Focus to h1 on navigation
  //   this.router.events.pipe(
  //     filter(e => e instanceof NavigationEnd)).subscribe(() => {
  //     const mainHeader = document.querySelector('h1')
  //     if (mainHeader) {
  //       mainHeader.focus();
  //     }
  //   });
  // }
}
