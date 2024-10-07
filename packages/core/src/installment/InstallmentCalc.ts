import {
  MAX_INSTALLMENT_QUANTITY,
  MONTHLY_INSTALLMENT_FEE,
} from "../constants";
import Installment from "./Installment";

export default class InstallmentCalc {
  calc(
    cost: number,
    installmentQuantity: number = MAX_INSTALLMENT_QUANTITY,
    installmentFee: number = MONTHLY_INSTALLMENT_FEE
  ): Installment {
    if (
      installmentQuantity < 2 ||
      installmentQuantity > MAX_INSTALLMENT_QUANTITY
    ) {
      throw new Error(
        `Quantidade de parcelas deve ser entre 2 e ${MAX_INSTALLMENT_QUANTITY}`
      );
    }

    const costWithInterest = this.compoundInterestCalc(
      cost,
      installmentQuantity,
      installmentFee
    );

    return {
      totalCost: this.twoDecimalPlaces(costWithInterest),
      installmentCost: this.twoDecimalPlaces(
        costWithInterest / installmentQuantity
      ),
      installmentQuantity,
      installmentFee,
    };
  }

  private compoundInterestCalc(
    totalCost: number,
    installmentQuantity: number,
    monthlyInstallmentFee: number
  ): number {
    return totalCost * Math.pow(1 + monthlyInstallmentFee, installmentQuantity);
  }

  private twoDecimalPlaces(n: number): number {
    return Math.round(n * 100) / 100;
  }
}
