import {Component} from '@angular/core';
import {TicketsService} from "../../services/tickets.service";

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent {
  private places: Array<boolean> = [];

  constructor(
    ticketService: TicketsService
  ) {
    ticketService.getPlacesStream().subscribe((places) => {this.places = places});
  }

  getPlaces(): Array<boolean> {
    return this.places;
  }
}
