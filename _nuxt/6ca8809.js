(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(t,e,o){"use strict";o.r(e);var r=o(0),n=Object(r.d)({name:"default-side-menu",data:function(){return{}},methods:{}}),c=o(39),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"flex flex-col w-48 overflow-hidden"},[t._m(0),t._v(" "),e("ul",{staticClass:"flex flex-col py-4 px-5"},[e("li",[e("nuxt-link",{staticClass:"flex flex-row items-center h-9 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800",attrs:{to:{name:"index"},"exact-active-class":"!text-gray-800"}},[e("span",{staticClass:"text-lg font-medium h-8 w-12"},[t._v("Bio")])])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"flex flex-row items-center h-9 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800",attrs:{to:{name:"contact"},"active-class":"!text-gray-800"}},[e("span",{staticClass:"text-lg font-medium h-8 w-12"},[t._v("Contact")])])],1)])])}),[function(){var t=this._self._c;this._self._setupProxy;return t("div",{staticClass:"flex items-center justify-center h-20"},[t("h1",{staticClass:"text-3xl uppercase text-indigo-500"})])}],!1,null,"02a148af",null);e.default=component.exports},164:function(t,e,o){"use strict";var r=o(0),n=o(30),c=o(132),l=o(234),f=o(233);n.a.autoAddCss=!1,n.c.add(f.faInstagram,l.faFacebookF),r.c.component("font-awesome-icon",c.a),r.c.component("font-awesome-layers",c.b),r.c.component("font-awesome-layers-text",c.c)},165:function(t,e,o){"use strict";var r=o(129),n=o(130);o(17),o(99),o(28);(function(){function t(e){Object(r.a)(this,t),this.Empty="00000000-0000-0000-0000-000000000000",e?this.parse(e):this.newGuid()}return Object(n.a)(t,[{key:"ToString",value:function(){if(null!=this._guid)return this._guid;throw"No Guid Assigned"}},{key:"newGuid",value:function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return this._guid=(t()+t()+"-"+t()+"-4"+t().substr(0,3)+"-"+t()+"-"+t()+t()+t()).toLowerCase(),this._guid}},{key:"parse",value:function(t){if(this.isGuid(t))return this._guid=t,this._guid;throw"Guid invalid"}},{key:"isGuid",value:function(t){return null!=/[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}/i.exec(t)}},{key:"guid",get:function(){return this._guid}}]),t}()).Empty="00000000-0000-0000-0000-000000000000"},167:function(t,e,o){"use strict";var r={};o.r(r),o.d(r,"fullName",(function(){return c})),o.d(r,"email",(function(){return l})),o.d(r,"facebook",(function(){return f})),o.d(r,"instagram",(function(){return m}));var n=o(82),c="Dane-Marie Mc Master",l="Minkigrey747@gmail.com",f="https://www.facebook.com/danemarie.greyvenstein?mibextid=ZbWKwL",m="https://instagram.com/minkimcmaster?igshid=YmMyMTA2M2Y=";e.a=Object(n.a)((function(t,e){e("const",r)}))},219:function(t,e,o){var content=o(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(103).default)("2ecbec8b",content,!0,{sourceMap:!1})},237:function(t,e,o){"use strict";var r={name:"default-layout",components:{DefaultSideMenu:o(160).default}},n=(o(299),o(39)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"min-h-screen bg-gray-100"},[e("div",{staticClass:"container mx-auto flex flex-row w-[80rem]"},[e("default-side-menu"),t._v(" "),e("main",[e("div",{staticClass:"h-20"}),t._v(" "),e("h1",{staticClass:"pt-4 text-3xl font-bold"},[t._v("\n                "+t._s(t.$const.fullName)+"\n            ")]),t._v(" "),e("Nuxt")],1)],1)])}),[],!1,null,"4dd336cd",null);e.a=component.exports;installComponents(component,{DefaultSideMenu:o(160).default})},238:function(t,e,o){o(239),t.exports=o(240)},297:function(t,e,o){var content=o(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(103).default)("09cd741b",content,!0,{sourceMap:!1})},298:function(t,e,o){var r=o(102)((function(i){return i[1]}));r.push([t.i,':host,:root{--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Solid";--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Regular";--fa-font-light:normal 300 1em/1 "Font Awesome 6 Light";--fa-font-thin:normal 100 1em/1 "Font Awesome 6 Thin";--fa-font-duotone:normal 900 1em/1 "Font Awesome 6 Duotone";--fa-font-sharp-solid:normal 900 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-regular:normal 400 1em/1 "Font Awesome 6 Sharp";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{box-sizing:content-box;overflow:visible}.svg-inline--fa{display:inline-block;display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.07143em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:.3em;margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{top:.25em;width:2em;width:var(--fa-li-width,2em)}.svg-inline--fa.fa-fw{width:1.25em;width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{transform-origin:center center}.fa-layers-text{left:50%;top:50%;transform:translate(-50%,-50%);transform-origin:center center}.fa-layers-counter{background-color:#ff253a;background-color:var(--fa-counter-background-color,#ff253a);border-radius:1em;border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:#fff;color:var(--fa-inverse,#fff);line-height:1;line-height:var(--fa-counter-line-height,1);max-width:5em;max-width:var(--fa-counter-max-width,5em);min-width:1.5em;min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:.25em .5em;padding:var(--fa-counter-padding,.25em .5em);right:0;right:var(--fa-right,0);text-overflow:ellipsis;top:0;top:var(--fa-top,0);transform:scale(.25);transform:scale(var(--fa-counter-scale,.25));transform-origin:top right}.fa-layers-bottom-right{bottom:0;bottom:var(--fa-bottom,0);right:0;right:var(--fa-right,0);top:auto;transform:scale(.25);transform:scale(var(--fa-layers-scale,.25));transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;bottom:var(--fa-bottom,0);left:0;left:var(--fa-left,0);right:auto;top:auto;transform:scale(.25);transform:scale(var(--fa-layers-scale,.25));transform-origin:bottom left}.fa-layers-top-right{right:0;right:var(--fa-right,0);top:0;top:var(--fa-top,0);transform:scale(.25);transform:scale(var(--fa-layers-scale,.25));transform-origin:top right}.fa-layers-top-left{left:0;left:var(--fa-left,0);right:auto;top:0;top:var(--fa-top,0);transform:scale(.25);transform:scale(var(--fa-layers-scale,.25));transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.08333em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.07143em;vertical-align:.05357em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.04167em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;left:calc(var(--fa-li-width, 2em)*-1);line-height:inherit;position:absolute;text-align:center;width:2em;width:var(--fa-li-width,2em)}.fa-border{border-color:#eee;border-color:var(--fa-border-color,#eee);border-radius:.1em;border-radius:var(--fa-border-radius,.1em);border-style:solid;border-style:var(--fa-border-style,solid);border-width:.08em;border-width:var(--fa-border-width,.08em);padding:.2em .25em .15em;padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:.3em;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:.3em;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{animation-delay:0s;animation-delay:var(--fa-animation-delay,0s);animation-direction:normal;animation-direction:var(--fa-animation-direction,normal);animation-duration:1s;animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:infinite;animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-name:fa-beat;animation-timing-function:ease-in-out;animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{animation-delay:0s;animation-delay:var(--fa-animation-delay,0s);animation-direction:normal;animation-direction:var(--fa-animation-direction,normal);animation-duration:1s;animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:infinite;animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-name:fa-bounce;animation-timing-function:cubic-bezier(.28,.84,.42,1);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{animation-iteration-count:infinite;animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-name:fa-fade;animation-timing-function:cubic-bezier(.4,0,.6,1);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade,.fa-fade{animation-delay:0s;animation-delay:var(--fa-animation-delay,0s);animation-direction:normal;animation-direction:var(--fa-animation-direction,normal);animation-duration:1s;animation-duration:var(--fa-animation-duration,1s)}.fa-beat-fade{animation-iteration-count:infinite;animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-name:fa-beat-fade;animation-timing-function:cubic-bezier(.4,0,.6,1);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{animation-delay:0s;animation-delay:var(--fa-animation-delay,0s);animation-direction:normal;animation-direction:var(--fa-animation-direction,normal);animation-duration:1s;animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:infinite;animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-name:fa-flip;animation-timing-function:ease-in-out;animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{animation-duration:1s;animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:infinite;animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-name:fa-shake;animation-timing-function:linear;animation-timing-function:var(--fa-animation-timing,linear)}.fa-shake,.fa-spin{animation-delay:0s;animation-delay:var(--fa-animation-delay,0s);animation-direction:normal;animation-direction:var(--fa-animation-direction,normal)}.fa-spin{animation-duration:2s;animation-duration:var(--fa-animation-duration,2s);animation-iteration-count:infinite;animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-name:fa-spin;animation-timing-function:linear;animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{animation-direction:normal;animation-direction:var(--fa-animation-direction,normal);animation-duration:1s;animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:infinite;animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-name:fa-spin;animation-timing-function:steps(8);animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{animation-delay:-1ms;animation-duration:1ms;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@keyframes fa-beat{0%,90%{transform:scale(1)}45%{transform:scale(1.25);transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-bounce{0%{transform:scale(1) translateY(0)}10%{transform:scale(1.1,.9) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{transform:scale(.9,1.1) translateY(-.5em);transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{transform:scale(1.05,.95) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{transform:scale(1) translateY(-.125em);transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em))}64%{transform:scale(1) translateY(0)}to{transform:scale(1) translateY(0)}}@keyframes fa-fade{50%{opacity:.4;opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-beat-fade{0%,to{opacity:.4;opacity:var(--fa-beat-fade-opacity,.4);transform:scale(1)}50%{opacity:1;transform:scale(1.125);transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-flip{50%{transform:rotateY(-180deg);transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-shake{0%{transform:rotate(-15deg)}4%{transform:rotate(15deg)}24%,8%{transform:rotate(-18deg)}12%,28%{transform:rotate(18deg)}16%{transform:rotate(-22deg)}20%{transform:rotate(22deg)}32%{transform:rotate(-12deg)}36%{transform:rotate(12deg)}40%,to{transform:rotate(0deg)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.fa-rotate-90{transform:rotate(90deg)}.fa-rotate-180{transform:rotate(180deg)}.fa-rotate-270{transform:rotate(270deg)}.fa-flip-horizontal{transform:scaleX(-1)}.fa-flip-vertical{transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1)}.fa-rotate-by{transform:rotate(none);transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;height:2em;position:relative;vertical-align:middle;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:auto;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff;color:var(--fa-inverse,#fff)}.fa-sr-only,.fa-sr-only-focusable:not(:focus),.sr-only,.sr-only-focusable:not(:focus){clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.svg-inline--fa .fa-primary{fill:currentColor;fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:currentColor;fill:var(--fa-secondary-color,currentColor)}.svg-inline--fa .fa-secondary,.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:#fff;color:var(--fa-inverse,#fff)}\n\n/*! tailwindcss v3.2.6 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline;text-decoration:underline}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.static{position:static}.float-right{float:right}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-5{margin-bottom:1.25rem}.mb-8{margin-bottom:2rem}.mt-3{margin-top:.75rem}.flex{display:flex}.h-20{height:5rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-9{height:2.25rem}.min-h-screen{min-height:100vh}.w-1\\/2{width:50%}.w-12{width:3rem}.w-48{width:12rem}.w-\\[80rem\\]{width:80rem}.w-full{width:100%}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.list-inside{list-style-position:inside}.list-disc{list-style-type:disc}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:1rem;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(1rem*var(--tw-space-x-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:1rem;margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.border{border-width:1px}.border-gray-500{--tw-border-opacity:1;border-color:#6b7280;border-color:rgb(107 114 128/var(--tw-border-opacity))}.bg-blue-400{--tw-bg-opacity:1;background-color:#60a5fa;background-color:rgb(96 165 250/var(--tw-bg-opacity))}.bg-blue-500{--tw-bg-opacity:1;background-color:#3b82f6;background-color:rgb(59 130 246/var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:#f3f4f6;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity:1;background-color:#f9fafb;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bg-gray-500{--tw-bg-opacity:1;background-color:#6b7280;background-color:rgb(107 114 128/var(--tw-bg-opacity))}.bg-gray-700{--tw-bg-opacity:1;background-color:#374151;background-color:rgb(55 65 81/var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity:1;background-color:#22c55e;background-color:rgb(34 197 94/var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:#ef4444;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.bg-yellow-500{--tw-bg-opacity:1;background-color:#eab308;background-color:rgb(234 179 8/var(--tw-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-1\\.5{padding-bottom:.375rem;padding-top:.375rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-4{padding-bottom:1rem;padding-top:1rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pt-4{padding-top:1rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-extralight{font-weight:200}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-thin{font-weight:100}.uppercase{text-transform:uppercase}.\\!text-gray-800{--tw-text-opacity:1!important;color:#1f2937!important;color:rgb(31 41 55/var(--tw-text-opacity))!important}.text-gray-500{--tw-text-opacity:1;color:#6b7280;color:rgb(107 114 128/var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:#1f2937;color:rgb(31 41 55/var(--tw-text-opacity))}.text-indigo-500{--tw-text-opacity:1;color:#6366f1;color:rgb(99 102 241/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:#fff;color:rgb(255 255 255/var(--tw-text-opacity))}.outline-none{outline:2px solid transparent;outline-offset:2px}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-200{transition-duration:.2s}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.btn{border-radius:.25rem;padding:.375rem .75rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.btn-sm{border-radius:.125rem;font-size:.875rem;line-height:1.25rem;padding:.25rem .5rem}.btn-lg{border-radius:.375rem;font-size:1.25rem;line-height:1.75rem;padding:.5rem 1rem}.btn-primary{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:#3b82f6;background-color:rgb(59 130 246/var(--tw-bg-opacity));color:#fff;color:rgb(255 255 255/var(--tw-text-opacity))}.btn-primary:hover{--tw-bg-opacity:1;background-color:#2563eb;background-color:rgb(37 99 235/var(--tw-bg-opacity))}.btn-secondary{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:#6b7280;background-color:rgb(107 114 128/var(--tw-bg-opacity));color:#fff;color:rgb(255 255 255/var(--tw-text-opacity))}.btn-secondary:hover{--tw-bg-opacity:1;background-color:#4b5563;background-color:rgb(75 85 99/var(--tw-bg-opacity))}.btn-success{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:#22c55e;background-color:rgb(34 197 94/var(--tw-bg-opacity));color:#fff;color:rgb(255 255 255/var(--tw-text-opacity))}.btn-success:hover{--tw-bg-opacity:1;background-color:#16a34a;background-color:rgb(22 163 74/var(--tw-bg-opacity))}.btn-danger{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:#ef4444;background-color:rgb(239 68 68/var(--tw-bg-opacity));color:#fff;color:rgb(255 255 255/var(--tw-text-opacity))}.btn-danger:hover{--tw-bg-opacity:1;background-color:#dc2626;background-color:rgb(220 38 38/var(--tw-bg-opacity))}.btn-warning{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:#eab308;background-color:rgb(234 179 8/var(--tw-bg-opacity));color:#fff;color:rgb(255 255 255/var(--tw-text-opacity))}.btn-warning:hover{--tw-bg-opacity:1;background-color:#ca8a04;background-color:rgb(202 138 4/var(--tw-bg-opacity))}.btn-info{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:#60a5fa;background-color:rgb(96 165 250/var(--tw-bg-opacity));color:#fff;color:rgb(255 255 255/var(--tw-text-opacity))}.btn-info:hover{--tw-bg-opacity:1;background-color:#3b82f6;background-color:rgb(59 130 246/var(--tw-bg-opacity))}.btn-light{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:#f9fafb;background-color:rgb(249 250 251/var(--tw-bg-opacity));color:#1f2937;color:rgb(31 41 55/var(--tw-text-opacity))}.btn-light:hover{--tw-bg-opacity:1;background-color:#f3f4f6;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.btn-dark{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:#374151;background-color:rgb(55 65 81/var(--tw-bg-opacity));color:#fff;color:rgb(255 255 255/var(--tw-text-opacity))}.btn-dark:hover{--tw-bg-opacity:1;background-color:#111827;background-color:rgb(17 24 39/var(--tw-bg-opacity))}body{font-family:"Roboto",sans-serif}.hover\\:translate-x-2:hover{--tw-translate-x:0.5rem;transform:translate(.5rem,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:text-gray-800:hover{--tw-text-opacity:1;color:#1f2937;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:space-x-10>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:2.5rem;margin-left:calc(2.5rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(2.5rem*var(--tw-space-x-reverse))}.sm\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:0;margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}}',""]),r.locals={},t.exports=r},299:function(t,e,o){"use strict";o(219)},300:function(t,e,o){var r=o(102)((function(i){return i[1]}));r.push([t.i,"main[data-v-4dd336cd]{width:calc(100% - 12rem)}",""]),r.locals={},t.exports=r}},[[238,5,1,6]]]);