import { TaxCalculateUseCaseOutputData } from '../UseCase/Tax';

export interface TaxCalculateView {
  display(outputData: TaxCalculateUseCaseOutputData): void;
}

export class TaxCalculateView implements TaxCalculateView {
  public display(outputData: TaxCalculateUseCaseOutputData): void {
    const taxPrice = outputData.price;
    console.log(`税込価格:${taxPrice}`);
  }
}
