import { useState } from 'react';
import { CardFlipper } from '../components/CardFlipper';
import { Card } from '../types/Card';

// 1 second
const TIME_TO_FLIP_BACK = 1000;

export function Game() {
  const images = [
    'https://images.unsplash.com/photo-1626808642875-0aa545482dfb',
    'https://images.unsplash.com/photo-1546842931-886c185b4c8c',
    'https://images.unsplash.com/photo-1520763185298-1b434c919102',
    'https://images.unsplash.com/photo-1442458017215-285b83f65851',
    'https://images.unsplash.com/photo-1496483648148-47c686dc86a8',
    'https://images.unsplash.com/photo-1591181520189-abcb0735c65d',
  ];

  const [cards, setCards] = useState(() =>
    images.flatMap((image) => [new Card({ image }), new Card({ image })]),
  );

  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const handleCardFlip = (id: number) => {
    if (flippedCards.length === 0) {
      setFlippedCards([id]);
      return;
    }

    const firstCardId = flippedCards[0];

    if (cards[firstCardId].isEqual(cards[id])) {
      cards[firstCardId].match();
      cards[id].match();

      setFlippedCards([]);
      setCards([...cards]);
    } else {
      setFlippedCards([firstCardId, id]);

      setTimeout(() => {
        setFlippedCards([]);
      }, TIME_TO_FLIP_BACK);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='grid grid-cols-4 gap-4'>
        {cards.map((card, index) => (
          <CardFlipper
            key={index}
            id={index}
            card={card}
            isFlipped={flippedCards.includes(index)}
            onFlip={handleCardFlip}
          />
        ))}
      </div>
    </div>
  );
}
