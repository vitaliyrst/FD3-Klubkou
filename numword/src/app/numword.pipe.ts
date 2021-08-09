import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'numword'
})
export class NumwordPipe implements PipeTransform {

  transform(value: string, word1: string, word2: string, word3: string): string {
    const step1 = Number(value) % 100;

    if (step1 >= 11 && step1 <= 19) {
      return value + word3;
    }

    const step2 = Number(value) % 10;

    if (step2 == 1) {
      return value + word1;
    }

    if (step2 >= 2 && step2 <= 4) {
      return value + word2;
    }

    return value + word3;
  }
}
