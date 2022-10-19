import find from 'lodash/find';
import remove from 'lodash/remove';

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
    return this.items.reduce((acc, item, idx) => {
      return acc + item.product.price * item.quantity;
    }, 0);
  }
}
