(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{323:function(t,n,a){},327:function(t,n,a){"use strict";a(33);var s=a(18),e={name:"IconTag",functional:!0,props:{name:{type:String,required:!0},icon:{type:String,required:!0},size:{type:String,default:"1x"}},render:function(t,n){var a=n.props,e=a.name,i=a.icon,r=a.size;return t("span",{class:"post-tag",attrs:{title:e}},[t(s.a,{class:"post-tag-icon",attrs:{name:i,size:r}}),t("span",{class:"post-tag-name"},[e])])}},i=(a(328),a(0)),r=Object(i.a)(e,void 0,void 0,!1,null,null,null);n.a=r.exports},328:function(t,n,a){"use strict";var s=a(323);a.n(s).a},360:function(t,n,a){"use strict";a.r(n);var s={name:"Tags",components:{IconTag:a(327).a}},e=a(0),i=Object(e.a)(s,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"tags"},[n("div",{staticClass:"main-div"},[n("h2",[this._v(this._s(this.$themeConfig.lang.tags))]),this._v(" "),this._l(this.$tags.list,function(t){return n("RouterLink",{key:t.name,attrs:{to:t.path}},[n("IconTag",{attrs:{icon:"tag",name:t.name}})],1)})],2)])},[],!1,null,null,null);n.default=i.exports}}]);