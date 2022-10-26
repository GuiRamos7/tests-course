import find from 'lodash/find';
import remove from 'lodash/remove';
import Dinero from 'dinero.js';

export class Cart {
  items = [];

  add(item) {
    const itemToFind = { product: item.product };

    if (find(this.items, itemToFind)) {
      remove(this.items, itemToFind);
    }

    this.items.push(item);
  }

  remove(product) {
    remove(this.items, { product });
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      const amount = Dinero({ amount: item.quantity * item.product.price });
      let discount = Dinero({ amount: 0 });

      if (
        item.condition &&
        item.condition.percentage &&
        item.condition.minimum <= item.quantity
      ) {
        discount = amount.percentage(item.condition.percentage);
      }

      return acc.add(amount).subtract(discount);
    }, Dinero({ amount: 0 }));
  }

  summary() {
    const total = this.getTotal().getAmount();
    const items = this.items;

    return {
      total,
      items,
    };
  }

  checkout() {
    const { items, total } = this.summary();

    this.items = [];

    return {
      total,
      items,
    };
  }
}
