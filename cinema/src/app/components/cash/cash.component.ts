import {Component, Input, OnInit} from '@angular/core';
import {TicketsService} from "../../services/tickets.service";

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {
  @Input('title')
  public title: string = '';

  public quantity: number = 0;
  public purchaseMessage: string = '';
  public boughtPlaces: string = '';

  constructor(
    private ticketService: TicketsService
  ) {
  }

  ngOnInit(): void {
  }

  getTitle(): string {
    return this.title;
  }

  buyTickets(): void {
    if (this.quantity > 0) {
      this.ticketService.buyTickets(this.quantity);

      const transaction = this.ticketService.getTransaction();

      if (transaction) {
        this.purchaseMessage = 'Билеты успешно куплены';
        this.boughtPlaces = this.ticketService.getBoughtPlaces().join(',');
      } else {
        this.purchaseMessage = 'Извините, нет мест';
        this.boughtPlaces = '';
      }
    } else {
      this.purchaseMessage = 'Введите правильное количество мест';
      this.boughtPlaces = '';
    }
  }
}
