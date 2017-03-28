import { fibonacci } from './math/sequences';
import { img } from './DOM/elements';
import * as numbers from './math/numbers';
import {split, toNumber} from './math/numbers';

console.log(numbers);

split(fibonacci(6))
  .map(toNumber)
  .map(alg => numbers[alg])
  .map(img)
  .map(i => document.body.appendChild(i));
