(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),i=(a(15),a(1)),o=a(2),s=a(4),f=a(3),v=a(5),d=(a(17),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{style:{padding:"30px"}},l.a.createElement("h1",null,"Welcome to Public Coffee"))}}]),t}(n.Component)),p=a(8),u=a.n(p),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).coffeeLevel=a.props.levels.coffeeLevel,a.waterLevel=a.props.levels.waterLevel,a.btnStyle={minWidth:"60%",fontSize:"21px",margin:"10px",border:"5px",borderColor:"#C24225",background:"#C24225",color:"#FFF",padding:"15px 30px",cursor:"pointer",display:"block"},a}return Object(v.a)(t,e),Object(o.a)(t,[{key:"addCoffee",value:function(){this.coffeeLevel>=100?alert("Max coffee level reached: ".concat(this.coffeeLevel)):this.checkAndUpdateLevels({coffeeLevel:this.coffeeLevel+5})}},{key:"addWater",value:function(){this.waterLevel>=200?alert("Max Water level reached: ".concat(this.waterLevel)):this.checkAndUpdateLevels({waterLevel:this.waterLevel+10})}},{key:"dispenseCoffee",value:function(){var e,t;this.coffeeLevel>5&&this.waterLevel>10?(this.checkAndUpdateLevels({coffeeLevel:this.coffeeLevel-5,waterLevel:this.waterLevel-10}),alert("You're served, an amazing cup of Coffee ! Enjoy.")):(e=this.coffeeLevel<=5,t=this.waterLevel<=10,alert("Low Supplies: Please add ".concat(e?"Coffee":"").concat(e&&t?" and ":"").concat(t?"Water":"",", to continue.")))}},{key:"checkAndUpdateLevels",value:function(e){var t=e.coffeeLevel,a=e.waterLevel,n=t||this.coffeeLevel,l=a||this.waterLevel;this.props.updateLevels({coffeeLevel:n,waterLevel:l})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("button",{type:"button",style:this.btnStyle,onClick:this.addCoffee.bind(this)},"Add Coffee"),l.a.createElement("button",{type:"button",style:this.btnStyle,onClick:this.addWater.bind(this)},"Add Water"),l.a.createElement("button",{type:"button",style:this.btnStyle,onClick:this.dispenseCoffee.bind(this)},"Make Coffee"))}}]),t}(n.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e={minWidth:"40%",fontSize:"21px",margin:"10px",color:"#C24225"};return l.a.createElement("div",{style:{border:"1px solid",borderRadius:"5px",borderColor:"#C24225",width:"85%"}},l.a.createElement("p",{style:e},"Coffee level: ",this.props.levels.coffeeLevel),l.a.createElement("p",{style:e},"Water level: ",this.props.levels.waterLevel))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).colWidth={width:"33.11vw"},a}return Object(v.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"50px 5px"}},l.a.createElement("div",{style:this.colWidth},l.a.createElement(b,{levels:this.props.levels})),l.a.createElement("div",{style:this.colWidth},l.a.createElement("img",{src:u.a,style:{width:"100%"},alt:"Coffee Machines"})),l.a.createElement("div",{style:this.colWidth},l.a.createElement(h,{levels:this.props.levels,updateLevels:this.props.updateLevels})))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={levels:{coffeeLevel:100,waterLevel:200}},a}return Object(v.a)(t,e),Object(o.a)(t,[{key:"updateLevels",value:function(e){this.setState({levels:e})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement(y,{levels:this.state.levels,updateLevels:this.updateLevels.bind(this)}))}}]),t}(n.Component);c.a.render(l.a.createElement(L,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a.p+"static/media/machine.3ae41ef7.png"},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.5eb4cdfd.chunk.js.map