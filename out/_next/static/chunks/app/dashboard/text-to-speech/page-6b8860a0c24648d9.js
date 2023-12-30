(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[153],{326:function(e,t,l){Promise.resolve().then(l.bind(l,9506))},9506:function(e,t,l){"use strict";l.r(t);var n=l(9268),r=l(6006),i=l(5774),a=l(5164);t.default=function(){let[e,t]=(0,r.useState)(""),[l,o]=(0,r.useState)(),[s,u]=(0,r.useState)(),[d,c]=(0,r.useState)(),[h,f]=(0,r.useState)();return(0,n.jsxs)("main",{className:"relative flex min-h-screen flex-col items-center px-10 bg-[#333332]",children:[(0,n.jsx)("h2",{className:"md:text-[5em] text-[3em] mr-auto",children:"/Text-to-Speech"}),(0,n.jsx)("hr",{className:"w-full"}),(0,n.jsxs)("section",{className:"w-[100%] h-[80svh] flex flex-col md:flex-row justify-between mt-[5%] md:mt-0",children:[(0,n.jsx)("div",{className:"border-2 border-[#757474] rounded h-[50%] md:w-[50%] md:my-auto bg-[#303030]",children:(0,n.jsx)("textarea",{className:"w-[100%] h-[100%] bg-transparent px-3 py-5 no-scrollbar",onChange:e=>t(e.target.value),placeholder:"Input text",name:"text",id:"text"})}),(0,n.jsxs)("div",{className:"h-[70%] md:w-[35%] md:my-auto flex flex-col gap-5 mt-[4rem]",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Lt,{name:"Gender",options:[{value:"MALE",label:"Male"},{value:"FEMALE",label:"Female"}],title:"Select Gender option",onChange:e=>u(e.target.value)}),(0,n.jsx)(i.Lt,{name:"Languague",options:[{value:"eng",label:"English"},{value:"fr",label:"French"},{value:"spa",label:"Spanish"}],title:"Select Languague",onChange:e=>c(e.target.value)})]}),(0,n.jsx)("button",{className:"bg-[#454545] rounded py-3 text-2xl",onClick:t=>{t.preventDefault();try{a.o.post("audio/text_to_speech",{providers:"amazon,google,ibm,microsoft",language:d||"eng",text:e,option:s||"MALE",fallback_providers:""}).then(e=>{f("");let t=null==e?void 0:e.data.microsoft.audio_resource_url;o(t)}),f("loading")}catch(e){console.log(e,"error")}},disabled:(null==e?void 0:e.trim().length)===0,children:"Generate Audio"}),"loading"===h?(0,n.jsx)("h2",{children:"Loading..."}):(0,n.jsx)("audio",{className:l?"w-[100%] h-[4rem]":"hidden",src:l,autoPlay:!0,controls:!0})]})]})]})}},5774:function(e,t,l){"use strict";let n;l.d(t,{Lt:function(){return f},l2:function(){return o},CI:function(){return p}});var r=l(9268),i=l(5846),a=l.n(i);function o(){return(0,r.jsxs)("div",{className:"mt-5 mb-10 w-full flex items-center justify-between",children:[(0,r.jsx)("span",{className:"text-3xl font-kanit font-bold cursor-pointer",children:(0,r.jsx)(a(),{href:"/",children:"R."})}),(0,r.jsx)(a(),{href:"/dashboard",children:(0,r.jsx)("button",{className:"bg-[#747976] font-kanit rounded px-5 py-1 cursor-pointer hover:brightness-75",children:"Get Started"})})]})}var s=l(6006),u=l(2276);l(8431);let d=(e,t={})=>{let r=n?n.block(e,t):null;return function(i){let[a,o]=(0,s.useState)(!!r);return((0,s.useEffect)(()=>{if(!r){let a=async()=>{i&&(n||(n=await l.e(302).then(l.bind(l,6302))),r=n.block(e,t),o(!0))};try{a()}catch(e){throw Error("Failed to load Million.js")}}return()=>{r=null}},[]),a&&r)?(0,s.createElement)(r,i):!1===t.ssr?null:(0,s.createElement)(u.R,null,(0,s.createElement)(e,i))}};function c({each:e,children:t,ssr:r,svg:i}){let[a,o]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{if(n)return;let e=async()=>{n=await l.e(302).then(l.bind(l,6302)),o(!0)};try{e()}catch(e){throw Error("Failed to load Million.js")}},[]),a&&n)?(0,s.createElement)(n.For,{each:e,children:t,ssr:r,svg:i}):!1===r?null:(0,s.createElement)(i?u.S:u.R,{suppressHydrationWarning:!0},...e.map(t))}d(e=>{let{_:t,_2:l,label:n,_3:i,_4:a,_5:o,helperText:s}=e;return(0,r.jsxs)("div",{className:t,children:[(0,r.jsx)("label",{className:l,children:n}),(0,r.jsx)("div",{className:i,children:a}),(0,r.jsx)("p",{className:o,children:s})]})},{svg:!1,shouldUpdate:(e,t)=>(null==e?void 0:e._)!==(null==t?void 0:t._)||(null==e?void 0:e._2)!==(null==t?void 0:t._2)||(null==e?void 0:e.label)!==(null==t?void 0:t.label)||(null==e?void 0:e._3)!==(null==t?void 0:t._3)||(null==e?void 0:e._4)!==(null==t?void 0:t._4)||(null==e?void 0:e._5)!==(null==t?void 0:t._5)||(null==e?void 0:e.helperText)!==(null==t?void 0:t.helperText)});let h=d(e=>{let{title:t,name:l,value:n,onChange:i,_:a,disabled:o,_2:s}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"text-sm font-medium capitalize text-white",children:t}),s]})},{svg:!1,shouldUpdate:(e,t)=>(null==e?void 0:e.title)!==(null==t?void 0:t.title)||(null==e?void 0:e.name)!==(null==t?void 0:t.name)||(null==e?void 0:e.value)!==(null==t?void 0:t.value)||(null==e?void 0:e.onChange)!==(null==t?void 0:t.onChange)||(null==e?void 0:e._)!==(null==t?void 0:t._)||(null==e?void 0:e.disabled)!==(null==t?void 0:t.disabled)||(null==e?void 0:e._2)!==(null==t?void 0:t._2)});var f=e=>{let{name:t,options:l,value:n,onChange:i,className:a,disabled:o,title:d}=e,c=(0,s.useState)(()=>({$:[,]}))[0],f="bg-[#454545] block w-full rounded-md shadow-sm outline-none text-white my-2 py-2 font-inter ".concat(a),m=(0,u.r)((0,r.jsx)("select",{name:t,value:n,onChange:i,className:f,disabled:o,children:l.map(e=>(0,r.jsx)("option",{value:e.value,children:e.label},e.value))}),!1,c.$,0,!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{title:d,name:t,value:n,onChange:i,_:f,disabled:o,_2:m}),c.$.map(e=>e.portal)]})};let m=d(e=>{let{_:t}=e;return(0,r.jsx)("div",{children:t})},{svg:!1,shouldUpdate:(e,t)=>(null==e?void 0:e._)!==(null==t?void 0:t._)});var p=e=>{let{value:t}=e,l=(0,s.useState)(()=>({$:[,]}))[0],n=(0,u.r)((0,r.jsx)(c,{each:t,children:(e,l)=>_({message:e,index:l,value:t})}),!1,l.$,0,!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m,{_:n}),l.$.map(e=>e.portal)]})};let v=e=>{let{message:t,index:l,value:n}=e;return(0,r.jsx)(x,{index:l,_2:t?"border-2 border-[#70706f] bg-[#232323] w-[fit-content] h-[fit-content] md:max-w-[55%] sm:max-w-[80%] max-w-[90%] px-5 py-3 ml-auto rounded-lg":"hidden",message:t})},x=d(e=>{let{index:t,_2:l,message:n}=e;return(0,r.jsx)("div",{className:l,children:(0,r.jsx)("span",{children:n})},t)},{svg:!1,shouldUpdate:(e,t)=>(null==e?void 0:e.index)!==(null==t?void 0:t.index)||(null==e?void 0:e._2)!==(null==t?void 0:t._2)||(null==e?void 0:e.message)!==(null==t?void 0:t.message)});v.__block_callable__=!0;let _=v},5164:function(e,t,l){"use strict";l.d(t,{o:function(){return r},S:function(){return a}});var n=l(5953);n.Z.defaults.baseURL="https://api.edenai.run/v2/",n.Z.defaults.headers.common.Authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTVkNDRkMmYtMDk4ZC00ZTYxLTk3Y2UtODVhYmI4OTcyNWZhIiwidHlwZSI6ImFwaV90b2tlbiJ9.WiiTdKaENJf3WsRwa_4ST16OJbdz3CJzoGkQ0wBBPRQ");var r=n.Z,i=l(6006),a=(e,t)=>{(0,i.useEffect)(()=>{if(e){e.style.height="0px";let t=e.scrollHeight;e.style.height=t+"px",e.style.maxHeight="200px"}},[e,t])}},5846:function(e,t,l){e.exports=l(7095)},2276:function(e,t,l){"use strict";l.d(t,{E:function(){return o},R:function(){return i},S:function(){return a},a:function(){return s},p:function(){return u},r:function(){return d},u:function(){return c}});var n=l(6006),r=l(8431);let i="slot",a="g",o=({effect:e,deps:t})=>((0,n.useEffect)(e,t||[]),null),s=new Map,u=(e,t,l)=>{let r={ref:t},i=0;for(let t in e){let a=e[t];if((0,n.isValidElement)(a)){r[t]=d(a,!1,l,i++,!1);continue}r[t]=e[t]}return r},d=(e,t,l,a,o)=>{let u=l?.[a]?.current;if("undefined"==typeof window||o&&!u)return(0,n.createElement)(i,{suppressHydrationWarning:!0},e);if((0,n.isValidElement)(e)&&"function"==typeof e.type&&"__block_callable__"in e.type){let t=e.type(e.props);if(s.has(t.type)){let e=s.get(t.type);if("function"==typeof e)return e(t.props)}}let d=u??document.createElement(i),c=(0,r.createPortal)(e,d),h={foreign:!0,current:d,portal:c,unstable:t};return l&&(l[a]=h),h},c=e=>{if("object"!=typeof e||null===e||!("type"in e))return"number"==typeof e?String(e):e;let t=e.type;if("function"==typeof t)return c(t(e.props??{}));if("object"==typeof t&&"$"in t)return t;let l={...e.props};"css"in l&&"__EMOTION_TYPE_PLEASE_DO_NOT_USE__"in l&&(l.style=l.css.styles,t=l.__EMOTION_TYPE_PLEASE_DO_NOT_USE__,delete l.__EMOTION_TYPE_PLEASE_DO_NOT_USE__,delete l.css);let n=e.props?.children;return null!=n&&(l.children=h(e.props.children).map(e=>c(e))),{type:t,props:l}},h=e=>{if(null==e)return[];if("object"==typeof e&&"type"in e&&e.type===n.Fragment)return h(e.props.children);if(!Array.isArray(e)||"object"==typeof e&&"$"in e)return[e];let t=e.flat(1/0),l=[];for(let e=0,n=t.length;e<n;++e)l.push(...h(t[e]));return l}}},function(e){e.O(0,[95,350,253,698,744],function(){return e(e.s=326)}),_N_E=e.O()}]);