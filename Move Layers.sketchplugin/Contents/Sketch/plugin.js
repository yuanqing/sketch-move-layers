!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"CHECK_BOX",function(){return h}),n.d(r,"DROP_DOWN",function(){return O}),n.d(r,"RADIO_BUTTONS",function(){return _}),n.d(r,"NUMERIC_TEXT_BOX",function(){return x.a}),n.d(r,"STRING_TEXT_BOX",function(){return w}),n.d(r,"TEXT_BOX",function(){});var c=n(1);function o(e){const t={};return function e(t,n,r){Object.keys(t).forEach(function(c){const o=[n,c].filter(Boolean).join("."),a=t[c];"object"!=typeof a||null===a||Array.isArray(a)?r[o]=t[c]:e(a,o,r)})}(e,null,t),t}const a=/\./;function u(e){const t={};return Object.keys(e).forEach(function(n){!function e(t,n,r){const c=t[0];if(1===t.length)return void(r[c]=n);null==r[c]&&(r[c]={});e(t.slice(1),n,r[c])}(n.split(a),e[n],t)}),t}const i=1,s=10,l=17;const f=2,d=20,y=2;const p=20,b=10;function h({width:e,y:t,label:n,value:r}){const c=NSButton.alloc().initWithFrame(NSMakeRect(0,t,e,p));return c.setButtonType(NSSwitchButton),c.setBezelStyle(0),c.setState(r?NSOnState:NSOffState),c.setTitle(n),{view:c,height:p+b,retrieveValue:function(){return"1"==c.stringValue()}}}const v=20,m=15;function O({width:e,y:t,value:n,possibleValues:r}){const c=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,t,e,v));r.forEach(function(e){c.addItemWithTitle(e)});const o=void 0!==n?r.indexOf(n):0;return c.selectItemAtIndex(o),{view:c,height:v+m,retrieveValue:function(){const e=c.indexOfSelectedItem();return r[e]}}}const g=20,S=10;function _({width:e,y:t,value:n,possibleValues:r}){const c=NSButtonCell.alloc().init();c.setButtonType(NSRadioButton);const o=r.length,a=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,t,e,g),NSRadioModeMatrix,c,1,o);a.setCellSize(CGSizeMake(Math.floor(e/o),g)),a.cells().forEach(function(e,t){e.setTitle(r[t])});const u=void 0!==n?r.indexOf(n):0;return a.selectCellAtRow_column(0,u),{view:a,height:g+S,retrieveValue:function(){const e=a.cells().indexOfObject(a.selectedCell());return r[e]}}}var x=n(8),j=n(4);const w=Object(j.a)(),E=300;function k({title:e,inputs:t}){const n=o(function(){const e={moveSelectedLayers:{horizontalOffset:null,verticalOffset:null},spaceLayersInGroup:{exactMatch:!0,groupName:"Group",space:0},spaceSelectedLayers:{space:0}};if(!e)return{};const t={},n=o(e);return Object.keys(n).forEach(function(e){const r=Object(c.sessionVariable)(e),o=Object(c.settingForKey)(e),a=void 0!==r?r:o,u=n[e];t[e]=void 0!==a?a:u}),u(t)}()),{formView:a,retrieveValues:p}=function({inputsConfig:e,settings:t}){const n=NSView.alloc().init();n.setFlipped(!0);const c={};let o=0;return e.forEach(function(e){if("-"===e){const{view:e,height:t}=function({width:e,y:t}){const n=NSView.alloc().initWithFrame(NSMakeRect(0,t+s,e,i));return n.setWantsLayer(1),n.layer().setBackgroundColor(CGColorCreateGenericRGB(127/255,127/255,127/255,.5)),{view:n,height:s+i+l}}({width:E,y:o});return o+=t,void n.addSubview(e)}const{type:a,key:u,label:p,value:b,...h}=e;if(p&&"CHECK_BOX"!==a){const{view:e,height:t}=function({width:e,y:t,label:n}){const r=NSTextField.alloc().initWithFrame(NSMakeRect(0,t+f,e,d));return r.setBezeled(!1),r.setDrawsBackground(!1),r.setEditable(!1),r.setLineBreakMode(NSLineBreakByTruncatingTail),r.setSelectable(!1),r.setStringValue(n),{view:r,height:f+d+y}}({width:E,y:o,label:p});o+=t,n.addSubview(e)}const v=t[u],m=null!=b?b:v,{view:O,height:g,retrieveValue:S}=r[a]({width:E,y:o,label:p,value:m,...h});o+=g,n.addSubview(O),c[u]=S}),n.setFrame(NSMakeRect(0,0,E,o)),{formView:n,retrieveValues:c}}({inputsConfig:t,settings:n}),b=function(e){const t=NSAlert.alloc().init();return t.setMessageText(e),t.addButtonWithTitle("OK"),t.addButtonWithTitle("Cancel"),t}(e);if(b.setAccessoryView(a),"1000"==b.runModal()){const e={};return Object.keys(p).forEach(function(t){const n=p[t];e[t]=n()}),u(e)}return null}var L=n(9),N=n.n(L);function T(e,t){N.a.message(t&&t.symbol?`${t.symbol} ${e}`:e)}function M(e){T(e,{symbol:"✔"})}function B(e){T(e,{symbol:"✘"})}function C(){const e={moveSelectedLayers:{horizontalOffset:null,verticalOffset:null},spaceLayersInGroup:{exactMatch:!0,groupName:"Group",space:0},spaceSelectedLayers:{space:0}};if(!e)return;const t=o(e);Object.keys(t).forEach(function(e){Object(c.setSettingForKey)(e,void 0),Object(c.setSessionVariable)(e,void 0)}),T("Reset settings")}V(c.setSettingForKey);const R=V(c.setSessionVariable);function V(e){return function(t,n){if(!t)return;const r=o(t);Object.keys(r).forEach(function(t){const n=r[t];null!=n&&e(t,n)});const c=n&&n.successMessage;c&&T(c)}}n(10),n(11);n(5);var G=n(12);function I(){const e=NSApplication.sharedApplication().orderedDocuments();return Object(G.fromNative)(e[0])}function $(e){!function e(t,n){const r=t.parent;r&&"Group"===r.type&&!n[r.id]&&(r.adjustToFit(),n[r.id]=!0,e(r,n))}(e,{})}function F(){return I().selectedPage.layers}function P(){return I().selectedLayers.layers.reverse()}function A(e,t){e.forEach(function(e){t(e);const n=e.type;"Artboard"!==n&&"Group"!==n||A(e.layers,t)})}function W(e){return function e(t,n){const r=t.parent;if("Page"===r.type)return n;const c={x:n.x+r.frame.x,y:n.y+r.frame.y};if("Artboard"===r.type)return c;return e(r,c)}(e,{x:e.frame.x,y:e.frame.y})}n.d(t,"i",function(){return k}),n.d(t,"j",function(){return C}),n.d(t,"k",function(){return R}),n.d(t,"a",function(){return"CHECK_BOX"}),n.d(t,"b",function(){return"NUMERIC_TEXT_BOX"}),n.d(t,"c",function(){return"STRING_TEXT_BOX"}),n.d(t,"d",function(){return $}),n.d(t,"e",function(){return W}),n.d(t,"f",function(){return F}),n.d(t,"g",function(){return P}),n.d(t,"h",function(){return A}),n.d(t,"m",function(){return M}),n.d(t,"l",function(){return B})},function(e,t){e.exports=require("sketch/settings")},function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0),c=n(7),o=n(6);function a(e){const{sortLayers:t,spaceLayers:n,label:a}=c.a[e];return function(){const c=Object(r.g)();if(c.length<2)return void Object(r.l)("Select at least 2 layers");const u=Object(r.i)({title:`Space Selected Layers ${a}`,inputs:[{type:r.b,key:"spaceSelectedLayers.space",label:"Space"}]});if(!u)return;Object(r.k)(u);const{space:i}=u.spaceSelectedLayers;n({layers:Object(o.a)(c).sort(t),space:i}),c.forEach(r.d),Object(r.m)(`Spaced selected layers ${e}`)}}},function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0),c=n(7),o=n(6);function a(e){const{sortLayers:t,spaceLayers:n,label:a}=c.a[e];return function(){const c=Object(r.i)({title:`Space Layers in Group ${a}`,inputs:[{type:r.c,key:"spaceLayersInGroup.groupName",label:"Group name"},{type:r.a,key:"spaceLayersInGroup.exactMatch",label:"Exact match"},{type:r.b,key:"spaceLayersInGroup.space",label:"Space"}]});if(!c)return;Object(r.k)(c);const{space:u,groupName:i,exactMatch:s}=c.spaceLayersInGroup,l=function(e){const t=[];return Object(r.h)(Object(r.f)(),function(n){"Group"===n.type&&e.test(n.name)&&t.push(n)}),t}(new RegExp(s?`^${i}$`:i));0!==l.length?(l.forEach(function(e){n({layers:Object(o.a)(e.layers).sort(t),space:u}),e.adjustToFit()}),l.forEach(r.d),Object(r.m)(`Spaced layers in group ${e}`)):Object(r.l)("No groups found")}}},function(e,t,n){"use strict";n.d(t,"a",function(){return o});const r=20,c=15;function o(e){return function({width:t,y:n,value:o,placeholder:a}){const u=NSTextField.alloc().initWithFrame(NSMakeRect(0,n,t,r)),i=null==o?"":`${o}`;return u.setStringValue(i),a&&u.setPlaceholderString(a),{view:u,height:r+c,retrieveValue:function(){const t=`${u.stringValue()}`;return e?e(t):t}}}}},function(e,t){e.exports=require("sketch/dom")},function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0);function c(e){return e.map(function(e){return{...Object(r.e)(e),layer:e}})}},function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"label",function(){return u}),n.d(r,"sortLayers",function(){return i}),n.d(r,"spaceLayers",function(){return s});var c={};n.r(c),n.d(c,"label",function(){return l}),n.d(c,"sortLayers",function(){return f}),n.d(c,"spaceLayers",function(){return d});var o={};n.r(o),n.d(o,"label",function(){return y}),n.d(o,"sortLayers",function(){return p}),n.d(o,"spaceLayers",function(){return b});var a={};n.r(a),n.d(a,"label",function(){return h}),n.d(a,"sortLayers",function(){return v}),n.d(a,"spaceLayers",function(){return m});const u="Down";function i(e,t){return t.y+t.layer.frame.height-(e.y+e.layer.frame.height)}function s({layers:e,space:t}){let n=null;e.forEach(function({y:e,layer:r}){null!=n?(n=n-t-r.frame.height,r.frame.y=n-(e-r.frame.y)):n=e})}const l="Left";function f(e,t){return e.x-t.x}function d({layers:e,space:t}){let n=null;e.forEach(function({x:e,layer:r}){null!=n?(r.frame.x=n-(e-r.frame.x),n=n+r.frame.width+t):n=e+r.frame.width+t})}const y="Right";function p(e,t){return t.x+t.layer.frame.width-(e.x+e.layer.frame.width)}function b({layers:e,space:t}){let n=null;e.forEach(function({x:e,layer:r}){null!=n?(n=n-t-r.frame.width,r.frame.x=n-(e-r.frame.x)):n=e})}const h="Up";function v(e,t){return e.y-t.y}function m({layers:e,space:t}){let n=null;e.forEach(function({y:e,layer:r}){null!=n?(r.frame.y=n-(e-r.frame.y),n=n+r.frame.height+t):n=e+r.frame.height+t})}t.a={down:r,left:c,right:o,up:a}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return createNumericTextBox});var _text_box_factory__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);const createNumericTextBox=Object(_text_box_factory__WEBPACK_IMPORTED_MODULE_0__.a)(function(value){return parseFloat(eval(value))})},function(e,t){e.exports=require("sketch/ui")},function(e,t){e.exports=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}},function(e,t,n){"use strict";const r=async(e,t)=>{let n=0;for(const r of e)await t(await r,n++);return e};e.exports=r,e.exports.default=r},function(e,t){e.exports=require("sketch")},function(e,t,n){e.exports=n(14)},function(e,t,n){e.exports={"move-selected-layers":n(15).default,"space-selected-layers/space-selected-layers-left":n(16).default,"space-selected-layers/space-selected-layers-right":n(17).default,"space-selected-layers/space-selected-layers-up":n(18).default,"space-selected-layers/space-selected-layers-down":n(19).default,"space-layers-in-group/space-layers-in-group-left":n(20).default,"space-layers-in-group/space-layers-in-group-right":n(21).default,"space-layers-in-group/space-layers-in-group-up":n(22).default,"space-layers-in-group/space-layers-in-group-down":n(23).default,"reset-settings":n(24).default}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});var r=n(0);const c={title:"Move Selected Layers",inputs:[{type:r.b,key:"moveSelectedLayers.horizontalOffset",label:"→ Horizontal offset"},{type:r.b,key:"moveSelectedLayers.verticalOffset",label:"↓ Vertical offset"}]};function o(){const e=Object(r.g)();if(0===e.length)return void Object(r.l)("Select at least 1 layer");const t=Object(r.i)(c);if(!t)return;const{horizontalOffset:n,verticalOffset:o}=t.moveSelectedLayers;if(0===n&&0===o)return;e.forEach(function(e){e.frame.x+=n,e.frame.y+=o}),e.forEach(r.d);const u=a({offset:n,positiveSymbol:"→",negativeSymbol:"←"}),i=a({offset:o,positiveSymbol:"↓",negativeSymbol:"↑"}),s=`Moved ${1===e.length?"layer":"layers"} ${u} ${i}`;Object(r.m)(s.trim())}function a({offset:e,positiveSymbol:t,negativeSymbol:n}){return e>0?`${t} ${e}`:e<0?`${n} ${-1*e}`:""}},function(e,t,n){"use strict";n.r(t);var r=n(2);t.default=Object(r.a)("left")},function(e,t,n){"use strict";n.r(t);var r=n(2);t.default=Object(r.a)("right")},function(e,t,n){"use strict";n.r(t);var r=n(2);t.default=Object(r.a)("up")},function(e,t,n){"use strict";n.r(t);var r=n(2);t.default=Object(r.a)("down")},function(e,t,n){"use strict";n.r(t);var r=n(3);t.default=Object(r.a)("left")},function(e,t,n){"use strict";n.r(t);var r=n(3);t.default=Object(r.a)("right")},function(e,t,n){"use strict";n.r(t);var r=n(3);t.default=Object(r.a)("up")},function(e,t,n){"use strict";n.r(t);var r=n(3);t.default=Object(r.a)("down")},function(e,t,n){"use strict";n.r(t);var r=n(0);t.default=r.j}]));