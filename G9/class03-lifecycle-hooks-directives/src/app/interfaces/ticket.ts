import { TicketStatus } from './ticket-status';

export interface Ticket {
  id: string | number;
  title: string;
  text: string;
  assignee: string;
  status: TicketStatus;
}
