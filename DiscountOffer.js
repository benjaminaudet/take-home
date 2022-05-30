export class DiscountOffer {
    constructor(partnerName, expiresIn, discountInPercent, update, frozen) {
        this.partnerName = partnerName;
        this.expiresIn = expiresIn;
        this.discountInPercent = discountInPercent;
        this.update = update || (() => { });
        this.frozen = frozen || false;
    }


    increaseBasedOnExpiration(_expiresInLimit) {
        if (this.discountInPercent >= 50) {
            return;
        }
        if (this.expiresIn < _expiresInLimit) {
            this.discountInPercent += 1;
        }
    }

    decreaseTwiceAsFastAfterExpiration() {
        if (this.expiresIn <= 0) {
            this.discountInPercent -= 2;
            return true;
        }
        return false;
    }

    increaseTwiceAsFastAfterExpiration() {
        if (this.expiresIn <= 0) {
            this.discountInPercent += 2;
            return true;
        }
        return false;
    }

}