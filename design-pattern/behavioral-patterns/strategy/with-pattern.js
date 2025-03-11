const preOrderPrice = (originalPrice) => originalPrice * 0.8;
const promotionPrice = (originalPrice) =>
  originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
const defaultPrice = (originalPrice) => originalPrice;

const getPriceStrategy = {
  preOrder: preOrderPrice,
  promotion: promotionPrice,
  default: defaultPrice,
};

function getPrice(originalPrice, typePromotion) {
  return getPriceStrategy[typePromotion]
    ? getPriceStrategy[typePromotion](originalPrice)
    : Error(`${typePromotion} is not a valid type`);
}

console.log('[with-strategy]::', getPrice(200, 'promotion'));
