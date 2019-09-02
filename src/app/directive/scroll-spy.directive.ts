import { Directive, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scrollSpy]'
})
export class ScrollSpyDirective {

  @Input() public spiedTags = [];
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection: string;

  constructor(private _el: ElementRef) {}

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
      let currentSection: string;
      const children = this._el.nativeElement.children;
      const scrollTop = event.target.scrollTop;
      const parentOffset = event.target.offsetTop;
      console.log(event.target);
      for (let i = 0; i < children.length; i++) {
          const element = children[i];
          if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
            console.log('element :', element);
            console.log('parentOffset :', parentOffset);
            console.log('scrollTop :', scrollTop);
            if ((element.offsetTop - parentOffset) <= scrollTop) {
                currentSection = element.id;
            }
          }
      }
      if (currentSection !== this.currentSection) {
          this.currentSection = currentSection;
          this.sectionChange.emit(this.currentSection);
      }
  }
}
