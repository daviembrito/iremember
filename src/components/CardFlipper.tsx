import { useState } from 'react';
import type { Card } from '../types/Card';

export function CardFlipper(card: Card) {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped((state) => !state);
  }

  return isFlipped ? (
    <img
      src={card.image}
      onClick={flipCard}
      className='w-48 h-48 rounded-lg shadow-md flex items-center justify-center'
      alt='Card'
    />
  ) : (
    <div
      onClick={flipCard}
      className='bg-gray-300 w-48 h-48 rounded-lg shadow-md flex items-center justify-center'
    />
  );
}
