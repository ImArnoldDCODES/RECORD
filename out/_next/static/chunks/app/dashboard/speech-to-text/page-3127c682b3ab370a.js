(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[670],{772:function(e){e.exports="object"==typeof self?self.FormData:window.FormData},2226:function(e,t,a){Promise.resolve().then(a.bind(a,3086))},3086:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return r}});var n=a(9268),l=a(6006),o=a(84),i=a(772),s=a.n(i);function r(){let[e,t]=(0,l.useState)(),[a,i]=(0,l.useState)(),r=(0,l.useRef)(null),c=async e=>{var a;let n=(null===(a=e.target.files)||void 0===a?void 0:a[0])||null;try{if(!n)throw Error("No file selected");let e=new(s());e.append("providers","revai,voci"),e.append("file",n),e.append("language","en");let a=await o.o.post("audio/speech_to_text_async",e,{headers:{"Content-Type":"multipart/form-data"}});t(a.data.public_id)}catch(e){console.error(e.message)}},d=async()=>{try{var t,a,n;let l=await o.o.get("audio/speech_to_text_async/".concat(e));i(null==l?void 0:null===(t=l.data)||void 0===t?void 0:null===(a=t.results)||void 0===a?void 0:null===(n=a.voci)||void 0===n?void 0:n.text)}catch(e){console.log(e,"error")}};return(0,n.jsxs)("main",{className:"relative flex min-h-screen flex-col items-center px-10 bg-[#333332]",children:[(0,n.jsx)("h2",{className:"md:text-[5em] text-[3em] mr-auto",children:"/Speech-to-Text"}),(0,n.jsx)("hr",{className:"w-full"}),(0,n.jsxs)("section",{className:"w-[100%] h-[80svh] flex flex-col md:flex-row justify-between mt-[5%] md:mt-0",children:[(0,n.jsxs)("div",{className:"h-[50%] md:w-[35%] md:my-auto flex flex-col gap-5 mt-[4rem]",children:[(0,n.jsx)("input",{type:"file",accept:"audio/*",onChange:c,ref:r,style:{display:"none"}}),(0,n.jsx)("button",{className:"bg-[#454545] rounded py-3 text-2xl",onClick:()=>{var e;return null==r?void 0:null===(e=r.current)||void 0===e?void 0:e.click()},children:"Import Audio"}),(0,n.jsx)("button",{className:e?"bg-[#454545] rounded py-3 text-2xl":"hidden",onClick:d,children:"Generate Text"})]}),(0,n.jsx)("div",{className:"border-2 border-[#757474] rounded h-[50%] md:w-[50%] md:my-auto bg-[#747976]",children:(0,n.jsx)("textarea",{className:"w-[100%] h-[100%] bg-transparent px-3 py-5 no-scrollbar",placeholder:"Input text",name:"text",id:"text",disabled:!0,value:a})})]})]})}},84:function(e,t,a){"use strict";a.d(t,{o:function(){return l},S:function(){return i}});var n=a(5953);n.Z.defaults.baseURL="https://api.edenai.run/v2/",n.Z.defaults.headers.common.Authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTVkNDRkMmYtMDk4ZC00ZTYxLTk3Y2UtODVhYmI4OTcyNWZhIiwidHlwZSI6ImFwaV90b2tlbiJ9.WiiTdKaENJf3WsRwa_4ST16OJbdz3CJzoGkQ0wBBPRQ");var l=n.Z,o=a(6006),i=(e,t)=>{(0,o.useEffect)(()=>{if(e){e.style.height="0px";let t=e.scrollHeight;e.style.height=t+"px",e.style.maxHeight="200px"}},[e,t])}}},function(e){e.O(0,[350,253,769,744],function(){return e(e.s=2226)}),_N_E=e.O()}]);