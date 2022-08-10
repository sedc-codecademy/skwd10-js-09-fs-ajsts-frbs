import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket';
import { TicketStatus } from 'src/app/interfaces/ticket-status';

@Component({
  selector: 'ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;
  @Output() emitTicket: EventEmitter<Ticket> = new EventEmitter<Ticket>();
  constructor() {}

  ngOnInit(): void {}

  isTicketNew() {
    return this.ticket.status === TicketStatus.NEW;
  }

  displayTicket(ticket: Ticket): void {
    this.emitTicket.emit(ticket);
  }
}
