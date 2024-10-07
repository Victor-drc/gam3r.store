export default class Currency {
  static format(
    amount: number,
    locale: string = "pt-BR",
    currency: string = "BRL"
  ): string {
    return (amount ?? 0).toLocaleString(locale, {
      style: "currency",
      currency: currency,
    });
  }
}
