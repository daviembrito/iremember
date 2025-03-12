export enum CardState {
  Unflipped = 0,
  Flipped = 1,
  Matched = 2,
}

type CardParams = {
  image: string;
};

export class Card {
  public image: string;
  public state: CardState;

  constructor({ image }: CardParams) {
    this.image = image;
    this.state = CardState.Unflipped;
  }

  flip() {
    this.state =
      this.state === CardState.Unflipped
        ? CardState.Flipped
        : CardState.Unflipped;
  }

  match() {
    this.state = CardState.Matched;
  }

  isEqual(card: Card) {
    return this.image === card.image;
  }

  isFlipped() {
    return this.state === CardState.Flipped;
  }

  isMatched() {
    return this.state === CardState.Matched;
  }
}
