(function(e){function t(t){for(var r,s,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},s={app:0},a={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-1cf48256":"044040ee","chunk-234c6c10":"9d0445c8","chunk-286a955b":"cbddb7b7","chunk-2d0c9abc":"e75608f1","chunk-6597bfe2":"c077b147","chunk-7127215b":"64583eb1","chunk-7460d754":"4025121b","chunk-84dc0be4":"a0d5cfff","chunk-8d570646":"517ea270","chunk-d62634a8":"d0b7f1ff"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-1cf48256":1,"chunk-234c6c10":1,"chunk-286a955b":1,"chunk-6597bfe2":1,"chunk-7127215b":1,"chunk-7460d754":1,"chunk-84dc0be4":1,"chunk-8d570646":1,"chunk-d62634a8":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1cf48256":"0971d5d2","chunk-234c6c10":"0971d5d2","chunk-286a955b":"0b4ba9b7","chunk-2d0c9abc":"31d6cfe0","chunk-6597bfe2":"1fce17de","chunk-7127215b":"92647ec0","chunk-7460d754":"92647ec0","chunk-84dc0be4":"c2c04100","chunk-8d570646":"cf61705f","chunk-d62634a8":"92647ec0"}[e]+".css",a=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete s[e],f.parentNode.removeChild(f),n(o)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){s[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e81":function(e,t,n){"use strict";n("9950")},"16ec":function(e,t,n){},"1f57":function(e,t,n){"use strict";var r=n("d4ec"),s=n("bee2"),a=n("bc3a"),o=n.n(a),i=n("c4c6"),u=n("5fa2"),c=Object(u["a"])()+"api/test/",l=function(){function e(){Object(r["a"])(this,e)}return Object(s["a"])(e,[{key:"getPublicContent",value:function(){return o.a.get(c+"all")}},{key:"getUserBoard",value:function(){return o.a.get(c+"user",{headers:Object(i["a"])()})}},{key:"getModeratorBoard",value:function(){return o.a.get(c+"mod",{headers:Object(i["a"])()})}},{key:"getAdminBoard",value:function(){return o.a.get(c+"admin",{headers:Object(i["a"])()})}}]),e}();t["a"]=new l},"2e11":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",[n("NavPull",{directives:[{name:"show",rawName:"v-show",value:e.windowWidth<=958,expression:"windowWidth <= 958"}]}),n("Nav",{directives:[{name:"show",rawName:"v-show",value:e.windowWidth>958,expression:"windowWidth > 958"}]})],1),n("div",{staticClass:"main"},[n("router-view",{class:{"main-nav":e.windowWidth>958,"main-nav-pull":e.windowWidth<=958}})],1)])},a=[],o=(n("caad"),n("2532"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("div",[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),e.loggedIn?e._e():n("div",[n("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),e.loggedIn?e._e():n("div",[n("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1),e.loggedIn?n("div",[n("router-link",{staticClass:"link-username",attrs:{to:"/profile"}},[e._v(e._s(e.currentUser.username))])],1):e._e(),e.isUser&&e.isAdmin?n("div",[n("router-link",{attrs:{to:"/user/test"}},[e._v("Admin/User")])],1):e.isUser?n("div",[n("router-link",{attrs:{to:"/user/test"}},[e._v("User")])],1):e._e(),e.loggedIn?n("div",[n("router-link",{attrs:{to:"/user/salaries"}},[e._v("Salaries")])],1):e._e(),e.isUser?n("div",[n("router-link",{attrs:{to:"/user/storage"}},[e._v("Storage")])],1):e._e(),e.isModerator?n("div",[n("router-link",{attrs:{to:"/moderator/test"}},[e._v("Moderator")])],1):e._e(),n("div",[n("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logOut(t)}}},[e._v(" LogOut ")])])])}),i=[],u={name:"Nav",computed:{loggedIn:function(){return this.$store.state.auth.user},isUser:function(){if(this.$store.state.auth.status.loggedIn)return!0},isAdmin:function(){if(this.$store.state.auth.status.loggedIn)return this.$store.state.auth.user.roles.includes("ROLE_ADMIN")},isModerator:function(){if(this.$store.state.auth.status.loggedIn)return this.$store.state.auth.user.roles.includes("ROLE_MODERATOR")},currentUser:function(){return this.$store.state.auth.user}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}},c=u,l=(n("9415"),n("2877")),d=Object(l["a"])(c,o,i,!1,null,"7d187390",null),f=d.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{staticClass:"btn-nav-pull",class:{"nav-bar-over":!e.hover,"nav-bar-leave":e.hover},attrs:{src:n("8c59")},on:{mouseover:function(t){e.hover=!1},mouseleave:function(t){e.hover=!0},click:function(t){e.show=!e.show}}}),r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"nav-pull",on:{mouseleave:function(t){e.show=!1}}},[r("img",{staticClass:"btn-nav-pull",class:{"nav-bar-over":!e.hover,"nav-bar-leave":e.hover},attrs:{src:n("8c59")},on:{mouseover:function(t){e.hover=!1},mouseleave:function(t){e.hover=!0},click:function(t){e.show=!e.show}}}),r("div",{staticClass:"nav-titles"},[r("div",{staticClass:"nav-bar"},[r("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),e.loggedIn?e._e():r("div",{staticClass:"nav-bar"},[r("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),e.loggedIn?e._e():r("div",{staticClass:"nav-bar"},[r("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1),e.loggedIn?r("div",{staticClass:"nav-bar-username"},[r("router-link",{staticClass:"link-username",attrs:{to:"/profile"}},[e._v(e._s(e.currentUser.username))])],1):e._e(),e.isUser&&e.isAdmin?r("div",{staticClass:"nav-bar"},[r("router-link",{attrs:{to:"/user/test"}},[e._v("Admin, User")])],1):e.isUser?r("div",{staticClass:"nav-bar"},[r("router-link",{attrs:{to:"/user/test"}},[e._v("User")])],1):e._e(),e.loggedIn?r("div",{staticClass:"nav-bar"},[r("router-link",{attrs:{to:"/user/salaries"}},[e._v("Salaries")])],1):e._e(),e.isUser?r("div",{staticClass:"nav-bar"},[r("router-link",{attrs:{to:"/user/storage"}},[e._v("Storage")])],1):e._e(),e.isModerator?r("div",{staticClass:"nav-bar"},[r("router-link",{attrs:{to:"/moderator/test"}},[e._v("Moderator")])],1):e._e(),r("div",{staticClass:"nav-bar"},[r("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logOut(t)}}},[e._v(" Exit ")])])])])])],1)},h=[],v={name:"NavPull",data:function(){return{hover:!1,show:!1}},mounted:function(){},computed:{loggedIn:function(){return this.$store.state.auth.user},isUser:function(){if(this.$store.state.auth.status.loggedIn)return!0},isAdmin:function(){if(this.$store.state.auth.status.loggedIn)return this.$store.state.auth.user.roles.includes("ROLE_ADMIN")},isModerator:function(){if(this.$store.state.auth.status.loggedIn)return this.$store.state.auth.user.roles.includes("ROLE_MODERATOR")},currentUser:function(){return this.$store.state.auth.user}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}},g=v,p=(n("0e81"),Object(l["a"])(g,m,h,!1,null,"4683c9c8",null)),b=p.exports,w={data:function(){return{windowWidth:window.innerWidth}},mounted:function(){var e=this;window.onresize=function(){e.windowWidth=window.innerWidth}},components:{Nav:f,NavPull:b},computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_MODERATOR")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}},_=w,k=(n("6a82"),Object(l["a"])(_,s,a,!1,null,"585eada8",null)),O=k.exports,C=(n("d3b7"),n("8c4f")),$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("span",[e._v("Home")])])}],x=(n("25f0"),n("1f57")),j={name:"Home",data:function(){return{content:""}},mounted:function(){var e=this;x["a"].getPublicContent().then((function(t){e.content=t.data}),(function(t){e.content=t.response&&t.response.data||t.message||t.toString()}))}},I=j,S=(n("cccb"),Object(l["a"])(I,$,y,!1,null,null,null)),U=S.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"register"},[n("form",{staticClass:"reg-field",on:{submit:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._m(0),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{placeholder:"Username",type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e.errors.has("username")?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" Username is required! ")]):e._e(),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{placeholder:"Password",type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e.errors.has("password")?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Password is required!")]):e._e(),n("div",{staticClass:"reg-btn-field"},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"spinner-border spinner-border-sm"}),n("button",{staticClass:"reg-btn",attrs:{type:"submit"}},[e._v("Submit")])]),e.message?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.message))]):e._e()])])])},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h1",[e._v("Login")])])}],P=n("8654"),R={name:"Login",data:function(){return{user:new P["a"]("",""),loading:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin:function(){var e=this;this.loading=!0,this.$validator.validateAll().then((function(t){t?e.user.username&&e.user.password&&e.$store.dispatch("auth/login",e.user).then((function(){e.$router.push("/profile")}),(function(t){e.loading=!1,e.message=t.response&&t.response.data||t.message||t.toString()})):e.loading=!1}))}}},A=R,L=(n("c049"),Object(l["a"])(A,N,E,!1,null,"4a2c8668",null)),M=L.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"register"},[n("form",{staticClass:"reg-field",on:{submit:function(t){return t.preventDefault(),e.handleRegister(t)}}},[e._m(0),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:20",expression:"'required|min:3|max:20'"}],attrs:{placeholder:"Username",type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e.submitted&&e.errors.has("username")?n("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("username"))+" ")]):e._e(),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:50",expression:"'required|min:3|max:50'"}],attrs:{placeholder:"Email",type:"email",name:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e.submitted&&e.errors.has("email")?n("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("email"))+" ")]):e._e(),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required|min:6|max:40",expression:"'required|min:6|max:40'"}],staticClass:"form-control",attrs:{placeholder:"Password",type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e.submitted&&e.errors.has("password")?n("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("password"))+" ")]):e._e(),e._m(1),e.message?n("div",{staticClass:"alert",class:e.successful?"alert-success":"alert-danger"},[e._v(e._s(e.message)+" ")]):e._e()])])])},q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h1",[e._v("Register")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reg-btn-field"},[n("button",{staticClass:"reg-btn",attrs:{type:"submit"}},[e._v("Submit")])])}],D={name:"Register",data:function(){return{user:new P["a"]("","",""),submitted:!1,successful:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(){var e=this;this.message="",this.submitted=!0,this.$validator.validate().then((function(t){t&&e.$store.dispatch("auth/register",e.user).then((function(t){e.message=t.message,e.successful=!0}),(function(t){e.message=t.response&&t.response.data||t.message||t.toString(),e.successful=!1}))}))}}},F=D,W=(n("7601"),Object(l["a"])(F,T,q,!1,null,"cbfec034",null)),B=W.exports;r["a"].use(C["a"]);var H=new C["a"]({mode:"history",routes:[{path:"/",name:"home",component:U},{path:"/home",component:U},{path:"/login",component:M},{path:"/register",component:B},{path:"/profile",name:"profile",component:function(){return n.e("chunk-84dc0be4").then(n.bind(null,"c66d"))}},{path:"/admin",name:"admin",component:function(){return n.e("chunk-d62634a8").then(n.bind(null,"fb71"))},children:[{path:"/admin/test",component:function(){return n.e("chunk-1cf48256").then(n.bind(null,"d1fc"))}},{path:"/admin/salaries/give",component:function(){return n.e("chunk-8d570646").then(n.bind(null,"61aa"))}}]},{path:"/mod",name:"moderator",component:function(){return n.e("chunk-7460d754").then(n.bind(null,"77f5"))},children:[{path:"/moderator/test",component:function(){return n.e("chunk-2d0c9abc").then(n.bind(null,"59ac"))}}]},{path:"/user",name:"user",component:function(){return n.e("chunk-7127215b").then(n.bind(null,"b186"))},children:[{path:"/user/test",component:function(){return n.e("chunk-234c6c10").then(n.bind(null,"cca8"))}},{path:"/user/salaries",component:function(){return n.e("chunk-286a955b").then(n.bind(null,"61f0"))}},{path:"/user/storage",component:function(){return n.e("chunk-6597bfe2").then(n.bind(null,"1484"))}}]}]}),J=n("2f62"),z=n("d4ec"),K=n("bee2"),G=n("bc3a"),Q=n.n(G),V=n("5fa2"),X=Object(V["a"])()+"api/auth/",Y=function(){function e(){Object(z["a"])(this,e)}return Object(K["a"])(e,[{key:"login",value:function(e){return Q.a.post(X+"signin",{username:e.username,password:e.password}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return Q.a.post(X+"signup",{username:e.username,email:e.email,password:e.password})}}]),e}(),Z=new Y,ee=n("c4c6"),te=JSON.parse(localStorage.getItem("user")),ne=te?{status:{loggedIn:!0},user:te}:{status:{loggedIn:!1},user:null},re={namespaced:!0,state:ne,actions:{login:function(e,t){var n=e.commit;return Z.login(t).then((function(e){return n("loginSuccess",e),Promise.resolve(e)}),(function(e){return n("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;Z.logout(),t("logout")},register:function(e,t){var n=e.commit;return Z.register(t).then((function(e){return n("registerSuccess"),Promise.resolve(e.data)}),(function(e){return n("registerFailure"),Promise.reject(e)}))}},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.user=!1}},getters:{getLoggedIn:function(e){return e.status.loggedIn}}},se=(n("96cf"),n("1da1")),ae={state:{users:[]},actions:{fetchUsers:function(e){return Object(se["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(Object(V["a"])()+"api/test/all/users").then((function(e){return e.json()})).then((function(t){setTimeout((function(){var n=t;return e.commit("updateUsers",n),n}),1e3)}));case 2:case"end":return t.stop()}}),t)})))()}},mutations:{updateUsers:function(e,t){e.users=t}},getters:{allUsers:function(e){return console.log(e.users),e.users}}},oe=(n("fb6a"),{state:{storageFiles:[]},actions:{fetchStorageFiles:function(e){return Object(se["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(Object(V["a"])()+"user/storage",{headers:Object(ee["a"])()}).then((function(e){return e.json()})).then((function(t){setTimeout((function(){var n=t;e.commit("updateStorageFiles",n)}),1e3)}));case 2:case"end":return t.stop()}}),t)})))()},fetchUserSalaries:function(e,t){return Object(se["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch(Object(V["a"])()+"user/salaries/"+t,{headers:Object(ee["a"])()}).then((function(e){return e.json()})).then((function(t){setTimeout((function(){var n=t;e.commit("updateUserSalaries",n)}),1e3)}));case 2:case"end":return n.stop()}}),n)})))()}},mutations:{updateStorageFiles:function(e,t){e.storageFiles=t},updateUserSalaries:function(e,t){this.state.auth.user.salaries=t.slice().sort((function(e,t){return t.id-e.id}))}},getters:{allStorageFiles:function(e){return e.storageFiles}}});r["a"].use(J["a"]);var ie=new J["a"].Store({modules:{auth:re,admin:ae,user:oe}}),ue=n("7bb1"),ce=n("ecee"),le=n("ad3d"),de=n("c074");ce["c"].add(de["a"],de["d"],de["e"],de["b"],de["c"]),r["a"].config.productionTip=!1,r["a"].use(ue["a"]),r["a"].component("font-awesome-icon",le["a"]),r["a"].use(J["a"]),new r["a"]({router:H,store:ie,render:function(e){return e(O)}}).$mount("#app")},"5ced":function(e,t,n){},"5fa2":function(e,t,n){"use strict";function r(){return"http://localhost:8080/"}n.d(t,"a",(function(){return r}))},"6a82":function(e,t,n){"use strict";n("e972")},7601:function(e,t,n){"use strict";n("16ec")},8654:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("d4ec"),s=function e(t,n,s,a,o){Object(r["a"])(this,e),this.username=t,this.email=n,this.password=o}},"8c59":function(e,t,n){e.exports=n.p+"img/nav-pull.de2122ed.jpg"},9415:function(e,t,n){"use strict";n("df7e")},9950:function(e,t,n){},c049:function(e,t,n){"use strict";n("2e11")},c4c6:function(e,t,n){"use strict";function r(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{Authorization:"Bearer "+e.accessToken}:{}}n.d(t,"a",(function(){return r}))},cccb:function(e,t,n){"use strict";n("5ced")},df7e:function(e,t,n){},e972:function(e,t,n){}});
//# sourceMappingURL=app.5f2e944c.js.map