import Link from "next/link";

interface HeaderCheckoutProps {
  step: "cart" | "payment";
}

export default function HeaderCheckout(props: HeaderCheckoutProps) {
  function selectedColor(step: string) {
    return props.step === step ? "text-pink-500" : "text-zinc-400";
  }

  function selectedBG(step: string) {
    return props.step === step
      ? "bg-pink-500 text-white"
      : "bg-zinc-400 text-black";
  }

  function renderItem(
    step: "cart" | "payment",
    index: number,
    tittle: string,
    route: string
  ) {
    return (
      <Link
        href={route}
        className={`
                    flex items-center gap-2 cursor-pointer
                    ${selectedColor(step)}
                `}
      >
        <span
          className={`
                        flex justify-center items-center 
                        text-xs font-bold w-5 h-5 rounded-full 
                        ${selectedBG(step)}
                    `}
        >
          {index}
        </span>
        <span>{tittle}</span>
      </Link>
    );
  }

  return (
    <div className="flex justify-center items-center gap-6 h-20 select-none">
      {renderItem("cart", 1, "Carrinho", "/checkout/cart")}
      <div className="bg-zinc-300 h-px w-12"></div>
      {renderItem("payment", 2, "Pagamento", "/checkout/payment")}
    </div>
  );
}
