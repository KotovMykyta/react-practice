(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],{49:function(e,t,n){},54:function(e,t,n){},97:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),i=n.n(s),a=n(28),r=n.n(a),l=(n(49),n(16)),o=n(4),j=function(){return Object(c.jsx)("div",{className:"navbar-fixed",children:Object(c.jsx)("nav",{className:"black",children:Object(c.jsxs)("ul",{className:"container",children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/todo",children:"Todo"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/counter",children:"Counter"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/team",children:"Our Team"})})]})})})},d=n(42),u=n(18),h=n(43),b=i.a.createContext();function O(e){var t=e.title,n=e.id,i=e.completed,a=Object(s.useContext)(b),r=a.toggleTodo,l=a.removeTodo,o=["todo"];return i&&o.push("completed"),Object(c.jsx)("li",{className:o.join(" "),children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",checked:i,onChange:function(){return r(n)}}),Object(c.jsx)("span",{children:t}),Object(c.jsx)("i",{className:"material-icons red-text",onClick:function(){return l(n)},children:"delete"})]})})}function f(e){var t=e.todos;return Object(c.jsx)("ul",{children:t.map((function(e){return Object(c.jsx)(O,Object(h.a)({},e),e.id)}))})}n(54);var x=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(s.useState)(""),r=Object(u.a)(a,2),l=r[0],o=r[1];Object(s.useEffect)((function(){var e=localStorage.getItem("todos")||[];i(JSON.parse(e))}),[]),Object(s.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(c.jsx)(b.Provider,{value:{toggleTodo:function(e){i(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},removeTodo:function(e){i(n.filter((function(t){return t.id!==e})))}},children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{children:"Todo app"}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("input",{type:"text",value:l,onChange:function(e){return o(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(i([].concat(Object(d.a)(n),[{id:Date.now(),title:l,completed:!1}])),o(""))}}),Object(c.jsx)("label",{children:"Todo name"})]}),Object(c.jsx)(f,{todos:n})]})})},m=n(11),p=n(12),v=n(14),g=n(13),k=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(e){var c;return Object(m.a)(this,n),(c=t.call(this,e)).state={digit:0},c}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"tick",value:function(){this.setState((function(e){return{digit:e.digit+1}}))}},{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h2",{children:this.state.digit})})}}]),n}(s.Component),y=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(e){var c;return Object(m.a)(this,n),(c=t.call(this,e)).state={digit:0,color:"blue"},c}return Object(p.a)(n,[{key:"handleInc",value:function(){this.setState((function(e){return{digit:e.digit+1}}))}},{key:"handleDec",value:function(){this.setState((function(e){return{digit:e.digit-1}}))}},{key:"handleRes",value:function(){this.setState({digit:0,color:"blue"})}},{key:"handleColor",value:function(){this.setState({color:"#"+(Math.random().toString(16)+"000000").substring(2,8).toUpperCase()})}},{key:"render",value:function(){var e=this;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{style:{color:this.state.color},children:this.state.digit}),Object(c.jsx)("a",{className:"waves-effect green accent-4 btn",onClick:function(){e.handleInc()},children:"+"}),Object(c.jsx)("a",{className:"waves-effect red accent-4 btn",onClick:function(){e.handleDec()},children:"-"}),Object(c.jsx)("a",{className:"waves-effect lime accent-2 btn black-text",onClick:function(){e.handleRes()},children:"Reset"}),Object(c.jsx)("a",{className:"waves-effect light-blue btn black-text",onClick:function(){e.handleColor()},children:"Color"})]})}}]),n}(s.Component),N=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(e){var c;return Object(m.a)(this,n),(c=t.call(this,e)).state={digit:0,isDisabled:!1},c}return Object(p.a)(n,[{key:"handleStart",value:function(){var e=this;this.setState({isDisabled:!0}),this.timerId=setInterval((function(){return e.tick()}),1e3)}},{key:"handleStop",value:function(){this.setState({isDisabled:!1}),clearInterval(this.timerId)}},{key:"handleReset",value:function(){this.setState({digit:0})}},{key:"tick",value:function(){this.setState((function(e){return{digit:e.digit+1}}))}},{key:"render",value:function(){var e=this;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:this.state.digit}),Object(c.jsx)("a",{className:"waves-effect green btn black-text",disabled:this.state.isDisabled,onClick:function(){e.handleStart()},children:"START"}),Object(c.jsx)("a",{className:"waves-effect red btn black-text",disabled:!this.state.isDisabled,onClick:function(){e.handleStop()},children:"STOP"}),Object(c.jsx)("a",{className:"waves-effect yellow btn black-text",variant:"warning",onClick:function(){e.handleReset()},children:"Reset"})]})}}]),n}(s.Component),w=function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h2",{children:"Counters"}),Object(c.jsx)(k,{}),Object(c.jsx)(y,{}),Object(c.jsx)(N,{})]})},S=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(m.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={loading:!0,person:null},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/").then((function(e){return e.json()})).then((function(t){return e.setState({person:t.results[0],loading:!1})}))}},{key:"render",value:function(){return this.state.loading?Object(c.jsx)("div",{className:"progress",children:Object(c.jsx)("div",{className:"indeterminate blue"})}):Object(c.jsxs)("div",{className:"center",children:[Object(c.jsx)("h3",{children:"Employee Of The Month"}),Object(c.jsxs)("h4",{children:[this.state.person.name.first," ",this.state.person.name.last]}),Object(c.jsx)("img",{className:"circle",src:this.state.person.picture.large,style:{width:"200px",height:"200px"},alt:"person__logo"})]})}}]),n}(s.Component),C=n(31),T=n.n(C),I=n(41),D=function(e){var t=e.fname,n=e.lname,s=e.img;return Object(c.jsxs)("div",{className:"col s4 l2",children:[Object(c.jsxs)("p",{children:[t,n]}),Object(c.jsx)("img",{src:s,rounded:!0,alt:""})]})},R=n(20),F=function(){var e=Object(s.useState)(!0),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(s.useState)([]),r=Object(u.a)(a,2),l=r[0],o=r[1];Object(s.useEffect)((function(){j()}),[]);var j=function(){var e=Object(I.a)(T.a.mark((function e(){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://randomuser.me/api/?results=6",e.next=3,fetch("https://randomuser.me/api/?results=6");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,o(l.concat(n.results)),i(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{children:n?Object(c.jsx)("div",{className:"progress",children:Object(c.jsx)("div",{className:"indeterminate blue"})}):Object(c.jsxs)("div",{className:"center",children:[Object(c.jsx)("h3",{children:"Our Team"}),Object(c.jsx)("div",{className:"row",children:l.map((function(e){return Object(c.jsx)(D,{fname:e.name.first,lname:e.name.last,img:e.picture.large},e.login.uuid)}))}),Object(c.jsx)(R.Button,{onClick:function(){i(!0),j()},node:"button",style:{marginRight:"5px"},waves:"light",children:"View More"})]})})},M=function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(S,{}),Object(c.jsx)(F,{})]})},P=(n(97),function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(R.Parallax,{image:Object(c.jsx)("img",{style:{objectFit:"cover",width:"100%"},alt:"",src:"https://i.ibb.co/n3M8f2y/pic1.png"}),options:{responsiveThreshold:0}}),Object(c.jsx)("div",{className:"section white",children:Object(c.jsxs)("div",{className:"row container",children:[Object(c.jsx)("h2",{className:"header",children:"Just Practice React"}),Object(c.jsx)("p",{className:"grey-text text-darken-3 lighten-3",children:"This App consists of few components, which the main features of the React like states, hooks and fetch(api) are implemented"}),Object(c.jsx)("p",{children:"Parallax on home page just for beauty btw \ud83d\ude0a"})]})}),Object(c.jsx)(R.Parallax,{image:Object(c.jsx)("img",{style:{objectFit:"cover",width:"100%"},alt:"",src:"https://madewithnetwork.ams3.cdn.digitaloceanspaces.com/spatie-space-production/2592/react-materialize.jpg"}),options:{responsiveThreshold:0}})]})});function E(){return Object(c.jsx)(l.a,{children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j,{}),Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/counter",children:Object(c.jsx)(w,{})}),Object(c.jsx)(o.a,{path:"/todo",children:Object(c.jsx)(x,{})}),Object(c.jsx)(o.a,{path:"/team",children:Object(c.jsx)(M,{})}),Object(c.jsx)(o.a,{path:"/",children:Object(c.jsx)(P,{})})]})]})})}n(98);r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.16136b24.chunk.js.map