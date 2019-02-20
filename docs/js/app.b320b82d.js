(function(t){function e(e){for(var s,o,c=e[0],i=e[1],l=e[2],h=0,p=[];h<c.length;h++)o=c[h],r[o]&&p.push(r[o][0]),r[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},r={app:0},a=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/speech-synthesis-api/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.speak(e)}}},[n("div",{staticClass:"row mt-4"},[t._m(0),n("VoiceSelect",{staticClass:"col-md-6 mt-4",attrs:{"set-selected-voice":t.setSelectedVoice}}),n("SpeechText",{staticClass:"col-md-6 mt-4",attrs:{"set-instance-text":t.setInstanceText}}),n("VolumeControl",{staticClass:"col-md-6 mt-4",attrs:{"set-instance-volume":t.setInstanceVolume}}),n("PitchControl",{staticClass:"col-md-6 mt-4",attrs:{"set-instance-pitch":t.setInstancePitch}}),n("RateControl",{staticClass:"col-md-6 mt-4",attrs:{"set-instance-rate":t.setInstanceRate}}),n("div",{staticClass:"col-12 mt-4"},[n("div",{staticClass:"d-flex justify-content-center"},[n("button",{staticClass:"btn btn-primary",attrs:{disabled:t.isSpeaking},on:{click:t.speak}},[t._v("\n                    Speak\n                ")])])])],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"col-12"},[n("a",{staticClass:"link",attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis",target:"blank"}},[t._v("\n                Speech Synthesis API\n            ")])])}],o=(n("7f7f"),n("7514"),window.speechSynthesis&&window.speechSynthesis),c=function(t){var e=o.getVoices();return e.find(function(e){var n=e.name;return n===t})},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"pitch-control-range"}},[t._v("Pitch: "+t._s(t.pitch))]),n("input",{staticClass:"form-control-range",attrs:{id:"pitch-control-range",type:"range",min:"0",max:"2",step:".25"},domProps:{value:t.pitch},on:{change:t.handleChange}})])},l=[],u={props:{setInstancePitch:{type:Function,required:!0}},data:function(){return{pitch:1}},methods:{handleChange:function(t){var e=t.target;this.pitch=e.value,this.setInstancePitch(e.value)}}},h=u,p=n("2877"),f=Object(p["a"])(h,i,l,!1,null,"57c50a80",null),d=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"rate-control-range"}},[t._v("Rate: "+t._s(t.rate))]),n("input",{staticClass:"form-control-range",attrs:{id:"rate-control-range",type:"range",min:"0",max:"5",step:".5"},domProps:{value:t.rate},on:{change:t.handleChange}})])},m=[],y={props:{setInstanceRate:{type:Function,required:!0}},data:function(){return{rate:1}},methods:{handleChange:function(t){var e=t.target;this.rate=e.value,this.setInstanceRate(e.value)}}},g=y,b=Object(p["a"])(g,v,m,!1,null,"3ec77ece",null),C=b.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"speech-text-input"}},[t._v("\n        What do you want to say?\n    ")]),n("input",{staticClass:"form-control",attrs:{type:"text",name:"speech-text-input",placeholder:"Say hello!"},on:{keyup:t.setInstanceText}}),n("small",[t._v("Try pasting in the matching language for the selected voices.")])])},I=[],_={props:{setInstanceText:{type:Function,required:!0}}},x=_,k=Object(p["a"])(x,S,I,!1,null,"6aae938d",null),w=k.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"voice-select"}},[t._v("\n        Select a Voice\n    ")]),n("select",{staticClass:"form-control",attrs:{name:"voice-select"},on:{change:t.setSelectedVoice}},t._l(t.VOICES,function(e){var s=e.name,r=e.lang;return n("option",{key:s,domProps:{value:s,textContent:t._s(s+" "+r)}})}),0)])},V=[],O={props:{setSelectedVoice:{type:Function,required:!0}},data:function(){return{VOICES:window.speechSynthesis?speechSynthesis.getVoices():[]}},mounted:function(){var t=this;if("undefined"===typeof speechSynthesis)throw new Error("This browser does not support the speech synthesis API.");speechSynthesis.onvoiceschanged=function(){t.VOICES=speechSynthesis.getVoices()}}},j=O,E=(n("923b"),Object(p["a"])(j,P,V,!1,null,"173214ef",null)),T=E.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"formControlRange"}},[t._v("Volume: "+t._s(t.volume))]),n("input",{staticClass:"form-control-range",attrs:{id:"formControlRange",type:"range",min:"0",max:"1",step:".1"},domProps:{value:t.volume},on:{change:t.handleChange}})])},$=[],A={props:{setInstanceVolume:{type:Function,required:!0}},data:function(){return{volume:.5}},methods:{handleChange:function(t){var e=t.target;this.volume=e.value,this.setInstanceVolume(e.value)}}},q=A,F=Object(p["a"])(q,R,$,!1,null,"0b2fd2da",null),M=F.exports,L={name:"App",components:{PitchControl:d,RateControl:C,SpeechText:w,VoiceSelect:T,VolumeControl:M},data:function(){return{isSpeaking:!1,synthInstance:new SpeechSynthesisUtterance}},mounted:function(){var t=this;this.synthInstance.addEventListener("start",function(){return t.setIsSpeaking(!0)}),this.synthInstance.addEventListener("end",function(){return t.setIsSpeaking(!1)}),this.synthInstance.addEventListener("error",function(t){alert("An error has occurred with the speech synthesis: ".concat(t.error))}),this.synthInstance.onerror=function(t){console.log("An error has occurred with the speech synthesis: ",t.error)}},methods:{setInstanceText:function(t){var e=t.target;this.synthInstance.text=e.value},setInstancePitch:function(t){this.synthInstance.pitch=t},setInstanceRate:function(t){this.synthInstance.rate=t},setInstanceVolume:function(t){this.synthInstance.volume=t},setIsSpeaking:function(t){this.isSpeaking=t},setSelectedVoice:function(t){var e=t.target;this.synthInstance.voice=c(e.value)},speak:function(){if(!this.isSpeaking)return this.synthInstance.text?void speechSynthesis.speak(this.synthInstance):alert("Please enter some text to speak.")}}},J=L,U=Object(p["a"])(J,r,a,!1,null,null,null),W=U.exports;n("f9e3");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(W)}}).$mount("#app")},"8c2b":function(t,e,n){},"923b":function(t,e,n){"use strict";var s=n("8c2b"),r=n.n(s);r.a}});
//# sourceMappingURL=app.b320b82d.js.map