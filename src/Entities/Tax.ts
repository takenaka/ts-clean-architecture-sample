export class TaxEntity {
  private readonly taxRate = 0.1;

  public calcTaxPrice(price: number): number {
    const p = this.taxRate + 1;

    return Math.round(price * p);
  }
}
