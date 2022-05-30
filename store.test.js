import { Store } from "./store";
import { DiscountOffer } from "./DiscountOffer"

describe("Store", () => {
  it("should decrease the discount and expiresIn", () => {
    expect(JSON.stringify(new Store([new DiscountOffer("test", 2, 3)]).updateDiscounts())).toStrictEqual(
      JSON.stringify([new DiscountOffer("test", 1, 2)])
    );
  });
});
