import { Store } from "./store";
import { DiscountOffer } from "./DiscountOffer"

describe("Store Partners Discount Offers", () => {
  it("should decrease the discount and expiresIn", () => {
    expect(
      JSON.stringify(new Store([new DiscountOffer("test", 2, 3)]).updateDiscounts())
    ).toEqual(
      JSON.stringify([new DiscountOffer("test", 1, 2)])
    );
  });
  it("should decrease twice as fast when the discount offer expires", () => {
    expect(
      JSON.stringify(new Store([new DiscountOffer("test", -1, 3)]).updateDiscounts())
    ).toEqual(
      JSON.stringify([new DiscountOffer("test", -2, 1)])
    );
  });
});
