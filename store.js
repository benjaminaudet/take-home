export class Store {
  constructor(discountOffers = []) {
    this.discountOffers = discountOffers;
  }

  updateDiscounts() {
    this.discountOffers.forEach((discountOffer) => {
      if (discountOffer.discountInPercent >= 50) {
        return;
      }
      discountOffer.update(discountOffer);
      if (!discountOffer.frozen) {
        discountOffer.discountInPercent -= 1;
        discountOffer.expiresIn -= 1;
      }
    })
    return this.discountOffers;
  }
}
