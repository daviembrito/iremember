export enum CardState {
  Unflipped = 0,
  Flipped = 1,
  Matched = 2,
}

type CardParams = {
  image: string;
};

export class Card {
  private image: string;
  private state: CardState;

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

  isMatched() {
    return this.state === CardState.Matched;
  }

  getImage() {
    return this.image;
  }
}
