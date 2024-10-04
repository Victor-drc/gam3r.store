import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";

export interface ReviewRateProps {
  rate: number;
  size?: number;
}

export default function ReviewRate(props: ReviewRateProps) {
  function convertRateToStars(rate: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rate >= i) {
        stars.push(<IconStarFilled size={props.size ?? 12} />);
      } else if (rate >= i - 0.5) {
        stars.push(<IconStarHalfFilled size={props.size ?? 12} />);
      } else {
        stars.push(<IconStar size={props.size ?? 12} />);
      }
    }
    return stars;
  }

  return (
    <div className="flex gap-0.5 text-emerald-400">
      {convertRateToStars(props.rate)}
    </div>
  );
}
