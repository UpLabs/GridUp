var isArray		= Array.isArray,
	Value		= tree.Value,
	Anonymous	= tree.Anonymous;

/**
 * @name bp-to-mq
 * @scope private
 * @param list (Two-Dimensional Array) Set of breakpoints to convert
 * @param metric Literal Property to use as base (ie. "width" -> "min-width" and "max-width")
 */
functions.add('bp-to-mq', function push(list, metric) {
	var current, min, max,
		i = 0,
		v = list.value,
		l = v.length,
		n = new Value([]);

	n.value.push(new Value([
		new Anonymous('screen'),
		new Anonymous('screen')
	]));

	for (; i < l; i++) {
		current	= v[i].value;
		min		= '(min-' + metric.value + ': ' + current[1].value + current[1].unit + ')';
		max		= '(max-' + metric.value + ': ' + current[1].value + current[1].unit + ')';

		n.value.push(new Value([
			new Anonymous(current[0].value),
			new Anonymous(min)
		]));

		n.value.push(new Value([
			new Anonymous(current[0].value + '-max'),
			new Anonymous(max)
		]));

		n.value.push(new Value([
			new Anonymous(current[0].value + '-only'),
			new Anonymous(min + ' and ' + max)
		]));
	}

	return n;
});
