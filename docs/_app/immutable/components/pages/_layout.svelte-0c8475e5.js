import{S as pt,i as dt,s as bt,k as A,e as T,D as kt,l as w,h as p,n as c,E as K,C as q,b as k,F as G,a as y,c as L,G as vt,H as J,I as Nt,J as Tt,x as At,y as wt,z as gt,K as Mt,L as Et,M as yt,f as z,t as F,A as Lt}from"../../chunks/index-910a69f4.js";function H(n,t,i){const e=n.slice();return e[16]=t[i],e}function V(n,t,i){const e=n.slice();return e[16]=t[i],e}function j(n,t,i){const e=n.slice();return e[21]=t[i],e}function O(n,t,i){const e=n.slice();return e[24]=t[i],e}function Q(n,t,i){const e=n.slice();return e[16]=t[i],e}function R(n,t,i){const e=n.slice();return e[38]=t[i],e}function W(n,t,i){const e=n.slice();return e[41]=t[i],e}function X(n,t,i){const e=n.slice();return e[44]=t[i],e}function Y(n,t,i){const e=n.slice();return e[16]=t[i],e}function Z(n,t,i){const e=n.slice();return e[29]=t[i],e}function $(n,t,i){const e=n.slice();return e[16]=t[i],e}function x(n,t,i){const e=n.slice();return e[29]=t[i],e}function ee(n,t,i){const e=n.slice();return e[47]=t[i],e}function te(n){let t;return{c(){t=A("meta"),this.h()},l(i){t=w(i,"META",{name:!0,content:!0}),this.h()},h(){c(t,"name","description"),c(t,"content",n[2])},m(i,e){k(i,t,e)},p(i,e){e[0]&4&&c(t,"content",i[2])},d(i){i&&p(t)}}}function le(n){let t;return{c(){t=A("link"),this.h()},l(i){t=w(i,"LINK",{rel:!0,href:!0}),this.h()},h(){c(t,"rel","canonical"),c(t,"href",n[8])},m(i,e){k(i,t,e)},p(i,e){e[0]&256&&c(t,"href",i[8])},d(i){i&&p(t)}}}function ie(n){let t,i,e;return{c(){t=A("link"),this.h()},l(l){t=w(l,"LINK",{rel:!0,media:!0,href:!0}),this.h()},h(){c(t,"rel","alternate"),c(t,"media",i=n[3].media),c(t,"href",e=n[3].href)},m(l,o){k(l,t,o)},p(l,o){o[0]&8&&i!==(i=l[3].media)&&c(t,"media",i),o[0]&8&&e!==(e=l[3].href)&&c(t,"href",e)},d(l){l&&p(t)}}}function fe(n){let t,i=n[4],e=[];for(let l=0;l<i.length;l+=1)e[l]=ne(ee(n,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let f=0;f<e.length;f+=1)e[f].m(l,o);k(l,t,o)},p(l,o){if(o[0]&16){i=l[4];let f;for(f=0;f<i.length;f+=1){const a=ee(l,i,f);e[f]?e[f].p(a,o):(e[f]=ne(a),e[f].c(),e[f].m(t.parentNode,t))}for(;f<e.length;f+=1)e[f].d(1);e.length=i.length}},d(l){G(e,l),l&&p(t)}}}function ne(n){let t,i,e;return{c(){t=A("link"),this.h()},l(l){t=w(l,"LINK",{rel:!0,hreflang:!0,href:!0}),this.h()},h(){c(t,"rel","alternate"),c(t,"hreflang",i=n[47].hrefLang),c(t,"href",e=n[47].href)},m(l,o){k(l,t,o)},p(l,o){o[0]&16&&i!==(i=l[47].hrefLang)&&c(t,"hreflang",i),o[0]&16&&e!==(e=l[47].href)&&c(t,"href",e)},d(l){l&&p(t)}}}function oe(n){let t,i,e,l,o,f,a,s=n[5].cardType&&re(n),r=n[5].site&&_e(n),u=n[5].handle&&ae(n),d=n[5].title&&ue(n),b=n[5].description&&ce(n),m=n[5].image&&me(n),h=n[5].imageAlt&&se(n);return{c(){s&&s.c(),t=y(),r&&r.c(),i=y(),u&&u.c(),e=y(),d&&d.c(),l=y(),b&&b.c(),o=y(),m&&m.c(),f=y(),h&&h.c(),a=T()},l(_){s&&s.l(_),t=L(_),r&&r.l(_),i=L(_),u&&u.l(_),e=L(_),d&&d.l(_),l=L(_),b&&b.l(_),o=L(_),m&&m.l(_),f=L(_),h&&h.l(_),a=T()},m(_,N){s&&s.m(_,N),k(_,t,N),r&&r.m(_,N),k(_,i,N),u&&u.m(_,N),k(_,e,N),d&&d.m(_,N),k(_,l,N),b&&b.m(_,N),k(_,o,N),m&&m.m(_,N),k(_,f,N),h&&h.m(_,N),k(_,a,N)},p(_,N){_[5].cardType?s?s.p(_,N):(s=re(_),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),_[5].site?r?r.p(_,N):(r=_e(_),r.c(),r.m(i.parentNode,i)):r&&(r.d(1),r=null),_[5].handle?u?u.p(_,N):(u=ae(_),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null),_[5].title?d?d.p(_,N):(d=ue(_),d.c(),d.m(l.parentNode,l)):d&&(d.d(1),d=null),_[5].description?b?b.p(_,N):(b=ce(_),b.c(),b.m(o.parentNode,o)):b&&(b.d(1),b=null),_[5].image?m?m.p(_,N):(m=me(_),m.c(),m.m(f.parentNode,f)):m&&(m.d(1),m=null),_[5].imageAlt?h?h.p(_,N):(h=se(_),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null)},d(_){s&&s.d(_),_&&p(t),r&&r.d(_),_&&p(i),u&&u.d(_),_&&p(e),d&&d.d(_),_&&p(l),b&&b.d(_),_&&p(o),m&&m.d(_),_&&p(f),h&&h.d(_),_&&p(a)}}}function re(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){c(t,"name","twitter:card"),c(t,"content",i=n[5].cardType)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].cardType)&&c(t,"content",i)},d(e){e&&p(t)}}}function _e(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){c(t,"name","twitter:site"),c(t,"content",i=n[5].site)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].site)&&c(t,"content",i)},d(e){e&&p(t)}}}function ae(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){c(t,"name","twitter:creator"),c(t,"content",i=n[5].handle)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].handle)&&c(t,"content",i)},d(e){e&&p(t)}}}function ue(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){c(t,"name","twitter:title"),c(t,"content",i=n[5].title)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].title)&&c(t,"content",i)},d(e){e&&p(t)}}}function ce(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){c(t,"name","twitter:description"),c(t,"content",i=n[5].description)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].description)&&c(t,"content",i)},d(e){e&&p(t)}}}function me(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){c(t,"name","twitter:image"),c(t,"content",i=n[5].image)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].image)&&c(t,"content",i)},d(e){e&&p(t)}}}function se(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){c(t,"name","twitter:image:alt"),c(t,"content",i=n[5].imageAlt)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].imageAlt)&&c(t,"content",i)},d(e){e&&p(t)}}}function he(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","fb:app_id"),c(t,"content",i=n[6].appId)},m(e,l){k(e,t,l)},p(e,l){l[0]&64&&i!==(i=e[6].appId)&&c(t,"content",i)},d(e){e&&p(t)}}}function pe(n){let t,i,e,l,o,f,a,s,r=(n[7].url||n[8])&&de(n),u=n[7].type&&be(n),d=(n[7].title||n[12])&&Xe(n),b=(n[7].description||n[2])&&Ye(n),m=n[7].images&&n[7].images.length&&Ze(n),h=n[7].videos&&n[7].videos.length&&lt(n),_=n[7].locale&&at(n),N=n[7].site_name&&ut(n);return{c(){r&&r.c(),t=y(),u&&u.c(),i=y(),d&&d.c(),e=y(),b&&b.c(),l=y(),m&&m.c(),o=y(),h&&h.c(),f=y(),_&&_.c(),a=y(),N&&N.c(),s=T()},l(v){r&&r.l(v),t=L(v),u&&u.l(v),i=L(v),d&&d.l(v),e=L(v),b&&b.l(v),l=L(v),m&&m.l(v),o=L(v),h&&h.l(v),f=L(v),_&&_.l(v),a=L(v),N&&N.l(v),s=T()},m(v,E){r&&r.m(v,E),k(v,t,E),u&&u.m(v,E),k(v,i,E),d&&d.m(v,E),k(v,e,E),b&&b.m(v,E),k(v,l,E),m&&m.m(v,E),k(v,o,E),h&&h.m(v,E),k(v,f,E),_&&_.m(v,E),k(v,a,E),N&&N.m(v,E),k(v,s,E)},p(v,E){v[7].url||v[8]?r?r.p(v,E):(r=de(v),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null),v[7].type?u?u.p(v,E):(u=be(v),u.c(),u.m(i.parentNode,i)):u&&(u.d(1),u=null),v[7].title||v[12]?d?d.p(v,E):(d=Xe(v),d.c(),d.m(e.parentNode,e)):d&&(d.d(1),d=null),v[7].description||v[2]?b?b.p(v,E):(b=Ye(v),b.c(),b.m(l.parentNode,l)):b&&(b.d(1),b=null),v[7].images&&v[7].images.length?m?m.p(v,E):(m=Ze(v),m.c(),m.m(o.parentNode,o)):m&&(m.d(1),m=null),v[7].videos&&v[7].videos.length?h?h.p(v,E):(h=lt(v),h.c(),h.m(f.parentNode,f)):h&&(h.d(1),h=null),v[7].locale?_?_.p(v,E):(_=at(v),_.c(),_.m(a.parentNode,a)):_&&(_.d(1),_=null),v[7].site_name?N?N.p(v,E):(N=ut(v),N.c(),N.m(s.parentNode,s)):N&&(N.d(1),N=null)},d(v){r&&r.d(v),v&&p(t),u&&u.d(v),v&&p(i),d&&d.d(v),v&&p(e),b&&b.d(v),v&&p(l),m&&m.d(v),v&&p(o),h&&h.d(v),v&&p(f),_&&_.d(v),v&&p(a),N&&N.d(v),v&&p(s)}}}function de(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:url"),c(t,"content",i=n[7].url||n[8])},m(e,l){k(e,t,l)},p(e,l){l[0]&384&&i!==(i=e[7].url||e[8])&&c(t,"content",i)},d(e){e&&p(t)}}}function be(n){let t,i,e,l,o,f,a,s;function r(b,m){if(m[0]&128&&(l=null),m[0]&128&&(o=null),m[0]&128&&(f=null),m[0]&128&&(a=null),l==null&&(l=!!(b[7].type.toLowerCase()==="profile"&&b[7].profile)),l)return It;if(o==null&&(o=!!(b[7].type.toLowerCase()==="book"&&b[7].book)),o)return Dt;if(f==null&&(f=!!(b[7].type.toLowerCase()==="article"&&b[7].article)),f)return Ct;if(a==null&&(a=!!(b[7].type.toLowerCase()==="video.movie"||b[7].type.toLowerCase()==="video.episode"||b[7].type.toLowerCase()==="video.tv_show"||b[7].type.toLowerCase()==="video.other"&&b[7].video)),a)return St}let u=r(n,[-1,-1]),d=u&&u(n);return{c(){t=A("meta"),e=y(),d&&d.c(),s=T(),this.h()},l(b){t=w(b,"META",{property:!0,content:!0}),e=L(b),d&&d.l(b),s=T(),this.h()},h(){c(t,"property","og:type"),c(t,"content",i=n[7].type.toLowerCase())},m(b,m){k(b,t,m),k(b,e,m),d&&d.m(b,m),k(b,s,m)},p(b,m){m[0]&128&&i!==(i=b[7].type.toLowerCase())&&c(t,"content",i),u===(u=r(b,m))&&d?d.p(b,m):(d&&d.d(1),d=u&&u(b),d&&(d.c(),d.m(s.parentNode,s)))},d(b){b&&p(t),b&&p(e),d&&d.d(b),b&&p(s)}}}function St(n){let t,i,e,l,o,f,a,s=n[7].video.actors&&n[7].video.actors.length&&ke(n),r=n[7].video.directors&&n[7].video.directors.length&&Ae(n),u=n[7].video.writers&&n[7].video.writers.length&&ge(n),d=n[7].video.duration&&Ee(n),b=n[7].video.releaseDate&&ye(n),m=n[7].video.tags&&n[7].video.tags.length&&Le(n),h=n[7].video.series&&Ce(n);return{c(){s&&s.c(),t=y(),r&&r.c(),i=y(),u&&u.c(),e=y(),d&&d.c(),l=y(),b&&b.c(),o=y(),m&&m.c(),f=y(),h&&h.c(),a=T()},l(_){s&&s.l(_),t=L(_),r&&r.l(_),i=L(_),u&&u.l(_),e=L(_),d&&d.l(_),l=L(_),b&&b.l(_),o=L(_),m&&m.l(_),f=L(_),h&&h.l(_),a=T()},m(_,N){s&&s.m(_,N),k(_,t,N),r&&r.m(_,N),k(_,i,N),u&&u.m(_,N),k(_,e,N),d&&d.m(_,N),k(_,l,N),b&&b.m(_,N),k(_,o,N),m&&m.m(_,N),k(_,f,N),h&&h.m(_,N),k(_,a,N)},p(_,N){_[7].video.actors&&_[7].video.actors.length?s?s.p(_,N):(s=ke(_),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),_[7].video.directors&&_[7].video.directors.length?r?r.p(_,N):(r=Ae(_),r.c(),r.m(i.parentNode,i)):r&&(r.d(1),r=null),_[7].video.writers&&_[7].video.writers.length?u?u.p(_,N):(u=ge(_),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null),_[7].video.duration?d?d.p(_,N):(d=Ee(_),d.c(),d.m(l.parentNode,l)):d&&(d.d(1),d=null),_[7].video.releaseDate?b?b.p(_,N):(b=ye(_),b.c(),b.m(o.parentNode,o)):b&&(b.d(1),b=null),_[7].video.tags&&_[7].video.tags.length?m?m.p(_,N):(m=Le(_),m.c(),m.m(f.parentNode,f)):m&&(m.d(1),m=null),_[7].video.series?h?h.p(_,N):(h=Ce(_),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null)},d(_){s&&s.d(_),_&&p(t),r&&r.d(_),_&&p(i),u&&u.d(_),_&&p(e),d&&d.d(_),_&&p(l),b&&b.d(_),_&&p(o),m&&m.d(_),_&&p(f),h&&h.d(_),_&&p(a)}}}function Ct(n){let t,i,e,l,o,f,a=n[7].article.publishedTime&&De(n),s=n[7].article.modifiedTime&&Ie(n),r=n[7].article.expirationTime&&Pe(n),u=n[7].article.authors&&n[7].article.authors.length&&Ge(n),d=n[7].article.section&&Ue(n),b=n[7].article.tags&&n[7].article.tags.length&&Je(n);return{c(){a&&a.c(),t=y(),s&&s.c(),i=y(),r&&r.c(),e=y(),u&&u.c(),l=y(),d&&d.c(),o=y(),b&&b.c(),f=T()},l(m){a&&a.l(m),t=L(m),s&&s.l(m),i=L(m),r&&r.l(m),e=L(m),u&&u.l(m),l=L(m),d&&d.l(m),o=L(m),b&&b.l(m),f=T()},m(m,h){a&&a.m(m,h),k(m,t,h),s&&s.m(m,h),k(m,i,h),r&&r.m(m,h),k(m,e,h),u&&u.m(m,h),k(m,l,h),d&&d.m(m,h),k(m,o,h),b&&b.m(m,h),k(m,f,h)},p(m,h){m[7].article.publishedTime?a?a.p(m,h):(a=De(m),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null),m[7].article.modifiedTime?s?s.p(m,h):(s=Ie(m),s.c(),s.m(i.parentNode,i)):s&&(s.d(1),s=null),m[7].article.expirationTime?r?r.p(m,h):(r=Pe(m),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),m[7].article.authors&&m[7].article.authors.length?u?u.p(m,h):(u=Ge(m),u.c(),u.m(l.parentNode,l)):u&&(u.d(1),u=null),m[7].article.section?d?d.p(m,h):(d=Ue(m),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null),m[7].article.tags&&m[7].article.tags.length?b?b.p(m,h):(b=Je(m),b.c(),b.m(f.parentNode,f)):b&&(b.d(1),b=null)},d(m){a&&a.d(m),m&&p(t),s&&s.d(m),m&&p(i),r&&r.d(m),m&&p(e),u&&u.d(m),m&&p(l),d&&d.d(m),m&&p(o),b&&b.d(m),m&&p(f)}}}function Dt(n){let t,i,e,l,o=n[7].book.authors&&n[7].book.authors.length&&qe(n),f=n[7].book.isbn&&Fe(n),a=n[7].book.releaseDate&&He(n),s=n[7].book.tags&&n[7].book.tags.length&&Ve(n);return{c(){o&&o.c(),t=y(),f&&f.c(),i=y(),a&&a.c(),e=y(),s&&s.c(),l=T()},l(r){o&&o.l(r),t=L(r),f&&f.l(r),i=L(r),a&&a.l(r),e=L(r),s&&s.l(r),l=T()},m(r,u){o&&o.m(r,u),k(r,t,u),f&&f.m(r,u),k(r,i,u),a&&a.m(r,u),k(r,e,u),s&&s.m(r,u),k(r,l,u)},p(r,u){r[7].book.authors&&r[7].book.authors.length?o?o.p(r,u):(o=qe(r),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),r[7].book.isbn?f?f.p(r,u):(f=Fe(r),f.c(),f.m(i.parentNode,i)):f&&(f.d(1),f=null),r[7].book.releaseDate?a?a.p(r,u):(a=He(r),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),r[7].book.tags&&r[7].book.tags.length?s?s.p(r,u):(s=Ve(r),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null)},d(r){o&&o.d(r),r&&p(t),f&&f.d(r),r&&p(i),a&&a.d(r),r&&p(e),s&&s.d(r),r&&p(l)}}}function It(n){let t,i,e,l,o=n[7].profile.firstName&&Oe(n),f=n[7].profile.lastName&&Qe(n),a=n[7].profile.username&&Re(n),s=n[7].profile.gender&&We(n);return{c(){o&&o.c(),t=y(),f&&f.c(),i=y(),a&&a.c(),e=y(),s&&s.c(),l=T()},l(r){o&&o.l(r),t=L(r),f&&f.l(r),i=L(r),a&&a.l(r),e=L(r),s&&s.l(r),l=T()},m(r,u){o&&o.m(r,u),k(r,t,u),f&&f.m(r,u),k(r,i,u),a&&a.m(r,u),k(r,e,u),s&&s.m(r,u),k(r,l,u)},p(r,u){r[7].profile.firstName?o?o.p(r,u):(o=Oe(r),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),r[7].profile.lastName?f?f.p(r,u):(f=Qe(r),f.c(),f.m(i.parentNode,i)):f&&(f.d(1),f=null),r[7].profile.username?a?a.p(r,u):(a=Re(r),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),r[7].profile.gender?s?s.p(r,u):(s=We(r),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null)},d(r){o&&o.d(r),r&&p(t),f&&f.d(r),r&&p(i),a&&a.d(r),r&&p(e),s&&s.d(r),r&&p(l)}}}function ke(n){let t,i=n[7].video.actors,e=[];for(let l=0;l<i.length;l+=1)e[l]=Te(X(n,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let f=0;f<e.length;f+=1)e[f].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].video.actors;let f;for(f=0;f<i.length;f+=1){const a=X(l,i,f);e[f]?e[f].p(a,o):(e[f]=Te(a),e[f].c(),e[f].m(t.parentNode,t))}for(;f<e.length;f+=1)e[f].d(1);e.length=i.length}},d(l){G(e,l),l&&p(t)}}}function ve(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","video:actor"),c(t,"content",i=n[44].profile)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[44].profile)&&c(t,"content",i)},d(e){e&&p(t)}}}function Ne(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","video:actor:role"),c(t,"content",i=n[44].role)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[44].role)&&c(t,"content",i)},d(e){e&&p(t)}}}function Te(n){let t,i,e=n[44].profile&&ve(n),l=n[44].role&&Ne(n);return{c(){e&&e.c(),t=y(),l&&l.c(),i=T()},l(o){e&&e.l(o),t=L(o),l&&l.l(o),i=T()},m(o,f){e&&e.m(o,f),k(o,t,f),l&&l.m(o,f),k(o,i,f)},p(o,f){o[44].profile?e?e.p(o,f):(e=ve(o),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null),o[44].role?l?l.p(o,f):(l=Ne(o),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null)},d(o){e&&e.d(o),o&&p(t),l&&l.d(o),o&&p(i)}}}function Ae(n){let t,i=n[7].video.directors,e=[];for(let l=0;l<i.length;l+=1)e[l]=we(W(n,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let f=0;f<e.length;f+=1)e[f].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].video.directors;let f;for(f=0;f<i.length;f+=1){const a=W(l,i,f);e[f]?e[f].p(a,o):(e[f]=we(a),e[f].c(),e[f].m(t.parentNode,t))}for(;f<e.length;f+=1)e[f].d(1);e.length=i.length}},d(l){G(e,l),l&&p(t)}}}function we(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","video:director"),c(t,"content",i=n[41])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[41])&&c(t,"content",i)},d(e){e&&p(t)}}}function ge(n){let t,i=n[7].video.writers,e=[];for(let l=0;l<i.length;l+=1)e[l]=Me(R(n,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let f=0;f<e.length;f+=1)e[f].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].video.writers;let f;for(f=0;f<i.length;f+=1){const a=R(l,i,f);e[f]?e[f].p(a,o):(e[f]=Me(a),e[f].c(),e[f].m(t.parentNode,t))}for(;f<e.length;f+=1)e[f].d(1);e.length=i.length}},d(l){G(e,l),l&&p(t)}}}function Me(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","video:writer"),c(t,"content",i=n[38])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[38])&&c(t,"content",i)},d(e){e&&p(t)}}}function Ee(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","video:duration"),c(t,"content",i=n[7].video.duration.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].video.duration.toString())&&c(t,"content",i)},d(e){e&&p(t)}}}function ye(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","video:release_date"),c(t,"content",i=n[7].video.releaseDate)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].video.releaseDate)&&c(t,"content",i)},d(e){e&&p(t)}}}function Le(n){let t,i=n[7].video.tags,e=[];for(let l=0;l<i.length;l+=1)e[l]=Se(Q(n,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let f=0;f<e.length;f+=1)e[f].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].video.tags;let f;for(f=0;f<i.length;f+=1){const a=Q(l,i,f);e[f]?e[f].p(a,o):(e[f]=Se(a),e[f].c(),e[f].m(t.parentNode,t))}for(;f<e.length;f+=1)e[f].d(1);e.length=i.length}},d(l){G(e,l),l&&p(t)}}}function Se(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","video:tag"),c(t,"content",i=n[16])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[16])&&c(t,"content",i)},d(e){e&&p(t)}}}function Ce(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","video:series"),c(t,"content",i=n[7].video.series)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].video.series)&&c(t,"content",i)},d(e){e&&p(t)}}}function De(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","article:published_time"),c(t,"content",i=n[7].article.publishedTime)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].article.publishedTime)&&c(t,"content",i)},d(e){e&&p(t)}}}function Ie(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","article:modified_time"),c(t,"content",i=n[7].article.modifiedTime)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].article.modifiedTime)&&c(t,"content",i)},d(e){e&&p(t)}}}function Pe(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","article:expiration_time"),c(t,"content",i=n[7].article.expirationTime)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].article.expirationTime)&&c(t,"content",i)},d(e){e&&p(t)}}}function Ge(n){let t,i=n[7].article.authors,e=[];for(let l=0;l<i.length;l+=1)e[l]=Ke(Z(n,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let f=0;f<e.length;f+=1)e[f].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].article.authors;let f;for(f=0;f<i.length;f+=1){const a=Z(l,i,f);e[f]?e[f].p(a,o):(e[f]=Ke(a),e[f].c(),e[f].m(t.parentNode,t))}for(;f<e.length;f+=1)e[f].d(1);e.length=i.length}},d(l){G(e,l),l&&p(t)}}}function Ke(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","article:author"),c(t,"content",i=n[29])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[29])&&c(t,"content",i)},d(e){e&&p(t)}}}function Ue(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","article:section"),c(t,"content",i=n[7].article.section)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].article.section)&&c(t,"content",i)},d(e){e&&p(t)}}}function Je(n){let t,i=n[7].article.tags,e=[];for(let l=0;l<i.length;l+=1)e[l]=Be(Y(n,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let f=0;f<e.length;f+=1)e[f].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].article.tags;let f;for(f=0;f<i.length;f+=1){const a=Y(l,i,f);e[f]?e[f].p(a,o):(e[f]=Be(a),e[f].c(),e[f].m(t.parentNode,t))}for(;f<e.length;f+=1)e[f].d(1);e.length=i.length}},d(l){G(e,l),l&&p(t)}}}function Be(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","article:tag"),c(t,"content",i=n[16])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[16])&&c(t,"content",i)},d(e){e&&p(t)}}}function qe(n){let t,i=n[7].book.authors,e=[];for(let l=0;l<i.length;l+=1)e[l]=ze(x(n,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let f=0;f<e.length;f+=1)e[f].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].book.authors;let f;for(f=0;f<i.length;f+=1){const a=x(l,i,f);e[f]?e[f].p(a,o):(e[f]=ze(a),e[f].c(),e[f].m(t.parentNode,t))}for(;f<e.length;f+=1)e[f].d(1);e.length=i.length}},d(l){G(e,l),l&&p(t)}}}function ze(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","book:author"),c(t,"content",i=n[29])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[29])&&c(t,"content",i)},d(e){e&&p(t)}}}function Fe(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","book:isbn"),c(t,"content",i=n[7].book.isbn)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].book.isbn)&&c(t,"content",i)},d(e){e&&p(t)}}}function He(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","book:release_date"),c(t,"content",i=n[7].book.releaseDate)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].book.releaseDate)&&c(t,"content",i)},d(e){e&&p(t)}}}function Ve(n){let t,i=n[7].book.tags,e=[];for(let l=0;l<i.length;l+=1)e[l]=je($(n,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let f=0;f<e.length;f+=1)e[f].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].book.tags;let f;for(f=0;f<i.length;f+=1){const a=$(l,i,f);e[f]?e[f].p(a,o):(e[f]=je(a),e[f].c(),e[f].m(t.parentNode,t))}for(;f<e.length;f+=1)e[f].d(1);e.length=i.length}},d(l){G(e,l),l&&p(t)}}}function je(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","book:tag"),c(t,"content",i=n[16])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[16])&&c(t,"content",i)},d(e){e&&p(t)}}}function Oe(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","profile:first_name"),c(t,"content",i=n[7].profile.firstName)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].profile.firstName)&&c(t,"content",i)},d(e){e&&p(t)}}}function Qe(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","profile:last_name"),c(t,"content",i=n[7].profile.lastName)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].profile.lastName)&&c(t,"content",i)},d(e){e&&p(t)}}}function Re(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","profile:username"),c(t,"content",i=n[7].profile.username)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].profile.username)&&c(t,"content",i)},d(e){e&&p(t)}}}function We(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","profile:gender"),c(t,"content",i=n[7].profile.gender)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].profile.gender)&&c(t,"content",i)},d(e){e&&p(t)}}}function Xe(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:title"),c(t,"content",i=n[7].title||n[12])},m(e,l){k(e,t,l)},p(e,l){l[0]&4224&&i!==(i=e[7].title||e[12])&&c(t,"content",i)},d(e){e&&p(t)}}}function Ye(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:description"),c(t,"content",i=n[7].description||n[2])},m(e,l){k(e,t,l)},p(e,l){l[0]&132&&i!==(i=e[7].description||e[2])&&c(t,"content",i)},d(e){e&&p(t)}}}function Ze(n){let t,i=n[7].images,e=[];for(let l=0;l<i.length;l+=1)e[l]=tt(O(n,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let f=0;f<e.length;f+=1)e[f].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].images;let f;for(f=0;f<i.length;f+=1){const a=O(l,i,f);e[f]?e[f].p(a,o):(e[f]=tt(a),e[f].c(),e[f].m(t.parentNode,t))}for(;f<e.length;f+=1)e[f].d(1);e.length=i.length}},d(l){G(e,l),l&&p(t)}}}function $e(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:image:alt"),c(t,"content",i=n[24].alt)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[24].alt)&&c(t,"content",i)},d(e){e&&p(t)}}}function xe(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:image:width"),c(t,"content",i=n[24].width.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[24].width.toString())&&c(t,"content",i)},d(e){e&&p(t)}}}function et(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:image:height"),c(t,"content",i=n[24].height.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[24].height.toString())&&c(t,"content",i)},d(e){e&&p(t)}}}function tt(n){let t,i,e,l,o,f,a=n[24].alt&&$e(n),s=n[24].width&&xe(n),r=n[24].height&&et(n);return{c(){t=A("meta"),e=y(),a&&a.c(),l=y(),s&&s.c(),o=y(),r&&r.c(),f=T(),this.h()},l(u){t=w(u,"META",{property:!0,content:!0}),e=L(u),a&&a.l(u),l=L(u),s&&s.l(u),o=L(u),r&&r.l(u),f=T(),this.h()},h(){c(t,"property","og:image"),c(t,"content",i=n[24].url)},m(u,d){k(u,t,d),k(u,e,d),a&&a.m(u,d),k(u,l,d),s&&s.m(u,d),k(u,o,d),r&&r.m(u,d),k(u,f,d)},p(u,d){d[0]&128&&i!==(i=u[24].url)&&c(t,"content",i),u[24].alt?a?a.p(u,d):(a=$e(u),a.c(),a.m(l.parentNode,l)):a&&(a.d(1),a=null),u[24].width?s?s.p(u,d):(s=xe(u),s.c(),s.m(o.parentNode,o)):s&&(s.d(1),s=null),u[24].height?r?r.p(u,d):(r=et(u),r.c(),r.m(f.parentNode,f)):r&&(r.d(1),r=null)},d(u){u&&p(t),u&&p(e),a&&a.d(u),u&&p(l),s&&s.d(u),u&&p(o),r&&r.d(u),u&&p(f)}}}function lt(n){let t,i=n[7].videos,e=[];for(let l=0;l<i.length;l+=1)e[l]=_t(j(n,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let f=0;f<e.length;f+=1)e[f].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].videos;let f;for(f=0;f<i.length;f+=1){const a=j(l,i,f);e[f]?e[f].p(a,o):(e[f]=_t(a),e[f].c(),e[f].m(t.parentNode,t))}for(;f<e.length;f+=1)e[f].d(1);e.length=i.length}},d(l){G(e,l),l&&p(t)}}}function it(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:video:alt"),c(t,"content",i=n[21].alt)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].alt)&&c(t,"content",i)},d(e){e&&p(t)}}}function ft(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:video:width"),c(t,"content",i=n[21].width.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].width.toString())&&c(t,"content",i)},d(e){e&&p(t)}}}function nt(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:video:height"),c(t,"content",i=n[21].height.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].height.toString())&&c(t,"content",i)},d(e){e&&p(t)}}}function ot(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:video:secure_url"),c(t,"content",i=n[21].secureUrl.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].secureUrl.toString())&&c(t,"content",i)},d(e){e&&p(t)}}}function rt(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:video:type"),c(t,"content",i=n[21].type.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].type.toString())&&c(t,"content",i)},d(e){e&&p(t)}}}function _t(n){let t,i,e,l,o,f,a,s,r=n[21].alt&&it(n),u=n[21].width&&ft(n),d=n[21].height&&nt(n),b=n[21].secureUrl&&ot(n),m=n[21].type&&rt(n);return{c(){t=A("meta"),e=y(),r&&r.c(),l=y(),u&&u.c(),o=y(),d&&d.c(),f=y(),b&&b.c(),a=y(),m&&m.c(),s=T(),this.h()},l(h){t=w(h,"META",{property:!0,content:!0}),e=L(h),r&&r.l(h),l=L(h),u&&u.l(h),o=L(h),d&&d.l(h),f=L(h),b&&b.l(h),a=L(h),m&&m.l(h),s=T(),this.h()},h(){c(t,"property","og:video"),c(t,"content",i=n[21].url)},m(h,_){k(h,t,_),k(h,e,_),r&&r.m(h,_),k(h,l,_),u&&u.m(h,_),k(h,o,_),d&&d.m(h,_),k(h,f,_),b&&b.m(h,_),k(h,a,_),m&&m.m(h,_),k(h,s,_)},p(h,_){_[0]&128&&i!==(i=h[21].url)&&c(t,"content",i),h[21].alt?r?r.p(h,_):(r=it(h),r.c(),r.m(l.parentNode,l)):r&&(r.d(1),r=null),h[21].width?u?u.p(h,_):(u=ft(h),u.c(),u.m(o.parentNode,o)):u&&(u.d(1),u=null),h[21].height?d?d.p(h,_):(d=nt(h),d.c(),d.m(f.parentNode,f)):d&&(d.d(1),d=null),h[21].secureUrl?b?b.p(h,_):(b=ot(h),b.c(),b.m(a.parentNode,a)):b&&(b.d(1),b=null),h[21].type?m?m.p(h,_):(m=rt(h),m.c(),m.m(s.parentNode,s)):m&&(m.d(1),m=null)},d(h){h&&p(t),h&&p(e),r&&r.d(h),h&&p(l),u&&u.d(h),h&&p(o),d&&d.d(h),h&&p(f),b&&b.d(h),h&&p(a),m&&m.d(h),h&&p(s)}}}function at(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:locale"),c(t,"content",i=n[7].locale)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].locale)&&c(t,"content",i)},d(e){e&&p(t)}}}function ut(n){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:site_name"),c(t,"content",i=n[7].site_name)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].site_name)&&c(t,"content",i)},d(e){e&&p(t)}}}function ct(n){let t,i=n[9],e=[];for(let l=0;l<i.length;l+=1)e[l]=mt(V(n,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let f=0;f<e.length;f+=1)e[f].m(l,o);k(l,t,o)},p(l,o){if(o[0]&512){i=l[9];let f;for(f=0;f<i.length;f+=1){const a=V(l,i,f);e[f]?e[f].p(a,o):(e[f]=mt(a),e[f].c(),e[f].m(t.parentNode,t))}for(;f<e.length;f+=1)e[f].d(1);e.length=i.length}},d(l){G(e,l),l&&p(t)}}}function mt(n){let t,i=[n[16]],e={};for(let l=0;l<i.length;l+=1)e=vt(e,i[l]);return{c(){t=A("meta"),this.h()},l(l){t=w(l,"META",{}),this.h()},h(){J(t,e)},m(l,o){k(l,t,o)},p(l,o){J(t,e=Nt(i,[o[0]&512&&l[16]]))},d(l){l&&p(t)}}}function st(n){let t,i=n[10],e=[];for(let l=0;l<i.length;l+=1)e[l]=ht(H(n,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let f=0;f<e.length;f+=1)e[f].m(l,o);k(l,t,o)},p(l,o){if(o[0]&1024){i=l[10];let f;for(f=0;f<i.length;f+=1){const a=H(l,i,f);e[f]?e[f].p(a,o):(e[f]=ht(a),e[f].c(),e[f].m(t.parentNode,t))}for(;f<e.length;f+=1)e[f].d(1);e.length=i.length}},d(l){G(e,l),l&&p(t)}}}function ht(n){let t,i=[n[16]],e={};for(let l=0;l<i.length;l+=1)e=vt(e,i[l]);return{c(){t=A("link"),this.h()},l(l){t=w(l,"LINK",{}),this.h()},h(){J(t,e)},m(l,o){k(l,t,o)},p(l,o){J(t,e=Nt(i,[o[0]&1024&&l[16]]))},d(l){l&&p(t)}}}function Pt(n){var U;let t,i,e,l,o,f,a,s,r,u,d,b,m,h;document.title=t=n[12];let _=n[2]&&te(n),N=n[8]&&le(n),v=n[3]&&ie(n),E=n[4]&&n[4].length>0&&fe(n),M=n[5]&&oe(n),C=n[6]&&he(n),D=n[7]&&pe(n),I=n[9]&&n[9].length>0&&ct(n),P=((U=n[10])==null?void 0:U.length)&&st(n);return{c(){i=A("meta"),l=A("meta"),_&&_.c(),f=T(),N&&N.c(),a=T(),v&&v.c(),s=T(),E&&E.c(),r=T(),M&&M.c(),u=T(),C&&C.c(),d=T(),D&&D.c(),b=T(),I&&I.c(),m=T(),P&&P.c(),h=T(),this.h()},l(g){const S=kt("svelte-1h7w4y4",document.head);i=w(S,"META",{name:!0,content:!0}),l=w(S,"META",{name:!0,content:!0}),_&&_.l(S),f=T(),N&&N.l(S),a=T(),v&&v.l(S),s=T(),E&&E.l(S),r=T(),M&&M.l(S),u=T(),C&&C.l(S),d=T(),D&&D.l(S),b=T(),I&&I.l(S),m=T(),P&&P.l(S),h=T(),S.forEach(p),this.h()},h(){c(i,"name","robots"),c(i,"content",e=`${n[0]?"noindex":"index"},${n[1]?"nofollow":"follow"}${n[11]}`),c(l,"name","googlebot"),c(l,"content",o=`${n[0]?"noindex":"index"},${n[1]?"nofollow":"follow"}${n[11]}`)},m(g,S){K(document.head,i),K(document.head,l),_&&_.m(document.head,null),K(document.head,f),N&&N.m(document.head,null),K(document.head,a),v&&v.m(document.head,null),K(document.head,s),E&&E.m(document.head,null),K(document.head,r),M&&M.m(document.head,null),K(document.head,u),C&&C.m(document.head,null),K(document.head,d),D&&D.m(document.head,null),K(document.head,b),I&&I.m(document.head,null),K(document.head,m),P&&P.m(document.head,null),K(document.head,h)},p(g,S){var B;S[0]&4096&&t!==(t=g[12])&&(document.title=t),S[0]&2051&&e!==(e=`${g[0]?"noindex":"index"},${g[1]?"nofollow":"follow"}${g[11]}`)&&c(i,"content",e),S[0]&2051&&o!==(o=`${g[0]?"noindex":"index"},${g[1]?"nofollow":"follow"}${g[11]}`)&&c(l,"content",o),g[2]?_?_.p(g,S):(_=te(g),_.c(),_.m(f.parentNode,f)):_&&(_.d(1),_=null),g[8]?N?N.p(g,S):(N=le(g),N.c(),N.m(a.parentNode,a)):N&&(N.d(1),N=null),g[3]?v?v.p(g,S):(v=ie(g),v.c(),v.m(s.parentNode,s)):v&&(v.d(1),v=null),g[4]&&g[4].length>0?E?E.p(g,S):(E=fe(g),E.c(),E.m(r.parentNode,r)):E&&(E.d(1),E=null),g[5]?M?M.p(g,S):(M=oe(g),M.c(),M.m(u.parentNode,u)):M&&(M.d(1),M=null),g[6]?C?C.p(g,S):(C=he(g),C.c(),C.m(d.parentNode,d)):C&&(C.d(1),C=null),g[7]?D?D.p(g,S):(D=pe(g),D.c(),D.m(b.parentNode,b)):D&&(D.d(1),D=null),g[9]&&g[9].length>0?I?I.p(g,S):(I=ct(g),I.c(),I.m(m.parentNode,m)):I&&(I.d(1),I=null),(B=g[10])!=null&&B.length?P?P.p(g,S):(P=st(g),P.c(),P.m(h.parentNode,h)):P&&(P.d(1),P=null)},i:q,o:q,d(g){p(i),p(l),_&&_.d(g),p(f),N&&N.d(g),p(a),v&&v.d(g),p(s),E&&E.d(g),p(r),M&&M.d(g),p(u),C&&C.d(g),p(d),D&&D.d(g),p(b),I&&I.d(g),p(m),P&&P.d(g),p(h)}}}function Gt(n,t,i){let e,{title:l=""}=t,{titleTemplate:o=""}=t,{noindex:f=!1}=t,{nofollow:a=!1}=t,{robotsProps:s=void 0}=t,{description:r=void 0}=t,{mobileAlternate:u=void 0}=t,{languageAlternates:d=void 0}=t,{twitter:b=void 0}=t,{facebook:m=void 0}=t,{openGraph:h=void 0}=t,{canonical:_=void 0}=t,{additionalMetaTags:N=void 0}=t,{additionalLinkTags:v=void 0}=t,E="";if(s){const{nosnippet:M,maxSnippet:C,maxImagePreview:D,maxVideoPreview:I,noarchive:P,noimageindex:U,notranslate:g,unavailableAfter:S}=s;E=`${M?",nosnippet":""}${C?`,max-snippet:${C}`:""}${D?`,max-image-preview:${D}`:""}${P?",noarchive":""}${S?`,unavailable_after:${S}`:""}${U?",noimageindex":""}${I?`,max-video-preview:${I}`:""}${g?",notranslate":""}`}return n.$$set=M=>{"title"in M&&i(13,l=M.title),"titleTemplate"in M&&i(14,o=M.titleTemplate),"noindex"in M&&i(0,f=M.noindex),"nofollow"in M&&i(1,a=M.nofollow),"robotsProps"in M&&i(15,s=M.robotsProps),"description"in M&&i(2,r=M.description),"mobileAlternate"in M&&i(3,u=M.mobileAlternate),"languageAlternates"in M&&i(4,d=M.languageAlternates),"twitter"in M&&i(5,b=M.twitter),"facebook"in M&&i(6,m=M.facebook),"openGraph"in M&&i(7,h=M.openGraph),"canonical"in M&&i(8,_=M.canonical),"additionalMetaTags"in M&&i(9,N=M.additionalMetaTags),"additionalLinkTags"in M&&i(10,v=M.additionalLinkTags)},n.$$.update=()=>{n.$$.dirty[0]&24576&&i(12,e=o?o.replace(/%s/g,l):l)},[f,a,r,u,d,b,m,h,_,N,v,E,e,l,o,s]}class Kt extends pt{constructor(t){super(),dt(this,t,Gt,Pt,bt,{title:13,titleTemplate:14,noindex:0,nofollow:1,robotsProps:15,description:2,mobileAlternate:3,languageAlternates:4,twitter:5,facebook:6,openGraph:7,canonical:8,additionalMetaTags:9,additionalLinkTags:10},null,[-1,-1])}}function Ut(n){let t,i,e,l;const o=n[1].default,f=Tt(o,n,n[0],null);return e=new Kt({props:{title:"Jonathan Bangert",description:"My personal portfolio and website! Come have a look!"}}),{c(){t=y(),f&&f.c(),i=y(),At(e.$$.fragment),this.h()},l(a){kt("svelte-hpsi5u",document.head).forEach(p),t=L(a),f&&f.l(a),i=L(a),wt(e.$$.fragment,a),this.h()},h(){document.title="Jonathan Bangert"},m(a,s){k(a,t,s),f&&f.m(a,s),k(a,i,s),gt(e,a,s),l=!0},p(a,[s]){f&&f.p&&(!l||s&1)&&Mt(f,o,a,a[0],l?yt(o,a[0],s,null):Et(a[0]),null)},i(a){l||(z(f,a),z(e.$$.fragment,a),l=!0)},o(a){F(f,a),F(e.$$.fragment,a),l=!1},d(a){a&&p(t),f&&f.d(a),a&&p(i),Lt(e,a)}}}function Jt(n,t,i){let{$$slots:e={},$$scope:l}=t;return n.$$set=o=>{"$$scope"in o&&i(0,l=o.$$scope)},[l,e]}class qt extends pt{constructor(t){super(),dt(this,t,Jt,Ut,bt,{})}}export{qt as default};