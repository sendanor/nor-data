/* nor-data -- Main file */

var data = module.exports = {};

/** Copies the data from `o` and returns the copy. This will convert everything back to plain JSON data. Functions etc are ignored. */
data.copy = function(o) {

	// * Copy `undefined` values as `undefined`
	// * Ignore functions
	if( (o === undefined) || (typeof o === 'function') ) { return; }

	return JSON.parse( JSON.stringify(o) );
};

/* EOF */
