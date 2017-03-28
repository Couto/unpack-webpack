import {fibonacci} from './math/sequences';
import * as numbers from './math/numbers';
import {split, toNumber} from './math/numbers';
import {img} from './DOM/elements';

console.log(numbers);

split(fibonacci(17))
  .map(toNumber)
  .map(alg => numbers[alg])
  .map(img)
  .map(i => document.body.appendChild(i));
