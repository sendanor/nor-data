/* nor-data -- Main file */

var is = require('nor-is');
var debug = require('nor-debug');

var data = module.exports = {};

/** Copies the data from `o` and returns the copy. This will convert everything back to plain JSON data. Functions etc are ignored. */
data.copy = function(o) {

	// * Copy `undefined` values as `undefined`
	// * Ignore functions
	if( (o === undefined) || (typeof o === 'function') ) { return; }

	return JSON.parse( JSON.stringify(o) );
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
		Object.keys(data).forEach(function(key) {
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
