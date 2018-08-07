const endianCode = require('../index');
const assert = require('assert');

describe('big endian', () => {
	describe('encode', () => {
		it('should be true', () => {
			assert.deepEqual(endianCode.encode(0x0102, 2, true), [0x01, 0x02]);
			assert.deepEqual(endianCode.encode(0x1234, 2, true), [0x12, 0x34]);
			assert.deepEqual(endianCode.encode(0x1234, 4, true), [0x00, 0x00, 0x12, 0x34]);
			assert.deepEqual(endianCode.encode(0x1234, 8, true), [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x12, 0x34]);
		});
	});
	describe('decode', () => {
		it('should be true', () => {
			assert.deepEqual(endianCode.decode([0x01, 0x02], 2, true), 0x0102);
			assert.deepEqual(endianCode.decode([0x12, 0x34], 2, true), 0x1234);
			assert.deepEqual(endianCode.decode([0x12, 0x34], 4, true), 0x12340000);
			assert.deepEqual(endianCode.decode([0x12, 0x34], 8, true), 0x1234000000000000);
			assert.deepEqual(endianCode.decode([0x12, 0x34, 0x00, 0x00], 4, true), 0x12340000);
			assert.deepEqual(endianCode.decode([0x12, 0x34, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], 8, true), 0x1234000000000000);
			assert.deepEqual(endianCode.decode([0x00, 0x00, 0x12, 0x34], 4, true), 0x1234);
			assert.deepEqual(endianCode.decode([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x12, 0x34], 8, true), 0x1234);
		});
	});
});

describe('little endian', () => {
	describe('encode', () => {
		it('should be true', () => {
			assert.deepEqual(endianCode.encode(0x1234, 2, false), [0x34, 0x12]);
			assert.deepEqual(endianCode.encode(0x1234, 4, false), [0X34, 0x12, 0x00, 0x00]);
			assert.deepEqual(endianCode.encode(0x1234, 8, false), [0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
		});
	});
	describe('decode', () => {
		it('should be true', () => {
			assert.deepEqual(endianCode.decode([0x34, 0x12], 2, false), 0x1234);
			assert.deepEqual(endianCode.decode([0x34, 0x12], 4, false), 0x1234);
			assert.deepEqual(endianCode.decode([0x34, 0x12], 8, false), 0x1234);
			assert.deepEqual(endianCode.decode([0x34, 0x12, 0x00, 0x00], 4, false), 0x1234);
			assert.deepEqual(endianCode.decode([0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], 8, false), 0x1234);
			assert.deepEqual(endianCode.decode([0x00, 0x00, 0x34, 0x12], 4, false), 0x12340000);
			assert.deepEqual(endianCode.decode([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12], 8, false), 0x1234000000000000);
		});
	});
});
