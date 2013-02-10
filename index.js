/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function() {};
module.exports.pitch = function(remainingRequest) {
	if(!this.query) throw new Error("query parameter is missing");
	return "module.exports = " +
		"this[" + JSON.stringify(this.query.substr(1)) + "] = " +
		"require(" + JSON.stringify(remainingRequest) + ");";
};