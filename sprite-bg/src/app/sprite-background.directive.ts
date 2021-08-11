import {Attribute, Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[SpriteBackground]'
})
export class SpriteBackgroundDirective implements OnInit {
  private readonly url: string;
  private offsetX: number;
  private offsetY: number;
  private readonly width: number;
  private readonly height: number;

  constructor(
    @Attribute('url') url: string,
    @Attribute('offsetX') offsetX: number,
    @Attribute('offsetY') offsetY: number,
    @Attribute('width') width: number,
    @Attribute('height') height: number,
  ) {
    this.url = url || 'https://fe.it-academy.by/Examples/smileys.png';
    this.offsetX = +offsetX || 0;
    this.offsetY = +offsetY || 0;
    this.width = +width / 5 || 125 / 5;
    this.height = +height / 4 || 100 / 4;
  }

  ngOnInit(): void {
    this.hostBackground = this.getBackgroundStyle();
  }

  @HostBinding('style')
  private hostBackground: string = ``;


  @HostListener('click')
  changeImage(): void {
    this.offsetX = this.offsetX < 4 ? this.offsetX + 1 : 0;
    this.offsetY = this.offsetX === 0 ? this.offsetY + 1 : this.offsetY;

    this.hostBackground = this.getBackgroundStyle();
  }

  getBackgroundStyle(): string {
    const x = -this.offsetX * this.width + 'px ';
    const y = -this.offsetY * this.height + 'px';

    return `background-image: url(${this.url});
    background-position: ${x} ${y};
    width: ${this.width}px;
    height: ${this.height}px;`;
  }
}
