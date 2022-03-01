# fromNow
A 1kb function that returns a date‘s amount of time from now.


## Install
`npm install from-now`


## API
```
@date = date instance || parsable date string
@opts = {
  abbreviate: boolean,  // (default false)
  phrase: boolean       // (default true)
}

fromNow(date, opts);
```


## Examples
```
// now = '12/25/2020';
fromNow('12/25/2018'); // -> 2 years ago
fromNow('12/25/2022'); // -> in 2 years
fromNow('12/25/2022', { phrase: false }); // -> 2 years
fromNow('12/25/2022', { abbreviate: true }); // -> 2 yrs
```
