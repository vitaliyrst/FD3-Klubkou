import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private busyPlaces: Array<number> = [];
  private freePlaces: number = 25;
  private transaction: boolean = false;
  private boughtPlaces: Array<number> = [];

  constructor() {
    this.setBusyPlaces();
  }

  setBusyPlaces(): void {
    const quantity = this.freePlaces;

    for (let i = 1; i <= quantity; i++) {
      this.busyPlaces.push(i);
    }
  }

  getBusyPlaces(): number {
    let quantity = 0;

    for (let i = 0; i < this.busyPlaces.length; i++) {
      if (this.busyPlaces[i] === 0) {
        quantity++;
      }
    }

    return quantity;
  }

  getFreePlaces(): number {
    return this.freePlaces;
  }

  getTransaction(): boolean {
    return this.transaction;
  }

  getBoughtPlaces(): Array<number> {
    return this.boughtPlaces;
  }

  buyTickets(quantity: number): void {
    let checkCount = 0;
    let tempArrayBusyPlaces = this.busyPlaces.slice();
    let tempArrayBoughtPlaces = [];
    this.transaction = false;

    for (let i = 0; i < tempArrayBusyPlaces.length; i++) {
      if (tempArrayBusyPlaces[i] !== 0 && checkCount !== quantity) {
        tempArrayBusyPlaces[i] = 0;
        tempArrayBoughtPlaces.push(i + 1);
        checkCount++;
      }
    }

    if (checkCount === quantity) {
      this.freePlaces = this.freePlaces - quantity;
      this.busyPlaces = tempArrayBusyPlaces;
      this.boughtPlaces = tempArrayBoughtPlaces;
      this.transaction = true;
    }
  }
}
