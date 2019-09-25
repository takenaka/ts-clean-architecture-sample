import {
  TaxCalculateUseCase,
  TaxCalculateUseCaseInputData
} from '../UseCase/Tax';
import { TaxCalculateView } from '../View/Tax';

export class TaxCalculateController {
  private readonly useCase: TaxCalculateUseCase;
  private readonly view: TaxCalculateView;

  public constructor(useCase: TaxCalculateUseCase, view: TaxCalculateView) {
    this.useCase = useCase;
    this.view = view;
  }

  public calcTaxPrice(priceText: string): void {
    const price = Number(priceText);
    const inputData = new TaxCalculateUseCaseInputData(price);
    const outputData = this.useCase.calcTaxPrice(inputData);
    this.view.display(outputData);
  }
}
