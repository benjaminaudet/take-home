import { DiscountOffer } from "./DiscountOffer";

export const partnersDiscountsOfffers = [
    new DiscountOffer("Velib", 20, 30,
        (discountOffer) => {
            if (discountOffer.decreaseTwiceAsFastAfterExpiration()) {
                return;
            }
        }),
    new DiscountOffer("Naturalia", 10, 5,
        (discountOffer) => {
            if (discountOffer.increaseTwiceAsFastAfterExpiration()) {
                return;
            }
            if (discountOffer.discountInPercent < 50) {
                discountOffer.discountInPercent += 1;
            }
        }),
    new DiscountOffer("Vinted", 5, 40,
        (discountOffer) => { // This function should be use for naturalia as well, must export.
            if (discountOffer.expiresIn <= 0) {
                discountOffer.discountInPercent = 0;
                return;
            }
            discountOffer.discountInPercent += 1;
            discountOffer.increaseBasedOnExpiration(11);
            discountOffer.increaseBasedOnExpiration(6);
        }
    ),
    new DiscountOffer("Ilek", 15, 40,
        (discountOffer) => {
            discountOffer.expiresIn += 1; // never expires nor decrease based on the partnership's agreement
        },
        true, true)
];