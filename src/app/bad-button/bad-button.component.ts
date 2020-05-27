import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bad-button',
  template: `
    <span>{{ badLabel }}</span>
  `,
  styles: [
  ]
})
export class BadButtonComponent implements OnInit {

  constructor() { }

  @Input() badLabel: string;

  ngOnInit(): void {
  }

}
