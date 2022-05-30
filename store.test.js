import { Store } from "./store";
import { DiscountOffer } from "./DiscountOffer"

describe("Store Partners Discount Offers", () => {
  it("[Global #1] should decreases the discount and expiresIn", () => {
    expect(
      JSON.stringify(new Store([new DiscountOffer("test", 2, 3)]).updateDiscounts())
    ).toEqual(
      JSON.stringify([new DiscountOffer("test", 1, 2)])
    );
  });
  it("[Global #2] should decreases twice as fast when the discount offer expires", () => {
    expect(
      JSON.stringify(new Store([new DiscountOffer("test", -1, 3)]).updateDiscounts())
    ).toEqual(
      JSON.stringify([new DiscountOffer("test", -2, 1)])
    );
  });
  it("[Naturalia #1] should increases the older it gets", () => {
    expect(
      JSON.stringify(new Store([new DiscountOffer("Naturalia", 10, 3, false, true)]).updateDiscounts())
    ).toEqual(
      JSON.stringify([new DiscountOffer("Naturalia", 9, 4, false, true)])
    );
  });
  it("[Naturalia #2] should increases twice as fast the older it gets when expiration date has passed", () => {
    expect(
      JSON.stringify(new Store([new DiscountOffer("Naturalia", -1, 3, false, true)]).updateDiscounts())
    ).toEqual(
      JSON.stringify([new DiscountOffer("Naturalia", -2, 5, false, true)])
    );
  });
  it("[Vinted #1] should increases the older it gets (+1 when 11 days or more left)", () => {
    expect(
      JSON.stringify(new Store([new DiscountOffer("Vinted", 15, 3, false, true)]).updateDiscounts())
    ).toEqual(
      JSON.stringify([new DiscountOffer("Vinted", 14, 4, false, true)])
    );
  });
  it("[Vinted #2] should increases twice as fast the older it gets (+2 when 10 days or less left)", () => {
    expect(
      JSON.stringify(new Store([new DiscountOffer("Vinted", 10, 3, false, true)]).updateDiscounts())
    ).toEqual(
      JSON.stringify([new DiscountOffer("Vinted", 9, 5, false, true)])
    );
  });
  it("[Vinted #3] should increases thrice as fast the older it gets (+3 when 5 days or less left)", () => {
    expect(
      JSON.stringify(new Store([new DiscountOffer("Vinted", 5, 3, false, true)]).updateDiscounts())
    ).toEqual(
      JSON.stringify([new DiscountOffer("Vinted", 4, 6, false, true)])
    );
  });
  it("[Ilek #1] should never expires nor decreases", () => {
    expect(
      JSON.stringify(new Store([new DiscountOffer("Ilek", 5, 3, true, true)]).updateDiscounts())
    ).toEqual(
      JSON.stringify([new DiscountOffer("Ilek", 5, 3, true, true)])
    );
  });
  it("[BackMarket #1] should decreases twice as fast as normal partners", () => {
    expect(
      JSON.stringify(new Store([new DiscountOffer("BackMarket", 10, 5)]).updateDiscounts())
    ).toEqual(
      JSON.stringify([new DiscountOffer("BackMarket", 9, 3)])
    );
  });
});
