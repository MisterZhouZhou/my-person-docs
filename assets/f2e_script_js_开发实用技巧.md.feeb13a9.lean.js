import{h as A,o as b,c as _,k as l,t as i,l as f,X as t}from"./chunks/framework.28451963.js";const h=t("",7),m=t("",3),v=t("",2),x=JSON.parse('{"title":"开发实用技巧","description":"","frontmatter":{},"headers":[],"relativePath":"f2e/script/js/开发实用技巧.md","filePath":"f2e/script/js/开发实用技巧.md","lastUpdated":1704191114000}'),k={name:"f2e/script/js/开发实用技巧.md"},j=Object.assign(k,{setup(B){const c=A(),p=A(),d=()=>{r("bgChange",()=>{c.value.style.background="blue"})},e={},r=(n,s)=>{e[n]||(e[n]=[]),e[n].push(s)},y=n=>{const s=e[n]||[];for(const o of s)o()},F=(n,s="",o="",E={})=>{Object.defineProperty(n.__obj,s,{get(){return r(s,E[s]),o},set(C){o=C,n[s]=C,y(s)}})};let a={age:18,name:"bar",__obj:{}};const D={name:()=>{p.value.style.background="blue",p.value.innerHTML=a.name},age:()=>{p.value.style.background="skyblue",p.value.innerHTML=a.age}};F(a,"name","bar",D),F(a,"age",18,D);const u=()=>{a.__obj.name="mz"},g=()=>{a.__obj.age=20};return(n,s)=>(b(),_("div",null,[h,l("div",{ref_key:"divRef",ref:c,style:{width:"100px",height:"100px",background:"red",marginBottom:"10px"}},null,512),l("button",{style:{border:"1px solid #ccc",marginRight:"10px"},onClick:d},"订阅背景改变事件"),l("button",{style:{border:"1px solid #ccc"},onClick:s[0]||(s[0]=o=>y("bgChange"))},"发布背景改变事件"),m,l("div",{ref_key:"divRef2",ref:p,style:{width:"100px",height:"100px",background:"red",marginBottom:"10px",color:"white"}},i(f(a).__obj.name)+"-"+i(f(a).__obj.age),513),l("button",{style:{border:"1px solid #ccc",marginRight:"10px"},onClick:u},"name改变事件"),l("button",{style:{border:"1px solid #ccc"},onClick:g},"age改变事件"),v]))}});export{x as __pageData,j as default};
