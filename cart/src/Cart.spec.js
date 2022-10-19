import { Cart } from './Cart';

describe('Cart', () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it('Should return 0 when getTotal() is executed in a newly created instance', () => {
    expect(cart.getTotal()).toEqual(0);
  });

  it('should multiply quantity and price receive the total amount', () => {
    const item = {
      product: {
        title: 'Adidas running shoes - men',
        price: 35388,
      },
      quantity: 2, // 70776
    };

    cart.add(item);

    expect(cart.getTotal()).toEqual(70776);
  });

  // it('should ensure no more than on product exists at a time')
});
