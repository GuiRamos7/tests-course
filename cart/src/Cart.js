import find from 'lodash/find';
import remove from 'lodash/remove';

export class Cart {
  items = [];

  add(item) {
    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((acc, item, idx) => {
      if (idx === 0) {
        return item.product.price * item.quantity;
      }

      return acc + item.product.price * item.quantity;
    }, 0);
  }
}
