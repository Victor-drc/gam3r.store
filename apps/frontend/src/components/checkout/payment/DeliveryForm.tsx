import { OrderDelivery } from "@gstore/core";

export interface DeliveryFormProps {
  delivery: Partial<OrderDelivery>;
  deliveryChanged: (delivery: Partial<OrderDelivery>) => void;
  className?: string;
}

export default function DeliveryForm(props: DeliveryFormProps) {
  const { delivery, deliveryChanged } = props;

  function alterAttibute(attr: string) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      deliveryChanged({ ...delivery, [attr]: e.target.value });
    };
  }

  return (
    <div className={`flex flex-col gap-3 ${props.className ?? ""}`}>
      <span className="px-7 pb-2 text-xl font-bold text-white/70">
        Dados da Entrega
      </span>
      <div className="flex flex-col gap-5 bg-violet-dark/50 rounded-xl p-6">
        <input
          placeholder="Nome Completo"
          value={delivery.name}
          onChange={alterAttibute("name")}
          className="input"
        />
        <div className="flex gap-5">
          <input
            placeholder="E-mail"
            value={delivery.email}
            onChange={alterAttibute("email")}
            className="input flex-1"
          />
          <input
            placeholder="CPF"
            value={delivery.cpf}
            onChange={alterAttibute("cpf")}
            className="input flex-1"
          />
        </div>
        <div className="flex gap-5">
          <input
            placeholder="Logradouro"
            value={delivery.address}
            onChange={alterAttibute("address")}
            className="input flex-1"
          />
          <input
            placeholder="Complemento"
            value={delivery.addressComplement}
            onChange={alterAttibute("addressComplement")}
            className="input"
          />
        </div>
        <div className="flex gap-5">
          <input
            placeholder="Cidade"
            value={delivery.city}
            onChange={alterAttibute("city")}
            className="input flex-1"
          />
          <input
            placeholder="Estado"
            value={delivery.state}
            onChange={alterAttibute("state")}
            className="input flex-1"
          />
        </div>
      </div>
    </div>
  );
}
