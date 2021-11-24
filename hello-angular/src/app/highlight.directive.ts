import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight!: string;

  constructor(private elementRef: ElementRef<HTMLHeadingElement>) {}

  ngOnInit(): void {
    const headingEl = this.elementRef.nativeElement;
    headingEl.style.backgroundColor = this.appHighlight || 'yellow';
  }
}
