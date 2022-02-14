const intervals = [
  { label: 'year', seconds: 31536000 },
  { label: 'month', seconds: 2592000 },
  { label: 'week', seconds: 604800 },
  { label: 'day', seconds: 86400 },
  { label: 'hour', seconds: 3600 },
  { label: 'minute', seconds: 60 },
  { label: 'second', seconds: 0 }
];

module.exports = (d, withAdverb = true) => {
  const date = typeof d === 'object' ? d : new Date(d);
  const diff = Date.now() - date.getTime();
  const isPast = diff >= 0;
  const seconds = Math.round(Math.abs(diff) / 1000);
  const interval = intervals.find(i => i.seconds <= seconds);
  const count = interval.seconds
    ? Math.round(seconds / interval.seconds)
    : seconds
      ? seconds
      : 1;
  const output = `${count} ${interval.label}${count !== 1 ? 's' : ''}`;
  return !withAdverb
    ? output
    : isPast
      ? `${output} ago`
      : `in ${output}`;
}
