(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[153],{326:function(e,t,a){Promise.resolve().then(a.bind(a,1821))},1821:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var l=a(9268),n=a(6006),s=a(294),r=a(84);function o(){let[e,t]=(0,n.useState)(""),[a,o]=(0,n.useState)(),[i,c]=(0,n.useState)(),[u,d]=(0,n.useState)(),[m,x]=(0,n.useState)();return(0,l.jsxs)("main",{className:"relative flex min-h-screen flex-col items-center px-10 bg-[#333332]",children:[(0,l.jsx)("h2",{className:"md:text-[5em] text-[3em] mr-auto",children:"/Text-to-Speech"}),(0,l.jsx)("hr",{className:"w-full"}),(0,l.jsxs)("section",{className:"w-[100%] h-[80svh] flex flex-col md:flex-row justify-between mt-[5%] md:mt-0",children:[(0,l.jsx)("div",{className:"border-2 border-[#757474] rounded h-[50%] md:w-[50%] md:my-auto bg-[#303030]",children:(0,l.jsx)("textarea",{className:"w-[100%] h-[100%] bg-transparent px-3 py-5 no-scrollbar",onChange:e=>t(e.target.value),placeholder:"Input text",name:"text",id:"text"})}),(0,l.jsxs)("div",{className:"h-[70%] md:w-[35%] md:my-auto flex flex-col gap-5 mt-[4rem]",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(s.Lt,{name:"Gender",options:[{value:"MALE",label:"Male"},{value:"FEMALE",label:"Female"}],title:"Select Gender option",onChange:e=>c(e.target.value)}),(0,l.jsx)(s.Lt,{name:"Languague",options:[{value:"eng",label:"English"},{value:"fr",label:"French"},{value:"spa",label:"Spanish"}],title:"Select Languague",onChange:e=>d(e.target.value)})]}),(0,l.jsx)("button",{className:"bg-[#454545] rounded py-3 text-2xl",onClick:t=>{t.preventDefault();try{r.o.post("audio/text_to_speech",{providers:"amazon,google,ibm,microsoft",language:u||"eng",text:e,option:i||"MALE",fallback_providers:""}).then(e=>{x("");let t=null==e?void 0:e.data.microsoft.audio_resource_url;o(t)}),x("loading")}catch(e){console.log(e,"error")}},disabled:(null==e?void 0:e.trim().length)===0,children:"Generate Audio"}),"loading"===m?(0,l.jsx)("h2",{children:"Loading..."}):(0,l.jsx)("audio",{className:a?"w-[100%] h-[4rem]":"hidden",src:a,autoPlay:!0,controls:!0})]})]})]})}},3718:function(e,t,a){"use strict";a.r(t);var l=a(9268),n=a(6006);t.default=e=>{let{className:t,error:a,label:s,helperText:r,containerClassName:o,inputClassName:i,inputRef:c,...u}=e,[d,m]=n.useState(u.type);return(0,l.jsxs)("div",{className:"w-full ".concat(o),children:[(0,l.jsx)("label",{className:"text-sm text-text-black font-medium mb-5 capitalize ".concat(t," ").concat(a?"error-text":""),children:s}),(0,l.jsx)("div",{className:"w-full rounded-lg border-2 border-primary flex flex-row items-center overflow-hidden ".concat(a?"error-input":""," ").concat(t),children:(0,l.jsx)("input",{ref:c,className:"focus:outline-none p-2 flex-grow text-sm  rounded text-inherit outline-none text-black ".concat(i),...u,type:d||u.type})}),(0,l.jsx)("p",{className:"text-sm text-primary ".concat(a?"error-text":""),children:r})]})}},294:function(e,t,a){"use strict";a.d(t,{Lt:function(){return n}});var l=a(9268);a(5846),a(3718),a(6006);var n=e=>{let{name:t,options:a,value:n,onChange:s,className:r,disabled:o,title:i}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"text-sm font-medium capitalize text-white",children:i}),(0,l.jsx)("select",{name:t,value:n,onChange:s,className:"bg-[#454545] block w-full rounded-md shadow-sm outline-none text-white my-2 py-2 font-inter ".concat(r),disabled:o,children:a.map(e=>(0,l.jsx)("option",{value:e.value,children:e.label},e.value))})]})}},84:function(e,t,a){"use strict";a.d(t,{o:function(){return n},S:function(){return r}});var l=a(5953);l.Z.defaults.baseURL="https://api.edenai.run/v2/",l.Z.defaults.headers.common.Authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTVkNDRkMmYtMDk4ZC00ZTYxLTk3Y2UtODVhYmI4OTcyNWZhIiwidHlwZSI6ImFwaV90b2tlbiJ9.WiiTdKaENJf3WsRwa_4ST16OJbdz3CJzoGkQ0wBBPRQ");var n=l.Z,s=a(6006),r=(e,t)=>{(0,s.useEffect)(()=>{if(e){e.style.height="0px";let t=e.scrollHeight;e.style.height=t+"px",e.style.maxHeight="200px"}},[e,t])}},5846:function(e,t,a){a(7477)}},function(e){e.O(0,[350,477,253,769,744],function(){return e(e.s=326)}),_N_E=e.O()}]);