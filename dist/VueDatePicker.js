!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueDatePicker=e():t.VueDatePicker=e()}("undefined"!=typeof self?self:this,function(){return i={},r.m=n=[function(t,e,n){"use strict";n.r(e);function p(t,e){return void 0!==t?t.toString().length>e?t:new Array(e-t.toString().length+1).join("0")+t:void 0}function h(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function a(t,e){for(var n=[],i=t;i<=e;i++)n.push(i);return n}function i(t){return 0==(t%=12)?12:t}function s(t){return 12<=t}function u(t,e,n){return Math.min(Math.max(t,e),n)}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,r=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{i||null==a.return||a.return()}finally{if(r)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var v=/,|\.|-| |:|\/|\\/,m=/D+/,y=/M+/,g=/Y+/,b=/h+/i,P=/m+/,C=/s+/,l=/A/,c={props:{value:{type:String,default:""},format:{type:String,default:"YYYY-MM-DD"},displayFormat:{type:String},editable:{type:Boolean,default:!0},hasInputElement:{type:Boolean,default:!0},inputAttributes:{type:Object},selectableYearRange:{type:[Number,Object,Function],default:void 0},disableInvalidMonths:{type:Boolean,default:!1},startPeriod:{type:Object},parseDate:{type:Function},formatDate:{type:Function},pickTime:{type:Boolean,default:!1},pickMinutes:{type:Boolean,default:!0},pickSeconds:{type:Boolean,default:!1},use12HourClock:{type:Boolean,default:!1},isDateDisabled:{type:Function,default:function(){return!1}},nextMonthCaption:{type:String,default:"Next month"},prevMonthCaption:{type:String,default:"Previous month"},setTimeCaption:{type:String,default:"Set time:"},mobileBreakpointWidth:{type:Number,default:500},weekdays:{type:Array,default:function(){return["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}},months:{type:Array,default:function(){return["January","February","March","April","May","June","July","August","September","October","November","December"]}},startWeekOnSunday:{type:Boolean,default:!1}},data:function(){return{inputValue:this.valueToInputFormat(this.value),direction:void 0,positionClass:void 0,opened:!this.hasInputElement,currentPeriod:this.startPeriod||this.getPeriodFromValue(this.value,this.format),monthsPerRow:3,yearsPerRow:5,yearsPerPage:20,tempYear:void 0,showMonthPicker:!1,showYearPicker:!1}},computed:{valueDate:function(){var t=this.value,e=this.format;return t?this.parseDateString(t,e):void 0},isReadOnly:function(){return!this.editable||this.inputAttributes&&this.inputAttributes.readonly},isValidValue:function(){var t=this.valueDate;return!this.value||Boolean(t)},currentPeriodDates:function(){var e=this,t=this.currentPeriod,n=t.year,i=t.month,r=[],o=new Date(n,i,1),s=new Date,t=this.startWeekOnSunday?1:0,n=o.getDay()||7;if(1-t<n)for(var a=n-(2-t);0<=a;a--){var u=new Date(o);u.setDate(-a),r.push({outOfRange:!0,date:u})}for(;o.getMonth()===i;)r.push({date:new Date(o)}),o.setDate(o.getDate()+1);for(var l=7-r.length%7,c=1;c<=l;c++){var d=new Date(o);d.setDate(c),r.push({outOfRange:!0,date:d})}return r.forEach(function(t){t.disabled=e.isDateDisabled(t.date),t.today=h(t.date,s),t.dateKey=[t.date.getFullYear(),t.date.getMonth()+1,t.date.getDate()].join("-"),t.selected=!!e.valueDate&&h(t.date,e.valueDate)}),function(t,e){for(var n=[];t.length;)n.push(t.splice(0,e));return n}(r,7)},computedMonths:function(){for(var o=this,t=[],e=this.months.length,s=0,n=e;s<n;s+=this.monthsPerRow){var i=this.months.slice(s,s+this.monthsPerRow).map(function(t,e){var n,i,r=s+1+e;return{value:r,text:t,key:"month-".concat(r),disabled:o.disableInvalidMonths&&(n=o.valueDate.getDate(),i=r,e=o.valueDate.getFullYear(),t=[31,28,31,30,31,30,31,31,30,31,30,31],((r=e)%4==0&&r%100!=0||r%400==0)&&(t[1]=29),!(!(e<0)&&(!(i<1||12<i)&&!(n<0||n>t[i-1]))))}});t.push(i)}return t},computedYears:function(){for(var n=this,t=[],e=this.tempYear||this.currentPeriod.year,e=10*Math.floor(e/10),i=a(e,e+this.yearsPerPage-1),r=0,o=i.length;r<o;r+=this.yearsPerRow){var s=i.slice(r,r+this.yearsPerRow).map(function(t,e){return{value:t,text:t,key:"year-".concat(t),disabled:0<n.yearRange.length&&!n.yearRange.includes(t)}});t.push(s)}return t},yearRange:function(){var t=this.currentPeriod.year,e=this.selectableYearRange,n=o(e),i=[];return"number"===n?i=a(t-e,t+e):"object"===n?i=a(e.from,e.to):"function"===n&&(i=e(this)),i},currentTime:function(){var t=this.valueDate;if(t){var e=t.getHours(),n=t.getMinutes(),t=t.getSeconds();return{hours:e,minutes:n,seconds:t,isPM:s(e),hoursFormatted:(this.use12HourClock?i(e):e).toString(),minutesFormatted:p(n,2),secondsFormatted:p(t,2)}}},directionClass:function(){return this.direction?"vdp".concat(this.direction,"Direction"):void 0},weekdaysSorted:function(){if(this.startWeekOnSunday){var t=this.weekdays.slice();return t.unshift(t.pop()),t}return this.weekdays}},watch:{value:function(t){this.isValidValue&&(this.inputValue=this.valueToInputFormat(t),this.currentPeriod=this.getPeriodFromValue(t,this.format))},currentPeriod:function(t,e){var n=new Date(t.year,t.month).getTime(),e=new Date(e.year,e.month).getTime();this.direction=n!==e?e<n?"Next":"Prev":void 0,n!==e&&this.$emit("periodChange",{year:t.year,month:t.month})}},beforeDestroy:function(){this.removeCloseEvents(),this.teardownPosition()},methods:{valueToInputFormat:function(t){return this.displayFormat&&this.formatDateToString(this.parseDateString(t,this.format),this.displayFormat)||t},getPeriodFromValue:function(t,e){e=this.parseDateString(t,e)||new Date;return{month:e.getMonth(),year:e.getFullYear()}},parseDateString:function(t,e){return t?this.parseDate?this.parseDate(t,e):this.parseSimpleDateString(t,e):void 0},formatDateToString:function(t,e){return t?this.formatDate?this.formatDate(t,e):this.formatSimpleDateToString(t,e):""},parseSimpleDateString:function(t,e){for(var n,i,r,o,s,a,u=t.split(v),l=e.split(v),c=l.length,d=0;d<c;d++)l[d].match(m)?n=parseInt(u[d],10):l[d].match(y)?i=parseInt(u[d],10):l[d].match(g)?r=parseInt(u[d],10):l[d].match(b)?o=parseInt(u[d],10):l[d].match(P)?s=parseInt(u[d],10):l[d].match(C)&&(a=parseInt(u[d],10));e=new Date([p(r,4),p(i,2),p(n,2)].join("-"));if(!isNaN(e)){var h=new Date(r,i-1,n);return[[r,"setFullYear"],[o,"setHours"],[s,"setMinutes"],[a,"setSeconds"]].forEach(function(t){var e=f(t,2),t=e[0],e=e[1];void 0!==t&&h[e](t)}),h}},formatSimpleDateToString:function(e,n){return n.replace(g,function(t){return Number(e.getFullYear().toString().slice(-t.length))}).replace(y,function(t){return p(e.getMonth()+1,t.length)}).replace(m,function(t){return p(e.getDate(),t.length)}).replace(b,function(t){return p(l.test(n)?i(e.getHours()):e.getHours(),t.length)}).replace(P,function(t){return p(e.getMinutes(),t.length)}).replace(C,function(t){return p(e.getSeconds(),t.length)}).replace(l,function(t){return s(e.getHours())?"PM":"AM"})},jumpMonth:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,e=new Date(this.currentPeriod.year,this.currentPeriod.month),t=new Date(e.getFullYear(),e.getMonth()+t);this.currentPeriod={month:t.getMonth(),year:t.getFullYear()}},onClickArrowPrev:function(t){var e;this.showMonthPicker||(this.showYearPicker?(e=this.tempYear||this.currentPeriod.year,this.tempYear=Math.max(e-this.yearsPerPage,0)):this.jumpMonth(-1))},onClickArrowNext:function(t){var e;this.showMonthPicker||(this.showYearPicker?(e=this.tempYear||this.currentPeriod.year,this.tempYear=Math.max(e+this.yearsPerPage,0)):this.jumpMonth(1))},processUserInput:function(t){var e=this.parseDateString(t,this.displayFormat||this.format);this.inputValue=t,this.$emit("input",e?this.formatDateToString(e,this.format):t)},toggleMonthPicker:function(){this.showMonthPicker=!this.showMonthPicker,this.onToggleMonthPicker()},onToggleMonthPicker:function(){!0===this.showMonthPicker&&(this.showYearPicker=!1)},toggleYearPicker:function(){this.showYearPicker=!this.showYearPicker,this.onToggleYearPicker()},onToggleYearPicker:function(){!0===this.showYearPicker&&(this.showMonthPicker=!1)},toggle:function(){return this.opened?this.close():this.open()},open:function(){this.opened||(this.opened=!0,this.currentPeriod=this.startPeriod||this.getPeriodFromValue(this.value,this.format),this.addCloseEvents(),this.setupPosition()),this.direction=void 0},close:function(){this.opened&&(this.opened=!1,this.direction=void 0,this.removeCloseEvents(),this.teardownPosition())},closeViaOverlay:function(t){this.hasInputElement&&t.target===this.$refs.outerWrap&&this.close()},addCloseEvents:function(){var e=this;this.closeEventListener||(this.closeEventListener=function(t){return e.inspectCloseEvent(t)},["click","keyup","focusin"].forEach(function(t){return document.addEventListener(t,e.closeEventListener)}))},inspectCloseEvent:function(t){t.keyCode?27===t.keyCode&&this.close():t.target===this.$el||this.$el.contains(t.target)||(t.target.classList.contains("month")||t.target.classList.contains("year"))&&t.target.classList.contains("vdpCellContent")||this.close()},removeCloseEvents:function(){var e=this;this.closeEventListener&&(["click","keyup","focusin"].forEach(function(t){return document.removeEventListener(t,e.closeEventListener)}),delete this.closeEventListener)},setupPosition:function(){var t=this;this.positionEventListener||(this.positionEventListener=function(){return t.positionFloater()},window.addEventListener("resize",this.positionEventListener)),this.positionFloater()},positionFloater:function(){function t(){var t=(e=n.$refs.outerWrap.getBoundingClientRect()).height,e=e.width;window.innerWidth>n.mobileBreakpointWidth?(i.top+i.height+t>window.innerHeight&&0<i.top-t&&(r="vdpPositionBottom"),i.left+e>window.innerWidth&&(o="vdpPositionRight"),n.positionClass=["vdpPositionReady",r,o].join(" ")):n.positionClass="vdpPositionFixed"}var n=this,i=this.$el.getBoundingClientRect(),r="vdpPositionTop",o="vdpPositionLeft";this.$refs.outerWrap?t():this.$nextTick(t)},teardownPosition:function(){this.positionEventListener&&(this.positionClass=void 0,window.removeEventListener("resize",this.positionEventListener),delete this.positionEventListener)},clear:function(){this.$emit("input","")},selectDateItem:function(t){t.disabled||(t=new Date(t.date),this.currentTime&&(t.setHours(this.currentTime.hours),t.setMinutes(this.currentTime.minutes),t.setSeconds(this.currentTime.seconds)),this.$emit("input",this.formatDateToString(t,this.format)),this.hasInputElement&&!this.pickTime&&this.close())},selectMonthItem:function(t){var e=this.valueDate;e.setMonth(t.value-1),this.$emit("input",this.formatDateToString(e,this.format)),this.toggleMonthPicker()},selectYearItem:function(t){var e;t.disabled||((e=this.valueDate).setFullYear(t.value),this.$emit("input",this.formatDateToString(e,this.format)),this.toggleYearPicker())},set12HourClock:function(t){var e=new Date(this.valueDate),n=e.getHours();e.setHours("PM"===t?n+12:n-12),this.$emit("input",this.formatDateToString(e,this.format))},inputHours:function(t){var e=new Date(this.valueDate),n=e.getHours(),i=parseInt(t.target.value,10)||0,r=this.use12HourClock?1:0,o=this.use12HourClock?12:23,r=u(i,r,o);e.setHours(this.use12HourClock?(o=r,s(n)?12===o?o:o+12:12===o?0:o):r),t.target.value=p(r,1),this.$emit("input",this.formatDateToString(e,this.format))},inputTime:function(t,e){var n=new Date(this.valueDate),i=parseInt(e.target.value)||0,i=u(i,0,59);e.target.value=p(i,2),n[t](i),this.$emit("input",this.formatDateToString(n,this.format))},onTimeInputFocus:function(t){t.target.select&&t.target.select()}}};var d,k,_,w,D,M,S,T,F,I,Y,n=(k=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"vdpComponent",class:{vdpWithInput:n.hasInputElement}},[n._t("default",[n.hasInputElement?i("input",n._b({attrs:{type:"text",readonly:n.isReadOnly},domProps:{value:n.inputValue},on:{input:function(t){n.editable&&n.processUserInput(t.target.value)},focus:function(t){n.editable&&n.open()},click:function(t){n.editable&&n.open()}}},"input",n.inputAttributes,!1)):n._e(),n._v(" "),n.editable&&n.hasInputElement&&n.inputValue?i("button",{staticClass:"vdpClearInput",attrs:{type:"button"},on:{click:n.clear}}):n._e()],{open:n.open,close:n.close,toggle:n.toggle,inputValue:n.inputValue,processUserInput:n.processUserInput,valueToInputFormat:n.valueToInputFormat}),n._v(" "),i("transition",{attrs:{name:"vdp-toggle-calendar"}},[n.opened?i("div",{ref:"outerWrap",staticClass:"vdpOuterWrap",class:[n.positionClass,{vdpFloating:n.hasInputElement}],on:{click:n.closeViaOverlay}},[i("div",{staticClass:"vdpInnerWrap"},[i("header",{class:["vdpHeader",n.showMonthPicker||n.showYearPicker?"":"datePicker"]},[i("button",{staticClass:"vdpArrow vdpArrowPrev",style:{display:n.showMonthPicker?"none":void 0},attrs:{title:n.prevMonthCaption,type:"button"},on:{click:n.onClickArrowPrev}},[n._v("\n            "+n._s(n.prevMonthCaption)+"\n          ")]),n._v(" "),i("button",{staticClass:"vdpArrow vdpArrowNext",style:{display:n.showMonthPicker?"none":void 0},attrs:{type:"button",title:n.nextMonthCaption},on:{click:n.onClickArrowNext}},[n._v("\n            "+n._s(n.nextMonthCaption)+"\n          ")]),n._v(" "),i("div",{staticClass:"vdpPeriodControls"},[i("div",{staticClass:"vdpPeriodControl"},[i("button",{key:n.currentPeriod.month,class:n.directionClass,attrs:{type:"button"},on:{click:n.toggleMonthPicker}},[n._v("\n                "+n._s(n.months[n.currentPeriod.month])+"\n              ")])]),n._v(" "),i("div",{staticClass:"vdpPeriodControl"},[i("button",{key:n.currentPeriod.year,class:n.directionClass,attrs:{type:"button"},on:{click:n.toggleYearPicker}},[n._v("\n                "+n._s(n.currentPeriod.year)+"\n              ")])])])]),n._v(" "),this.showMonthPicker||this.showYearPicker?n._e():i("table",{staticClass:"vdpTable"},[i("thead",[i("tr",n._l(n.weekdaysSorted,function(t,e){return i("th",{key:e,staticClass:"vdpHeadCell"},[i("span",{staticClass:"vdpHeadCellContent"},[n._v(n._s(t))])])}),0)]),n._v(" "),i("tbody",{key:n.currentPeriod.year+"-"+n.currentPeriod.month,class:n.directionClass},n._l(n.currentPeriodDates,function(t,e){return i("tr",{key:e,staticClass:"vdpRow"},n._l(t,function(e){return i("td",{key:e.dateKey,staticClass:"vdpCell",class:{selectable:n.editable&&!e.disabled,selected:e.selected,disabled:e.disabled,today:e.today,outOfRange:e.outOfRange},attrs:{"data-id":e.dateKey},on:{click:function(t){n.editable&&n.selectDateItem(e)}}},[i("div",{staticClass:"vdpCellContent date"},[n._v(n._s(e.date.getDate()))])])}),0)}),0)]),n._v(" "),this.showMonthPicker?i("table",{staticClass:"vdpTable"},[i("tbody",{key:n.currentPeriod.year+"-"+n.currentPeriod.month,class:n.directionClass},n._l(n.computedMonths,function(t,e){return i("tr",{key:"month-row-"+e,staticClass:"vdpRow"},n._l(t,function(e){return i("td",{key:e.key,staticClass:"vdpCell",class:{selectable:n.editable&&!e.disabled,selected:e.value-1===n.currentPeriod.month,disabled:e.disabled},attrs:{"data-id":e.key},on:{click:function(t){return n.selectMonthItem(e)}}},[i("div",{staticClass:"vdpCellContent month"},[n._v(n._s(e.text))])])}),0)}),0)]):n._e(),n._v(" "),this.showYearPicker?i("table",{staticClass:"vdpTable"},[i("tbody",{key:n.currentPeriod.year+"-"+n.currentPeriod.month,class:n.directionClass},n._l(n.computedYears,function(t,e){return i("tr",{key:"year-row-"+e,staticClass:"vdpRow"},n._l(t,function(e){return i("td",{key:e.key,staticClass:"vdpCell",class:{selectable:n.editable&&!e.disabled,selected:e.value===n.currentPeriod.year,disabled:e.disabled},attrs:{"data-id":e.key},on:{click:function(t){return n.selectYearItem(e)}}},[i("div",{staticClass:"vdpCellContent year"},[n._v(n._s(e.text))])])}),0)}),0)]):n._e(),n._v(" "),n.pickTime&&n.currentTime?i("div",{staticClass:"vdpTimeControls"},[i("span",{staticClass:"vdpTimeCaption"},[n._v(n._s(n.setTimeCaption))]),n._v(" "),i("div",{staticClass:"vdpTimeUnit"},[i("pre",[i("span",[n._v(n._s(n.currentTime.hoursFormatted))]),i("br")]),n._v(" "),i("input",{staticClass:"vdpHoursInput",attrs:{type:"number",pattern:"\\d*",disabled:!n.editable},domProps:{value:n.currentTime.hoursFormatted},on:{input:function(t){return t.preventDefault(),n.inputHours(t)},focusin:n.onTimeInputFocus}})]),n._v(" "),n.pickMinutes?i("span",{staticClass:"vdpTimeSeparator"},[n._v(":")]):n._e(),n._v(" "),n.pickMinutes?i("div",{staticClass:"vdpTimeUnit"},[i("pre",[i("span",[n._v(n._s(n.currentTime.minutesFormatted))]),i("br")]),n._v(" "),n.pickMinutes?i("input",{staticClass:"vdpMinutesInput",attrs:{type:"number",pattern:"\\d*",disabled:!n.editable},domProps:{value:n.currentTime.minutesFormatted},on:{input:function(t){return n.inputTime("setMinutes",t)},focusin:n.onTimeInputFocus}}):n._e()]):n._e(),n._v(" "),n.pickSeconds?i("span",{staticClass:"vdpTimeSeparator"},[n._v(":")]):n._e(),n._v(" "),n.pickSeconds?i("div",{staticClass:"vdpTimeUnit"},[i("pre",[i("span",[n._v(n._s(n.currentTime.secondsFormatted))]),i("br")]),n._v(" "),n.pickSeconds?i("input",{staticClass:"vdpSecondsInput",attrs:{type:"number",pattern:"\\d*",disabled:!n.editable},domProps:{value:n.currentTime.secondsFormatted},on:{input:function(t){return n.inputTime("setSeconds",t)},focusin:n.onTimeInputFocus}}):n._e()]):n._e(),n._v(" "),n.use12HourClock?i("button",{staticClass:"vdp12HourToggleBtn",attrs:{type:"button",disabled:!n.editable},on:{click:function(t){return n.set12HourClock(n.currentTime.isPM?"AM":"PM")}}},[n._v("\n            "+n._s(n.currentTime.isPM?"PM":"AM")+"\n          ")]):n._e()]):n._e()])]):n._e()])],2)},w=!(_=[]),S=M=D=null,Y="function"==typeof(d=c)?d.options:d,k&&(Y.render=k,Y.staticRenderFns=_,Y._compiled=!0),w&&(Y.functional=!0),M&&(Y._scopeId="data-v-"+M),S?(F=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),D&&D.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(S)},Y._ssrRegister=F):D&&(F=T?function(){D.call(this,(Y.functional?this.parent:this).$root.$options.shadowRoot)}:D),F&&(Y.functional?(Y._injectStyles=F,I=Y.render,Y.render=function(t,e){return F.call(e),I(t,e)}):(T=Y.beforeCreate,Y.beforeCreate=T?[].concat(T,F):[F])),{exports:d,options:Y});e.default=n.exports}],r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0).default;function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,i});