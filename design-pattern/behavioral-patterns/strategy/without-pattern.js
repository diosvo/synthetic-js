function getPrice(originalPrice, typePromotion = 'default') {
  if (typePromotion === 'preOrder') {
    return originalPrice * 0.8; // discount 20%
  } // if you had known the rule of SOLID, it broke the first rule

  if (typePromotion === 'promotion') {
    return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30; // discount 10% or maximum 30K
  }

  if (typePromotion === 'default') {
    return originalPrice;
  }
}

console.log('[without-strategy]::', getPrice(200, 'preOrder'));
