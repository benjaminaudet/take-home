import { Store } from './store';
import { DiscountOffer } from "./DiscountOffer";

import fs from "fs";

const discountOffers = [
  new DiscountOffer("Velib", 20, 30),
  new DiscountOffer("Naturalia", 10, 5),
  new DiscountOffer("Vinted", 5, 40),
  new DiscountOffer("Ilek", 15, 40)
];
const store = new Store(discountOffers);


const DAYS_AMOUNT = 30;
const log = [];
const days = [...Array(DAYS_AMOUNT).keys()]

days.forEach(() => {
  log.push(JSON.stringify(store.updateDiscounts()));
})

/* eslint-disable no-console */
fs.writeFile("output.json", JSON.stringify(log), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
