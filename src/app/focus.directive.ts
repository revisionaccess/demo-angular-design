import { Directive, Input, Inject, ElementRef, Renderer2, EventEmitter } from '@angular/core'

@Directive({
  selector: '[focus]'
})
export class FocusDirective {

  @Input() public appH1Focus: boolean;

  constructor(private el: ElementRef) { }

  ngAfterContentInit() {
    setTimeout(() => {
      this.el.nativeElement.focus();
    }, 100)
  }

}
