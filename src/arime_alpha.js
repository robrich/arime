// // var regex = /^[-+]?\d+(\.\d+)?$/;
// var sMath = (function () {
// 	var sMath = Object.create(null),
// 		s = {
// 			zero: '0',
// 			plus: '+',
// 			minus: '-',
// 			dot: '.'
// 		},
// 		reduceSign = function (str, sign) {
// 			if (str !== s.zero) {
// 				if (str[0] === sign) {
// 					return str.slice(1);
// 				}
// 				return str;
// 			}
// 			return s.zero;
// 		},
// 		singleEquations = (function () {
// 			var obj = {
// 					get: function (x, sign, y) {
// 						return this[x][sign][y];
// 					}
// 				},
// 				x = null,
// 				y = null,
// 				sx = null,
// 				sy = null;
// 			for (x = -9; x <= 50; x++) {
// 				sx = x.toString();
// 				obj[sx] = {};
// 				obj[sx][s.plus] = {};
// 				obj[sx][s.minus] = {};
// 				for (y = -9; y <= 9; y++) {
// 					sy = y.toString();
// 					obj[sx][s.plus][sy] = x + y;
// 					if (x >= 0 && y >= 0) {
// 						obj[sx][s.minus][sy] = x - y;
// 					}
// 				}
// 			}
// 			console.log('single equations', obj);
// 			return obj;
// 		})(),
// 		add = function (a, b) {
// 			// whole single digits
// 			return singleEquations.get(a, s.plus, b);
// 		},
// 		subtract = function (a, b) {
// 			// whole single digits
// 			return singleEquations.get(a, s.minus, b);
// 		},
// 		isNegative = function (str) {
// 			return str[0] === s.minus;
// 		},
// 		hasDecimal = function (str) {
// 			var dotPlace = str.indexOf(s.dot);
// 			if (dotPlace === -1) {
// 				return 0;
// 			}
// 			return str.length - dotPlace - 1;
// 		},
// 		extractWholeDecimal = function (num) {
// 			var str = num.toString();
// 			if (hasDecimal(str) === 0) {
// 				str += '.';
// 			}
// 			var nums = str.split(s.dot);
// 			return {
// 				whole: nums[0] || s.zero,
// 				decimal: nums[1]
// 			};
// 		},
// 		increaseZeroEnding = function (num) {
// 			var zeros = '';
// 			for (var x = 0; x < num; x++) {
// 				zeros += s.zero;
// 			}
// 			return zeros;
// 		};
// 	var fnLoopArrays = function (arr, fn) {
// 		var ret = arr[0];
// 		for (var x = 1; x < arr.length; x++) {
// 			ret = fn(ret, arr[x]);
// 		}
// 		return ret;
// 	};
// 	sMath.add = function (aNum, bNum) {
// 		console.log('add', aNum, bNum);
// 		if (Array.isArray(aNum)) {
// 			return fnLoopArrays(aNum, sMath.add);
// 		}
// 		var aStr = (aNum || 0).toString();
// 		var bStr = (bNum || 0).toString();
// 		if (aStr === s.zero) {
// 			return bStr;
// 		}
// 		if (bStr === s.zero) {
// 			return aStr;
// 		}
// 		var aNegative = isNegative(aStr);
// 		var bNegative = isNegative(bStr);
// 		if (aNegative && bNegative) {
// 			return s.minus + sMath.add(reduceSign(aStr, s.minus), reduceSign(bStr, s.minus));
// 		}
// 		if (bNegative) {
// 			return sMath.subtract(aStr, reduceSign(bStr, s.minus));
// 		}
// 		if (aNegative) {
// 			return sMath.subtract(bStr, reduceSign(aStr, s.minus))
// 		}// 		// adding decimal
// 		var aDecimalPlaces = hasDecimal(aStr);
// 		var bDecimalPlaces = hasDecimal(bStr);
// 		if (aDecimalPlaces > 0 || bDecimalPlaces > 0) {
// 			var aa = extractWholeDecimal(aStr);
// 			var bb = extractWholeDecimal(bStr);
// 			var aDecimal = aa.decimal;
// 			if (aDecimalPlaces < bDecimalPlaces) {
// 				aDecimal += increaseZeroEnding(bDecimalPlaces - aDecimalPlaces);
// 			}
// 			var bDecimal = bb.decimal;
// 			if (bDecimalPlaces < aDecimalPlaces) {
// 				bDecimal += increaseZeroEnding(aDecimalPlaces - bDecimalPlaces);
// 			}
// 			aStr = aa.whole;
// 			bStr = bb.whole;
// 			var originalDecimalLen = aDecimal.length;
// 			var decimalStr = sMath.add(aDecimal, bDecimal);
// 			var decimalLen = decimalStr.length;
// 			var diff = decimalLen - originalDecimalLen;
// 			var cStr = s.zero;
// 			if (diff > 0) {
// 				cStr = decimalStr.slice(0, diff);
// 				decimalStr = decimalStr.slice(diff);
// 			}
// 			return sMath.add(
// 				sMath.add(aStr, bStr),
// 				cStr
// 			) + '.' + decimalStr;
// 		}// 		// adding whole
// 		var aLen = aStr.length;
// 		var bLen = bStr.length;
// 		if (aLen < bLen) {
// 			aStr = increaseZeroEnding(bLen - aLen) + aStr;
// 		}
// 		if (bLen < aLen) {
// 			bStr = increaseZeroEnding(aLen - bLen) + bStr;
// 		}
// 		var a_arr = aStr.split('');
// 		var b_arr = bStr.split('');
// 		var ret_arr = [];
// 		var remainder = 0;
// 		for (var x = a_arr.length - 1; x >= 0; x--) {
// 			ret_arr[x] = add(
// 				add(a_arr[x], b_arr[x]),
// 				remainder
// 			);// 			if (x > 0 && ret_arr[x] > 9) {
// 				var nums = ret_arr[x].toString().split('');
// 				ret_arr[x] = nums[1];
// 				remainder = nums[0];
// 			}
// 			else {
// 				remainder = s.zero;
// 			}
// 		}
// 		return ret_arr.join('');
// 	};
// 	sMath.subtract = function (aNum, bNum) {
// 		console.log('subtract', aNum, bNum);
// 		if (Array.isArray(aNum)) {
// 			return fnLoopArrays(aNum, sMath.subtract);
// 		}
// 		var aStr = aNum.toString();
// 		var bStr = bNum.toString();
// 		if (aStr === s.zero) {
// 			return s.minus + reduceSign(bStr, s.minus);
// 		}
// 		if (bStr === s.zero) {
// 			return aStr;
// 		}
// 		var aNegative = isNegative(aStr);
// 		var bNegative = isNegative(bStr);
// 		if (aNegative && bNegative) {
// 			// (-a) - (-b) == b - a
// 			return sMath.subtract(reduceSign(bStr, s.minus), reduceSign(aStr, s.minus));
// 		}
// 		if (bNegative) {
// 			// a - (-b) == a + b
// 			return sMath.add(aStr, reduceSign(bStr, s.minus));
// 		}
// 		if (aNegative) {
// 			// (-a) - b == -(a + b)
// 			return s.minus + sMath.add(reduceSign(aStr, s.minus), bStr);
// 		}// 		// positive numbers reducing themselves
// 		var aDecimalPlaces = hasDecimal(aStr);
// 		var bDecimalPlaces = hasDecimal(bStr);// 		var aa = extractWholeDecimal(aStr);
// 		var bb = extractWholeDecimal(bStr);// 		// decimal
// 		var aDecimal = aa.decimal;
// 		if (aDecimalPlaces < bDecimalPlaces) {
// 			aDecimal += increaseZeroEnding(bDecimalPlaces - aDecimalPlaces);
// 		}
// 		var bDecimal = bb.decimal;
// 		if (bDecimalPlaces < aDecimalPlaces) {
// 			bDecimal += increaseZeroEnding(aDecimalPlaces - bDecimalPlaces);
// 		}// 		// whole
// 		aStr = aa.whole;
// 		bStr = bb.whole;// 		var aLen = aStr.length;
// 		var bLen = bStr.length;
// 		if (aLen < bLen) {
// 			aStr = increaseZeroEnding(bLen - aLen) + aStr;
// 		}
// 		if (bLen < aLen) {
// 			bStr = increaseZeroEnding(aLen - bLen) + bStr;
// 		}// 		if (aDecimal.length > 0) {
// 			aStr += s.dot + aDecimal;
// 			bStr += s.dot + bDecimal;
// 		}
// 		// string check order
// 		if (aStr < bStr) {
// 			// return a negative number
// 			return s.minus + sMath.subtract(bStr, aStr);
// 		}// 		// return a positive number
// 		var a_arr = aStr.split('');
// 		var b_arr = bStr.split('');
// 		var reduced_arr = [];
// 		var ret_arr = [];
// 		var x = 0;
// 		for (x = a_arr.length - 1; x >= 0; x--) {
// 			if (a_arr[x] === s.dot) {
// 				ret_arr[x] = s.dot;
// 			}
// 			else {
// 				var aax = a_arr[x];
// 				var bbx = b_arr[x];
// 				if (aax < bbx) {
// 					aax = '1' + aax;
// 					subtractionLooperReducer(x - 1, a_arr);
// 				}
// 				ret_arr[x] = subtract(aax, bbx);
// 			}
// 		}
// 		return ret_arr.join('');
// 	};// 	var subtractionLooperReducer = function (num, arr) {
// 		if (arr[num] === s.dot) {
// 			subtractionLooperReducer(num - 1, arr);
// 		}
// 		else {
// 			if (arr[num] === 0) {
// 				subtractionLooperReducer(num - 1, arr);
// 				arr[num] = '10';
// 			}
// 			arr[num] = subtract(arr[num], '1');
// 		}
// 	};
// 	return sMath;
// })();
// console.log(sMath);
