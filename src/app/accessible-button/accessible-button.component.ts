import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { bufferTime } from 'rxjs/operators';

@Component({
  selector: 'accessible-button',
  template: `
    <button class="form-button-a11y">
      {{ goodLabel }}
    </button>
  `,
  styles: [
    '.form-button-a11y { color: #ffffff; background-color: #202e3b; float:right; min-width: 110px; padding: 2px 20px; line-height: 40px; display: inline-block; border-radius: 5px; text-align: center; cursor: pointer; font-size: 14px;}'
  ]
})
export class AccessibleButtonComponent implements OnInit {

  constructor() { }

  @Input() goodLabel: string;

  ngOnInit(): void {
  }

}

/*  id="send-form-button" class="form-button"  */