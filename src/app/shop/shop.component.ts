import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'


@Component({
  selector: 'app-shop',
  template: `
  <ul>
    <div *ngIf="arrBirds" class="tile is-ancestor">
      <div *ngFor="let bird of arrBirds" class="tile is-parent">
        <li class="tile is-child box">
          <p class="title">{{ bird.Name }}</p>
          <p class="subtitle">{{ bird.Type }}</p>
        </li>
      </div>
    </div>
    </ul>
  `,
  styles: [
  ]
})
export class ShopComponent implements OnInit {

  // resource for importing data from json
      // https://www.encodedna.com/angular/read-an-external-json-file-in-angular-4-and-convert-data-to-table.htm

  constructor(private httpService: HttpClient) { }

  public arrBirds: string [];

  ngOnInit(): void {
    this.httpService.get('../../assets/birds.json').subscribe(
      data => {
        this.arrBirds = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
