import cardImages from './cards';

const pictures = cardImages.slice();
export const generate = cardsNum => {
  pictures.length = cardsNum / 2;
  pictures.push(...pictures);

  let c = pictures.map((image, index) => ({
    id: image + ' ' + index,
    imageURL: image,
    isFlipped: false,
    canFlip: true,
  }));
  return c.sort(() => Math.random() - 0.5);
};
