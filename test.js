const { expect } = require('chai');
const dayjs = require('dayjs');
const fromNow = require('./index');


describe('Past', () => {
  it('1 second ago', () => {
    const now = Date.now();
    expect(fromNow(now)).to.equal('1 second ago');
  });

  it('6 hours ago', () => {
    const sixHoursAgo = dayjs().subtract(6, 'hour').toDate();
    expect(fromNow(sixHoursAgo)).to.equal('6 hours ago');
  });

  it('1 day ago', () => {
    const yesterday = dayjs().subtract(1, 'day').toDate();
    expect(fromNow(yesterday)).to.equal('1 day ago');
  });

  it('2 years ago', () => {
    const twoYearsAgo = dayjs().subtract(2, 'year').toDate();
    expect(fromNow(twoYearsAgo)).to.equal('2 years ago');
  });
});


describe('Future', () => {
  it('in 1 second', () => {
    const inOneSecond = dayjs().add(500, 'millisecond').toDate();
    expect(fromNow(inOneSecond)).to.equal('in 1 second');
  });

  it('in 1 day', () => {
    const inOneDay = dayjs().add(1, 'day').toDate();
    expect(fromNow(inOneDay)).to.equal('in 1 day');
  });

  it('in 6 hours', () => {
    const inSixHours = dayjs().add(6, 'hour').toDate();
    expect(fromNow(inSixHours)).to.equal('in 6 hours');
  });

  it('in 2 weeks', () => {
    const inTwoWeeks = dayjs().add(2, 'week').toDate();
    expect(fromNow(inTwoWeeks)).to.equal('in 2 weeks');
  });

  it('in 4 weeks', () => {
    const inFourWeeks = dayjs().add(1, 'month').toDate();
    expect(fromNow(inFourWeeks)).to.equal('in 4 weeks');
  });
});


describe('No adverb', () => {
  const now = Date.now();

  it('0 second', () => {
    expect(fromNow(now, false)).to.equal('0 second');
  });

  it('6 hours', () => {
    const sixHoursAgo = dayjs().subtract(6, 'hour').toDate();
    expect(fromNow(sixHoursAgo, false)).to.equal('6 hours');
  });

  it('1 day', () => {
    const yesterday = dayjs().subtract(1, 'day').toDate();
    expect(fromNow(yesterday, false)).to.equal('1 day');
  });
});
