import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  private cartCount = new BehaviorSubject(0);
  sharedMessage = this.cartCount.asObservable();

  constructor() { }

  newCartCount(cartCount: number) {
    this.cartCount.next(cartCount);
  }

}

// https://medium.com/@chameeradulanga87/sharing-data-between-angular-components-f76fa680bf76
  // third method
