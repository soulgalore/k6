// https://developer.mozilla.org/en/docs/Web/API/console
console = {
	log(msg, ...args) { console.info(msg, ...args); },

	debug(msg, ...args) { __jsapi__.Log(0, msg, args); },
	info(msg, ...args) { __jsapi__.Log(1, msg, args); },
	warn(msg, ...args) { __jsapi__.Log(2, msg, args); },
	error(msg, ...args) { __jsapi__.Log(3, msg, args); },
};

// https://developer.mozilla.org/en/docs/Web/API/performance
performance = {
	now() { return __jsapi__.ElapsedMs(); }
};

require = function(name) {
	if (!__initapi__) {
		throw new Error("imports are only permitted in the init context")
	}
	return __initapi__.Require(name);
}
