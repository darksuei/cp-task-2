export interface Candidate {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  university: string;
  company: Company;
}
export interface Company {
  address: Address;
  department: string;
}
export interface Address {
  address: string;
  city: string;
}
