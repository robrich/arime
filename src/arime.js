
var zero = '0';
var plus = '+';
var minus = '-';
var dot = '.';
var equations = require('./equations.js');
var utils = require('./utils/utils.js');

function argsArray(aNum, bNum, args, fn){
    
}

function add(aNum, bNum){
    return 'add';
}
function subtract(){
    return 'subtract';
}
function multiply(){
    return 'multiply';
}
function divide(){
    return 'divide';
}
function chain(){
    return 'chain';
}

module.exports = Object.create({
    add:add,
    subtract:subtract,
    multiply:multiply,
    divide:divide,
    chain:chain,
    toString:function(){
        return 'arime: an <b>ari</b>th<b>me</b>tic library'
    }
});