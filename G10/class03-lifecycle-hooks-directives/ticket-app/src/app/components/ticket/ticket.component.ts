import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket.interface';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket | null = null;

  @Output() emitTicket: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.ticket);
  }

  onTicketSelect() {
    if (this.ticket) {
      this.emitTicket.emit(this.ticket);
    }
  }
}
