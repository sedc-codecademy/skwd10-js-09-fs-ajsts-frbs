import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';
import { TicketStatus } from 'src/app/interfaces/ticket-status.enum';
import { Ticket } from 'src/app/interfaces/ticket.interface';

@Component({
  selector: 'app-ticket-panel',
  templateUrl: './ticket-panel.component.html',
  styleUrls: ['./ticket-panel.component.scss'],
})
// OnChanges,
// DoCheck,
// AfterContentInit,
// AfterContentChecked,
// AfterViewInit,
// AfterViewChecked,
export class TicketPanelComponent implements OnInit, OnDestroy {
  @Input() tickets: Ticket[] = [];

  filteredTickets: Ticket[] = [];

  ticketStatusEnum = TicketStatus;

  selectedTicket: Ticket | null = null;

  displayTicketInfo = true;

  constructor() {
    console.log('constructor() called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log(this.tickets);
    this.filteredTickets = this.tickets;
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges called!');
  // }

  // ngDoCheck(): void {
  //   console.log('ngDoCheck called!');
  // }

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit called!');
  // }

  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked called!');
  // }

  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit called!');
  // }

  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked called!');
  // }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }

  filterTicketsByStatus(status: TicketStatus) {
    this.filteredTickets = this.tickets.filter(
      (ticket) => ticket.status === status
    );
  }

  resetTickets() {
    this.filteredTickets = this.tickets;
  }

  onTicketSelected(value: Ticket) {
    this.selectedTicket = value;
    console.log(this.selectedTicket);

    this.onPanelDisplayToggle(true);
  }

  onPanelDisplayToggle(value: boolean) {
    this.displayTicketInfo = value;
  }
}
