// Constants

const regex = /^[-+]?\d+(\.\d+)?$/;

const isStringyNumber = function (val) {
	return typeof val === 'string' && regex.test(val);
};

const StringyNumber = function (val) {
	if (typeof val === 'number') {
		return val.toString();
	}
	if (isStringyNumber(val)) {
		return val;
	}
};

const isNegative = function (val) {
	return val[0] === '-';
};

const absoluteValue = function (val) {
	if (isNegative(val)) {
		return val.slice(1);
	}
	return val;
};

// //

// Functions

function add (a, b) {

	let negA = isNegative(a);
	let negB = isNegative(b);

	// -a + -b
	if (negA && negB) {
		return '-' + add(absoluteValue(a), absoluteValue(b));
	}
	// -a + b
	if (negA) {
		return subtract(b, absoluteValue(a));
	}
	// a + -b
	if (negB) {
		return subtract(a, absoluteValue(b));
	}
	// a + b
	return `(${a} + ${b})`;

}

function subtract (a, b) {

	let negA = isNegative(a);
	let negB = isNegative(b);
	// -a - -b
	if (negA && negB) {
		return subtract(absoluteValue(b), absoluteValue(a));
	}
	// -a - b
	if (negA) {
		return '-' + add(absoluteValue(a), b);
	}
	// a - -b
	if (negB) {
		return add(a, absoluteValue(b));
	}
	// a - b
	return `(${a} - ${b})`;

}

// //

// Exports

exports.add = function (numA, numB) {

	let a = StringyNumber(numA);
	let b = StringyNumber(numB);

	if (a && b) {
		return add(a, b);
	}

};

exports.subtract = function (numA, numB) {

	let a = StringyNumber(numA);
	let b = StringyNumber(numB);

	if (a && b) {
		return subtract(a, b);
	}

};

exports.toString = function () {

	return 'arime: an <b>ari</b>th<b>me</b>tic library';

};

// //
