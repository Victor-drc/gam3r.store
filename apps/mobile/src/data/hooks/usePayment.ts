import { useContext } from "react";
import PaymentContext from "../context/PaymentContext";

const usePayment = () => useContext(PaymentContext);
export default usePayment;
