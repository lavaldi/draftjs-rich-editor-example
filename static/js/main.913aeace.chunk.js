(this["webpackJsonpdraftjs-editor-example"]=this["webpackJsonpdraftjs-editor-example"]||[]).push([[0],{185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(45),c=n.n(i),o=(n(90),n(84)),l=n(4),s=n(83),u=n(19),m=n(20),d=n(10);function f(){var e=Object(u.a)(["\n        position: relative;\n        padding: 1px 18px 17px;\n        margin: 0 -20px;\n        border-bottom: 2px solid #eee;\n        margin-bottom: 20px;\n      "]);return f=function(){return e},e}function p(){var e=Object(u.a)(["\n        & > * {\n          display: inline-block;\n        }\n        & > * + * {\n          margin-left: 15px;\n        }\n      "]);return p=function(){return e},e}var b=r.a.forwardRef((function(e,t){var n=e.className,a=Object(m.a)(e,["className"]);return r.a.createElement("div",Object.assign({},a,{ref:t,className:Object(d.b)(n,Object(d.a)(p()))}))})),g=r.a.forwardRef((function(e,t){var n=e.className,a=Object(m.a)(e,["className"]);return r.a.createElement(b,Object.assign({},a,{ref:t,className:Object(d.b)(n,Object(d.a)(f()))}))}));function v(){var e=Object(u.a)(["\n          cursor: pointer;\n          color: ",";\n        "]);return v=function(){return e},e}var h=r.a.forwardRef((function(e,t){var n=e.className,a=e.active,i=e.reversed,c=Object(m.a)(e,["className","active","reversed"]);return r.a.createElement("span",Object.assign({},c,{ref:t,className:Object(d.b)(n,Object(d.a)(v(),i?a?"white":"#aaa":a?"black":"#ccc"))}))}));function E(){var e=Object(u.a)(["\n        font-size: 18px;\n        vertical-align: text-bottom;\n      "]);return E=function(){return e},e}var O=r.a.forwardRef((function(e,t){var n=e.className,a=Object(m.a)(e,["className"]);return r.a.createElement("span",Object.assign({},a,{ref:t,className:Object(d.b)("material-icons",n,Object(d.a)(E()))}))})),j=(n(185),function(e){return l.KeyBindingUtil.hasCommandModifier(e)&&e.shiftKey&&"x"===e.key?"strikethrough":Object(l.getDefaultKeyBinding)(e)}),y=function(e){var t,n=e.initialValue;if(n){var i=Object(l.convertFromHTML)(n);t=l.ContentState.createFromBlockArray(i.contentBlocks,i.entityMap)}var c=Object(a.useState)(t?l.EditorState.createWithContent(t):l.EditorState.createEmpty()),u=Object(o.a)(c,2),m=u[0],d=u[1],f=function(e){var t,n=e.format,a=e.icon,i=e.type;"inline"===i?t=m.getCurrentInlineStyle().has(n):t=l.RichUtils.getCurrentBlockType(m)===n;return r.a.createElement(h,{active:t,"data-format":n,onMouseDown:function(e){return function(e,t){e.preventDefault();var n=e.currentTarget.getAttribute("data-format");d("inline"===t?l.RichUtils.toggleInlineStyle(m,n):l.RichUtils.toggleBlockType(m,n))}(e,i)}},r.a.createElement(O,null,a))},p=m.getCurrentContent(),b=!1;return p.hasText()||"unstyled"===p.getBlockMap().first().getType()&&(b=!0),console.log(Object(s.a)(p)),r.a.createElement("div",{className:b?"":"hide-placeholder"},r.a.createElement(g,null,r.a.createElement(f,{format:"BOLD",icon:"format_bold",type:"inline"}),r.a.createElement(f,{format:"ITALIC",icon:"format_italic",type:"inline"}),r.a.createElement(f,{format:"UNDERLINE",icon:"format_underlined",type:"inline"}),r.a.createElement(f,{format:"STRIKETHROUGH",icon:"strikethrough_s",type:"inline"}),r.a.createElement(f,{format:"CODE",icon:"code",type:"inline"}),r.a.createElement(f,{format:"unordered-list-item",icon:"format_list_bulleted",type:"block"})),r.a.createElement(l.Editor,{placeholder:"Enter some rich text\u2026",editorState:m,onChange:d,handleKeyCommand:function(e){var t=l.RichUtils.handleKeyCommand(m,e);return t||"strikethrough"!==e||(t=l.RichUtils.toggleInlineStyle(m,"STRIKETHROUGH")),t?(d(t),"handled"):"not-handled"},keyBindingFn:j}))};n(186);var k=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(y,{initialValue:'<ul class="md-block-unordered-list-item"><li>It\'s rare <strong>that</strong> <del>TLs</del> are <em>invited</em> to <u>participate</u> in the <code>pitch</code> review process.</li></ul>'}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))},85:function(e,t,n){e.exports=n(187)},90:function(e,t,n){}},[[85,1,2]]]);
//# sourceMappingURL=main.913aeace.chunk.js.map