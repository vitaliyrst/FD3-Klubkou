import {Component, Input} from '@angular/core';
import {Sprite} from "../app.component";

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})
export class SpriteComponent {

  @Input('sprite')
  public sprite: Sprite = {
    url: '',
    offsetX: 0,
    offsetY: 0,
    width: 0,
    height: 0
  };

  constructor() {
  }

  getStyles(): { [key: string]: string } {
    const x = -this.sprite.offsetX * this.sprite.width + 'px ';
    const y = -this.sprite.offsetY * this.sprite.height + 'px';
    return {
      "background-image": `url("${this.sprite.url}")`,
      "width": this.sprite.width + 'px',
      "height": this.sprite.height + 'px',
      "background-position": x + y
    }
  }
}
