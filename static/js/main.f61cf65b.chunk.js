(this.webpackJsonpstar_patterns=this.webpackJsonpstar_patterns||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),i=n.n(a),j=(n(9),n(10),n(2)),s=n(0),l=function(){var e=Object(c.useState)(10),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(10),i=Object(j.a)(a,2),l=i[0],d=i[1];return Object(s.jsxs)("div",{style:{margin:"1rem",border:"1px solid black",padding:".5rem",width:"max-content"},children:[Object(s.jsx)("h3",{children:"RectangularPattern"}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:["Row : ",Object(s.jsx)("input",{type:"number",onChange:function(e){r(e.target.value)},value:n})]}),Object(s.jsxs)("div",{children:["Col \xa0: ",Object(s.jsx)("input",{type:"number",onChange:function(e){d(e.target.value)},value:l})]})]}),Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(s.jsx)("b",{style:{marginRight:"1rem"},children:Object(s.jsx)("pre",{children:function(){for(var e="",t=0;t<n;t++){for(var c=0;c<l;c++)e+="* ";e+="\n"}return e}()})}),Object(s.jsx)("b",{className:"hide-for-smaller-screen",children:Object(s.jsx)("pre",{children:function(){for(var e="",t=0;t<n;t++){for(var c=0;c<l;c++)e+="".concat(t,",").concat(c,"  ");e+="\n"}return e}()})})]})]})},d=function(){var e=Object(c.useState)("DIAGONAL-A"),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(10),i=Object(j.a)(a,2),l=i[0],d=i[1],o=Object(c.useState)(!0),b=Object(j.a)(o,2),u=b[0],O=b[1];return console.log(n),Object(s.jsxs)("div",{style:{margin:"1rem",border:"1px solid black",padding:".5rem",width:"max-content"},children:[Object(s.jsx)("h3",{children:"TriangularPattern"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{value:"DIAGONAL-A",type:"radio",checked:"DIAGONAL-A"===n,onChange:function(e){r(e.target.value)}}),"DIAGONAL-A"]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{value:"DIAGONAL-B",type:"radio",checked:"DIAGONAL-B"===n,onChange:function(e){r(e.target.value)}}),"DIAGONAL-B"]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{value:"UPPER-RIGHT",type:"radio",checked:"UPPER-RIGHT"===n,onChange:function(e){r(e.target.value)}}),"UPPER-RIGHT"]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{value:"UPPER-LEFT",type:"radio",checked:"UPPER-LEFT"===n,onChange:function(e){r(e.target.value)}}),"UPPER-LEFT"]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{value:"LOWER-RIGHT",type:"radio",checked:"LOWER-RIGHT"===n,onChange:function(e){r(e.target.value)}}),"LOWER-RIGHT"]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{value:"LOWER-LEFT",type:"radio",checked:"LOWER-LEFT"===n,onChange:function(e){r(e.target.value)}}),"LOWER-LEFT"]})})]}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:["Row : ",Object(s.jsx)("input",{type:"number",onChange:function(e){d(e.target.value)},value:l})]}),Object(s.jsxs)("div",{children:["Include dots (.) \xa0: ",Object(s.jsx)("input",{type:"checkbox",checked:u,onChange:function(e){O(e.target.checked)}})]})]}),Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(s.jsx)("b",{style:{marginRight:"1rem"},children:Object(s.jsx)("pre",{children:function(){var e="",t=u?". ":"  ";if("DIAGONAL-A"===n)for(var c=0;c<l;c++){for(var r=0;r<l;r++)e+=c===r?"* ":t;e+="\n"}if("DIAGONAL-B"===n)for(var a=0;a<l;a++){for(var i=0;i<l;i++)e+=a+i===l-1?"* ":t;e+="\n"}if("UPPER-RIGHT"===n)for(var j=0;j<l;j++){for(var s=0;s<l;s++)e+=j===s||s>j?"* ":t;e+="\n"}if("UPPER-LEFT"===n)for(var d=0;d<l;d++){for(var o=0;o<l;o++)e+=d+o===l-1||o+d<l-1?"* ":t;e+="\n"}if("LOWER-RIGHT"===n)for(var b=0;b<l;b++){for(var O=0;O<l;O++)e+=b+O===l-1||O+b>l-1?"* ":t;e+="\n"}if("LOWER-LEFT"===n)for(var h=0;h<l;h++){for(var x=0;x<l;x++)e+=h===x||h>x?"* ":t;e+="\n"}return e}()})}),Object(s.jsx)("b",{className:"hide-for-smaller-screen",children:Object(s.jsx)("pre",{children:function(){for(var e="",t=0;t<l;t++){for(var n=0;n<l;n++)e+="".concat(t,",").concat(n,"  ");e+="\n"}return e}()})})]})]})},o=function(){var e=Object(c.useState)(10),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(10),i=Object(j.a)(a,2),l=i[0],d=i[1],o=Object(c.useState)(!0),b=Object(j.a)(o,2),u=b[0],O=b[1];return Object(s.jsxs)("div",{style:{margin:"1rem",border:"1px solid black",padding:".5rem",width:"max-content"},children:[Object(s.jsx)("h3",{children:"HollowRectangularPattern"}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:["Row : ",Object(s.jsx)("input",{type:"number",onChange:function(e){r(e.target.value)},value:n})]}),Object(s.jsxs)("div",{children:["Col \xa0: ",Object(s.jsx)("input",{type:"number",onChange:function(e){d(e.target.value)},value:l})]}),Object(s.jsxs)("div",{children:["Include dots (.) \xa0: ",Object(s.jsx)("input",{type:"checkbox",checked:u,onChange:function(e){O(e.target.checked)}})]})]}),Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(s.jsx)("b",{style:{marginRight:"1rem"},children:Object(s.jsx)("pre",{children:function(){for(var e="",t=u?". ":"  ",c=0;c<n;c++){for(var r=0;r<l;r++)e+=0===c||0===r||c===n-1||r===l-1?"* ":t;e+="\n"}return e}()})}),Object(s.jsx)("b",{className:"hide-for-smaller-screen",children:Object(s.jsx)("pre",{children:function(){for(var e="",t=0;t<n;t++){for(var c=0;c<l;c++)e+="".concat(t,",").concat(c,"  ");e+="\n"}return e}()})})]})]})},b=function(){var e=Object(c.useState)("UPPER-RIGHT"),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(10),i=Object(j.a)(a,2),l=i[0],d=i[1],o=Object(c.useState)(!0),b=Object(j.a)(o,2),u=b[0],O=b[1];return console.log(n),Object(s.jsxs)("div",{style:{margin:"1rem",border:"1px solid black",padding:".5rem",width:"max-content"},children:[Object(s.jsx)("h3",{children:"HollowTriangularPattern"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{value:"UPPER-RIGHT",type:"radio",checked:"UPPER-RIGHT"===n,onChange:function(e){r(e.target.value)}}),"UPPER-RIGHT"]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{value:"UPPER-LEFT",type:"radio",checked:"UPPER-LEFT"===n,onChange:function(e){r(e.target.value)}}),"UPPER-LEFT"]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{value:"LOWER-RIGHT",type:"radio",checked:"LOWER-RIGHT"===n,onChange:function(e){r(e.target.value)}}),"LOWER-RIGHT"]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{value:"LOWER-LEFT",type:"radio",checked:"LOWER-LEFT"===n,onChange:function(e){r(e.target.value)}}),"LOWER-LEFT"]})})]}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:["Row : ",Object(s.jsx)("input",{type:"number",onChange:function(e){d(e.target.value)},value:l})]}),Object(s.jsxs)("div",{children:["Include dots (.) \xa0: ",Object(s.jsx)("input",{type:"checkbox",checked:u,onChange:function(e){O(e.target.checked)}})]})]}),Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(s.jsx)("b",{style:{marginRight:"1rem"},children:Object(s.jsx)("pre",{children:function(){var e="",t=u?". ":"  ";if("UPPER-RIGHT"===n)for(var c=0;c<l;c++){for(var r=0;r<l;r++)e+=c===r||0===c||r===l-1?"* ":t;e+="\n"}if("UPPER-LEFT"===n)for(var a=0;a<l;a++){for(var i=0;i<l;i++)e+=a+i===l-1||0===i||0===a?"* ":t;e+="\n"}if("LOWER-RIGHT"===n)for(var j=0;j<l;j++){for(var s=0;s<l;s++)e+=j+s===l-1||j===l-1||s===l-1?"* ":t;e+="\n"}if("LOWER-LEFT"===n)for(var d=0;d<l;d++){for(var o=0;o<l;o++)e+=d===o||0===o||d===l-1?"* ":t;e+="\n"}return e}()})}),Object(s.jsx)("b",{className:"hide-for-smaller-screen",children:Object(s.jsx)("pre",{children:function(){for(var e="",t=0;t<l;t++){for(var n=0;n<l;n++)e+="".concat(t,",").concat(n,"  ");e+="\n"}return e}()})})]})]})},u=function(){return Object(s.jsxs)("div",{style:{width:"100%",textAlign:"right",marginBottom:".5rem"},children:[Object(s.jsx)("hr",{}),Object(s.jsx)("a",{href:"https://github.com/rkant225/star_patterns",children:"Source Code"})]})};var O=function(){return Object(s.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"},children:[Object(s.jsx)(l,{}),Object(s.jsx)(o,{}),Object(s.jsx)(d,{}),Object(s.jsx)(b,{}),Object(s.jsx)(u,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),h()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.f61cf65b.chunk.js.map