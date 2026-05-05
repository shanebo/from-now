import { describe, it, expect } from 'bun:test';
import dayjs from 'dayjs';
import fromNow from './index';


describe('Past', () => {
  it('1 second ago', () => {
    const now = Date.now();
    expect(fromNow(now)).toBe('1 second ago');
  });

  it('5 seconds ago', () => {
    const fiveSecsAgo = dayjs().subtract(5, 'second').toDate();
    expect(fromNow(fiveSecsAgo)).toBe('5 seconds ago');
  });

  it('45 seconds ago', () => {
    const fortyFiveSecsAgo = dayjs().subtract(45, 'second').toDate();
    expect(fromNow(fortyFiveSecsAgo)).toBe('45 seconds ago');
  });

  it('6 hours ago', () => {
    const sixHoursAgo = dayjs().subtract(6, 'hour').toDate();
    expect(fromNow(sixHoursAgo)).toBe('6 hours ago');
  });

  it('1 day ago', () => {
    const yesterday = dayjs().subtract(1, 'day').toDate();
    expect(fromNow(yesterday)).toBe('1 day ago');
  });

  it('2 years ago', () => {
    const twoYearsAgo = dayjs().subtract(2, 'year').toDate();
    expect(fromNow(twoYearsAgo)).toBe('2 years ago');
  });
});


describe('Future', () => {
  it('in 1 second', () => {
    const inOneSecond = dayjs().add(500, 'millisecond').toDate();
    expect(fromNow(inOneSecond)).toBe('in 1 second');
  });

  it('in 1 day', () => {
    const inOneDay = dayjs().add(1, 'day').toDate();
    expect(fromNow(inOneDay)).toBe('in 1 day');
  });

  it('in 6 hours', () => {
    const inSixHours = dayjs().add(6, 'hour').toDate();
    expect(fromNow(inSixHours)).toBe('in 6 hours');
  });

  it('in 2 weeks', () => {
    const inTwoWeeks = dayjs().add(2, 'week').toDate();
    expect(fromNow(inTwoWeeks)).toBe('in 2 weeks');
  });

  it('in 4 weeks', () => {
    const inFourWeeks = dayjs().add(4, 'week').toDate();
    expect(fromNow(inFourWeeks)).toBe('in 4 weeks');
  });
});


describe('No phrase', () => {
  const opts = { phrase: false };

  it('1 second', () => {
    const now = Date.now();
    expect(fromNow(now, opts)).toBe('1 second');
  });

  it('6 hours', () => {
    const sixHoursAgo = dayjs().subtract(6, 'hour').toDate();
    expect(fromNow(sixHoursAgo, opts)).toBe('6 hours');
  });

  it('1 day', () => {
    const yesterday = dayjs().subtract(1, 'day').toDate();
    expect(fromNow(yesterday, opts)).toBe('1 day');
  });
});


describe('Abbreviate', () => {
  const opts = { abbreviate: true };

  it('1 sec', () => {
    const now = Date.now();
    expect(fromNow(now, opts)).toBe('1 sec ago');
  });

  it('6 hrs', () => {
    const sixHoursAgo = dayjs().subtract(6, 'hour').toDate();
    expect(fromNow(sixHoursAgo, opts)).toBe('6 hrs ago');
  });

  it('1 day', () => {
    const yesterday = dayjs().subtract(1, 'day').toDate();
    expect(fromNow(yesterday, opts)).toBe('1 day ago');
  });
});
