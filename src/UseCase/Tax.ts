import { TaxEntity } from '../Entities/Tax';

export class TaxCalculateUseCaseInputData {
  public readonly price: number;

  public constructor(price: number) {
    this.price = price;
  }
}

export class TaxCalculateUseCaseOutputData {
  public readonly price: number;

  public constructor(price: number) {
    this.price = price;
  }
}

export interface TaxCalculateUseCase {
  calcTaxPrice(
    inputData: TaxCalculateUseCaseInputData
  ): TaxCalculateUseCaseOutputData;
}

export class TaxCalculateUseCase implements TaxCalculateUseCase {
  public calcTaxPrice(
    inputData: TaxCalculateUseCaseInputData
  ): TaxCalculateUseCaseOutputData {
    const taxEntity = new TaxEntity();
    const price = inputData.price;
    const taxPrice = taxEntity.calcTaxPrice(price);

    return new TaxCalculateUseCaseOutputData(taxPrice);
  }
}
