(window.webpackJsonp=window.webpackJsonp||[]).push([[9,12],{10:function(t,e,n){"use strict";n.r(e);var r={props:{url:{type:String,required:!0},title:{type:String,required:!1},caption:{type:String,required:!1},indicator:String}},i=n(0),a=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.url,title:t.title,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n  "+t._s(t.caption)+"\n  "),t.caption?t._e():t._t("default"),"true"===t.indicator?n("OutboundLink"):t._e()],2)},[],!1,null,null,null);e.default=a.exports},167:function(t,e,n){},172:function(t,e,n){"use strict";var r=n(167);n.n(r).a},50:function(t,e,n){"use strict";n.r(e);var r={components:{ExternalLink:n(10).default},computed:{price:function(){var t=this.$page.frontmatter.price;return t&&0!==t?(t+=" €",t):"Free"}}},i=(n(172),n(0)),a=Object(i.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ticket--container"},[e("span",{staticClass:"ticket--price"},[this._v("\n    Cost: "+this._s(this.price)+"\n  ")]),this.$page.frontmatter.tickets?e("span",{staticClass:"button"},[e("ExternalLink",{attrs:{url:this.$page.frontmatter.tickets,caption:"Website",indicator:"true"}})],1):this._e()])},[],!1,null,null,null);e.default=a.exports}}]);