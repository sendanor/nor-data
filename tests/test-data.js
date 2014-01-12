"use strict";

var assert = require('assert');
var util = require('util');
var debug = require('nor-debug');

/* Run things in start */
//before(function(done){
//});

/* */
describe("Let's make sure that... require('data')", function(){

	var data = require('../src');

	it('is object!', function data_copy_is_callable(){
		debug.assert(data).typeOf('object');
	}); // End of 'is callable!'

	describe('.copy()', function data_copy_test(){

		it('is callable!', function data_copy_is_callable(){
			debug.assert(data.copy).typeOf('function');
		}); // End of 'is callable!'

		it('can copy an object!', function data_copy_can_copy_object(){
			var obj = {"foo":"bar", "items": 10};
			var obj2 = data.copy(obj);

			debug.assert(obj).typeOf('object');
			debug.assert(obj.foo).typeOf('string').equals("bar");
			debug.assert(obj.items).typeOf('number').equals(10);

			debug.assert(obj2).typeOf('object');
			debug.assert(obj2.foo).typeOf('string').equals("bar");
			debug.assert(obj2.items).typeOf('number').equals(10);

		}); // End of 'can copy an object!'

		it('can copy an array!', function data_copy_can_copy_array(){
			var obj = ["foo", "bar", 1, 2, 3];
			var obj2 = data.copy(obj);

			function test_them(o) {
				debug.assert(o).typeOf('object').instanceOf(Array);
				debug.assert(o.length).typeOf('number').equals(5);
				debug.assert(o[0]).typeOf('string').equals("foo");
				debug.assert(o[1]).typeOf('string').equals("bar");
				debug.assert(o[2]).typeOf('number').equals(1);
				debug.assert(o[3]).typeOf('number').equals(2);
				debug.assert(o[4]).typeOf('number').equals(3);
				return test_them;
			}

			test_them(obj)(obj2);

		}); // End of 'can copy an array!'

		it('can copy an string!', function data_copy_can_copy_string(){
			var obj = "foobar";
			var obj2 = data.copy(obj);

			function test_them(o) {
				debug.assert(o).typeOf('string').equals("foobar");
				return test_them;
			}

			test_them(obj)(obj2);

		}); // End of 'can copy an string!'

		it('can copy an number!', function data_copy_can_copy_number(){
			var obj = 123;
			var obj2 = data.copy(obj);

			function test_them(o) {
				debug.assert(o).typeOf('number').equals(123);
				return test_them;
			}

			test_them(obj)(obj2);

		}); // End of 'can copy an number!'

		it('can copy an undefined!', function data_copy_can_copy_undefined(){
			var obj = undefined;
			var obj2 = data.copy(obj);

			function test_them(o) {
				debug.assert(o).typeOf('undefined').equals(undefined);
				return test_them;
			}

			test_them(obj)(obj2);

		}); // End of 'can copy an undefined!'

		it('can copy a null!', function data_copy_can_copy_null(){
			var obj = null;
			var obj2 = data.copy(obj);

			function test_them(o) {
				debug.assert(o).typeOf('object').equals(null);
				return test_them;
			}

			test_them(obj)(obj2);

		}); // End of 'can copy an null!'

		it('can copy booleans!', function data_copy_can_copy_booleans(){

			function test_booleans(obj) {
				var obj2 = data.copy(obj);
	
				function test_them(o) {
					debug.assert(o).typeOf('boolean').equals(obj);
					return test_them;
				}
	
				test_them(obj)(obj2);

				return test_booleans;
			}

			test_booleans(true)(false);

		}); // End of 'can copy an booleans!'

	}); // End of '.copy()'

}); // Enf of "Let's make sure that... require('data')"

/* EOF */
