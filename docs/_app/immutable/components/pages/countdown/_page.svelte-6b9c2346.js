import{S as Z,i as tt,s as et,k as s,q as N,a as T,l as a,m as n,r as V,h as e,c as $,n as i,p as v,b as st,E as t,B as W,O as at}from"../../../chunks/index-4e7dcb30.js";import{w as nt}from"../../../chunks/index-5366bde9.js";function X(){const r=new Date(2023,0,1),c=new Date;let o=Math.floor((r-c)/1e3),l=Math.floor(o/60),d=Math.floor(l/60);const p=Math.floor(d/24);return d=d-p*24,l=l-p*24*60-d*60,o=o-p*24*60*60-d*60*60-l*60,{seconds:o,minutes:l,hours:d,days:p}}function ot(){let r=X();Y.set({seconds:r.seconds,minutes:r.minutes,hours:r.hours,days:r.days})}const Y=nt(X());function lt(r){let c,o,l,d,p,u,x,b,w,q,k,_,g,S,B,C,E,D,P,H,O,y,A,I,j;return{c(){c=s("div"),o=s("div"),l=s("h1"),d=N("Time till new year:"),p=T(),u=s("div"),x=s("div"),b=s("span"),w=s("span"),q=N(`
				days`),k=T(),_=s("div"),g=s("span"),S=s("span"),B=N(`
				hours`),C=T(),E=s("div"),D=s("span"),P=s("span"),H=N(`
				min`),O=T(),y=s("div"),A=s("span"),I=s("span"),j=N(`
				sec`),this.h()},l(f){c=a(f,"DIV",{class:!0,style:!0});var h=n(c);o=a(h,"DIV",{class:!0});var M=n(o);l=a(M,"H1",{class:!0});var K=n(l);d=V(K,"Time till new year:"),K.forEach(e),p=$(M),u=a(M,"DIV",{class:!0});var m=n(u);x=a(m,"DIV",{class:!0});var z=n(x);b=a(z,"SPAN",{class:!0});var L=n(b);w=a(L,"SPAN",{style:!0}),n(w).forEach(e),L.forEach(e),q=V(z,`
				days`),z.forEach(e),k=$(m),_=a(m,"DIV",{class:!0});var F=n(_);g=a(F,"SPAN",{class:!0});var Q=n(g);S=a(Q,"SPAN",{style:!0}),n(S).forEach(e),Q.forEach(e),B=V(F,`
				hours`),F.forEach(e),C=$(m),E=a(m,"DIV",{class:!0});var G=n(E);D=a(G,"SPAN",{class:!0});var R=n(D);P=a(R,"SPAN",{style:!0}),n(P).forEach(e),R.forEach(e),H=V(G,`
				min`),G.forEach(e),O=$(m),y=a(m,"DIV",{class:!0});var J=n(y);A=a(J,"SPAN",{class:!0});var U=n(A);I=a(U,"SPAN",{style:!0}),n(I).forEach(e),U.forEach(e),j=V(J,`
				sec`),J.forEach(e),m.forEach(e),M.forEach(e),h.forEach(e),this.h()},h(){i(l,"class","text-5xl font-bold"),v(w,"--value",r[0].days),i(b,"class","countdown font-mono text-5xl"),i(x,"class","flex flex-col p-2 bg-neutral rounded-box text-neutral-content"),v(S,"--value",r[0].hours),i(g,"class","countdown font-mono text-5xl"),i(_,"class","flex flex-col p-2 bg-neutral rounded-box text-neutral-content"),v(P,"--value",r[0].minutes),i(D,"class","countdown font-mono text-5xl"),i(E,"class","flex flex-col p-2 bg-neutral rounded-box text-neutral-content"),v(I,"--value",r[0].seconds),i(A,"class","countdown font-mono text-5xl"),i(y,"class","flex flex-col p-2 bg-neutral rounded-box text-neutral-content"),i(u,"class","grid grid-flow-col gap-5 auto-cols-max py-6"),i(o,"class","hero-content text-center align-middle"),i(c,"class","w-screen hero"),v(c,"height","80%")},m(f,h){st(f,c,h),t(c,o),t(o,l),t(l,d),t(o,p),t(o,u),t(u,x),t(x,b),t(b,w),t(x,q),t(u,k),t(u,_),t(_,g),t(g,S),t(_,B),t(u,C),t(u,E),t(E,D),t(D,P),t(E,H),t(u,O),t(u,y),t(y,A),t(A,I),t(y,j)},p(f,[h]){h&1&&v(w,"--value",f[0].days),h&1&&v(S,"--value",f[0].hours),h&1&&v(P,"--value",f[0].minutes),h&1&&v(I,"--value",f[0].seconds)},i:W,o:W,d(f){f&&e(c)}}}function rt(r,c,o){let l;return at(r,Y,d=>o(0,l=d)),setInterval(ot,1e3),[l]}class ut extends Z{constructor(c){super(),tt(this,c,rt,lt,et,{})}}export{ut as default};