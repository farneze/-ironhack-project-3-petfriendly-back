(this["webpackJsonpironhack-project-3-petfriendly-front"]=this["webpackJsonpironhack-project-3-petfriendly-front"]||[]).push([[0],{26:function(e,a,t){e.exports=t.p+"static/media/PetFriendlyLogo.69e3d1db.png"},46:function(e,a,t){e.exports=t(82)},51:function(e,a,t){},52:function(e,a,t){},71:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(41),l=t.n(c),o=(t(51),t(15)),s=t(8),m=t(14),i=t(7),u=(t(52),t(6)),d=t.n(u),p=t(9),E=t(42),b=t.n(E).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).CLIENT_DOMAIN}),f=localStorage.getItem("loggedInUser"),v=JSON.parse(f||'""');b.interceptors.request.use((function(e){return e.headers={Authorization:"Bearer ".concat(v.token)},e}));var g=b,h=t(26),N=t.n(h);t(71);var y=function(e){var a=Object(n.useState)({email:"",password:""}),t=Object(s.a)(a,2);t[0],t[1];var c=Object(i.g)();return r.a.createElement("div",null,r.a.createElement("div",{className:"home-card"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"home-first-square first-img col-12"},r.a.createElement("div",{className:"logo-div"},r.a.createElement("div",{className:"logo-height"},r.a.createElement("h1",{className:"home-logo title-color-2 mx-5"},"Pet"),r.a.createElement("h1",{className:"home-logo title-color-2 mx-5"},"Friend.ly")),r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("a",{onClick:function(){c.push("/login")},className:"home-button"},"Log In"),r.a.createElement("a",{onClick:function(){c.push("/signup")},className:"home-button"},"Sign Up")))),r.a.createElement("div",{className:"home-small-square third-img col-12 col-md-6 col-lg-4"},r.a.createElement("h1",{className:"home-title title-color-1"},"Adopt a Pet")),r.a.createElement("div",{className:"home-small-square sec-img col-12 col-md-6 col-lg-4"},r.a.createElement("h1",{className:"home-title title-color-2"},"Make Friends")),r.a.createElement("div",{className:"home-small-square fourth-img col-12 col-md-12 col-lg-4"},r.a.createElement("h1",{className:"home-title title-color-3"},"Find Cute Pictures"))))};var O=function(){var e=Object(n.useState)({email:"",password:""}),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(i.g)();function u(e){var a=Object(o.a)({},t);a[e.currentTarget.name]=e.currentTarget.value,c(a)}var E=function(){var e=Object(p.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log(t),e.prev=2,e.next=5,g.post("/login",t);case 5:n=e.sent,console.log(JSON.stringify(n.data)),localStorage.setItem("loggedInUser",JSON.stringify(n.data)),l.push("/profile"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"form-height d-flex align-items-center",id:"background"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"mx-auto my-auto"},r.a.createElement("div",{className:"card card-signin my-5"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title text-center"},"Log In"),r.a.createElement("form",{className:"form-signin",onSubmit:E},r.a.createElement("div",{className:"form-label-group pb-2"},r.a.createElement("label",{htmlFor:"inputEmail"},"Email address"),r.a.createElement("input",{type:"email",id:"inputEmail",className:"form-control",placeholder:"",name:"email",onChange:u,value:t.email,required:!0,autoFocus:!0})),r.a.createElement("label",{htmlFor:"inputPassword"},"Password"),r.a.createElement("div",{className:"form-label-group pb-2"},r.a.createElement("input",{type:"password",id:"inputPassword",className:"form-control",placeholder:"",name:"password",onChange:u,value:t.password,required:!0})),r.a.createElement("div",{className:"custom-control custom-checkbox mb-2"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember password")),r.a.createElement("button",{className:"btn btn-lg btn-color btn-hover btn-block mb-3",type:"submit"},"Log in"),r.a.createElement("label",{className:"d-flex justify-content-center"},"Don't have an account?"),r.a.createElement(m.b,{className:"btn btn-lg btn-color btn-hover btn-block",type:"submit",to:"/signup"},"Sign Up"),r.a.createElement(m.b,{className:"btn btn-lg btn-secondary btn-hover btn-block",type:"submit",to:"/"},"Back to Home"))))))))};var x=function(){var e=Object(n.useState)({name:"",email:"",password:"",image:""}),a=Object(s.a)(e,2),t=a[0],c=a[1];function l(e){var a=Object(o.a)({},t);a[e.currentTarget.name]=e.currentTarget.value,c(a)}var i=function(){var e=Object(p.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log(t),e.prev=2,e.next=5,g.post("/signup",t);case 5:n=e.sent,console.log(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"home-background"}),r.a.createElement("div",{className:"div-card row justify-content-center"},r.a.createElement("div",{className:"max-height pb-2 col-12 col-md-6 order-md-2"},r.a.createElement("img",{className:"logo-height",src:N.a,alt:""}),r.a.createElement("div",{className:"form-height d-flex align-items-center",id:"background"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"mx-auto my-auto"},r.a.createElement("div",{className:"card card-signup my-5"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title text-center"},"Sign Up"),r.a.createElement("form",{className:"form-signin",onSubmit:i},r.a.createElement("div",{className:"form-label-group pb-2"},r.a.createElement("label",null,"Human name"),r.a.createElement("input",{type:"text",id:"inputText",className:"form-control",placeholder:"",name:"name",onChange:l,value:t.name,required:!0,autoFocus:!0})),r.a.createElement("div",{className:"form-label-group pb-2"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{type:"email",id:"inputEmail",className:"form-control",placeholder:"",name:"email",onChange:l,value:t.email,required:!0})),r.a.createElement("label",null,"Password"),r.a.createElement("div",{className:"form-label-group pb-1"},r.a.createElement("input",{type:"password",id:"inputPassword",className:"form-control",placeholder:"",name:"password",onChange:l,value:t.password,required:!0})),r.a.createElement("label",null,"Image"),r.a.createElement("div",{className:"form-label-group pb-3"},r.a.createElement("input",{type:"text",id:"inputImage",className:"form-control",placeholder:"Insert URL image",name:"image",onChange:l,value:t.image,required:!0})),r.a.createElement("button",{className:"btn btn-lg btn-color btn-hover btn-block mb-3",type:"submit"},"Create account"),r.a.createElement(m.b,{className:"btn btn-lg btn-secondary btn-hover btn-block",type:"submit",to:"/"},"Back to Home")))))))))))};t(30),t(77);var j=function(e){return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"header-navbar"},r.a.createElement("div",{className:""},r.a.createElement("button",{className:"add-post-btn btn-color btn-hover pt-3"},r.a.createElement("i",{class:"fas fa-plus"}))),r.a.createElement("div",{className:"header-middle-nav"},r.a.createElement("button",{className:"header-button-nav",id:"home"},r.a.createElement("i",{className:"fas fa-home"})),r.a.createElement("button",{className:"header-button-nav",id:"posts"},r.a.createElement("i",{className:"fas fa-clone"})),r.a.createElement("button",{className:"header-button-nav",id:"profile"},r.a.createElement("i",{className:"fas fa-user-cog"}))),r.a.createElement("div",{className:"header-top"},r.a.createElement("button",{className:"logout-button btn-color btn-hover pb-3",variant:"primary"},r.a.createElement("i",{className:"fas fa-sign-out-alt",href:"/logout"})))))},k=t(11),w=t(19);t(78);var C=function(e){var a=Object(n.useState)({state:!1,form:!1}),t=Object(s.a)(a,2),c=(t[0],t[1],e.feed.posts);return e.user._id,"undefined"==typeof c?r.a.createElement("div",null):r.a.createElement("div",null,r.a.createElement("div",{className:"header-line"}),r.a.createElement("div",{className:"feed-card-margin row justify-content-center"},c.map((function(a,t){return r.a.createElement("div",{key:"".concat(t),className:"".concat(a.adoption?"adoption-background":"")},r.a.createElement(k.a,{style:{borderRadius:8},className:"feed-img-border"},r.a.createElement(k.a.Img,{variant:"top",src:a.image,className:"feed-img"}),r.a.createElement(k.a.Body,{className:"post-overlay"},r.a.createElement(w.a,{className:"button-interaction",variant:"primary",id:a._id,onClick:e.handleLike},r.a.createElement("i",{className:"icon fas fa-paw"})," ",a.likes.length,r.a.createElement("span",{className:"text-interaction"}," likes")),r.a.createElement(w.a,{className:"button-interaction",variant:"primary",id:a._id,onClick:e.handleComments},r.a.createElement("i",{className:"icon fas fa-feather"})," ",a.comments.length,r.a.createElement("span",{className:"text-interaction"}," comments")))))}))))},S=t(44);t(79);var I=function(e){var a=Object(i.g)(),t=e.friends;if("undefined"==typeof t||!t.length)return r.a.createElement("div",null);var n=function(e){var t=e.currentTarget.id.split("-")[1];a.push("/profile/".concat(t))},c=function(){var e=Object(p.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.currentTarget.id.split("-")[1],e.next=3,g.delete("/friend/".concat(t));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(k.a,{className:"rounded-corners",border:"none"},r.a.createElement(S.a,null,t.map((function(a,t){return r.a.createElement("div",{key:t},r.a.createElement("div",{className:"d-flex"},r.a.createElement("button",{className:"btn-friends",style:{cursor:"pointer"},onClick:n,id:"goto-".concat(a._id)},r.a.createElement("img",{className:"friends-img",src:a.image,alt:"".concat(a.name)}),r.a.createElement("span",{className:"pl-3"},a.name))),e.deleteOpt?r.a.createElement(w.a,{className:"btn-hover",id:"delete-".concat(a._id),onClick:c},"Delete"):"")}))))},T=t(5);var P=function(e){var a=Object(n.useState)({email:"",name:"",password:"",image:"",about:""}),t=Object(s.a)(a,2),c=t[0],l=t[1],m=Object(i.g)(),u=e.profile;function E(e){var a=Object(o.a)({},c);a[e.currentTarget.name]=e.currentTarget.value,l(a)}Object(n.useEffect)((function(){l({email:u.email,name:u.name,image:u.image,about:u.about,password:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"})}),[u.about,u.email,u.image,u.name]);var b=function(){var e=Object(p.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,g.patch("/user",c);case 4:m.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"div-card"},r.a.createElement(T.a,{onSubmit:b},r.a.createElement(T.a.Group,{controlId:"formImage"},r.a.createElement("img",{className:"friends-image",src:c.image,alt:"profile"}),r.a.createElement(T.a.Label,null,"Image"),r.a.createElement(T.a.Control,{type:"text",name:"image",placeholder:c.image,onChange:E,value:c.image})),r.a.createElement(T.a.Group,{controlId:"formEmail"},r.a.createElement(T.a.Label,null,"Email address"),r.a.createElement(T.a.Control,{name:"email",placeholder:c.email,plaintext:!0}),r.a.createElement(T.a.Text,{className:"text-muted"})),r.a.createElement(T.a.Group,{controlId:"formPassword"},r.a.createElement(T.a.Label,null,"Password"),r.a.createElement(T.a.Control,{type:"password",name:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",onChange:E,value:c.password})),r.a.createElement(T.a.Group,{controlId:"formAbout"},r.a.createElement(T.a.Label,null,"About"),r.a.createElement(T.a.Control,{as:"textarea",rows:3,name:"about",onChange:E,value:c.about})),r.a.createElement(w.a,{className:"mb-3",variant:"primary",type:"submit"},"Submit"),r.a.createElement(I,{deleteOpt:!0})))},_=t(21);t(81);var L=function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),c=(t[0],t[1],Object(n.useState)({page:"home"})),l=Object(s.a)(c,2),m=l[0],u=(l[1],Object(n.useState)({})),E=Object(s.a)(u,2),b=E[0],f=E[1],v=Object(n.useState)({}),h=Object(s.a)(v,2),N=h[0],y=h[1],O=(Object(i.g)(),Object(o.a)({},e.match.params).id);Object(n.useEffect)((function(){Object(p.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/profile/".concat(O));case 2:a=e.sent,f(a.data);case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(n.useEffect)((function(){Object(p.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/friendsposts/".concat(O));case 2:a=e.sent,y(a.data);case 4:case"end":return e.stop()}}),e)})))()}),[]);var x=function(){var e=Object(p.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.currentTarget.id,e.prev=1,e.next=4,g.delete("/post/".concat(t));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(a){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.currentTarget.id,e.prev=1,e.next=4,g.post("/postlike/".concat(t));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(a){return e.apply(this,arguments)}}(),L=function(){var e=Object(p.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.currentTarget.id;case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"background-frame"},r.a.createElement(j,null),"profile"!==m.page?r.a.createElement("div",{className:""},r.a.createElement(k.a,{className:"profile-column p-3"},r.a.createElement(k.a,{className:"rounded-corners"},r.a.createElement(k.a.Body,{className:"profile-card-margin row justify-content-center"},r.a.createElement(k.a.Img,{className:"profile-img",variant:"top",src:b.image}),r.a.createElement(k.a.Title,{className:"mt-2"},b.name),r.a.createElement("div",null,r.a.createElement(k.a.Text,{className:"mb-2"},b.about)),r.a.createElement("div",{className:""}))),r.a.createElement(k.a,{className:"my-3 rounded-corners"},r.a.createElement(k.a.Body,null,r.a.createElement(T.a,null,r.a.createElement(T.a.Group,{controlId:"formGroupEmail"},r.a.createElement(T.a.Label,null,"Find more Pets"),r.a.createElement(T.a.Control,{size:"sm",type:"text",placeholder:"Pet Name"})),r.a.createElement(T.a.Group,{controlId:"formGroupEmail"},r.a.createElement(T.a.Control,{size:"sm",type:"text",placeholder:"Distance"})),r.a.createElement(T.a.Row,null,r.a.createElement(T.a.Group,{as:_.a,controlId:"formGridEmail"},r.a.createElement(T.a.Control,{size:"sm",type:"email",placeholder:"Especies"})),r.a.createElement(T.a.Group,{as:_.a,controlId:"formGridState"},r.a.createElement(T.a.Control,{size:"sm",as:"select",defaultValue:"Male"},r.a.createElement("option",null,"Male"),r.a.createElement("option",null,"Female")))),r.a.createElement(T.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(T.a.Check,{type:"checkbox",label:"Avaiable for Adoption"})),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement(w.a,{type:"submit",className:"btn-color"},"Submit"))))),r.a.createElement(I,{deleteOpt:!1,friends:b.friends})),r.a.createElement("div",{className:""},"home"===m.page||"posts"===m.page?r.a.createElement(C,{feed:N,user:b,handleComments:L,handleLike:S,deletePost:x}):r.a.createElement(C,{feed:N}))):r.a.createElement(P,{profile:b,setProfile:f,friends:b.friends}))},G=t(45);var q=function(e){var a=e.component,t=e.user,n=Object(G.a)(e,["component","user"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return t._id?r.a.createElement(a,Object.assign({},e,n,{loggedInUser:t})):r.a.createElement(i.a,{to:"/"})}}))};var D=function(){var e=Object(n.useState)({}),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("loggedInUser"),a=JSON.parse(e||'""');c(Object(o.a)({},a.user))}),[]),r.a.createElement("div",{className:""},r.a.createElement(m.a,{forceRefresh:!0},t._id?r.a.createElement(i.d,null,r.a.createElement(q,{path:"/profile/:id",component:L,user:t}),r.a.createElement(i.b,null,r.a.createElement(i.a,{to:"/profile/".concat(t._id)}))):r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/login",component:O}),r.a.createElement(i.b,{path:"/signup",component:x}),r.a.createElement(i.b,{path:"/",component:y}),r.a.createElement(i.b,null,r.a.createElement(i.a,{to:"/"})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.04b6fd36.chunk.js.map