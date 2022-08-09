import { TicketStatus } from './ticket-status.enum';

export interface Ticket {
  id: string | number;
  title: string;
  description: string;
  assignee: string;
  status: TicketStatus;
}
