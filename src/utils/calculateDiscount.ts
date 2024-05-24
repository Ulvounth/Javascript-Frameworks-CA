export default function calculateDiscountedPrice(
  price: number,
  discountedPrice: number
) {
  if (price > 0 && discountedPrice > 0 && price !== discountedPrice) {
    return (100 - (discountedPrice / price) * 100).toFixed(0).toString();
  }
  return '0';
}
