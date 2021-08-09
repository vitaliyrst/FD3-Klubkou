import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private sprite: Sprite = {
    url: "https://fe.it-academy.by/Examples/cards2.png",
    offsetX: 0,
    offsetY: 0,
    width: 576 / 4,
    height: 2712 / 14
  }

  constructor() {
  }

  getSprite(): Sprite {
    return this.sprite;
  }

  setSprite(): void {
    this.sprite.offsetX = this.sprite.offsetX < 3 ? this.sprite.offsetX + 1 : 0;
    this.sprite.offsetY = this.sprite.offsetX === 0 ? this.sprite.offsetY + 1 : this.sprite.offsetY;
  }
}

export interface Sprite {
  url: string,
  offsetX: number,
  offsetY: number,
  width: number,
  height: number
}
