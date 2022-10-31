import Dinero from 'dinero.js';

export const calculatePercentageDiscount = (
  amount,
  { condition, quantity },
) => {
  if (condition?.percentage && condition.minimum <= quantity) {
    return amount.percentage(condition.percentage);
  }

  return Dinero({ amount: 0 });
};
