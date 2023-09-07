import type { CardItem } from "../types/types";
import "./CardsView.css";

interface CardsViewProps {
  cards: CardItem[];
}

export default function CardsView({ cards }: CardsViewProps) {

  return (
    <div>
      <div className="cardsView">
        {cards.map((card, index) => {
          return index < 3 ? <CardView key={index} {...card} /> : null;
        })}
      </div>
    </div>
  );
}

function CardView({ title, description, image }: CardItem) {
  return (
    <section className="card">
      <div className="image" style={{ backgroundImage: `url(${image})` }}>
        <img src="/assets/game-info-frame-a.webp" alt="" />
      </div>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </section>
  );
}
