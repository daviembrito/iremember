import { useState } from 'react';
import { CardFlipper } from '../components/CardFlipper';
import { Button } from '../components/Button';
import { Card } from '../types/Card';
import { shuffle } from '../utils/shuffle';

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

  const [cards, setCards] = useState(() => {
    const cardPairs = images.flatMap((image) => [
      new Card({ image }),
      new Card({ image }),
    ]);
    return shuffle(cardPairs);
  });

  const [isWaiting, setIsWaiting] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);

  const isGameComplete = matchedPairs === images.length;

  const handleCardFlip = (id: number) => {
    if (isWaiting) {
      return;
    }

    if (flippedCards.length === 0) {
      setFlippedCards([id]);
      return;
    }

    setIsWaiting(true);
    const firstCardId = flippedCards[0];

    if (cards[firstCardId].isEqual(cards[id])) {
      cards[firstCardId].match();
      cards[id].match();

      setMatchedPairs((prev) => prev + 1);
      setFlippedCards([]);
      setCards([...cards]);
      setIsWaiting(false);
    } else {
      setFlippedCards([firstCardId, id]);

      setTimeout(() => {
        setFlippedCards([]);
        setIsWaiting(false);
      }, TIME_TO_FLIP_BACK);
    }
  };

  const resetGame = () => {
    const cardPairs = images.flatMap((image) => [
      new Card({ image }),
      new Card({ image }),
    ]);
    setCards(shuffle(cardPairs));
    setFlippedCards([]);
    setMatchedPairs(0);
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

      {isGameComplete && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10'>
          <div className='bg-outer-50 p-8 rounded-lg shadow-lg max-w-md text-center'>
            <h2 className='text-2xl font-bold mb-4'>Congratulations! 🎉</h2>
            <p className='mb-6'>You've successfully matched all the cards!</p>
            <Button onClick={resetGame}>Play Again</Button>
          </div>
        </div>
      )}
    </div>
  );
}
