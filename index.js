import { Store } from './store';
import { partnersDiscountsOfffers } from "./PartnersDiscountOffers"

import fs from 'fs';

const store = new Store(partnersDiscountsOfffers);

const log = [];

Array.from({ length: 30 }, () => log.push(JSON.stringify(store.updateDiscounts())));

fs.writeFile("output.json", JSON.stringify(log), err => {
  if (err) {
    console.error("error");
    return -1;
  }
  console.log("success");
});
