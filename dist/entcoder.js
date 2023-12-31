/**
 * Fastest entities or ascii encode/decode Javascript library.
 * https://github.com/jqrony/entcoder
 * 
 * @license MIT license
 * @version 1.0.0
 * 
 * © Copyright 2023 Shahzada Modassir
 * https://github.com/jqrony/entcoder/blob/main/LICENSE
 * 
 * @author Shahzada Modassir
 * date: 28 December 2023 14:10:39 GMT+0530 (India Standard)
 */
(function(global, factory) {

/**
 * Inject [use strict] mode
 * ------------------------
 * Throw ReferenceError when pass undeclare variables
 */
"use strict";

var Entcoder = factory(global);

// (such as Node.js) expose a factory as module.exports
// For CommonJS and CommonJS-like environments
if (typeof module==="object" &&
	typeof module.exports==="object") {
	module.exports=new Entcoder();
}
})(typeof window!=="undefined" ? window : this, function(window) {

/**
 * Inject [use strict] mode
 * ------------------------
 * Throw ReferenceError when pass undeclare variable
 */
"use strict";

// Constants
// Basic Multilingual Plane (BMP) Regular Expression
var BMP_RANGE 	 = /([\u0000-\uFFFF])/g;
var SMP_RANGE		 = /([\uD800-\uDBFF])/g;
var NEED_SUPPORT = /^(?:codepoint|charcode)(at)+$/i;

var HIGH_SURROGATE_FROM = 55296;
var HIGH_SURROGATE_TO		= 56319;

/**
 * -----------------------------------
 */
var VERSION  = "1.0.0";
var arr 		 = [];
var getProto = Object.getPrototypeOf;
var slice 	 = arr.slice;
var flat 		 = arr.flat;
var splice 	 = arr.splice;
var concat 	 = arr.concat;

var flat = flatten(flat);
function flatten(isFlat) {
	return function(array) {
		return isFlat ? arr.flat.call(array) : arr.concat.apply([], array);
	};
}

var indexOf = arr.indexOf;
var apply 	= arr.apply;
var push 		= arr.push;
var _String = String();
var pop 		= arr.pop;
var unshift = arr.unshift;
var isArray = Array.isArray;

var class2type = {};
var support 	 = {};
var hasOwn 		 = class2type.hasOwnProperty;
var rnative 	 = /^[^{]+\{\s*\[native \w/;

var codePointAt 	= _String.codePointAt;
var fromCharCode 	= String.fromCharCode;
var charCodeAt 		= _String.charCodeAt;
var fromCodePoint = String.fromCodePoint;

/**
 * Create Entcoder API
 * ----------------------------------------------------
 * Easy API for creating new Entcoder
 * TODO: Enhance more Entcoder of API feature
 * !Ignore new keyword when call (`Entcoder`)
 */
function Entcoder() {
	return !(this instanceof Entcoder) && new Entcoder();
}

Entcoder.prototype.VERSION=VERSION;

// Create support Instance methods
// TODO: support methods can be further improved.
support.codePointAt		= isFunction(codePointAt);
support.charCodeAt 		= isFunction(charCodeAt);
support.fromCodePoint = isFunction(fromCodePoint);

var src;
for(var name in (src={charCodeAt, codePointAt})) {
	if (NEED_SUPPORT.test(name) && !support[name]) {
		support[name]=rnative.test(src[name]);
		__checkCryptModel();
	}
}

// Checks encode/decode Method support and throw
// An error when not support anyone coder method
function __checkCryptModel() {
	if (!(charCodeAt && fromCharCode)) {
		error("Unsupport: Failed codePoint not support!");
	}
}

fromCodePoint = fromCodePoint || function(codePoint) {
	return String.fromCharCode(
		Math.floor((codePoint - 65536) / 1024) + 55296,
		(codePoint - 65536) % 1024 + 56320
	);
};

codePointAt = codePointAt ? function(input, pos=0) {
	return input.codePointAt(pos);
} : function(input, pos=0) {
	return (input.charCodeAt(pos) - 55296) * 1024 + input.charCodeAt(pos + 1) - 56320 + 65536;
};

var REG_OPTGROUP = {
	encoding: /^(?:hex|dec|entities)$/i,
	type: /^(?:(special|all)char|xml|html([4-5])?)$/i,
};

function attachAscii(options, flip) {
	Object.defineProperty(exports, "__esModule", {value: true});
	var {ascii} = require("../src/ascii/ascii"), keys;

	keys = {
		"specialchar": "characters",
		"xml": "entities",
		"html": "html5",
		"all": "_all",
		"allchar": "_all",
	};

	options.ascii=ascii[keys[options.type]];
	options.cprev=options.ascii;

	if (flip && typeof flip==="object") {
		each(options.ascii, function(char, entity) {
			flip["&" + entity + ";"]=char;
		});
		options.ascii=flip;
	}

	return options;
}

function entParser(data, options, callback, _src, encode) {
	var codepoint, codepoints = {"dec": 10, "oct": 8},
		codeAt, entIdentifier = {
			"dec": "&#",
			"hex": "&#x"
		};
	codepoint=codepoints[options.encoding]||16;
	if (encode) {
		var str = String(data), value=[];
		if (options.encoding==="entities") {
			var keys = Object.keys(options.ascii).join("|\\");
			var regex = new RegExp("(?:\\" + keys.slice(0, -2) + ")", "g");
			return str.replace(regex, function(matched) {
				if (matched) {
					return "&" + options.ascii[matched] + ";";
				}
				return matched;
			});
		}
		String(data).replace(SMP_RANGE, function(_m, _a, pos) {
			value[pos]=entIdentifier[options.encoding] + codePointAt(str, pos).toString(codepoint) + ";";
			return "";
		}).replace(/([\w])/g, function(m, _a, pos) {
			value[pos]=m;
			return m;
		}).replace(/([\W])/g, function(_m, _a, pos) {
			codeAt = charCodeAt.call(str, pos);
			if (!(codeAt >= HIGH_SURROGATE_FROM && codeAt <= HIGH_SURROGATE_TO)) {
				if (indexOf.call(value, _m)===-1 && _m!=="\udcce") {
					value[pos]=entIdentifier[options.encoding] + _m.charCodeAt().toString(codepoint) + ";";
					return "";
				}
			}
		});
		call(callback, options, value);
		return value.join("");
	} else {
		var rmatcher, rhexdec=/\&#x?([\da-f]+);/gi, val;
		if (options.decoding==="entities") {
			for(var name in options.ascii) {
				rmatcher = new RegExp(name, "g");
				data=data.replace(rmatcher, options.ascii[name]);
			}
		}

		data = data.replace(rhexdec, function(_expr, matched) {
			val = String.fromCodePoint(parseInt(matched, codepoint));
			if (hasOwn.call(options.cprev, val)) {
				return val;
			}
			return _expr;
		});
		return data;
	}
}

/**
 * 
 */
Entcoder.entHooks = {
	encode: function(data, options, callback, src) {
		attachAscii(options);
		return entParser(data, options, callback, src, true);
	},
	decode: function(data, options, callback, src) {
		attachAscii(options, {});
		return entParser(data, options, callback, src, false);
	}
};

// Create addProp src instance method
// TODO: Need to improve deep addProp Handler
function addProp(src) {
	each(REG_OPTGROUP, function(prop, value) {
		if (src[prop] && !value.test(src[prop])) {
			delete src[prop];
		}
	});
}

/**
 * 
 */
each(["encode", "decode"], function(_i, method) {
	Entcoder.prototype[method]=function(data, src, callback) {
		addProp(src  = src||{});
		src.encoding = src.encoding||"entities";
		src.type		 = src.type||"xml";
		return Entcoder.entHooks[method](data, src, callback);
	};
});

/**
 * Create each Instance method
 * -----------------------------------------------
 * TODO: Need to change each other solution
 * !Don't pass {extra|matched} parameters
 */
function each(obj, callback, extra, matched) {
	matched=matched||[];
	isArray(obj) ?
		each(create(obj), callback, true, []) :
		call(function (name) {
			for (name in obj) {
				extra && (name = +name);
				if (call(callback, obj[name], name, obj[name]) === false) {
					matched.push(obj[name]);
					break;
				}
			}
		});
	return matched;
}

// Use `create` Array to Object convertation
function create(src){
	for(var i=0, length=src.length,
	obj={}; i < length; i++) obj[i]=src[i]; return obj;
}

function call(fn, keyword, args) {
	args 		= slice.call(arguments);
	fn 			= args.shift();
	keyword = args.shift();
	return _apply(fn, keyword, args);
}

function _apply(fn, keyword, args) {
	return isFunction(fn) && fn.apply(keyword, args);
}

function error(message) {
	throw new Error(message);
}

// Checks a valid function
function isFunction(obj) {
	return typeof obj==="function" && typeof obj.items!=="function";
}

/**
 * Expose support vars for convenience
 * ------------------------------------------------
 */
Entcoder.support = support;
Entcoder.each		 = each;

Entcoder.prototype.support		 = support;
Entcoder.prototype.constructor = Entcoder;

/**
 * EXPOSE
 * TODO: Enhance EXPOSE method of identify versions
 * ------------------------------------------------
 */
// Register as named AMD module
// since Entcoder can be concatenated with other
// files that may use define
if (typeof define==="object" && define.amd) {
	define(function() {
		return Entcoder;
	});
}

// CommonJS for browser emulators (trac-13566)
// Attach/Extend Entcoder with Expose Entcoder Identifier `window`
if (window && typeof window.document==="object") {
	window.Entcoder=Entcoder;
}


return Entcoder;
});