import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export interface ReviewRateProps {
  rate: number;
  size?: number;
}

export default function ReviewRate(props: ReviewRateProps) {
  function rateToStars(rate: number) {
    const stars: any[] = [];
    for (let i = 1; i <= 5; i++) {
      if (rate >= i) {
        stars.push(
          <Ionicons key={i} name="star" size={16} style={styles.icone} />
        );
      } else if (rate >= i - 0.5) {
        stars.push(
          <Ionicons key={i} name="star-half" size={16} style={styles.icone} />
        );
      } else {
        stars.push(
          <Ionicons
            key={i}
            name="star-outline"
            size={16}
            style={styles.icone}
          />
        );
      }
    }
    return stars;
  }

  return <View style={styles.container}>{rateToStars(props.rate)}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 0.5,
    color: "#34d399",
  },
  icone: {
    color: "#34d399",
  },
});
