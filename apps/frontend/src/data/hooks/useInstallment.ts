import { InstallmentCalc } from "@gstore/core";

export default function useInstallment(cost: number, quantity: number = 12) {
  const installment = new InstallmentCalc().calc(cost, quantity);
  return installment;
}
