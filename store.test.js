import { Store } from "./store";
import { DiscountOffer } from "./DiscountOffer"

describe("Store Partners Discount Offers", () => {
  it("[Global] should decrease the discount and expiresIn", () => {
    expect(
      JSON.stringify(new Store([new DiscountOffer("test", 2, 3)]).updateDiscounts())
    ).toEqual(
      JSON.stringify([new DiscountOffer("test", 1, 2)])
    );
  });
  it("[Global] should decrease twice as fast when the discount offer expires", () => {
    expect(
      JSON.stringify(new Store([new DiscountOffer("test", -1, 3)]).updateDiscounts())
    ).toEqual(
      JSON.stringify([new DiscountOffer("test", -2, 1)])
    );
  });
  it("[Naturalia] should increase the older it gets", () => {
    expect(
      JSON.stringify(new Store([new DiscountOffer("Naturalia", 10, 3, false, true)]).updateDiscounts())
    ).toEqual(
      JSON.stringify([new DiscountOffer("Naturalia", 9, 4, false, true)])
    );
  });
});
