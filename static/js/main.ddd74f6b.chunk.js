(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,n){e.exports=n(207)},119:function(e,t,n){},120:function(e,t,n){},132:function(e,t,n){},134:function(e,t){},207:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(4),c=n.n(o),i=(n(119),n(28)),l=n(29),u=n(31),s=n(30),m=n(32),p=n(59),d=n(34),h=(n(120),n(121),n(110)),f=(n(208),n(60)),b=(n(129),n(106)),g=(n(111),n(82)),v=n(109),E=(n(132),n(133)),j=10,y="https://randomuser.me/api/?results=".concat(j,"&inc=name,gender,email,nat&noinfo"),O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={initLoading:!0,loading:!1,data:[],list:[]},n.getData=function(e){E({url:y,type:"json",method:"get",contentType:"application/json",success:function(t){e(t)}})},n.onLoadMore=function(){var e=Object(v.a)(new Array(j)).map(function(){return{loading:!0,name:{}}});n.setState({loading:!0,list:n.state.data.concat(e)}),n.getData(function(e){var t=n.state.data.concat(e.results);n.setState({data:t,list:t,loading:!1},function(){window.dispatchEvent(new Event("resize"))})})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getData(function(t){e.setState({initLoading:!1,data:t.results,list:t.results})})}},{key:"render",value:function(){var e=this.state,t=e.initLoading,n=e.loading,a=e.list,o=t||n?null:r.a.createElement("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"}},r.a.createElement(g.a,{onClick:this.onLoadMore},"loading more"));return r.a.createElement("div",{className:"home"},r.a.createElement(f.a,{className:"demo-loadmore-list",loading:t,itemLayout:"horizontal",loadMore:o,dataSource:a,renderItem:function(e){return r.a.createElement(f.a.Item,null,r.a.createElement(h.a,{avatar:!0,title:!1,loading:e.loading,active:!0},r.a.createElement(f.a.Item.Meta,{avatar:r.a.createElement(b.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:r.a.createElement("a",{href:"https://ant.design"},e.name.last),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"})))}}))}}]),t}(a.Component),w=n(79),k=n.n(w),x=n(107);function D(e){return function(t){function n(e){var t;return Object(i.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).state={component:null},t}return Object(m.a)(n,t),Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=Object(x.a)(k.a.mark(function t(){var n,a;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,a=n.default,this.setState({component:a});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?r.a.createElement(e,this.props):null}}]),n}(a.Component)}var C=D(function(){return n.e(4).then(n.bind(null,209))}),L=D(function(){return n.e(5).then(n.bind(null,210))}),A=D(function(){return n.e(3).then(n.bind(null,211))}),M=[{name:"\u9996\u9875",path:"/home"},{name:"\u539f\u521b",path:"/original"},{name:"\u8f6c\u8f7d",path:"/reprint"},{name:"\u968f\u7b14",path:"/essay"}],N={backgroundColor:"white",color:"blue"},S=function(){return r.a.createElement("header",{className:"header"},M.map(function(e,t){return r.a.createElement(p.b,{to:e.path,activeStyle:N,key:t},e.name)}))},I=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",null,"\u7248\u6743\u6240\u6709"))},T=function(){return r.a.createElement("main",{className:"content"},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:O}),r.a.createElement(d.b,{path:"/home",component:O}),r.a.createElement(d.b,{path:"/original",component:C}),r.a.createElement(d.b,{path:"/reprint",component:L}),r.a.createElement(d.b,{path:"/essay",component:A}),r.a.createElement(d.a,{to:"/"})))},z=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"root"},r.a.createElement(S,null),r.a.createElement(T,null),r.a.createElement(I,null))}}]),t}(a.PureComponent),B=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(z,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[114,1,2]]]);
//# sourceMappingURL=main.ddd74f6b.chunk.js.map