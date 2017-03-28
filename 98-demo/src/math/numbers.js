import zero from '../../assets/numbers/0.png';
import one from '../../assets/numbers/1.png';
import two from '../../assets/numbers/2.png';
import three from '../../assets/numbers/3.png';
import four from '../../assets/numbers/4.png';
import five from '../../assets/numbers/5.png';
import six from '../../assets/numbers/6.png';
import seven from '../../assets/numbers/7.png';
import eight from '../../assets/numbers/8.png';
import nine from '../../assets/numbers/9.png';

export {
  zero, one, two, three, four,
  five, six, seven, eight, nine
};

export function split(n) {
  return String(n)
    .split('')
    .map(n => parseInt(n, 10));
}

export function toNumber(n) {
  return [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
  ][n];
}
