"use client";
import Logo from "../shared/Logo";
import CartIcon from "../shared/CartIcon";
import Link from "next/link";
import useCart from "@/data/hooks/useCart";

export default function Header() {
  const { itemsQuantity } = useCart();
  return (
    <div
      className="flex flex-col h-20"
      style={{
        background:
          "linear-gradient(90deg, #14002D 0%, #420093 50%, #14002D 100%)",
      }}
    >
      <div className="flex-1 container flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <Logo />
          <Link href="/checkout/cart">
            <CartIcon itemQuantity={itemsQuantity} />
          </Link>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
    </div>
  );
}