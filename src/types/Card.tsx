type CardParams = {
  image: string;
};

export class Card {
  image: string;

  constructor(params: CardParams) {
    this.image = params.image;
  }
}
