import { Address } from './address';

export interface Person {
  id: number | string;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  dateOfBirth: Date;
  hourlyRate: number | string;
  rating: number;
}
