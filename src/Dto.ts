export interface Candidate {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}
export interface Address {
  address: string;
  city: string;
}
