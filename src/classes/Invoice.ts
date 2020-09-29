import { isPerson } from '../interface/interface';
export class Invoice implements isPerson {
  //   client: string;
  //   detail: string;
  //   amount: number;
  constructor(
    readonly client: string,
    private detail: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.detail}`;
  }
}
