import { Product } from "@gstore/core";
import { View, Text, StyleSheet } from "react-native";
import Colors from "@/src/data/constants/Colors";
import RateReview from "../shared/ReviewRate";

export interface UsersReviewProps {
  product: Product;
}

export default function UsersReview(props: UsersReviewProps) {
  return (
    <View
      style={{
        padding: 30,
        gap: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
        <Text>⭐</Text>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Avaliações dos Usuários
        </Text>
      </View>
      <Text style={{ color: "#ddd", textAlign: "justify" }}>
        O produto é elogiado por seu desempenho, qualidade de som e praticidade.
        Os clientes destacam o bom custo-benefício, a qualidade do microfone
        embutido e a facilidade de instalação. Alguns mencionam que o produto é
        ideal para jogos e que o desempenho é excelente, mesmo sem placa de
        vídeo dedicada. Outros destacam a qualidade do som e o conforto do fone
        de ouvido.
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: Colors.TEXT_HIGHLIGHT_2,
              fontSize: 48,
              fontWeight: "bold",
            }}
          >
            {props.product.rate.toFixed(1).replace(".", ",")}
          </Text>
          <RateReview rate={props.product.rate} size={18} />
          <Text style={styles.textComents}>(198 Comentários)</Text>
        </View>
        <View>
          <Text style={styles.textComents}>Desempenho excelente.</Text>
          <Text style={styles.textComents}>Custo benefício ótimo.</Text>
          <Text style={styles.textComents}>Gráfico dedicado.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textComents: {
    color: "#ddd",
  },
});
