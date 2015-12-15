var ret = {};
var plus = '+';
var minus = '-';
for( var x = 0; x < 10; x++ ){
    ret[x] = {};
    ret[x][plus] = {};
    ret[x][minus] = {};
    for( var y = 0; y < 10; y++ ){
        ret[x][plus][y] = x + y;
        ret[x][minus][y] = x - y;
    }
}
module.exports = ret;