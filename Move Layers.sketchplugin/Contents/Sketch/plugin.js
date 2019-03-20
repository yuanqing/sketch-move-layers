!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=17)}([function(e,t,n){"use strict";var r=n(8);n.o(r,"CHECK_BOX")&&n.d(t,"CHECK_BOX",function(){return r.CHECK_BOX}),n.o(r,"TEXT_BOX")&&n.d(t,"TEXT_BOX",function(){return r.TEXT_BOX}),n.o(r,"adjustParentGroupsToFit")&&n.d(t,"adjustParentGroupsToFit",function(){return r.adjustParentGroupsToFit}),n.o(r,"getAllLayers")&&n.d(t,"getAllLayers",function(){return r.getAllLayers}),n.o(r,"getSelectedLayers")&&n.d(t,"getSelectedLayers",function(){return r.getSelectedLayers}),n.o(r,"iterateNestedLayers")&&n.d(t,"iterateNestedLayers",function(){return r.iterateNestedLayers}),n.o(r,"openUserInputDialog")&&n.d(t,"openUserInputDialog",function(){return r.openUserInputDialog}),n.o(r,"saveUserInput")&&n.d(t,"saveUserInput",function(){return r.saveUserInput}),n.o(r,"showErrorMessage")&&n.d(t,"showErrorMessage",function(){return r.showErrorMessage}),n.o(r,"showSuccessMessage")&&n.d(t,"showSuccessMessage",function(){return r.showSuccessMessage});n(4);var s=n(10);n.d(t,"openUserInputDialog",function(){return s.a});var a=n(11);n.d(t,"saveUserInput",function(){return a.a});n(12);var o=n(13);n.d(t,"adjustParentGroupsToFit",function(){return o.a});var c=n(14);n.d(t,"getAllLayers",function(){return c.a}),n.d(t,"getSelectedLayers",function(){return c.b});var u=n(15);n.d(t,"iterateNestedLayers",function(){return u.a});var i=n(5);n.d(t,"showErrorMessage",function(){return i.a}),n.d(t,"showSuccessMessage",function(){return i.c})},function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0),s=n(6);function a(e){const{sortLayers:t,spaceLayers:n,label:a}=s[e];return function(){const s=Object(r.getSelectedLayers)();if(s.length<2)return void Object(r.showErrorMessage)("Select at least two layers");const o=Object(r.openUserInputDialog)({title:`Space Selected Layers ${a}`,inputs:[{key:"spaceSelectedLayers.space",label:"Space",type:r.TEXT_BOX}]});if(!o)return;Object(r.saveUserInput)(o);const c=parseFloat(o["spaceSelectedLayers.space"]),u=s.sort(t);n({layers:u,space:c}),u.forEach(function(e){Object(r.adjustParentGroupsToFit)(e)}),Object(r.showSuccessMessage)(`Spaced selected layers ${e}`)}}},function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0),s=n(6);function a(e){const{sortLayers:t,spaceLayers:n,label:a}=s[e];return function(){const s=Object(r.openUserInputDialog)({title:`Space Layers in Group ${a}`,inputs:[{key:"spaceLayersInGroup.groupName",label:"Group name",type:r.TEXT_BOX},{key:"spaceLayersInGroup.exactMatch",label:"Exact match",type:r.CHECK_BOX},{key:"spaceLayersInGroup.space",label:"Space",type:r.TEXT_BOX}]});if(!s)return;Object(r.saveUserInput)(s);const o=parseFloat(s["spaceLayersInGroup.space"]),c=s["spaceLayersInGroup.groupName"],u=function(e){const t=[];return Object(r.iterateNestedLayers)(Object(r.getAllLayers)(),function(n){"Group"==n.type&&e.test(n.name)&&t.push(n)}),t}(new RegExp(s["spaceLayersInGroup.exactMatch"]?`^${c}$`:c));0!=u.length?(u.forEach(function(e){const s=[].concat(e.layers).sort(t);n({layers:s,space:o}),e.adjustToFit(),Object(r.adjustParentGroupsToFit)(e)}),Object(r.showSuccessMessage)(`Spaced layers in group ${e}`)):Object(r.showErrorMessage)("No groups found")}}},function(e,t){e.exports=require("sketch/dom")},function(e,t,n){"use strict";n.d(t,"a",function(){return o});const r=n(7),{packageJsonConfigKey:s}=n(23),a=n(24);function o(){const{defaults:e}=a()[s];return Object.keys(e).reduce(function(t,n){const s=r.settingForKey(n);return t[n]=void 0!==s?s:e[n],t},{})}},function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return c});var r=n(16),s=n.n(r);function a(e,t){s.a.message(t&&t.symbol?`${t.symbol} ${e}`:e)}function o(e){a(e,{symbol:"✅"})}function c(e){a(e,{symbol:"🔴"})}},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"label",function(){return c}),n.d(r,"sortLayers",function(){return u}),n.d(r,"spaceLayers",function(){return i});var s={};n.r(s),n.d(s,"label",function(){return l}),n.d(s,"sortLayers",function(){return f}),n.d(s,"spaceLayers",function(){return p});var a={};n.r(a),n.d(a,"label",function(){return d}),n.d(a,"sortLayers",function(){return y}),n.d(a,"spaceLayers",function(){return h});var o={};n.r(o),n.d(o,"label",function(){return g}),n.d(o,"sortLayers",function(){return b}),n.d(o,"spaceLayers",function(){return S});const c="Down";function u(e,t){return e.frame.y-t.frame.y}function i({layers:e,space:t}){let n=null;e.forEach(function(e){null!=n?(e.frame.y=n,n=n+e.frame.height+t):n=e.frame.y+e.frame.height+t})}const l="Left";function f(e,t){return t.frame.x+t.frame.width-(e.frame.x+e.frame.width)}function p({layers:e,space:t}){let n=null;e.forEach(function(e){null!=n?(n=n-t-e.frame.width,e.frame.x=n):n=e.frame.x})}const d="Right";function y(e,t){return e.frame.x-t.frame.x}function h({layers:e,space:t}){let n=null;e.forEach(function(e){null!=n?(e.frame.x=n,n=n+e.frame.width+t):n=e.frame.x+e.frame.width+t})}const g="Up";function b(e,t){return t.frame.y+t.frame.height-(e.frame.y+e.frame.height)}function S({layers:e,space:t}){let n=null;e.forEach(function(e){null!=n?(n=n-t-e.frame.height,e.frame.y=n):n=e.frame.y})}n.d(t,"down",function(){return r}),n.d(t,"left",function(){return s}),n.d(t,"right",function(){return a}),n.d(t,"up",function(){return o})},function(e,t){e.exports=require("sketch/settings")},function(e,t,n){const r=n(9),s=Object.keys(r).reduce(function(e,t){return e[t]=t,e},{});e.exports=s},function(e,t,n){e.exports={CHECK_BOX:n(19),DROP_DOWN:n(20),RADIO_BUTTONS:n(21),TEXT_BOX:n(22)}},function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(4);const s=n(25),a=n(26),o=n(27),c=n(9),{formHeight:u,formPaddingBottom:i,labelHeight:l,labelPaddingBottom:f,width:p}=n(28);function d({title:e,inputs:t}){const n=Object(r.a)(),{inputs:d,views:y,stackViewHeight:h}=function({inputsConfig:e,savedUserInput:t}){const n={},r=[];let s=0;return e.forEach(function({type:e,key:o,label:d,...y}){if(d&&"CHECK_BOX"!=e){const e=a({label:d,width:p,height:l});r.push({view:e,paddingBottom:f}),s+=l+f}const h=t[o],{view:g,retrieveValue:b}=c[e]({label:d,value:h,width:p,height:u,...y});r.push({view:g,paddingBottom:i}),s+=u+i,n[o]=b}),{inputs:n,views:r,stackViewHeight:s-=i}}({inputsConfig:t,savedUserInput:n}),g=o({width:p,height:h,views:y}),b=s(e);return b.setAccessoryView(g),"1000"==b.runModal()?Object.keys(d).reduce(function(e,t){const n=d[t];return e[t]=n(),e},{}):null}},function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(7),s=n(5);function a(e,t){void 0!==e&&(Object.keys(e).forEach(function(t){const n=e[t];void 0!==n&&Object(r.setSettingForKey)(t,n)}),t&&t.successMessage&&Object(s.b)(t.successMessage))}},function(e,t,n){"use strict";n(3)},function(e,t,n){"use strict";function r(e){!function e(t,n){const r=t.parent;r&&"Group"==r.type&&!n[r.id]&&(r.adjustToFit(),n[r.id]=!0,e(r,n))}(e,{})}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return a});var r=n(3);function s(){return Object(r.getSelectedDocument)().selectedPage.layers}function a(){return Object(r.getSelectedDocument)().selectedLayers.layers}},function(e,t,n){"use strict";function r(e,t){e.forEach(function(e){t(e);const n=e.type;"Artboard"!=n&&"Group"!=n||r(e.layers,t)})}n.d(t,"a",function(){return r})},function(e,t){e.exports=require("sketch/ui")},function(e,t,n){e.exports={"offset-selected-layers":n(18).default,"space-selected-layers/space-selected-layers-left":n(29).default,"space-selected-layers/space-selected-layers-right":n(30).default,"space-selected-layers/space-selected-layers-up":n(31).default,"space-selected-layers/space-selected-layers-down":n(32).default,"space-layers-in-group/space-layers-in-group-left":n(33).default,"space-layers-in-group/space-layers-in-group-right":n(34).default,"space-layers-in-group/space-layers-in-group-up":n(35).default,"space-layers-in-group/space-layers-in-group-down":n(36).default}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var r=n(0);function s(){const e=Object(r.getSelectedLayers)();if(0==e.length)return void Object(r.showErrorMessage)("Select at least one layer");const t=Object(r.openUserInputDialog)({title:"Offset Selected Layers",inputs:[{key:"offsetSelectedLayers.horizontal",label:"→ Horizontal",type:r.TEXT_BOX},{key:"offsetSelectedLayers.vertical",label:"↓ Vertical",type:r.TEXT_BOX}]});if(!t)return;Object(r.saveUserInput)(t);const n=parseFloat(t["offsetSelectedLayers.horizontal"]),s=parseFloat(t["offsetSelectedLayers.vertical"]);if(0==n&&0==s)return;e.forEach(function(e){e.frame.x+=n,e.frame.y+=s});const o=e.length,c=a({offset:n,positiveSymbol:"→",negativeSymbol:"←"}),u=a({offset:s,positiveSymbol:"↓",negativeSymbol:"↑"});Object(r.showSuccessMessage)(`offsetd ${1==o?"layer":"layers"}${c}${u}`)}function a({offset:e,positiveSymbol:t,negativeSymbol:n}){return e>0?` ${t} ${e}`:e<0?` ${n} ${-1*e}`:""}},function(e,t){e.exports=function({width:e,height:t,label:n,value:r}){const s=NSButton.alloc().initWithFrame(NSMakeRect(0,0,e,t));return s.setButtonType(NSSwitchButton),s.setBezelStyle(0),s.setState(r?NSOnState:NSOffState),s.setTitle(n),{view:s,retrieveValue:function(){return"1"==s.stringValue()}}}},function(e,t){e.exports=function({width:e,height:t,value:n,possibleValues:r}){const s=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,0,e,t));r.forEach(function(e){s.addItemWithTitle(e)});const a=r.indexOf(n);return s.selectItemAtIndex(a),{view:s,retrieveValue:function(){const e=s.indexOfSelectedItem();return r[e]}}}},function(e,t){e.exports=function({width:e,height:t,value:n,possibleValues:r}){const s=NSButtonCell.alloc().init();s.setButtonType(NSRadioButton);const a=r.length,o=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,0,e,t),NSRadioModeMatrix,s,1,a);o.setCellSize(CGSizeMake(Math.floor(e/a),t)),o.cells().forEach(function(e,t){e.setTitle(r[t])});const c=r.indexOf(n);return o.selectCellAtRow_column(0,c),{view:o,retrieveValue:function(){const e=o.cells().indexOfObject(o.selectedCell());return r[e]}}}},function(e,t){e.exports=function({width:e,height:t,value:n,placeholder:r}){const s=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,e,t));return s.setStringValue(n),r&&s.setPlaceholderString(r),{view:s,retrieveValue:function(){return s.stringValue()}}}},function(e,t){e.exports={appcastFileName:"appcast.xml",bundleFileName:"plugin.js",manifestFileName:"manifest.json",packageJsonConfigKey:"sketch-plugin-helper",sourceDirectory:"./src"}},function(e,t){e.exports=function(){return JSON.parse('{\n  "private": true,\n  "version": "0.0.1",\n  "devDependencies": {\n    "sketch-plugin-helper": "*"\n  },\n  "scripts": {\n    "build": "sph build",\n    "fix": "sph lint --fix",\n    "lint": "sph lint",\n    "symlink": "sph symlink",\n    "unlink": "sph symlink --delete",\n    "version": "sph version",\n    "watch": "sph build --watch"\n  },\n  "sketch-plugin-helper": {\n    "pluginName": "Move Layers",\n    "pluginDescription": "A Sketch plugin to precisely move and arrange layers",\n    "authorName": "Lim Yuan Qing",\n    "githubUserName": "yuanqing",\n    "githubRepositoryName": "sketch-move-layers",\n    "menu": [\n      {\n        "handler": "offset-selected-layers",\n        "label": "Offset Selected Layers"\n      },\n      "-",\n      {\n        "handler": "space-selected-layers/space-selected-layers-left",\n        "label": "Space Selected Layers Left"\n      },\n      {\n        "handler": "space-selected-layers/space-selected-layers-right",\n        "label": "Space Selected Layers Right"\n      },\n      {\n        "handler": "space-selected-layers/space-selected-layers-up",\n        "label": "Space Selected Layers Up"\n      },\n      {\n        "handler": "space-selected-layers/space-selected-layers-down",\n        "label": "Space Selected Layers Down"\n      },\n      "-",\n      {\n        "handler": "space-layers-in-group/space-layers-in-group-left",\n        "label": "Space Layers in Group Left"\n      },\n      {\n        "handler": "space-layers-in-group/space-layers-in-group-right",\n        "label": "Space Layers in Group Right"\n      },\n      {\n        "handler": "space-layers-in-group/space-layers-in-group-up",\n        "label": "Space Layers in Group Up"\n      },\n      {\n        "handler": "space-layers-in-group/space-layers-in-group-down",\n        "label": "Space Layers in Group Down"\n      }\n    ],\n    "defaults": {\n      "offsetSelectedLayers.horizontal": 0,\n      "offsetSelectedLayers.vertical": 0,\n      "spaceLayersInGroup.exactMatch": true,\n      "spaceLayersInGroup.groupName": "Group",\n      "spaceLayersInGroup.space": 0,\n      "spaceSelectedLayers.space": 0\n    }\n  }\n}\n')}},function(e,t){e.exports=function(e){const t=NSAlert.alloc().init();return t.window().setAutorecalculatesKeyViewLoop(!0),t.setMessageText(e),t.addButtonWithTitle("OK"),t.addButtonWithTitle("Cancel"),t}},function(e,t){e.exports=function({label:e,width:t,height:n}){const r=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,t,n));return r.setBezeled(!1),r.setDrawsBackground(!1),r.setEditable(!1),r.setLineBreakMode(NSLineBreakByTruncatingTail),r.setSelectable(!1),r.setStringValue(e),r}},function(e,t){e.exports=function({width:e,height:t,views:n}){const r=NSStackView.alloc().initWithFrame(NSMakeRect(0,0,e,t));return r.setAlignment(NSLayoutAttributeLeft),r.setOrientation(NSUserInterfaceLayoutOrientationVertical),r.setSpacing(0),r.setTranslatesAutoresizingMaskIntoConstraints(!0),r.updateConstraintsForSubtreeIfNeeded(),n.forEach(function({view:e,paddingBottom:t}){r.addView_inGravity_(e,NSStackViewGravityTop),r.setCustomSpacing_afterView_(t,e)}),r}},function(e,t){e.exports={formHeight:20,formPaddingBottom:12,labelHeight:20,labelPaddingBottom:6,width:300}},function(e,t,n){"use strict";n.r(t);var r=n(1);t.default=Object(r.a)("left")},function(e,t,n){"use strict";n.r(t);var r=n(1);t.default=Object(r.a)("right")},function(e,t,n){"use strict";n.r(t);var r=n(1);t.default=Object(r.a)("up")},function(e,t,n){"use strict";n.r(t);var r=n(1);t.default=Object(r.a)("down")},function(e,t,n){"use strict";n.r(t);var r=n(2);t.default=Object(r.a)("left")},function(e,t,n){"use strict";n.r(t);var r=n(2);t.default=Object(r.a)("right")},function(e,t,n){"use strict";n.r(t);var r=n(2);t.default=Object(r.a)("up")},function(e,t,n){"use strict";n.r(t);var r=n(2);t.default=Object(r.a)("down")}]));