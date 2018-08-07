module.exports = {
	encode: function (n, k, bigEndian) {
		let str = n.toString(16);
		if (str.length % 2 === 1) {
			str = '0' + str;
		}
		let encoded = str.match(/.{1,2}/g).map(x => parseInt(x, 16));
		return bigEndian
			? new Array(k - encoded.length).fill(0).concat(encoded)
			: encoded.reverse().concat(new Array(k - encoded.length).fill(0));
	},
	decode: function (arr, k, bigEndian) {
		return parseInt('0x' + (bigEndian ? arr.concat(new Array(k - arr.length).fill(0)) : new Array(k - arr.length).fill(0).concat(arr.reverse())).
			reduce((total, next) => total += next.toString(16).padStart(2, '0'), ''), 16);
	}
}