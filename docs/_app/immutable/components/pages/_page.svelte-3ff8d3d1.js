import {
	S as r,
	i,
	s as c,
	k as m,
	q as d,
	l as h,
	m as p,
	r as _,
	h as o,
	b as f,
	G as u,
	B as n
} from '../../chunks/index-7f3551f2.js';
function x(l) {
	let e, s;
	return {
		c() {
			(e = m('h1')), (s = d('Hello and welcome to my site!'));
		},
		l(t) {
			e = h(t, 'H1', {});
			var a = p(e);
			(s = _(a, 'Hello and welcome to my site!')), a.forEach(o);
		},
		m(t, a) {
			f(t, e, a), u(e, s);
		},
		p: n,
		i: n,
		o: n,
		d(t) {
			t && o(e);
		}
	};
}
class H extends r {
	constructor(e) {
		super(), i(this, e, null, x, c, {});
	}
}
export { H as default };
