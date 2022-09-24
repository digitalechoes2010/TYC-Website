export function formatNumber(num: any) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}
