import {Injectable} from '@angular/core';
import {Observable, from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private freePlaces: number = 25;
  private busyPlaces: Array<boolean> = [];

  private transaction: boolean = false;
  private boughtPlaces: Array<number> = [];

  private placesStream$: Observable<Array<boolean>> = from([this.busyPlaces]);

  constructor() {
    this.setBusyPlaces();
  }

  setBusyPlaces(): void {
    const quantity = this.freePlaces;

    for (let i = 1; i <= quantity; i++) {
      this.busyPlaces.push(true);
    }
  }

  getPlacesStream(): Observable<Array<boolean>> {
    return this.placesStream$;
  }

  getTransaction(): boolean {
    return this.transaction;
  }

  getBoughtPlaces(): Array<number> {
    return this.boughtPlaces;
  }

  buyTickets(quantity: number): void {
    let checkCount = 0;
    let tempArrayBoughtPlaces = [];
    this.transaction = false;

    if (this.freePlaces > quantity) {
      for (let i = 0; i < this.busyPlaces.length; i++) {
        if (this.busyPlaces[i] && checkCount !== quantity) {
          this.busyPlaces[i] = false;
          tempArrayBoughtPlaces.push(i + 1);
          checkCount++;
        }
      }
    }

    if (checkCount === quantity) {
      this.freePlaces = this.freePlaces - quantity;
      this.boughtPlaces = tempArrayBoughtPlaces;
      this.transaction = true;
    }
  }
}
