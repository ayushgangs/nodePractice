const lod = require('lodash')

const arr = [1,2,3,[4,5,[6,[7,8]],9],10]  //this is 4D array

const a = lod.flatten(arr)  //this method flattens 2D array only to 1D
console.log(a);