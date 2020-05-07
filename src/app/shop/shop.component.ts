import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {A11yModule} from '@angular/cdk/a11y';


@Component({
  selector: 'app-shop',
  template: `
    <main>
      <section class="section" style="padding: 24px;">

        <fieldset style="margin: 0 auto 24px auto;">
          <legend class="sr-only">Filter</legend>
          <label id="select-label" for="filter-dropdown" style="margin-right: 12px">Filter by</label>
          <select id="filter-dropdown" [(ngModel)]="filterValue" style="margin-right: 12px;">
            <option value="all">All</option>
            <option value="tp">Toilet Paper</option>
            <option value="socks">Socks</option>
            <option value="earrings">Earrings</option>
          </select>
          <button id="applyFilterBtn" (click)="filterItems()" aria-label="Apply filter">Apply</button>
        </fieldset>

        <div class="container">
          <div role="list" class="columns is-multiline">
            <div role="listitem" class="column is-4" *ngFor="let shopItem of filteredInventory">
              <div class="card">
                <div class="card-image">
                  <figure [className]="shopItem.ImageRes + ' image'">
                    <img [src]="shopItem.ImageURL" alt="">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p [id]="shopItem.ID" class="title is-4 item-name">{{ shopItem.Name }}</p>
                      <p class="subtitle is-6 item-designer">{{ shopItem.Designer }}</p>
                      <p class="subtitle is-6 item-cost">{{ shopItem.Cost }}</p>
                    </div>
                  </div>
                  <div class="content" style="text-align:center;">
                    <button class="addCardBtn" [attr.aria-describedby]="shopItem.ID" (click)="sendCartIncrement()">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    main {
      background-color: #f1f1f1;
    }
    .card-content {
      font-family: "Usual", sans-serif !important;
      color: #202e3b !important;
    }
    .item-name { 
      font-size: 2em !important;
    }
    .item-designer {
      font-size: 1.3em !important;
      margin-bottom: 0.5em;
    }
    .item-cost {
      font-size: 1.2em !important;
    }
    .addCardBtn {
      border: none;
      color: #fff;
      font-size: 1em;
      line-height: 32px !important;
      letter-spacing: 0.5px;
      font-weight: 400;
      background-color: #202e3b;
      min-width: 120px;
      padding: 0;
      display: inline-block;
      border-radius: 5px;
      text-align: center;
      outline:none;
      margin:0;
    }
`]
})

export class ShopComponent implements OnInit {

  // resource for importing data from json
      // https://www.encodedna.com/angular/read-an-external-json-file-in-angular-4-and-convert-data-to-table.htm

  constructor(private httpService: HttpClient) { }

  cartCount : Number = 2;
  @Output() cartEvent = new EventEmitter<Number>();
  sendCartIncrement() {
    console.log('add to cart');
    this.cartEvent.emit(this.cartCount);
  }

  public i : Number = 0;

  public shopInventory: string []; // original json file

  public filteredInventory: string []; // changes on filter
  public filterValue: string = "all";

  public toiletPaper: string [] = [];
  public socks: string [] = [];
  public earrings: string [] = [];

  filterItems() {
    this.filteredInventory = [];
    switch(this.filterValue) { 
      case 'all': { 
         this.sortAll(); 
         break; 
      } 
      case 'tp': { 
         this.sortTP(); 
         break; 
      }  
      case 'socks': { 
         this.sortSocks(); 
         break; 
      }  
      case 'earrings': { 
         this.sortEarrings(); 
         break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
   }
  }

  sortAll() {
    console.log(this.shopInventory);
    this.filteredInventory = this.shopInventory;
  }

  sortTP() {
    for (var i = 0; i < this.shopInventory.length; i++) {
      if (this.shopInventory[i]['Type'] == 'tp') {
        this.toiletPaper.push(this.shopInventory[i]);
      }
    }
    console.log(this.toiletPaper);
    this.filteredInventory = this.toiletPaper;
  }

  sortSocks() {
    for (var i = 0; i < this.shopInventory.length; i++) {
      if (this.shopInventory[i]['Type'] == 'sock') {
        this.socks.push(this.shopInventory[i]);
      }
    }
    console.log(this.socks);
    this.filteredInventory = this.socks;
  }

  sortEarrings() {
    for (var i = 0; i < this.shopInventory.length; i++) {
      if (this.shopInventory[i]['Type'] == 'earrings') {
        this.earrings.push(this.shopInventory[i]);
      }
    }
    console.log(this.earrings);
    this.filteredInventory = this.earrings;
  }

  ngOnInit(): void {
    this.httpService.get('../../assets/tp-types-data.json').subscribe(
      data => {
        this.shopInventory = data as string [];
        this.filteredInventory = this.shopInventory;
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
