export function formatMoney(amouthCents) {
  return `$${(amouthCents / 100).toFixed(2)}`;
}
