(this["webpackJsonpemplyee-directory"]=this["webpackJsonpemplyee-directory"]||[]).push([[0],{59:function(e,t,a){e.exports=a(69)},64:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=(a(64),a(40)),i=a(41),s=a(50),m=a(49),u=a(104),h=a(107),d=a(109),f=a(110),p=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function E(){var e=p();return r.a.createElement("div",{className:e.root},r.a.createElement(h.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(f.a,{variant:"h6",className:e.title},"Employee Directory"))))}var y=a(115);function v(e){return r.a.createElement(y.a,{onChange:e.handleSearch,id:"standard-search",label:"Search for an employee",type:"search"})}var g=function(){return fetch("https://thingproxy.freeboard.io/fetch/https://jsonplaceholder.typicode.com/users",{headers:{origin:"https://mohamedzakigithub.github.io/employee-directory/"}})},b=a(113),S=a(114),j=a(116),w=a(46),x=a(117);function k(e){return r.a.createElement("div",null,r.a.createElement(j.a,null,r.a.createElement(x.a,{htmlFor:"sort"},"Sort by:"),r.a.createElement(w.a,{onChange:e.handleSort,inputProps:{name:"sort",id:"sort"}},r.a.createElement("option",{value:"id"},"Id"),r.a.createElement("option",{value:"name"},"Name"))))}var I=a(111),O=a(112),C=a(47),N=a.n(C),B=a(48),D=a.n(B),G=Object(u.a)({root:{minWidth:300}});function J(e){var t=G();return e.match.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(I.a,{className:t.root,variant:"outlined",style:{background:"linear-gradient(to right, #83a4d4, #b6fbff)"}},r.a.createElement(O.a,null,r.a.createElement(f.a,{gutterBottom:!0},"Emloyee ID: ",e.id),r.a.createElement(f.a,{variant:"h5",component:"h2"},e.name),r.a.createElement("br",null),r.a.createElement(f.a,{component:"p",style:{display:"flex",alignItems:"center"}},r.a.createElement(N.a,null)," ",e.email),r.a.createElement(f.a,{component:"p",style:{display:"flex",alignItems:"center"}},r.a.createElement(D.a,null)," ",e.phone))),r.a.createElement("br",null),r.a.createElement("br",null))}))}var L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).style={padding:"30px"},e.state={search:"",data:[],match:[]},e.handleSearch=function(t){e.setState({search:t.target.value},(function(){var t=e.state.data.filter((function(t){return t.name.toLowerCase().includes(e.state.search.toLowerCase())}));e.setState({match:t})}))},e.handleSort=function(t){if(console.log(t.target.value),"id"===t.target.value){var a=e.state.match.sort((function(e,t){return e.id>t.id?1:-1}));e.setState({match:a})}else if("name"===t.target.value){var n=e.state.match.sort((function(e,t){return e.name>t.name?1:-1}));e.setState({match:n})}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g().then((function(t){return t.json().then((function(t){console.log(t),e.setState({data:t}),e.setState({match:t})}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(b.a,{maxWidth:"md",style:this.style},r.a.createElement(S.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",style:this.style},r.a.createElement(v,{handleSearch:this.handleSearch,style:this.style}),r.a.createElement(k,{handleSort:this.handleSort,style:this.style})),r.a.createElement("br",null),r.a.createElement(S.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(J,{match:this.state.match}))))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.5f5ca68b.chunk.js.map