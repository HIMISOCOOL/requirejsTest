import { func } from './util/library';
import * as $ from 'jquery';

const song = func('bird');

const array = [1, 2, 3];

const [one, two , three] = array;

console.log(song);

$().ready(() => {
    console.log('jquery ready');
});
