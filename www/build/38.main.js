webpackJsonp([38],{211:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),t.d(l,"CollectWorkPageModuleNgFactory",function(){return v});var u=t(0),e=t(419),o=t(14),i=t(28),r=t(89),a=t(391),c=t(145),_=t(146),s=t(147),d=t(148),h=t(149),f=t(420),p=t(332),m=t(90),g=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])};return function(l,t){function u(){this.constructor=l}n(l,t),l.prototype=null===t?Object.create(t):(u.prototype=t.prototype,new u)}}(),b=function(n){function l(l){return n.call(this,l,[c.a,_.a,s.a,d.a,h.a,f.a],[])||this}return g(l,n),Object.defineProperty(l.prototype,"_NgLocalization_8",{get:function(){return null==this.__NgLocalization_8&&(this.__NgLocalization_8=new o.a(this.parent.get(u.c))),this.__NgLocalization_8},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵi_9",{get:function(){return null==this.__ɵi_9&&(this.__ɵi_9=new i.a),this.__ɵi_9},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_FormBuilder_10",{get:function(){return null==this.__FormBuilder_10&&(this.__FormBuilder_10=new i.b),this.__FormBuilder_10},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new o.d,this._ɵba_1=new i.c,this._FormsModule_2=new i.d,this._ReactiveFormsModule_3=new i.e,this._IonicModule_4=new r.b,this._WorkComponentModule_5=new a.a,this._IonicPageModule_6=new r.c,this._CollectWorkPageModule_7=new e.a,this._LAZY_LOADED_TOKEN_11=p.a,this._CollectWorkPageModule_7},l.prototype.getInternal=function(n,l){return n===o.d?this._CommonModule_0:n===i.c?this._ɵba_1:n===i.d?this._FormsModule_2:n===i.e?this._ReactiveFormsModule_3:n===r.b?this._IonicModule_4:n===a.a?this._WorkComponentModule_5:n===r.c?this._IonicPageModule_6:n===e.a?this._CollectWorkPageModule_7:n===o.e?this._NgLocalization_8:n===i.a?this._ɵi_9:n===i.b?this._FormBuilder_10:n===m.d?this._LAZY_LOADED_TOKEN_11:l},l.prototype.destroyInternal=function(){},l}(u.x),v=new u.y(b,e.a)},254:function(n,l,t){"use strict";function u(n){return o._14(2,[o._20(402653184,1,{_fixedContent:0}),o._20(402653184,2,{_scrollContent:0}),(n()(),o._16(0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),o._21(null,0),(n()(),o._16(0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),o._21(null,1),o._21(null,2)],null,null)}function e(n){return o._14(0,[(n()(),o._16(0,null,null,1,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,u,p)),o._17(4374528,null,0,i.a,[r.c,a.b,c.a,o.H,o.I,_.a,s.a,o.g,[2,d.a],[2,h.a]],null,null)],null,function(n,l){n(l,0,0,o._18(l,1).statusbarPadding,o._18(l,1)._hasRefresher)})}t.d(l,"b",function(){return p}),l.a=u;var o=t(0),i=t(20),r=t(1),a=t(3),c=t(8),_=t(6),s=t(27),d=t(4),h=t(16),f=[],p=o._13({encapsulation:2,styles:f,data:{}});o._19("ion-content",i.a,e,{color:"color",mode:"mode",fullscreen:"fullscreen",scrollDownOnLoad:"scrollDownOnLoad"},{ionScrollStart:"ionScrollStart",ionScroll:"ionScroll",ionScrollEnd:"ionScrollEnd"},["[ion-fixed],ion-fab","*","ion-refresher"])},332:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var u=(t(0),t(53),t(26)),e=(t(87),this&&this.__decorate,this&&this.__metadata,function(){function n(n,l,t,u){this.UserService=n,this.http=l,this.navCtrl=t,this.navParams=u,this.items=[],this.rootNavCtrl=u.get("rootNavCtrl"),this.id=this.navParams.data._id,this.getdata()}return n.prototype.getdata=function(){var n=this;this.UserService.presentLoadingDefault();var l=new u.l;l.append("Content-Type","application/x-www-form-urlencoded"),this.http.post("http://www.devonhello.com/chihu2/my_collect_work","id="+this.id+"&type=1",{headers:l}).subscribe(function(l){n.UserService.presentLoadingDismiss(),n.items=n.items.concat(l.json())})},n}())},333:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=(t(0),t(53),this&&this.__decorate,this&&this.__metadata,function(){function n(n,l){this.navCtrl=n,this.navParams=l,this.data={},this.irootNavCtrl=this.navParams.get("rootNavCtrl")}return n.prototype.pushArticlePage=function(n){this.irootNavCtrl.push("ArticlePage",{_id:n})},n}())},391:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=(t(0),t(53),t(333),this&&this.__decorate,function(){function n(){}return n}())},419:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=(t(0),t(53),t(332),t(391),this&&this.__decorate,function(){function n(){}return n}())},420:function(n,l,t){"use strict";function u(n){return o._14(0,[(n()(),o._15(null,["\n"])),(n()(),o._16(0,null,null,5,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,i.a,i.b)),o._17(4374528,null,0,r.a,[a.c,c.b,_.a,o.H,o.I,s.a,d.a,o.g,[2,h.a],[2,f.a]],null,null),(n()(),o._15(1,["\n    "])),(n()(),o._16(0,null,1,1,"work",[],null,null,null,p.a,p.b)),o._17(49152,null,0,m.a,[f.a,g.a],{data:[0,"data"]},null),(n()(),o._15(1,["\n"]))],function(n,l){n(l,5,0,l.component.items)},function(n,l){n(l,1,0,o._18(l,2).statusbarPadding,o._18(l,2)._hasRefresher)})}function e(n){return o._14(0,[(n()(),o._16(0,null,null,1,"page-collect-work",[],null,null,null,u,P)),o._17(49152,null,0,b.a,[v.a,w.k,f.a,g.a],null,null)],null,null)}t.d(l,"a",function(){return C});var o=t(0),i=t(254),r=t(20),a=t(1),c=t(3),_=t(8),s=t(6),d=t(27),h=t(4),f=t(16),p=t(421),m=t(333),g=t(11),b=t(332),v=t(87),w=t(26),y=[],P=o._13({encapsulation:2,styles:y,data:{}}),C=o._19("page-collect-work",b.a,e,{},{},[])},421:function(n,l,t){"use strict";function u(n){return i._14(0,[(n()(),i._16(0,null,null,23,"section",[["class","item"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.pushArticlePage(n.context.$implicit.artid)&&u}return u},null,null)),(n()(),i._15(null,["\n    "])),(n()(),i._16(0,null,null,11,"header",[],null,null,null,null,null)),(n()(),i._15(null,["\n        "])),(n()(),i._16(0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(n()(),i._15(null,["\n        "])),(n()(),i._16(0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),i._15(null,[""," 分享的作品"])),(n()(),i._15(null,["\n        "])),(n()(),i._16(0,null,null,3,"p",[["class","time"]],null,null,null,null,null)),(n()(),i._16(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-clock-o"]],null,null,null,null,null)),(n()(),i._15(null,[":",""])),i._27(1),(n()(),i._15(null,["\n    "])),(n()(),i._15(null,["\n    "])),(n()(),i._16(0,null,null,0,"section",[["class","banner"]],[[4,"background",null]],null,null,null,null)),(n()(),i._15(null,["\n    "])),(n()(),i._16(0,null,null,2,"h5",[],null,null,null,null,null)),(n()(),i._16(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-cutlery"]],null,null,null,null,null)),(n()(),i._15(null,["  ",""])),(n()(),i._15(null,["\n    "])),(n()(),i._16(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),i._15(null,["",""])),(n()(),i._15(null,["\n"]))],null,function(n,l){n(l,4,0,l.context.$implicit.userimg),n(l,7,0,l.context.$implicit.name),n(l,11,0,i._28(l,11,0,n(l,12,0,i._18(l.parent,0),l.context.$implicit.time))),n(l,15,0,"url("+l.context.$implicit.workbanner+")"),n(l,19,0,l.context.$implicit.title),n(l,22,0,l.context.$implicit.text)})}function e(n){return i._14(0,[i._26(0,r.n,[i.c]),(n()(),i._15(null,["\n"])),(n()(),i._24(16777216,null,null,1,null,u)),i._17(802816,null,0,r.l,[i.L,i.N,i.t],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,3,0,l.component.data)},null)}function o(n){return i._14(0,[(n()(),i._16(0,null,null,1,"work",[],null,null,null,e,d)),i._17(49152,null,0,a.a,[c.a,_.a],null,null)],null,null)}t.d(l,"b",function(){return d}),l.a=e;var i=t(0),r=t(14),a=t(333),c=t(16),_=t(11),s=[],d=i._13({encapsulation:2,styles:s,data:{}});i._19("work",a.a,o,{data:"data"},{},[])}});
//# sourceMappingURL=/Users/apple/Desktop/github/chihu2/www/build/38.main.js.map