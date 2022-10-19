import { Cart } from './Cart';

describe('Cart', () => {
  let cart;
  const product = {
    title: 'Adidas running shoes - men',
    price: 35388,
  };
  const product2 = {
    title: 'Nike running shoes - men',
    price: 50000,
  };

  beforeEach(() => {
    cart = new Cart();
  });

  it('Should return 0 when getTotal() is executed in a newly created instance', () => {
    expect(cart.getTotal()).toEqual(0);
  });

  it('should multiply quantity and price receive the total amount', () => {
    cart.add({ product, quantity: 2 });

    expect(cart.getTotal()).toEqual(70776);
  });

  it('should ensure no more than on product exists at a time', () => {
    cart.add({ product, quantity: 2 });
    cart.add({ product, quantity: 1 });

    expect(cart.getTotal()).toEqual(35388);
  });

  fit('should update total when a product gets includes and then remove ', () => {
    cart.add({ product, quantity: 2 });
    cart.add({ product: product2, quantity: 1 });
    cart.remove(product);

    expect(cart.getTotal()).toEqual(50000);
  });
});
