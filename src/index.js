/* nor-data -- Main file */

"use strict";

var is = require('nor-is');
var debug = require('nor-debug');
var ARRAY = require('nor-array');

var data = module.exports = {};

/** Copies the data from `o` and returns the copy. This will convert everything back to plain JSON data. Functions etc are ignored. */
data.copy = function(o) {

	// * Copy `undefined` values as `undefined`
	// * Ignore functions
	if( (o === undefined) || (typeof o === 'function') ) { return; }

	return JSON.parse( JSON.stringify(o) );
};

/** */
data.copy2 = function nor_data_copy2(o) {
	var tmp;

	if(is.func(o) || is.boolean(o) || is.string(o) || is.number(o) || is.undefined(o) || is.nul(o)) {
		return o;
	}

	if(is.array(o)) {
		return ARRAY(o).map(nor_data_copy2).valueOf();
	}

	if(is.obj(o)) {
		tmp = {};
		ARRAY(Object.keys(o)).forEach(function(key) {
			tmp[key] = data.copy2(o[key]);
		});
		return tmp;
	}

	throw new TypeError("Unsupported variable type for nor-data.copy2(): " + (typeof o));
};

/** Operations on plain objects */
data.object = function(data) {
	debug.assert(data).is('object');

	/** Object version of a map function
	 * @see https://trello.com/c/oLGPM7vK/8-support-for-map-on-objects
	 */
	function object_map(f) {
		debug.assert(f).is('function');
		var obj = {};
		ARRAY(Object.keys(data)).forEach(function(key) {
			obj[key] = f(data[key], key, data);
		});
		return obj;
	}

	// Exports
	var r = {};
	r.map = object_map;
	return r;
};

/* EOF */
