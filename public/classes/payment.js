export class Payment {
    //   client: string;
    //   detail: string;
    //   amount: number;
    constructor(recipient, detail, amount) {
        this.recipient = recipient;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owds $${this.amount} for ${this.detail}`;
    }
}
