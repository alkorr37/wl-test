(this["webpackJsonpwl-test"]=this["webpackJsonpwl-test"]||[]).push([[0],{107:function(e,a,t){e.exports=t(1397)},1397:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),o=t.n(r),c=t(14),i=t(79),u=t(84),m=t(33),d=t(16),s=t(41),b=t.n(s),f=t(1448),h=t(1452),E=t(1451),p=t(1447),v=t(1449),j=t(1450),g=t(1434),O=t(1464),C=t(1456),y=t(69),x=t(1444),k=t(83),w=t.n(k),N=t(42),S=t(1459),W=t(1437),T=t(1438),D=t(1439),F=t(1440),M=t(1441),P=t(1401),A=t(1402),I=t(1406),Y=t(1462),B=t(1404),J=t(1403),z=t(1460),G=t(1446),L=t(1457),U=t(1443),q=t(1455),H=function(e){var a=e.onAdd,t=e.onCancel,r=Object(n.useState)({dob:null,experience:"",fName:"",gender:"",job:"",lName:""}),o=Object(d.a)(r,2),c=o[0],i=o[1],u=Object(n.useState)(!0),s=Object(d.a)(u,2),b=s[0],f=s[1],h=Object(n.useState)(!1),E=Object(d.a)(h,2),p=E[0],v=E[1],j=Object(n.useState)(!1),g=Object(d.a)(j,2),O=g[0],y=g[1],k=Object(n.useState)(null),w=Object(d.a)(k,2),H=w[0],K=w[1];Object(n.useEffect)((function(){return function(){null!=H&&clearTimeout(H)}}),[H]),Object(n.useEffect)((function(){var e=window.setTimeout((function(){f(!1)}),Math.floor(3e3*Math.random()));K(e)}),[]),Object(n.useEffect)((function(){setTimeout((function(){v(null!=c.dob)}),0)}),[c.dob]);var Q=Object(n.useCallback)((function(){if(Object.values(c).some((function(e){return!e})))y(!0);else{f(!0);var e=window.setTimeout((function(){f(!1),a(c)}),Math.floor(1e4*Math.random()));K(e)}}),[c,a]),R=Object(n.useCallback)((function(e){return function(a){var t=a.target.value;i((function(a){return Object(m.a)({},a,Object(N.a)({},e,t))}))}}),[]),V=function(e){return O&&!c[e]},X=Object(n.useCallback)((function(e){i((function(a){return Object(m.a)({},a,{dob:(null===e||void 0===e?void 0:e.toDate())||null})}))}),[]);return l.a.createElement(S.a,{open:!0,onClose:t,fullWidth:!0,maxWidth:"sm"},l.a.createElement(W.a,{id:"form-dialog-title"},"Add User"),b&&l.a.createElement(C.a,{display:"flex",alignItems:"center",justifyContent:"center",pb:3},l.a.createElement(T.a,null)),!b&&l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,null,l.a.createElement(F.a,null,"Check all fields before click on Save button"),l.a.createElement(C.a,null,l.a.createElement(M.a,{error:V("fName"),helperText:V("fName")&&"Should be filled",autoFocus:!0,label:"First Name",type:"text",fullWidth:!0,margin:"normal",value:c.fName,onChange:R("fName")}),l.a.createElement(M.a,{error:V("lName"),helperText:V("lName")&&"Should be filled",label:"Last Name",type:"text",fullWidth:!0,margin:"normal",value:c.lName,onChange:R("lName")}),l.a.createElement(P.a,{error:V("job"),margin:"normal",fullWidth:!0},l.a.createElement(A.a,{id:"job-label"},"Job position"),l.a.createElement(I.a,{labelId:"job-label",value:c.job,onChange:R("job")},l.a.createElement(Y.a,{value:"director"},"Director"),l.a.createElement(Y.a,{value:"accountant"},"Accountant"),l.a.createElement(Y.a,{value:"engineer"},"Engineer")),V("job")&&l.a.createElement(B.a,null,"Should be filled")),l.a.createElement(q.a,{error:V("dob"),helperText:V("dob")&&"Should be filled",fullWidth:!0,margin:"normal",label:"Birthday",format:"MM/DD/yyyy",value:c.dob,onChange:X}),p&&l.a.createElement(M.a,{error:V("experience"),helperText:V("experience")&&"Should be filled",label:"Work Experience (years)",type:"number",fullWidth:!0,InputProps:{inputProps:{max:30,min:0}},margin:"normal",value:c.experience,onChange:R("experience")}),l.a.createElement(P.a,{error:V("gender"),margin:"normal",component:"fieldset"},l.a.createElement(J.a,{component:"legend"},"Gender"),l.a.createElement(z.a,{row:!0,name:"gender",value:c.gender,onChange:R("gender")},l.a.createElement(G.a,{value:"female",control:l.a.createElement(L.a,null),label:"Female"}),l.a.createElement(G.a,{value:"male",control:l.a.createElement(L.a,null),label:"Male"}),l.a.createElement(G.a,{value:"other",control:l.a.createElement(L.a,null),label:"Other"})),V("gender")&&l.a.createElement(B.a,null,"Should be filled")))),l.a.createElement(U.a,null,l.a.createElement(x.a,{onClick:t,color:"secondary",variant:"contained"},"Cancel"),l.a.createElement(x.a,{onClick:Q,color:"primary",variant:"contained"},"Add"))))},K={email:"",name:"",phone1:"",phone2:"",desc:"",workers:[]},Q=l.a.createContext(K),R=l.a.createContext((function(){})),V=function(e){var a=e.children,t=Object(n.useState)(K),r=Object(d.a)(t,2),o=r[0],c=r[1];return l.a.createElement(Q.Provider,{value:o},l.a.createElement(R.Provider,{value:c},a))},X=t(1442),Z=t(66),$=Object(X.a)((function(e){return Object(O.a)({delete:{cursor:"pointer",color:Z.a[500],"&:hover":{color:Z.a[600]}}})})),_=function(){var e=$(),a=Object(n.useContext)(Q).workers,t=Object(n.useContext)(R),r=Object(n.useState)(!1),o=Object(d.a)(r,2),c=o[0],i=o[1],s=Object(n.useCallback)((function(){i(!0)}),[]),O=Object(n.useCallback)((function(){i(!1)}),[]),k=Object(n.useCallback)((function(e){t((function(a){return Object(m.a)({},a,{workers:[].concat(Object(u.a)(a.workers),[e])})})),i(!1)}),[t]),N=Object(n.useCallback)((function(e){t((function(a){return Object(m.a)({},a,{workers:a.workers.filter((function(a){return a!==e}))})}))}),[t]);return l.a.createElement(g.a,{elevation:1,style:{marginTop:"15px"}},l.a.createElement(C.a,{p:3},l.a.createElement(y.a,{variant:"h5"},"Workers"),l.a.createElement(p.a,null,l.a.createElement(f.a,{size:"small"},l.a.createElement(v.a,null,l.a.createElement(j.a,null,l.a.createElement(E.a,null,"Full Name"),l.a.createElement(E.a,{align:"right"},"Date of Birth"),l.a.createElement(E.a,{align:"right"},"Profession"),l.a.createElement(E.a,{align:"right"}))),l.a.createElement(h.a,null,a.map((function(a,t){return l.a.createElement(j.a,{key:t},l.a.createElement(E.a,{component:"th",scope:"row"},"".concat(a.fName," ").concat(a.lName)),l.a.createElement(E.a,{align:"right"},a.dob?b()(a.dob).format("DD/MM/yyyy"):""),l.a.createElement(E.a,{align:"right"},a.job),l.a.createElement(E.a,{align:"right"},l.a.createElement(C.a,{display:"flex",justifyContent:"flex-end"},l.a.createElement(w.a,{className:e.delete,onClick:function(){return N(a)}}))))}))))),l.a.createElement(C.a,{display:"flex",justifyContent:"flex-end",mt:2},l.a.createElement(x.a,{variant:"contained",color:"primary",onClick:s},"Add")),c&&l.a.createElement(H,{onAdd:k,onCancel:O})))},ee=t(1453),ae=Object(X.a)((function(e){return Object(O.a)({fab:{position:"absolute",top:e.spacing(2),right:e.spacing(2),color:e.palette.common.white,backgroundColor:Z.a[500],"&:hover":{backgroundColor:Z.a[600]},zIndex:1400}})}));function te(){var e=ae();return l.a.createElement(ee.a,{color:"primary",className:e.fab},"Fill")}var ne=t(68),le=t.n(ne);function re(){var e=Object(n.useContext)(Q),a=e.name,t=e.email,r=e.phone1,o=e.phone2,c=e.desc,i=Object(n.useContext)(R),u=Object(n.useState)(!1),s=Object(d.a)(u,2),b=s[0],f=s[1],h=Object(n.useCallback)((function(e){return function(a){var t=a.target.value;i((function(a){return Object(m.a)({},a,Object(N.a)({},e,t))}))}}),[i]),E=Object(n.useCallback)((function(){f(!0)}),[]),p=function(a){var t;if(!b)return!1;var n,l,r=function(e){return e.replace(/[()-]/g,"")};switch(a){case"phone1":n="firstPhone",l=r(e.phone1);break;case"phone2":n="secondaryPhone",l=r(e.phone2);break;default:n=a,l=e[a]}return l!==(("desc"===a?null===(t=window.data[n])||void 0===t?void 0:t.substr(0,20):window.data[n])||"")};return l.a.createElement(g.a,{elevation:1},l.a.createElement(C.a,{p:3},l.a.createElement(y.a,{variant:"h5"},"General Info"),l.a.createElement(M.a,{error:p("name"),helperText:p("name")&&"Filling not valid",fullWidth:!0,label:"Name",value:a,onChange:h("name")}),l.a.createElement(M.a,{error:p("email"),helperText:p("email")&&"Filling not valid",fullWidth:!0,label:"Email",type:"email",value:t,onChange:h("email")}),l.a.createElement(le.a,{mask:"(999) 999-99-99",value:r,onChange:h("phone1")},(function(){return l.a.createElement(M.a,{label:"Primary phone",fullWidth:!0,error:p("phone1"),helperText:p("phone1")&&"Filling not valid"})})),l.a.createElement(le.a,{mask:"(999) 999-99-99",value:o,onChange:h("phone2")},(function(){return l.a.createElement(M.a,{label:"Secondary phone",fullWidth:!0,error:p("phone2"),helperText:p("phone2")&&"Filling not valid"})})),l.a.createElement(M.a,{error:p("desc"),helperText:p("desc")&&"Filling not valid",fullWidth:!0,label:"Business Description",value:c,onChange:h("desc"),inputProps:{maxLength:20}}),l.a.createElement(C.a,{mt:2,display:"flex",justifyContent:"flex-end"},l.a.createElement(x.a,{variant:"contained",color:"primary",onClick:E},"Check Yourself :)"))))}var oe=t(1454);function ce(){return l.a.createElement(c.a,{utils:i.a},l.a.createElement(V,null,l.a.createElement(oe.a,{maxWidth:"md"},l.a.createElement(re,null),l.a.createElement(_,null))),l.a.createElement(te,null))}var ie=t(15),ue=t.n(ie);function me(e){return ue.a.random.arrayElement([null,e])}function de(){var e={firstName:ue.a.name.firstName(),lastName:ue.a.name.lastName(),dob:b()(ue.a.date.past(20,new Date(2e3,0,1))).format("YYYY-MM-DD"),experience:ue.a.random.number(20).toString(),gender:ue.a.random.arrayElement(["male","female","other"]),job:ue.a.random.arrayElement(["Director","Accountant","Engineer"])};return Object.fromEntries(Object.entries(e).map((function(e){var a=Object(d.a)(e,2);return[a[0],me(a[1])]})))}window.data={name:ue.a.company.companyName(),email:me(ue.a.internet.email()),firstPhone:me(ue.a.phone.phoneNumber("### #######")),secondaryPhone:me(ue.a.phone.phoneNumber("### #######")),desc:me(ue.a.lorem.sentence()),workers:Array(ue.a.random.number(10)).fill(null).map(de)},o.a.render(l.a.createElement(ce,null),document.getElementById("root"))}},[[107,1,2]]]);