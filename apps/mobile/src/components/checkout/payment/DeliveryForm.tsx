import { OrderDelivery } from "@gstore/core";
import { TextInput, StyleSheet, View } from "react-native";
import React from "react";

export interface DeliveryFormProps {
  delivery: Partial<OrderDelivery>;
  deliveryChanged: (delivery: Partial<OrderDelivery>) => void;
  className?: string;
}

export default function DeliveryForm(props: DeliveryFormProps) {
  const { delivery, deliveryChanged } = props;

  function alterAttribute(attribute: string) {
    return (value: any) => {
      deliveryChanged({ ...delivery, [attribute]: value });
    };
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={delivery.name}
        onChangeText={alterAttribute("name")}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={delivery.email}
        onChangeText={alterAttribute("email")}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={delivery.cpf}
        onChangeText={alterAttribute("cpf")}
        keyboardType="numeric"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Logradouro"
        value={delivery.address}
        onChangeText={alterAttribute("address")}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Complemento"
        value={delivery.addressComplement}
        onChangeText={alterAttribute("addressComplement")}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={delivery.city}
        onChangeText={alterAttribute("city")}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Estado"
        value={delivery.state}
        onChangeText={alterAttribute("state")}
        placeholderTextColor="#999"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  input: {
    height: 40,
    width: 300,
    color: "#fff",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#241440",
  },
});
