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

  describe('getTotal()', () => {
    it('Should return 0 when getTotal() is executed in a newly created instance', () => {
      expect(cart.getTotal().getAmount()).toEqual(0);
    });

    it('should multiply quantity and price receive the total amount', () => {
      cart.add({ product, quantity: 2 });

      expect(cart.getTotal().getAmount()).toEqual(70776);
    });

    it('should ensure no more than on product exists at a time', () => {
      cart.add({ product, quantity: 2 });
      cart.add({ product, quantity: 1 });

      expect(cart.getTotal().getAmount()).toEqual(35388);
    });

    it('should update total when a product gets includes and then remove ', () => {
      cart.add({ product, quantity: 2 });
      cart.add({ product: product2, quantity: 1 });
      cart.remove(product);

      expect(cart.getTotal().getAmount()).toEqual(50000);
    });
  });

  describe('Checkout()', () => {
    it('should return an object with the total and the list of items', () => {
      cart.add({
        product,
        quantity: 2,
      });
      cart.add({
        product: product2,
        quantity: 1,
      });

      expect(cart.checkout()).toMatchSnapshot();
    });

    it('should  return an object with the total and the list of items when summary() is called', () => {
      cart.add({
        product: product2,
        quantity: 5,
      });

      expect(cart.checkout()).toMatchSnapshot();
    });

    it('should reset tje cart when checkout() is called', () => {
      cart.add({
        product: product2,
        quantity: 5,
      });

      cart.checkout();

      expect(cart.getTotal().getAmount()).toEqual(0);
    });
  });

  describe('special conditions', () => {
    it('should apply percentage discount quantity above minimun is passed', () => {
      const condition = {
        percentage: 30,
        minimum: 2,
      };

      cart.add({
        product,
        quantity: 3,
        condition,
      });

      expect(cart.getTotal().getAmount()).toEqual(74315);
    });
  });
});
