import type { Card } from '../types/Card';

type CardFlipperProps = {
  id: number;
  card: Card;
  isFlipped: boolean;
  onFlip: (id: number) => void;
};

export function CardFlipper({ id, card, isFlipped, onFlip }: CardFlipperProps) {
  function flipCard() {
    if (card.isMatched() || isFlipped) {
      return;
    }

    onFlip(id);
  }

  return (
    <div
      onClick={flipCard}
      className='w-48 h-48 rounded-lg shadow-md flex items-center justify-center'
    >
      {isFlipped || card.isMatched() ? (
        <img src={card.image} className='w-full h-full rounded-lg' alt='Card' />
      ) : (
        <div className='w-full h-full bg-gray-300 rounded-lg' />
      )}
    </div>
  );
}
