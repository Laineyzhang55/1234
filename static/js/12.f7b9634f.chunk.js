(this.webpackJsonpmy_picture=this.webpackJsonpmy_picture||[]).push([[12],{363:function(e,a,n){"use strict";n.r(a);var r=n(15),t=n(0),s=n.n(t),l=n(135),i=n(365),o=n(368),u=n(134),c=n(16),m=n(54),p=n(4);function d(){var e=Object(r.a)(["\n  padding: 15px 0;\n  text-align: center;\n  font-size: 24px;\n"]);return d=function(){return e},e}function f(){var e=Object(r.a)(["\n  margin: 50px auto;\n  padding: 30px 20px;\n  max-width: 600px;\n  border-radius: 6px;\n  box-shadow: 1px 0 2px 0 rgba(0, 0, 0, 0.5)\n"]);return f=function(){return e},e}var b=c.a.div(f()),g=c.a.h2(d());a.default=function(){var e={wrapperCol:{offset:6,span:18}},a=Object(m.a)().AuthStore,n=Object(p.f)();return s.a.createElement(b,null,s.a.createElement(g,null,"\u6ce8\u518c"),s.a.createElement(i.a,Object.assign({},{labelCol:{span:6},wrapperCol:{span:18}},{name:"basic",initialValues:{remember:!0},onFinish:function(e){a.setUsername(e.username),a.setPassword(e.password),a.register().then((function(){n.push("/")})).catch((function(e){l.a.error("\u6ce8\u518c\u5931\u8d25"),console.log(e)}))},onFinishFailed:function(e){console.log("Failed:",e)}}),s.a.createElement(i.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"},{validator:function(e,a){return/\W/.test(a)?Promise.reject("\u53ea\u80fd\u662f\u5b57\u6bcd\u6570\u5b57\u548c\u4e0b\u5212\u7ebf"):a.length<4||a.length>10?Promise.reject("\u957f\u5ea6\u4e3a4-10\u4e2a\u5b57\u7b26"):Promise.resolve()}}]},s.a.createElement(o.a,null)),s.a.createElement(i.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{min:4,message:"\u6700\u5c0f4\u4e2a\u5b57\u7b26"},{max:10,message:"\u6700\u591a10\u4e2a\u5b57\u7b26"}]},s.a.createElement(o.a.Password,null)),s.a.createElement(i.a.Item,{label:"\u786e\u8ba4\u5bc6\u7801",name:"confirmPassword",rules:[{required:!0,message:"\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801"},function(e){var a=e.getFieldValue;return{validator:function(e,n){return n&&a("password")!==n?Promise.reject("\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4"):Promise.resolve()}}}]},s.a.createElement(o.a.Password,null)),s.a.createElement(i.a.Item,e,s.a.createElement(u.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"))))}}}]);
//# sourceMappingURL=12.f7b9634f.chunk.js.map