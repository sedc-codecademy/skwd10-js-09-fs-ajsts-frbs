import { Component } from '@angular/core';
import { Ticket } from './interfaces/ticket';
import { TicketStatus } from './interfaces/ticket-status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Ticket Tracker';
  ticketsList: Ticket[] = [
    {
      id: 1,
      title: 'Mouse doesnt work',
      text: 'My mouse stopped working. Please help!',
      assignee: 'Jon Doe',
      status: TicketStatus.NEW,
    },
    {
      id: 2,
      title: 'Monitor doesnt work',
      text: 'My monitor stopped working. Please help!',
      assignee: 'Jane Doe',
      status: TicketStatus.NEW,
    },
    {
      id: 3,
      title: 'Keyboard doesnt work',
      text: 'My keyboard stopped working. I spilled soda on it. Please help!',
      assignee: 'Jack Smith',
      status: TicketStatus.IN_PROGRESS,
    },
    {
      id: 4,
      title: 'Car doesnt work',
      text: 'My car stopped working. I spilled soda on it. Please help!',
      assignee: 'Jon Doe',
      status: TicketStatus.IN_PROGRESS,
    },
    {
      id: 5,
      title: 'Computer doesnt work',
      text: 'My computer stopped working. It fell from the third floor! Please help!',
      assignee: 'Nick Jacobs',
      status: TicketStatus.DONE,
    },
  ];
  logOutputTicket(event: Ticket) {
    console.log(event);;
  }
}
