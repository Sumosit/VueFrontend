(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66d236cb"],{"94a5":function(e,s,t){},"9aa4":function(e,s,t){"use strict";t("94a5")},c66d:function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[e._m(0),t("div",[t("div",{staticClass:"user-info"},[t("div",[t("strong",[e._v(e._s(e.currentUser.username))])]),t("div",[e._v(" "+e._s(e.currentUser.email)+" ")]),t("div",[e._v(" "+e._s(e.currentUser.accessToken.substring(0,20))+" ... "+e._s(e.currentUser.accessToken.substr(e.currentUser.accessToken.length-20))+" ")])])])])},n=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"title"},[t("span",[e._v("Profile")]),t("div",{staticClass:"hr"})])}],c={name:"Profile",computed:{currentUser:function(){return this.$store.state.auth.user}},mounted:function(){this.currentUser||this.$router.push("/login")}},i=c,u=(t("9aa4"),t("2877")),a=Object(u["a"])(i,r,n,!1,null,"679bdb6c",null);s["default"]=a.exports}}]);
//# sourceMappingURL=chunk-66d236cb.0006220e.js.map