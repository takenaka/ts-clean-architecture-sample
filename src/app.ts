import * as readline from 'readline';
import { TaxCalculateUseCase } from './UseCase/Tax';
import { TaxCalculateView } from './View/Tax';
import { TaxCalculateController } from './Controller/Tax';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input: string) => {
  const useCase = new TaxCalculateUseCase();
  const view = new TaxCalculateView();
  const controller = new TaxCalculateController(useCase, view);

  controller.calcTaxPrice(input);
});
