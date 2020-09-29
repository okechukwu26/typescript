import { isPerson } from '../interface/interface';
export class Payment implements isPerson {
  //   client: string;
  //   detail: string;
  //   amount: number;
  constructor(
    readonly recipient: string,
    private detail: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} is owds $${this.amount} for ${this.detail}`;
  }
}
