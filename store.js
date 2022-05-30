export class Store {
  constructor(discountOffers = []) {
    this.discountOffers = discountOffers;
    this.specificDiscountsUpdateByPartner = {
      'Naturalia': (discountOffer) => {
        if (discountOffer.discountInPercent < 50) {
          if (discountOffer.increaseTwiceAsFastAfterExpiration()) {
            return;
          }
          discountOffer.discountInPercent += 1;
        }
      },
      'Vinted': (discountOffer) => {
        if (discountOffer.expiresIn < 0) {
          discountOffer.discountInPercent = 0;
          return;
        }
        if (discountOffer.discountInPercent < 50) {
          discountOffer.discountInPercent += 1;
          discountOffer.increaseBasedOnExpiration(10);
          discountOffer.increaseBasedOnExpiration(5);
        }
      }
    }
  }

  updateDiscounts() {
    this.discountOffers.forEach((discountOffer) => {
      if (discountOffer.discountInPercent >= 50) {
        return;
      }
      if (Object.keys(this.specificDiscountsUpdateByPartner).includes(discountOffer.partnerName)) {
        this.specificDiscountsUpdateByPartner[discountOffer.partnerName](discountOffer);
      }
      discountOffer.defaultDailyDecrease();
    })
    return this.discountOffers;
  }
}
