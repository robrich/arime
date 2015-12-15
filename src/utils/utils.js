// utilities
var ArrayProto = Array.prototype;
module.exports = {
    map:ArrayProto.map.bind(ArrayProto),
    each:ArrayProto.forEach.bind(ArrayProto),
    makeArray:function(arg){
        if( Array.isArray(arg) ){
            return arg;
        }
        if( arg !== null && arg !== undefined ){
            return [arg];
        }
        return [];
    }
};