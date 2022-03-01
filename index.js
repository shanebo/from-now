const intervals = [
  { short: 'yr', long: 'year', seconds: 31536000 },
  { short: 'mo', long: 'month', seconds: 2592000 },
  { short: 'wk', long: 'week', seconds: 604800 },
  { short: 'day', long: 'day', seconds: 86400 },
  { short: 'hr', long: 'hour', seconds: 3600 },
  { short: 'min', long: 'minute', seconds: 60 },
  { short: 'sec', long: 'second', seconds: 0 }
];

const defaults = {
  abbreviate: false,
  phrase: true
};

module.exports = (d, options = {}) => {
  const opts = { ...defaults, ...options };
  const type = opts.abbreviate ? 'short' : 'long';
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
  const output = `${count} ${interval[type]}${count !== 1 ? 's' : ''}`;
  return !opts.phrase
    ? output
    : isPast
      ? `${output} ago`
      : `in ${output}`;
}
