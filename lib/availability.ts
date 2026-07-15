const MONTHS = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
];

export function nextSlotMonth(offsetMonths = 1): string {
  const d = new Date();
  d.setMonth(d.getMonth() + offsetMonths);
  return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}
