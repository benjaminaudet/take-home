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
      discountOffer.defaultDailyDecrease();
    })
    return this.discountOffers;
  }
}
