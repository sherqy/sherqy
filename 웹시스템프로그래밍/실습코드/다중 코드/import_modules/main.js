import {conHello, fnPlusNum} from './library_named.js';
console.log(conHello, 'export to named!!!!!');
console.log('1+2=', fnPlusNum(1, 2));

import * as myLibrary from './library_named.js';
console.log(myLibrary.conHello, 'export to named using *');
console.log('3+4=', myLibrary.fnPlusNum(3,4));

import fnMyFunction from './library_default.js';
console.log('Hello, this is ex of export to default');
console.log('5+6=', fnMyFunction(5, 6));