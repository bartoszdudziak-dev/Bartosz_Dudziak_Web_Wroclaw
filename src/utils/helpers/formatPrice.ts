export default function formatPrice(price: number) {
  const [main, fractional = "0"] = String(price.toFixed(2)).split(".");

  return `${main}.${fractional.padEnd(2, "0")}`;
}
