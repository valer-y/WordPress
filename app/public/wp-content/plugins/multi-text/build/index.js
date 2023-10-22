!function(){"use strict";var t,e={373:function(){var t=window.wp.blocks,e=window.React,l=window.wp.i18n,o=window.wp.blockEditor,r=window.wp.components;(0,t.registerBlockType)("create-block/multi-text-text",{title:"Text",icon:{src:"text",foreground:"#187315"},parent:["create-block/multi-text"],attributes:{text:{type:"string",source:"html",selector:"div"}},edit:function({attributes:t,setAttributes:l}){const{text:r}=t;return(0,e.createElement)(o.RichText,{...(0,o.useBlockProps)(),placeholder:"Placeholder text",onChange:t=>{l({text:t})},value:r,tagName:"div",multiline:"p"})},save:function({attributes:t}){const{text:l}=t;return(0,e.createElement)(o.RichText.Content,{...o.useBlockProps.save(),tagName:"div",value:l})}}),(0,t.registerBlockType)("gutenberg/multi-text-list",{attributes:{list:{type:"string",default:""}},description:(0,l.__)("Multi Text item","multi-text-list"),icon:{src:"editor-ul",foreground:"#187315"},title:(0,l.__)("List","multi-text-list"),parent:["create-block/multi-text"],supports:{html:!1},edit:function({attributes:t,setAttributes:r}){const{list:n}=t;return(0,e.createElement)(o.RichText,{...(0,o.useBlockProps)(),onChange:t=>{r({list:t})},value:n,placeholder:(0,l.__)("Input your list elements","gutenberg/multi-text-list"),tagName:"ul",multiline:"li",className:"wp-block-gutenberg-multi-text multi-text-list"})},save:function({attributes:t}){const{list:l}=t;return(0,e.createElement)(o.RichText.Content,{...o.useBlockProps.save(),value:l,tagName:"ul",multiline:"li",className:"wp-block-gutenberg-multi-text multi-text-list"})}}),(0,t.registerBlockType)("create-block/multi-text-h3",{title:(0,l.__)("H3","multi-text-list"),icon:{src:"heading",foreground:"#187315"},parent:["create-block/multi-text"],attributes:{text:{type:"string",source:"html",selector:"h3"}},edit:function({attributes:t,setAttributes:l}){const{text:r}=t;return(0,e.createElement)(o.RichText,{...(0,o.useBlockProps)(),placeholder:"Placeholder text",onChange:t=>{l({text:t})},value:r,tagName:"h3"})},save:function({attributes:t}){const{text:l}=t;return(0,e.createElement)(o.RichText.Content,{...o.useBlockProps.save(),tagName:"h3",value:l,className:"wp-block-gutenberg-multi-text multi-text-h3"})}});var n=JSON.parse('{"u2":"create-block/multi-text"}');(0,t.registerBlockType)(n.u2,{attributes:{backgroundColor:{type:"string",default:""},categoryName:{type:"string"},color:{type:"string",default:"#191B20"},fontColor:{type:"string",default:"#191B20"},bulletColor:{type:"string",default:"#191B20"},title:{type:"string"}},icon:{src:"media-document",foreground:"#7fa8ff"},edit:function({attributes:t,setAttributes:n}){const{backgroundColor:i,bulletColor:a,categoryName:c,color:u,fontColor:s,title:m}=t;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(r.PanelBody,{title:(0,l.__)("Category settings","multi-text"),icon:"admin-appearance",initialOpen:!0},(0,e.createElement)(r.TextControl,{label:(0,l.__)("Category elemnt's text","multi-text"),placeholder:(0,l.__)("Type block's category"),value:c,onChange:t=>{n({categoryName:t})}}),(0,e.createElement)(o.PanelColorSettings,{title:(0,l.__)("Element's color","multi-text"),colorSettings:[{value:u,onChange:t=>n({color:t}),label:(0,l.__)("Color","multi-text")}]}),(0,e.createElement)(o.ColorPalette,{title:(0,l.__)("Font color","multi-text"),colors:[{name:"red",color:"#FFFFFF"},{name:"black",color:"#191B20"}],disableCustomColors:!0,value:s,onChange:t=>{n({fontColor:t})},clearable:!1})),(0,e.createElement)(o.PanelColorSettings,{title:(0,l.__)("Background color","multi-text"),colorSettings:[{value:i,onChange:t=>n({backgroundColor:t}),label:(0,l.__)("Color","multi-text")}]}),(0,e.createElement)(o.PanelColorSettings,{title:(0,l.__)("Bullet color","multi-text"),colorSettings:[{value:a,onChange:t=>n({bulletColor:t}),label:(0,l.__)("Color","multi-text")}]})),(0,e.createElement)("section",{...(0,o.useBlockProps)({style:{backgroundColor:i},className:"multi-text__block"})},(0,e.createElement)("p",{...(0,o.useBlockProps)({style:{color:u},className:"wp-block-gutenberg-multi-text block-category"})},(0,l.__)(c,"multi-text")),(0,e.createElement)("style",null,`\n\t\t\t\t\t:root {\n\t\t\t\t\t\t--marker: url("data:image/svg+xml,%3Csvg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle id='Ellipse 774' cx='7' cy='7.5' r='5.5' stroke='${a.replace("#","%23")}' stroke-width='3'/%3E%3C/svg%3E%0A");\n\t\t\t\t\t\t--multi-text__font-color: ${s}\n\t\t\t\t\t}`),(0,e.createElement)("div",{className:"wp-block-gutenberg-multi-text multi-text__wrapper"},(0,e.createElement)("div",{className:"multi-text__content"},(0,e.createElement)(o.RichText,{onChange:t=>n({title:t}),placeholder:(0,l.__)("Input block title","multi-text"),tagName:"h2",value:m,className:"wp-block-gutenberg-multi-text block-heading"}),(0,e.createElement)(o.InnerBlocks,{allowedBlocks:["create-block/multi-text-text","create-block/multi-text-list","create-block/multi-text-h3"]})))))},save:function({attributes:t}){const{categoryName:r,color:n,backgroundColor:i,bulletColor:a,fontColor:c,title:u}=t;return(0,e.createElement)("section",{...o.useBlockProps.save({style:{backgroundColor:i},className:"multi-text__block"})},(0,e.createElement)("style",null,`\n\t\t\t\t\t:root {\n\t\t\t\t\t\t--marker: url("data:image/svg+xml,%3Csvg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle id='Ellipse 774' cx='7' cy='7.5' r='5.5' stroke='${a.replace("#","%23")}' stroke-width='3'/%3E%3C/svg%3E%0A");\n\t\t\t\t\t\t--multi-text__font-color: ${c}\n\t\t\t\t\t}`),(0,e.createElement)("div",{className:"multi-text__block-wrapper "+(r?"":"simple-text__block")},r&&(0,e.createElement)("p",{className:"wp-block-gutenberg-multi-text block-category",style:`color: ${n}`},(0,l.__)(r,"multi-text")),(0,e.createElement)("div",{className:"wp-block-gutenberg-multi-text multi-text__wrapper"},(0,e.createElement)(o.RichText.Content,{tagName:"h2",value:u,className:"wp-block-gutenberg-multi-text block-heading"}),(0,e.createElement)(o.InnerBlocks.Content,null))))}})}},l={};function o(t){var r=l[t];if(void 0!==r)return r.exports;var n=l[t]={exports:{}};return e[t](n,n.exports,o),n.exports}o.m=e,t=[],o.O=function(e,l,r,n){if(!l){var i=1/0;for(s=0;s<t.length;s++){l=t[s][0],r=t[s][1],n=t[s][2];for(var a=!0,c=0;c<l.length;c++)(!1&n||i>=n)&&Object.keys(o.O).every((function(t){return o.O[t](l[c])}))?l.splice(c--,1):(a=!1,n<i&&(i=n));if(a){t.splice(s--,1);var u=r();void 0!==u&&(e=u)}}return e}n=n||0;for(var s=t.length;s>0&&t[s-1][2]>n;s--)t[s]=t[s-1];t[s]=[l,r,n]},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={826:0,431:0};o.O.j=function(e){return 0===t[e]};var e=function(e,l){var r,n,i=l[0],a=l[1],c=l[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(c)var s=c(o)}for(e&&e(l);u<i.length;u++)n=i[u],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(s)},l=self.webpackChunkmulti_text=self.webpackChunkmulti_text||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var r=o.O(void 0,[431],(function(){return o(373)}));r=o.O(r)}();