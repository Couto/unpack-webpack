import * as OfflinePlugin from 'offline-plugin/runtime';
import { factorial } from './math/sequences';
import { img } from './DOM/elements';
import * as numbers from './math/numbers';
import {split, toNumber} from './math/numbers';

OfflinePlugin.install();

split(factorial(15))
  .map(toNumber)
  .map(alg => numbers[alg])
  .map(img)
  .map(i => document.body.appendChild(i));
