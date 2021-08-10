import {Component, OnInit} from '@angular/core';
import {TicketsService} from "../../services/tickets.service";

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {

  constructor(
    private ticketService: TicketsService
  ) {
  }

  ngOnInit(): void {
  }

  getBusyPlaces(): number {
    return this.ticketService.getBusyPlaces();
  }

  getFreePlaces(): number {
    return this.ticketService.getFreePlaces();
  }
}
