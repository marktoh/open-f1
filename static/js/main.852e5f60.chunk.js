(this["webpackJsonpweb-app"]=this["webpackJsonpweb-app"]||[]).push([[0],{37:function(e,a,t){e.exports=t(71)},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},63:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(14),o=t.n(c),l=(t(42),t(43),t(9)),i=t(10),s=t(12),m=t(11),u=t(13),d=(t(44),function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("div",{className:"Header-Title"},"Formula 1"),r.a.createElement("div",{className:"Header-Description"},"Season Overview"))}}]),a}(r.a.Component)),f=t(23),p=t.n(f),v=t(36),y=t(16),h=t(24),E=t.n(h),N=t(74),b=t(75),O=t(73),j=t(76),g=(t(63),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={lat:t.props.lat,lng:t.props.long,zoom:6},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=[this.state.lat,this.state.lng];return r.a.createElement(N.a,{center:e,zoom:this.state.zoom},r.a.createElement(b.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}),r.a.createElement(O.a,{position:e},r.a.createElement(j.a,null,this.props.content)))}}]),a}(r.a.Component)),I=(t(66),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).getTime=function(e,a){return e&&a?E()("".concat(e,"T").concat(a)).format("LLLL"):a?void 0:E()(e).format("LL")},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.season,t=e.raceName,n=e.raceUrl,c=e.round,o=e.locality,l=e.country,i=e.circuitName,s=e.circuitUrl,m=e.lat,u=e.long,d=e.date,f=e.time;return r.a.createElement("div",{className:"VisualItem"},r.a.createElement("div",{className:"VisualItem-Header"},r.a.createElement("div",{className:"VisualItem-Header-Left"},r.a.createElement("div",{className:"RaceInfo-Primary"},"SEASON ",a),r.a.createElement("div",{className:"RaceInfo-Secondary"},r.a.createElement("div",{className:"RaceInfo-Secondary-Content"},r.a.createElement("div",{className:"RaceInfo-Secondary-RaceName"},t),r.a.createElement("a",{className:"RaceInfo-Secondary-RaceNameRedirect",href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(y.a,null)))),r.a.createElement("div",{className:"RaceInfo-Tertiary"},r.a.createElement("div",{className:"RaceInfo-Tertiary-Content"},r.a.createElement("div",{className:"RaceInfo-Tertiary-Round"},"ROUND ",c),r.a.createElement("div",{className:"Divider"}," | "),r.a.createElement("div",{className:"RaceInfo-Tertiary-Location"},r.a.createElement("span",{className:"RaceInfo-Tertiary-Location-Locality"},o),",",r.a.createElement("span",{className:"RaceInfo-Tertiary-Location-Country"},l)))),r.a.createElement("div",{className:"RaceInfo-Quarternary"},r.a.createElement("div",{className:"RaceInfo-Tertiary-Temporal"},this.getTime(d,f)))),r.a.createElement("div",{className:"VisualItem-Header-Right"})),r.a.createElement("div",{className:"VisualItem-Body"},r.a.createElement("div",{className:"VisualItem-Body-Object"},r.a.createElement("div",{className:"VisualItem-Body-Object-Header"}),r.a.createElement("div",{className:"VisualItem-Body-Object-Body"},r.a.createElement(g,{lat:m,long:u,content:i})),r.a.createElement("div",{className:"VisualItem-Body-Object-Footer"},r.a.createElement("a",{className:"VisualItem-Body-Object-Footer-CircuitName",href:s,target:"_blank",rel:"noopener noreferrer"},i)))))}}]),a}(r.a.Component)),R=(t(67),function(e){function a(e){var t;Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).componentDidUpdate=function(e,a){a.year!==t.state.year&&p.a.get("https://ergast.com/api/f1/".concat(t.state.year,".json")).then((function(e){return t.setState({data:e.data})}))},t.componentDidMount=function(){p.a.get("https://ergast.com/api/f1/".concat(t.state.year,".json")).then((function(e){return t.setState({data:e.data})}))},t.onSelect=function(e){t.setState({year:e.value})},t.renderItems=function(){return t.state.data.length<=0?r.a.createElement("div",{className:"Body-Placeholder"}):t.state.data.MRData.RaceTable.Races.map((function(e){var a=e.season,t=e.round,n=e.url,c=e.raceName,o=e.date,l=e.time,i=e.Circuit,s=i.url,m=i.circuitName,u=i.Location,d=u.lat,f=u.long,p=u.locality,v=u.country;return r.a.createElement("div",{className:"Body-Body-Row",key:t},r.a.createElement(I,{season:a,round:t,raceName:c,raceUrl:n,circuitName:m,circuitUrl:s,lat:d,long:f,locality:p,country:v,date:o,time:l}))}))},t.state={year:(new Date).getFullYear(),data:[]};for(var n=[],c=1950;c<=t.state.year;c++)n.push({value:c,label:c});return t.options=n.reverse(),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Body"},r.a.createElement("div",{className:"Body-Header"},r.a.createElement("div",{className:"Search"},r.a.createElement("div",{className:"Search-Title"},"Currently showing results for"),r.a.createElement(v.a,{className:"Search-Dropdown",value:{label:this.state.year,value:this.state.year},options:this.options,onChange:this.onSelect,placeholder:"Select a year",maxMenuHeight:210}))),r.a.createElement("div",{className:"Body-Body"},this.renderItems()))}}]),a}(r.a.Component)),k=(t(70),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).onIconClick=function(e){window.open(e,"_blank")},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Footer"},r.a.createElement("div",{className:"Footer-Left"},r.a.createElement("span",{className:"Footer-Insignia"},"Property of Mumbo Inc.")),r.a.createElement("div",{className:"Footer-Right"},r.a.createElement("div",{className:"Footer-SocialMedia"},r.a.createElement(y.c,{onClick:function(){return e.onIconClick("https://www.linkedin.com/in/mark-toh/")}}),r.a.createElement(y.b,{onClick:function(){return e.onIconClick("https://github.com/marktoh")}}))))}}]),a}(r.a.Component));var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(R,null),r.a.createElement(k,null))};o.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.852e5f60.chunk.js.map