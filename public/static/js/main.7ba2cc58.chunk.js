(this["webpackJsonpironhack-project-3-petfriendly-front"]=this["webpackJsonpironhack-project-3-petfriendly-front"]||[]).push([[0],{25:function(e,a,t){e.exports=t.p+"static/media/PetFriendlyLogo.69e3d1db.png"},49:function(e,a,t){e.exports=t.p+"static/media/frontcatdog.2c5d8532.png"},50:function(e,a,t){e.exports=t.p+"static/media/petsrunning.d248d551.jpg"},53:function(e,a,t){e.exports=t(84)},58:function(e,a,t){},59:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(24),l=t.n(c),o=(t(58),t(11)),s=t(12),m=t(21),i=t(10),u=(t(59),t(7)),d=t.n(u),p=t(9),f=t(48),b=t.n(f).a.create({baseURL:"http://localhost:1234/api"}),E=localStorage.getItem("loggedInUser"),h=JSON.parse(E||'""');b.interceptors.request.use((function(e){return e.headers={Authorization:"Bearer ".concat(h.token)},e}));var g=b,v=t(25),N=t.n(v),y=t(49),w=t.n(y);var k=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"background-bottom1"}),r.a.createElement("div",{className:"half-div-card row"},r.a.createElement("div",{className:"half-max-height pb-2 col-12 col-md-4 order-md-2"},r.a.createElement("img",{className:"others-img-heigh",src:w.a,alt:"dogs"})),r.a.createElement("div",{className:"half-max-height content-center pb-2 col-12 col-md-8 order-md-1"},r.a.createElement("span",{className:"about-session text-white"},r.a.createElement("h4",null,"Pet Friend.ly"),r.a.createElement("span",null,r.a.createElement("p",null,"We are a social network for pet lovers."),r.a.createElement("p",null,"Create a page, share the best pictures of your pets and follow friends with common interests."),r.a.createElement("p",null,"Here you can find a lot of content about pets and even adopt a pet."))))))},j=t(50),x=t.n(j);var O=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"background-bottom2"}),r.a.createElement("div",{className:"half-div-card row"},r.a.createElement("div",{className:"half-max-height pb-2 col-12 col-md-4"},r.a.createElement("img",{className:"others-img-heigh",src:x.a,alt:"dogs"})),r.a.createElement("div",{className:"half-max-height content-center pb-2 col-12 col-md-8 order-md-1"},r.a.createElement("span",{className:"about-session text-white"},r.a.createElement("h4",null,"Devs"),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"col"},r.a.createElement("h5",null,"Arthur Franeze"),r.a.createElement("span",null,"A Back-End Web Dev with a background in Electrical Engineering and hardware engineering hobbyist. Loves learning technology.")),r.a.createElement("span",{className:"col"},r.a.createElement("h5",null,"Filipe Deboni"),r.a.createElement("span",null,"A Front-End Web Dev with a background in Psychology and Strategic Planning in Technology. Also, a lifelong learning enthusiast.")))))))};var C=function(e){var a=Object(n.useState)({email:"",password:""}),t=Object(s.a)(a,2),c=t[0],l=t[1],u=Object(i.g)();function f(e){var a=Object(o.a)({},c);a[e.currentTarget.name]=e.currentTarget.value,l(a)}var b=function(){var e=Object(p.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log(c),e.prev=2,e.next=5,g.post("/login",c);case 5:t=e.sent,console.log(JSON.stringify(t.data)),localStorage.setItem("loggedInUser",JSON.stringify(t.data)),u.push("/profile"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"home-background"}),r.a.createElement("div",{className:"div-card row justify-content-center"},r.a.createElement("div",{className:"max-height pb-2 col-12 col-md-6 order-md-2"},r.a.createElement("img",{className:"logo-height",src:N.a,alt:""}),r.a.createElement("div",{className:"form-height d-flex align-items-center",id:"background"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"mx-auto my-auto"},r.a.createElement("div",{className:"card card-signin my-5"},r.a.createElement("div",{className:"card-body "},r.a.createElement("h4",{className:"card-title text-center"},"Log In"),r.a.createElement("form",{className:"form-signin",onSubmit:b},r.a.createElement("div",{className:"form-label-group pb-2"},r.a.createElement("label",{htmlFor:"inputEmail"},"Email address"),r.a.createElement("input",{type:"email",id:"inputEmail",className:"form-control",placeholder:"",name:"email",onChange:f,value:c.email,required:!0,autoFocus:!0})),r.a.createElement("label",{htmlFor:"inputPassword"},"Password"),r.a.createElement("div",{className:"form-label-group pb-2"},r.a.createElement("input",{type:"password",id:"inputPassword",className:"form-control",placeholder:"",name:"password",onChange:f,value:c.password,required:!0})),r.a.createElement("div",{className:"custom-control custom-checkbox mb-2"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember password")),r.a.createElement("button",{className:"btn btn-lg btn-color btn-hover btn-block mb-3",type:"submit"},"Log in"),r.a.createElement("label",{className:"d-flex justify-content-center"},"Don't have an account?"),r.a.createElement(m.b,{className:"btn btn-lg btn-color btn-hover btn-block",type:"submit",to:"/signup"},"Sign Up"))))))))),r.a.createElement("div",{className:"max-height pb-2 col-12 col-md-6 order-md-1 d-none d-md-block"},r.a.createElement("img",{className:"first-img-height",src:"http://placeimg.com/1920/1080/animals",alt:"animal"}))),r.a.createElement(k,null),r.a.createElement(O,null))};var I=function(){var e=Object(n.useState)({name:"",email:"",password:"",image:""}),a=Object(s.a)(e,2),t=a[0],c=a[1];function l(e){var a=Object(o.a)({},t);a[e.currentTarget.name]=e.currentTarget.value,c(a)}var i=function(){var e=Object(p.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log(t),e.prev=2,e.next=5,g.post("/signup",t);case 5:n=e.sent,console.log(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"mx-auto my-auto"},r.a.createElement("div",{className:"card card-signup my-5"},r.a.createElement("div",{className:"card-body "},r.a.createElement("h4",{className:"card-title text-center"},"Sign Up"),r.a.createElement("form",{className:"form-signin",onSubmit:i},r.a.createElement("div",{className:"form-label-group pb-2"},r.a.createElement("label",null,"Human name"),r.a.createElement("input",{type:"text",id:"inputText",className:"form-control",placeholder:"",name:"name",onChange:l,value:t.name,required:!0,autoFocus:!0})),r.a.createElement("div",{className:"form-label-group pb-2"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{type:"email",id:"inputEmail",className:"form-control",placeholder:"",name:"email",onChange:l,value:t.email,required:!0})),r.a.createElement("label",null,"Password"),r.a.createElement("div",{className:"form-label-group pb-1"},r.a.createElement("input",{type:"password",id:"inputPassword",className:"form-control",placeholder:"",name:"password",onChange:l,value:t.password,required:!0})),r.a.createElement("label",null,"Image"),r.a.createElement("div",{className:"form-label-group pb-3"},r.a.createElement("input",{type:"text",id:"inputImage",className:"form-control",placeholder:"Insert URL image",name:"image",onChange:l,value:t.image,required:!0})),r.a.createElement("button",{className:"btn btn-lg btn-color btn-hover btn-block mb-3",type:"submit"},"Create account"),r.a.createElement(m.b,{className:"btn btn-lg btn-secondary btn-hover btn-block",type:"submit",to:"/"},"Back to Home")))))))};var S=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"home-background"}),r.a.createElement("div",{className:"div-card row justify-content-center"},r.a.createElement("div",{className:"max-height pb-2 col-12 col-md-6 order-md-2"},r.a.createElement("img",{className:"logo-height",src:N.a,alt:""}),r.a.createElement("div",{className:"form-height d-flex align-items-center",id:"background"},r.a.createElement(I,null))),r.a.createElement("div",{className:"max-height pb-2 col-12 col-md-6 order-md-1 d-none d-md-block"},r.a.createElement("img",{className:"first-img-height",src:"http://placeimg.com/1920/1080/animals",alt:"animals"}))))},T=t(37),P=t(15),G=t(8),D=t(16),A=t(26);var H=function(e){var a={onHide:e.onHide,show:e.show};return r.a.createElement(D.a,Object.assign({},a,{backdrop:!1,animation:!1,"aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(D.a.Header,{closeButton:!0},r.a.createElement(D.a.Title,{id:"contained-modal-title-vcenter"},"Terms of adoption:")),r.a.createElement(D.a.Body,{className:"show-grid"},r.a.createElement(A.a,null,r.a.createElement("p",null,"We know many families have working adults and we don't expect anyone to be a super hero and quit a day job just to be able to take home a puppy. Every puppy family has different needs, and this information form helps us identify who needs what information and what homes might make the best fit."),r.a.createElement("p",null,"But by adopting the animal described, you must make sure that you able to assume custody and responsibility for this animal and that you can provide all the care that this animal requires. Please, responsible in preserving the health and do not transmit the possession of this animal to others without the donor's knowledge."),r.a.createElement("p",null,"And finally, to asure the safeness of the animal, the donor may want access to the animal's location to check its condition and if finds an inadequate situation for the animal's well-being, I will lose his guard, without prejudice to legal penalties."))),r.a.createElement(D.a.Footer,null,r.a.createElement(G.a,{onClick:e.onHide},"Close"),r.a.createElement(G.a,{onClick:e.onAccept},"Accept")))},F=t(22),L=t(3);var _=function(e){var a={onHide:e.onHide,show:e.show},t=Object(n.useState)({petName:"",ownerName:"",owneremail:"",userName:"",userEmail:"",subject:"Adoption of ",hadPet:!1,iagree:!1}),c=Object(s.a)(t,2),l=c[0],m=c[1];Object(n.useEffect)((function(){Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}),[]);var i=function(){var e=Object(p.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=Object(o.a)({},l))[a.currentTarget.name]=a.currentTarget.value,m(t);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=Object(p.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault();case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(D.a,Object.assign({},a,{backdrop:!1,animation:!1,"aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(D.a.Header,{closeButton:!0},r.a.createElement(D.a.Title,{id:"contained-modal-title-vcenter"},"Form for responsible adoption:")),r.a.createElement(D.a.Body,{className:"show-grid"},r.a.createElement(A.a,null,r.a.createElement(L.a,{onSubmit:u},r.a.createElement(L.a.Row,null,r.a.createElement(L.a.Group,{as:F.a,controlId:"petNameFormGroup".concat(e.pet._id)},r.a.createElement("img",{className:"friends-image p-1",src:e.pet.image,alt:"".concat(e.pet.petName)}),r.a.createElement(L.a.Label,null,"Pet Name"),r.a.createElement(L.a.Control,{type:"firstName",placeholder:e.pet.petName,disabled:!0})),r.a.createElement(L.a.Group,{as:F.a,controlId:"userNameFormGroup".concat(e.pet._id)},r.a.createElement("img",{className:"friends-image p-1",src:e.user.image,alt:"".concat(e.user.name)}),r.a.createElement(L.a.Label,null,"Human Name"),r.a.createElement(L.a.Control,{type:"firstName",placeholder:e.user.name,disabled:!0}))),r.a.createElement(L.a.Row,null,r.a.createElement(L.a.Group,{as:F.a},r.a.createElement(L.a.Label,{className:"mr-sm-2",htmlFor:"select".concat(e.pet._id)},"Have you ever owned a pet?"),r.a.createElement(L.a.Control,{as:"select",name:"hadPet",className:"mr-sm-2",id:"select".concat(e.pet._id),onChange:i,custom:!0},r.a.createElement("option",{value:"0"},"No"),r.a.createElement("option",{value:"1"},"Yes"))),r.a.createElement(L.a.Group,{as:F.a,controlId:"checkFormGroup".concat(e.pet._id)},r.a.createElement(L.a.Check,{type:"checkbox",name:"iagree",className:"mb-2 mr-sm-2",id:"check".concat(e.pet._id),label:"I accept the terms and conditions.",onChange:i}),r.a.createElement(L.a.Group,null,r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement(G.a,{onClick:e.onHide},"Close"),r.a.createElement(G.a,{variant:"primary",type:"submit"},"Submit")))))))))};var B=function(e){var a=Object(n.useState)({state:!1,form:!1}),t=Object(s.a)(a,2),c=t[0],l=t[1],m=e.feed.posts,i=e.user._id;return"undefined"==typeof m?r.a.createElement("div",null):r.a.createElement("div",null,m.map((function(a,t){return r.a.createElement(P.a,{key:"".concat(t),border:"secondary",className:"".concat(a.adoption?"adoption-background post-header mb-3":"post-header mb-3")},r.a.createElement(P.a.Body,null,r.a.createElement(P.a.Img,{variant:"top",src:a.image,className:"mb-3 rounded"}),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(P.a.Subtitle,{className:"mb-2"},a.petName),a.userID.name?r.a.createElement(P.a.Subtitle,{className:"mb-2"},r.a.createElement("span",{className:"text-muted"},"by "),a.userID.name):""),r.a.createElement(P.a.Text,null,a.description),r.a.createElement("div",{className:"icons-div d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement(G.a,{className:"post-icon",variant:"primary",id:a._id,onClick:e.handleLike},r.a.createElement("i",{className:"pr-1 fas fa-paw"}),a.likes.length,r.a.createElement("span",{className:""}," likes")),r.a.createElement(G.a,{className:"post-icon",variant:"primary",id:a._id,onClick:e.handleComments},r.a.createElement("i",{className:"pr-1 fas fa-feather"}),a.comments.length,r.a.createElement("span",{className:""}," comments")),r.a.createElement(G.a,{className:"post-icon",variant:"primary"},r.a.createElement("i",{className:"pr-1 fas fa-egg"}),r.a.createElement("span",{className:""}," share"))),r.a.createElement("div",null,a.userID===i?r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{variant:"danger",id:a._id,onClick:e.deletePost},"Delete")):a.adoption?r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{className:"btn-color btn-hover",variant:"primary",onClick:function(){return l(Object(o.a)(Object(o.a)({},c),{},{state:!0}))}},"Adopt"),r.a.createElement(H,{show:c.state,onHide:function(){return l(Object(o.a)(Object(o.a)({},c),{},{state:!1}))},onAccept:function(){return l({form:!0,state:!1})}}),r.a.createElement(_,{show:c.form,user:e.user,pet:a,onHide:function(){return l(Object(o.a)(Object(o.a)({},c),{},{form:!1}))}})):""))))})))},q=t(36);var R=function(e){var a=Object(i.g)(),t=e.friends;if(console.log(t),"undefined"==typeof t||!t.length)return r.a.createElement("div",null);var n=function(e){var t=e.currentTarget.id.split("-")[1];console.log("friendID"),console.log(t),a.push("/profile/".concat(t))},c=function(){var e=Object(p.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.currentTarget.id.split("-")[1],e.next=3,g.delete("/friend/".concat(t));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(P.a,{className:"d-none d-xs-block d-sm-block",border:"secondary"},r.a.createElement(q.a,null,t.map((function(a,t){return r.a.createElement(q.a.Item,{key:t},r.a.createElement("div",{className:"d-flex"},r.a.createElement(G.a,{className:"btn-friends",style:{cursor:"pointer"},onClick:n,id:"goto-".concat(a._id)},r.a.createElement("img",{className:"friends-image",src:a.image,alt:"".concat(a.name)}),r.a.createElement("span",{className:"pl-3"},a.name))),e.deleteOpt?r.a.createElement(G.a,{className:"btn-hover",id:"delete-".concat(a._id),onClick:c},"Delete"):"")}))))};var U=function(e){var a=Object(n.useState)({email:"",name:"",password:"",image:"",about:""}),t=Object(s.a)(a,2),c=t[0],l=t[1],m=Object(i.g)(),u=e.friends,f=e.profile;function b(e){var a=Object(o.a)({},c);a[e.currentTarget.name]=e.currentTarget.value,l(a)}Object(n.useEffect)((function(){l({email:f.email,name:f.name,image:f.image,about:f.about,password:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"})}),[f.about,f.email,f.image,f.name]);var E=function(){var e=Object(p.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log(c),e.prev=2,e.next=5,g.patch("/user",c);case 5:m.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"div-card"},r.a.createElement(L.a,{onSubmit:E},r.a.createElement(L.a.Group,{controlId:"formImage"},r.a.createElement("img",{className:"friends-image",src:c.image,alt:"profile"}),r.a.createElement(L.a.Label,null,"Image"),r.a.createElement(L.a.Control,{type:"text",name:"image",placeholder:c.image,onChange:b,value:c.image})),r.a.createElement(L.a.Group,{controlId:"formEmail"},r.a.createElement(L.a.Label,null,"Email address"),r.a.createElement(L.a.Control,{name:"email",placeholder:c.email,plaintext:!0}),r.a.createElement(L.a.Text,{className:"text-muted"})),r.a.createElement(L.a.Group,{controlId:"formPassword"},r.a.createElement(L.a.Label,null,"Password"),r.a.createElement(L.a.Control,{type:"password",name:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",onChange:b,value:c.password})),r.a.createElement(L.a.Group,{controlId:"formAbout"},r.a.createElement(L.a.Label,null,"About"),r.a.createElement(L.a.Control,{as:"textarea",rows:3,name:"about",onChange:b,value:c.about})),r.a.createElement(G.a,{className:"mb-3",variant:"primary",type:"submit"},"Submit"),r.a.createElement(R,{deleteOpt:!0,friends:u})))};var z=function(e){var a=e.onHide,t=e.show,c=Object(n.useState)({image:"http://placeimg.com/1920/1080/animals",description:"",petName:"",adoption:"false"}),l=Object(s.a)(c,2),m=l[0],i=l[1],u={onHide:a,show:t},f=function(){var e=Object(p.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=Object(o.a)({},m))[a.currentTarget.name]=a.currentTarget.value,i(t);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),b=function(){var a=Object(p.a)(d.a.mark((function a(t){return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,g.post("/post",m);case 4:e.onHide(),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(1),console.error(a.t0);case 10:case"end":return a.stop()}}),a,null,[[1,7]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(D.a,Object.assign({},u,{backdrop:!1,animation:!1,"aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(D.a.Header,{closeButton:!0},r.a.createElement(D.a.Title,{id:"contained-modal-title-vcenter"},"Add a new post:")),r.a.createElement(D.a.Body,{className:"show-grid"},r.a.createElement(A.a,null,r.a.createElement(L.a,{onSubmit:b},r.a.createElement(L.a.Row,null,r.a.createElement(L.a.Group,{controlId:""},r.a.createElement("img",{className:"friends-image",src:m.image,alt:"Your Pet"}),r.a.createElement(L.a.Control,{type:"firstName",name:"image",placeholder:"Pet image url",value:m.image,onChange:f}),r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,null,"Pet Name"),r.a.createElement(L.a.Control,{type:"firstName",name:"petName",placeholder:"Pet name",value:m.petName,onChange:f})),r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,null,"Description"),r.a.createElement(L.a.Control,{type:"firstName",name:"description",placeholder:"Add a description",value:m.description,onChange:f})),r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,{className:"mr-sm-2"},"Is it for adoption?"),r.a.createElement(L.a.Control,{as:"select",name:"adoption",className:"mr-sm-2",id:"anewID",onChange:f,custom:!0},r.a.createElement("option",{value:!1},"No"),r.a.createElement("option",{value:!0},"Yes"))))),r.a.createElement(L.a.Row,null,r.a.createElement(G.a,{onClick:e.onHide},"Close"),r.a.createElement(G.a,{variant:"primary",type:"submit"},"Submit")))))))};var J=function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),c=t[0],l=t[1],m=Object(n.useState)({page:"home"}),u=Object(s.a)(m,2),f=u[0],b=u[1],E=Object(n.useState)({}),h=Object(s.a)(E,2),v=h[0],y=h[1],w=Object(n.useState)({}),k=Object(s.a)(w,2),j=k[0],x=k[1],O=Object(i.g)(),C={adoption:!1,comments:["5f8b4ee70f79632ff06e33cf","5f8b4ee80f79632ff06e403b","5f8b4ee90f79632ff06e4905","5f8b4ee90f79632ff06e4b84","5f8b4eea0f79632ff06e4f8c"],description:"Many description. Such website. Much wow. ",image:"https://i.pinimg.com/originals/18/5c/ae/185cae8f0e4a7d6d5f3bb29f23b8cd1d.jpg",likes:["5f8b4ced0f79632ff06e2681","5f8b4ced0f79632ff06e26d2","5f8b4ced0f79632ff06e276c"],petName:"Doge Dog",tag:[],userID:"5f8ccafa81c35c4e400c1d81"},I=Object(o.a)({},e.match.params).id;Object(n.useEffect)((function(){Object(p.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/profile/".concat(I));case 2:a=e.sent,y(a.data);case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(n.useEffect)((function(){Object(p.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/friendsposts/".concat(I));case 2:a=e.sent,x(a.data);case 4:case"end":return e.stop()}}),e)})))()}),[]);var S=function(e){Object(p.a)(d.a.mark((function a(){var t,n,r,c,l,o,s;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.currentTarget.id,"home"!==e.currentTarget.id){a.next=11;break}return a.next=4,g.get("/friendsposts/".concat(I));case 4:n=a.sent,r=D(n),c=[].concat(Object(T.a)(r),[C]),x({posts:c}),b({page:t}),a.next=22;break;case 11:if("posts"!==e.currentTarget.id){a.next=21;break}return a.next=14,g.get("/post");case 14:l=a.sent,o=D(l),s=[].concat(Object(T.a)(o),[C]),x({posts:s}),b({page:t}),a.next=22;break;case 21:b({page:t});case 22:case"end":return a.stop()}}),a)})))()},D=function(e){return e.data.posts.sort((function(e,a){return e.updatedAt>a.updatedAt?-1:e.updatedAt<a.updatedAt?1:0}))},A=function(){var e=Object(p.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.currentTarget.id,e.prev=1,e.next=4,g.delete("/post/".concat(t));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(a){return e.apply(this,arguments)}}(),H=function(){var e=Object(p.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.currentTarget.id,e.prev=1,e.next=4,g.post("/postlike/".concat(t));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(a){return e.apply(this,arguments)}}(),_=function(){var e=Object(p.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.currentTarget.id;case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-left"},r.a.createElement("img",{src:N.a,alt:"Pet Friendly logo",className:"header-left"})),r.a.createElement("div",{className:"header-middle"},r.a.createElement("button",{className:"header-button header-button-active",onClick:S,id:"home"},r.a.createElement("i",{className:"fas fa-home"})),r.a.createElement("button",{className:"header-button header-button-active",onClick:S,id:"posts"},r.a.createElement("i",{className:"fas fa-clone"})),r.a.createElement("button",{className:"header-button header-button-active",onClick:S,id:"profile"},r.a.createElement("i",{className:"fas fa-user-cog"}))),r.a.createElement("div",{className:"header-right"},r.a.createElement(G.a,{className:"logout-button btn-color btn-hover ",variant:"primary",onClick:function(){localStorage.clear("loggedInUser"),O.push("/")}},r.a.createElement("i",{className:"fas fa-sign-out-alt",href:"/logout"})))),"profile"!==f.page?r.a.createElement("div",{className:"profile-columns pt-3"},r.a.createElement("div",{className:"profile-columns-padding"},r.a.createElement(P.a,{className:"profile-leftdiv-size",border:"secondary"},r.a.createElement(P.a.Body,{className:"div-profile"},r.a.createElement("div",{className:"profile-img-name"},r.a.createElement(P.a.Img,{className:"profile-image",variant:"top",src:v.image}),r.a.createElement(P.a.Title,{className:"profile-name"},v.name)),r.a.createElement("div",null,r.a.createElement(P.a.Text,{className:"profile-description"},v.about)),r.a.createElement("div",{className:"pt-3"},r.a.createElement(G.a,{className:"btn-color btn-hover",variant:"primary",onClick:function(){return l(!0)}},"+ Post"),r.a.createElement(z,{userID:v._id,show:c,onHide:function(){return l(!1)}})))),r.a.createElement(P.a,{className:"profile-leftdiv-size my-3",border:"secondary"},r.a.createElement(P.a.Body,null,r.a.createElement(L.a,null,r.a.createElement(L.a.Group,{controlId:"formGroupEmail"},r.a.createElement(L.a.Label,null,"Search"),r.a.createElement(L.a.Control,{size:"sm",type:"text",placeholder:"Pet Name"})),r.a.createElement(L.a.Row,null,r.a.createElement(L.a.Group,{as:F.a,controlId:"formGridEmail"},r.a.createElement(L.a.Control,{size:"sm",type:"email",placeholder:"Especies"})),r.a.createElement(L.a.Group,{as:F.a,controlId:"formGridState"},r.a.createElement(L.a.Control,{size:"sm",as:"select",defaultValue:"Male"},r.a.createElement("option",null,"Male"),r.a.createElement("option",null,"Female")))),r.a.createElement(L.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(L.a.Check,{type:"checkbox",label:"Avaiable for Adoption"})),r.a.createElement(G.a,{type:"submit",className:"btn-color btn-hover mb-2"},"Submit")))),r.a.createElement(R,{deleteOpt:!1,friends:v.friends})),r.a.createElement("div",{className:"profile-columns-padding"},"home"===f.page||"posts"===f.page?r.a.createElement(B,{feed:j,user:v,handleComments:_,handleLike:H,deletePost:A}):r.a.createElement(B,{feed:j}))):r.a.createElement(U,{profile:v,setProfile:y,friends:v.friends}))},M=t(52);var W=function(e){var a=e.component,t=e.user,n=Object(M.a)(e,["component","user"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return t._id?r.a.createElement(a,Object.assign({},e,n,{loggedInUser:t})):r.a.createElement(i.a,{to:"/"})}}))};var Y=function(){var e=Object(n.useState)({}),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("loggedInUser"),a=JSON.parse(e||'""');c(Object(o.a)({},a.user))}),[]),r.a.createElement("div",{className:""},r.a.createElement(m.a,{forceRefresh:!0},t._id?r.a.createElement(i.d,null,r.a.createElement(W,{path:"/profile/:id",component:J,user:t}),r.a.createElement(i.b,null,r.a.createElement(i.a,{to:"/profile/".concat(t._id)}))):r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/signup",component:S}),r.a.createElement(i.b,{path:"/",component:C}),r.a.createElement(i.b,null,r.a.createElement(i.a,{to:"/"})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.7ba2cc58.chunk.js.map