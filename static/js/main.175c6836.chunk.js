(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/photo.c76fd7ba.png"},18:function(e,t,a){e.exports=a(33)},24:function(e,t,a){},28:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(15),s=a.n(l),o=a(35),r=a(36),c=a(5),d=a(6),m=a(8),p=a(7),u=a(9),h=a(34),g=(a(24),a(16)),b=a.n(g),f=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container-fluid",style:{justifyContent:"center",alignItems:"center",paddingBottom:100,paddingLeft:0,paddingRight:0,paddingTop:0,marginBottom:0,backgroundColor:"white"}},i.a.createElement("nav",{className:"navbar navbar-expand-sm fixed-top bg-color navbar-dark",style:{backgroundColor:"#4197AB",marginBottom:20,paddingBottom:"20px",padding:"0 5rem 9"}},i.a.createElement(h.a,{className:"navbar-brand",to:"/",activeclassname:"active",style:{paddingBottom:"10px"}},"My Car Maintenance"),i.a.createElement("p",{className:"subtitle",to:"/",activeclassname:"active",style:{color:"black",marginTop:"auto",marginBottom:"auto",height:"75%"}},"Keep your car running smoothly"),i.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},i.a.createElement("ul",{className:"navbar-nav"}))),i.a.createElement("div",{style:{overflow:"scroll",height:50,backgroundColor:"white"}},i.a.createElement("img",{src:b.a,className:"center",alt:"Logo",style:{height:225,width:300,marginBottom:20,marginTop:2}})))}}]),t}(i.a.Component),y=a(3);var k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={mileage:0,trim:"trimChoice",models:[i.a.createElement("option",{key:0,value:"modelChoice"},"Choose a Model")],years:[i.a.createElement("option",{key:0,value:"yearChoice"},"Choose a Year")],trims:[i.a.createElement("option",{key:0,value:"trimChoice"},"Choose a Trim Level")]},a.addOne=a.addOne.bind(Object(y.a)(Object(y.a)(a))),a.routeChange=a.routeChange.bind(Object(y.a)(Object(y.a)(a))),console.log(a.state),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"routeChange",value:function(){var e=this;this.setState({models:0,years:0,trims:0},function(){return e.props.history.push({pathname:"../results",state:e.state})})}},{key:"addOne",value:function(){var e=this,t=document.getElementById("makeInput"),a=document.getElementById("modelInput"),n=document.getElementById("yearInput"),l=document.getElementById("trimInput"),s=document.getElementById("mileageInput");if(this.setState({make:t.value,model:a.value,year:n.value,trim:l.value,mileage:s.value},function(){return console.log(e.state)}),"Mazda"===t.value&&"modelChoice"===a.value?this.setState({models:[i.a.createElement("option",{key:0,value:"modelChoice"},"Choose a Model"),i.a.createElement("option",{key:1,value:"MX-5 Miata"},"MX-5 Miata")]}):"MX-5 Miata"===a.value&&"yearChoice"===n.value?this.setState({years:[i.a.createElement("option",{key:0,value:"yearChoice"},"Choose a Year"),i.a.createElement("option",{key:1,value:"1990"},"1990"),i.a.createElement("option",{key:2,value:"1991"},"1991"),i.a.createElement("option",{key:3,value:"1992"},"1992"),i.a.createElement("option",{key:4,value:"1993"},"1993"),i.a.createElement("option",{key:5,value:"1994"},"1994"),i.a.createElement("option",{key:6,value:"1995"},"1995"),i.a.createElement("option",{key:7,value:"1996"},"1996"),i.a.createElement("option",{key:8,value:"1997"},"1997")]}):"1994"===n.value||"1995"===n.value||"1996"===n.value||"1997"===n.value?this.setState({trims:[i.a.createElement("option",{key:0,value:"trimChoice"},"Choose a Trim Level"),i.a.createElement("option",{key:1,value:"1.8L I4"},"1.8L I4")]}):"1990"!==n.value&&"1991"!==n.value&&"1992"!==n.value&&"1993"!==n.value||this.setState({trims:[i.a.createElement("option",{key:0,value:"trimChoice"},"Choose a Trim Level"),i.a.createElement("option",{key:1,value:"1.6L I4"},"1.6L I4")]}),"yearChoice"===n.value?this.setState({trims:[i.a.createElement("option",{key:0,value:"trimChoice"},"Choose a Trim Level")]}):"modelChoice"===a.value?this.setState({years:[i.a.createElement("option",{key:0,value:"yearChoice"},"Choose a Year")],trims:[i.a.createElement("option",{key:0,value:"trimChoice"},"Choose a Trim Level")]}):"makeChoice"===t.value&&this.setState({models:[i.a.createElement("option",{key:0,value:"modelChoice"},"Choose a Model")],years:[i.a.createElement("option",{key:0,value:"yearChoice"},"Choose a Year")],trims:[i.a.createElement("option",{key:0,value:"trimChoice"},"Choose a Trim Level")]}),"trimChoice"!==l.value&&""!==s.value)document.getElementById("submitButton")}},{key:"changeItem",value:function(){var e=document.getElementById("mileageInput");console.log(e.value)}},{key:"render",value:function(){var e;e="#D3D3D3",document.body.style.background=e;var t=(""!==this.state.mileage||this.state.mileage>0)&&"trimChoice"!==this.state.trim;return i.a.createElement("div",{className:"container-fluid",style:{backgroundColor:"#D3D3D3",overflow:"scroll",width:"100%",padding:0,margin:0,height:"100%"}},i.a.createElement("div",{className:"text-center",style:{backgroundColor:"white",width:"100%",height:"100%",padding:0,margin:0}},i.a.createElement("h1",null,"My Car Maintenance"),i.a.createElement("hr",{width:"50%"}),i.a.createElement("br",null),i.a.createElement(h.a,{to:"about",className:"btn btn-primary btn-lg"},"About Us"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null)),i.a.createElement("br",null),i.a.createElement("div",{className:"text-center",style:{backgroundColor:"#D3D3D3",width:"100%",height:"100%",padding:0,margin:0}},i.a.createElement("h2",null," Enter Your Information To Get Maintenance Recommendations"),i.a.createElement("div",{className:"jumbotron text-start",style:{justifyContent:"center",alignItems:"center",width:"75%",marginLeft:"auto",marginRight:"auto",backgroundColor:"#DBEEF4",borderRadius:"5px",boxShadow:"10px 10px 10px grey",paddingBottom:35,paddingRight:15}},i.a.createElement("form",{style:{width:"93%",marginLeft:"auto",marginRight:"auto"}},i.a.createElement("div",{style:{float:"left",display:"inline-block",marginRight:25,textAlign:"left",paddingTop:"10px"}},i.a.createElement("label",{htmlFor:"name"},"Make: "),i.a.createElement("br",null),i.a.createElement("select",{id:"makeInput",name:"make",onChange:this.addOne},i.a.createElement("option",{value:"makeChoice"},"Choose a Make"),i.a.createElement("option",{value:"Mazda"},"Mazda"))),i.a.createElement("div",{style:{float:"left",display:"inline-block",marginRight:25,textAlign:"left",paddingTop:"10px"}},i.a.createElement("label",{htmlFor:"name"},"Model: "),i.a.createElement("br",null),i.a.createElement("select",{id:"modelInput",name:"model",onChange:this.addOne},this.state.models)),i.a.createElement("div",{style:{float:"left",display:"inline-block",marginRight:25,textAlign:"left",paddingTop:"10px"}},i.a.createElement("label",{htmlFor:"name"},"Year: "),i.a.createElement("br",null),i.a.createElement("select",{id:"yearInput",name:"year",onChange:this.addOne},this.state.years)),i.a.createElement("div",{style:{float:"left",display:"inline-block",marginRight:25,textAlign:"left",paddingTop:"10px"}},i.a.createElement("label",{htmlFor:"name"},"Trim: "),i.a.createElement("br",null),i.a.createElement("select",{id:"trimInput",name:"trim",onChange:this.addOne},this.state.trims)),i.a.createElement("div",{style:{float:"left",display:"inline-block",textAlign:"left",marginRight:0,paddingTop:"10px"}},i.a.createElement("label",{htmlFor:"name"},"Mileage: "),i.a.createElement("br",null),i.a.createElement("input",{id:"mileageInput",type:"text",style:{width:"100%"},onChange:this.addOne}))),i.a.createElement("br",null),i.a.createElement("div",{className:"text-right",style:{marginRight:0,marginTop:"100px",paddingRight:15,paddingTop:30}},i.a.createElement("button",{id:"submitButton",className:"btn btn-primary btn-lg",style:{width:"120px"},onClick:this.routeChange,disabled:!t},"Go")))))}}]),t}(i.a.Component);var v=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return document.body.style.background="white",i.a.createElement("div",{className:"container-fluid",style:{width:"100%",height:"100%",backgroundColor:"white",paddingBottom:30}},i.a.createElement("div",{className:"text-center",style:{padding:"2rem 5rem",width:"50%",marginTop:30,marginLeft:"auto",marginRight:"auto",backgroundColor:"#D3D3D3",borderRadius:"5px",boxShadow:"10px 10px 10px grey"}},i.a.createElement("h1",null,"About Us"),i.a.createElement("hr",null),i.a.createElement("p",null,"Here at My Car Maintenance, we believe that everyone should be able to keep their car running well all of the time, regardless of their technical capability."),i.a.createElement("p",null,"You can enter information about your car into our system, and we\u2019ll tell you what maintenance you should do on your car to keep it in top shape."),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{style:{width:"25%",marginLeft:"auto",marginRight:"auto"}},i.a.createElement(h.a,{to:"home",className:"btn btn-primary btn-lg",style:{width:"120px"}},"Back"))))}}]),t}(i.a.Component),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state=a.props.location.state,a.state={width:0,height:0,make:a.props.location.state.make,model:a.props.location.state.model,year:a.props.location.state.year,mileage:a.props.location.state.mileage,maintenance:[["5,000","Replace engine oil and filter; lubricate locks and hinges"],["10,000","Replace engine oil and filter; lubricate locks and hinges"],["15,000","Replace engine oil and filter; inspect (or clean/replace) air filter element; inspect brakes and pads; tighten bolts and nuts on chassis and body; lubricate locks and hinges"],["20,000","Replace engine oil and filter; lubricate locks and hinges"],["25,000","Replace engine oil and filter; lubricate locks and hinges"],["30,000","Major service: Replace engine oil and filter; inspect drive belts; replace air cleaner element; replace spark plugs; inspect idle speed adjustment; inspect fuel lines; inspect cooling system and replace coolant; inspect brake lines, hoses and connections; inspect brakes and pads; inspect steering operation and linkages; inspect front suspension ball joints; replace transmission oil; replace rear axle (differential) oil; tighten bolts and nuts on chassis and body; inspect exhaust system heat shield; lubricate locks and hinges"],["35,000","Replace engine oil and filter; lubricate locks and hinges"],["40,000","Replace engine oil and filter; lubricate locks and hinges"],["45,000","Replace engine oil and filter; inspect (or clean/replace) air filter element; inspect brakes and pads; tighten bolts and nuts on chassis and body; lubricate locks and hinges"],["50,000","Replace engine oil and filter; lubricate locks and hinges"],["55,000","Replace engine oil and filter; lubricate locks and hinges"],["60,000","Major service: Replace engine oil and filter; inspect drive belts; replace air cleaner element; replace timing belt; replace spark plugs; inspect idle speed adjustment; replace fuel filter; inspect fuel lines; inspect cooling system and replace coolant; inspect brake lines, hoses and connections; inspect brakes and pads; inspect steering operation and linkages; inspect front suspension ball joints; replace transmission oil; replace rear axle (differential) oil; tighten bolts and nuts on chassis and body; inspect exhaust system heat shield; lubricate locks and hinges; inspect A/C refrigerant amount and compressor"],["65,000","Replace engine oil and filter; lubricate locks and hinges"],["70,000","Replace engine oil and filter; lubricate locks and hinges"],["75,000","Replace engine oil and filter; inspect (or clean/replace) air filter element; inspect brakes and pads; tighten bolts and nuts on chassis and body; lubricate locks and hinges"],["80,000","Replace engine oil and filter; lubricate locks and hinges"],["85,000","Replace engine oil and filter; lubricate locks and hinges"],["90,000","Major service: Replace engine oil and filter; inspect drive belts; replace air cleaner element; replace spark plugs; inspect idle speed adjustment; inspect fuel lines; inspect cooling system and replace coolant; inspect brake lines, hoses and connections; inspect brakes and pads; inspect steering operation and linkages; inspect front suspension ball joints; replace transmission oil; replace rear axle (differential) oil; tighten bolts and nuts on chassis and body; inspect exhaust system heat shield; lubricate locks and hinges"],["95,000","Replace engine oil and filter; lubricate locks and hinges"],["100,000","Replace engine oil and filter; lubricate locks and hinges"],["105,000","Replace engine oil and filter; inspect (or clean/replace) air filter element; inspect brakes and pads; tighten bolts and nuts on chassis and body; lubricate locks and hinges"],["110,000","Replace engine oil and filter; lubricate locks and hinges"],["115,000","Replace engine oil and filter; lubricate locks and hinges"],["120,000","Major service: Replace engine oil and filter; inspect drive belts; replace air cleaner element; replace timing belt; replace spark plugs; inspect idle speed adjustment; replace fuel filter; inspect fuel lines; inspect cooling system and replace coolant; inspect brake lines, hoses and connections; inspect brakes and pads; inspect steering operation and linkages; inspect front suspension ball joints; replace transmission oil; replace rear axle (differential) oil; tighten bolts and nuts on chassis and body; inspect exhaust system heat shield; lubricate locks and hinges; inspect A/C refrigerant amount and compressor"],["125,000","Replace engine oil and filter; lubricate locks and hinges"],["130,000","Replace engine oil and filter; lubricate locks and hinges"],["135,000","Replace engine oil and filter; inspect (or clean/replace) air filter element; inspect brakes and pads; tighten bolts and nuts on chassis and body; lubricate locks and hinges"],["140,000","Replace engine oil and filter; lubricate locks and hinges"],["145,000","Replace engine oil and filter; lubricate locks and hinges"],["150,000","Major service: Replace engine oil and filter; inspect drive belts; replace air cleaner element; replace spark plugs; inspect idle speed adjustment; inspect fuel lines; inspect cooling system and replace coolant; inspect brake lines, hoses and connections; inspect brakes and pads; inspect steering operation and linkages; inspect front suspension ball joints; replace transmission oil; replace rear axle (differential) oil; tighten bolts and nuts on chassis and body; inspect exhaust system heat shield; lubricate locks and hinges"],["155,000","Replace engine oil and filter; lubricate locks and hinges"],["160,000","Replace engine oil and filter; lubricate locks and hinges"],["165,000","Replace engine oil and filter; inspect (or clean/replace) air filter element; inspect brakes and pads; tighten bolts and nuts on chassis and body; lubricate locks and hinges"],["170,000","Replace engine oil and filter; lubricate locks and hinges"],["175,000","Replace engine oil and filter; lubricate locks and hinges"],["180,000","Major service: Replace engine oil and filter; inspect drive belts; replace air cleaner element; replace timing belt; replace spark plugs; inspect idle speed adjustment; replace fuel filter; inspect fuel lines; inspect cooling system and replace coolant; inspect brake lines, hoses and connections; inspect brakes and pads; inspect steering operation and linkages; inspect front suspension ball joints; replace transmission oil; replace rear axle (differential) oil; tighten bolts and nuts on chassis and body; inspect exhaust system heat shield; lubricate locks and hinges; inspect A/C refrigerant amount and compressor"],["185,000","Replace engine oil and filter; lubricate locks and hinges"],["190,000","Replace engine oil and filter; lubricate locks and hinges"],["195,000","Replace engine oil and filter; inspect (or clean/replace) air filter element; inspect brakes and pads; tighten bolts and nuts on chassis and body; lubricate locks and hinges"],["200,000","Replace engine oil and filter; lubricate locks and hinges"],["205,000","Replace engine oil and filter; lubricate locks and hinges"],["210,000","Major service: Replace engine oil and filter; inspect drive belts; replace air cleaner element; replace spark plugs; inspect idle speed adjustment; inspect fuel lines; inspect cooling system and replace coolant; inspect brake lines, hoses and connections; inspect brakes and pads; inspect steering operation and linkages; inspect front suspension ball joints; replace transmission oil; replace rear axle (differential) oil; tighten bolts and nuts on chassis and body; inspect exhaust system heat shield; lubricate locks and hinges"],["215,000","Replace engine oil and filter; lubricate locks and hinges"],["220,000","Replace engine oil and filter; lubricate locks and hinges"],["225,000","Replace engine oil and filter; inspect (or clean/replace) air filter element; inspect brakes and pads; tighten bolts and nuts on chassis and body; lubricate locks and hinges"],["230,000","Replace engine oil and filter; lubricate locks and hinges"],["235,000","Replace engine oil and filter; lubricate locks and hinges"],["240,000","Major service: Replace engine oil and filter; inspect drive belts; replace air cleaner element; replace timing belt; replace spark plugs; inspect idle speed adjustment; replace fuel filter; inspect fuel lines; inspect cooling system and replace coolant; inspect brake lines, hoses and connections; inspect brakes and pads; inspect steering operation and linkages; inspect front suspension ball joints; replace transmission oil; replace rear axle (differential) oil; tighten bolts and nuts on chassis and body; inspect exhaust system heat shield; lubricate locks and hinges; inspect A/C refrigerant amount and compressor"]]},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(y.a)(Object(y.a)(a))),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e=void 0,t=void 0,a=void 0,n=!1,l=this.state.maintenance,s=this.props.location.state.mileage,o=void 0;console.log(l),console.log(this.state);for(var r=0;r<l.length;r++){var c=l[r][0];if(c=c.split(",").join(""),Math.abs(s-c)<=1e3&&s<=c){n=!0,o=r;break}}return console.log(n),console.log(o),a=n?i.a.createElement("div",null,i.a.createElement("b",null,i.a.createElement("h1",null,"Next maintenance item: ")),i.a.createElement("br",null),i.a.createElement("h2",null,"Description:"),i.a.createElement("p",{style:{width:"50%",marginRight:"auto",marginLeft:"auto"}}," ",l[r][1]),i.a.createElement("h2",null,"Complete maintenance by: ",l[r][0]," miles")):i.a.createElement("div",null,i.a.createElement("b",null,i.a.createElement("h1",null,"Congratulations!")),i.a.createElement("br",null),i.a.createElement("h2",null,"You have no upcoming maintenance in the next 1,000 miles."),i.a.createElement("br",null)," ",i.a.createElement("br",null),i.a.createElement("p",null,"Please check back in 1,000 miles for an update on upcoming maintenance"),i.a.createElement("br",null)," ",i.a.createElement("br",null)),this.state.width>666?(e=i.a.createElement(h.a,{to:{pathname:"../allResults",state:this.state},className:"btn btn-primary btn-lg",style:{marginLeft:40,marginRight:40,marginBottom:40,float:"left",width:140}},"View All"),t=i.a.createElement(h.a,{to:"home",className:"btn btn-primary btn-lg",style:{marginRight:40,marginLeft:40,marginBottom:40,float:"right",width:140}}," Start Over")):(e=i.a.createElement(h.a,{to:{pathname:"../allResults",state:this.state},className:"btn btn-primary btn-lg",style:{marginBottom:40,float:"left",width:140}},"View All"),t=i.a.createElement(h.a,{to:"home",className:"btn btn-primary btn-lg",style:{marginBottom:40,float:"right",width:140}}," Start Over")),i.a.createElement("div",{className:"text-center",style:{padding:"2rem 5rem",width:"100%",marginLeft:"auto",marginRight:"auto",display:"inline-block",backgroundColor:"#D3D3D3",height:"80%"}},i.a.createElement("h1",null,"Your Car:  ")," ",i.a.createElement("h3",null,this.props.location.state.year," ",this.props.location.state.make," ",this.props.location.state.model," ",this.props.location.state.trim,", ",this.props.location.state.mileage," miles"),i.a.createElement("div",{className:"jumbotron text-start",style:{justifyContent:"center",alignItems:"center",backgroundColor:"#DBEEF4",borderRadius:"5px",boxShadow:"10px 10px 10px grey",paddingBottom:100,marginBottom:20}},a,e,t))}}]),t}(i.a.Component),w=a(13),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state=a.props.location.state,a.state={width:0,height:0,make:a.props.location.state.make,model:a.props.location.state.model,year:a.props.location.state.year,mileage:a.props.location.state.mileage,maintenance:a.props.location.state.maintenance},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(y.a)(Object(y.a)(a))),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e=void 0,t=void 0,a=this.state.maintenance.map(function(e){return console.log(e),i.a.createElement("tr",{style:{borderBottom:"1px solid-black",borderCollapse:"collapse"}},i.a.createElement("td",null,e[0]),i.a.createElement("td",null,e[1]),i.a.createElement("hr",null))});return this.state.width>666?(e=i.a.createElement(h.a,{to:{pathname:"../results",state:this.state},className:"btn btn-primary btn-lg",style:{marginLeft:40,marginRight:40,marginBottom:40,float:"left",width:140}},"Back"),t=i.a.createElement(h.a,{to:"home",className:"btn btn-primary btn-lg",style:{marginRight:40,marginLeft:40,marginBottom:40,float:"right",width:140}}," Start Over")):(e=i.a.createElement(h.a,{to:{pathname:"../results",state:this.state},className:"btn btn-primary btn-lg",style:Object(w.a)({marginLeft:"auto",marginRight:"auto",width:"75%",marginBottom:40,float:"left"},"width",140)},"View All"),t=i.a.createElement(h.a,{to:"home",className:"btn btn-primary btn-lg",style:Object(w.a)({marginLeft:"auto",marginRight:"auto",width:"75%",marginBottom:40,float:"right"},"width",140)}," Start Over")),i.a.createElement("div",{className:"text-center",style:{padding:"2rem 5rem",width:"100%",marginLeft:"auto",marginRight:"auto",display:"inline-block",backgroundColor:"#D3D3D3",height:"80%"}},i.a.createElement("h1",null,"Your Car:  ")," ",i.a.createElement("h3",null,this.props.location.state.year," ",this.props.location.state.make," ",this.props.location.state.model," ",this.props.location.state.trim,", ",this.props.location.state.mileage," miles"),i.a.createElement("div",{className:"jumbotron text-start",style:{justifyContent:"center",alignItems:"center",backgroundColor:"#DBEEF4",borderRadius:"5px",boxShadow:"10px 10px 10px grey",paddingBottom:100,marginBottom:20}},i.a.createElement("table",{style:{width:"91%",marginLeft:"auto",marginRight:"auto",height:214,textAlign:"left",borderBottom:"1px solid-black",overflow:"scroll",borderCollapse:"collapse"}},i.a.createElement("thead",null,i.a.createElement("tr",{className:"top"},i.a.createElement("th",null,"Mileage"),i.a.createElement("th",null,"Maintenance Item"))),i.a.createElement("tbody",null,a)),i.a.createElement("br",null)," ",i.a.createElement("br",null),e,t))}}]),t}(i.a.Component);a(28),a(30);s.a.render(i.a.createElement(o.a,{basename:"/cs356-desktop"},i.a.createElement("div",null,i.a.createElement(r.a,{path:"/",component:f}),i.a.createElement(r.a,{exact:!0,path:"/",component:k}),i.a.createElement(r.a,{exact:!0,path:"/about",component:v}),i.a.createElement(r.a,{exact:!0,path:"/home",component:k}),i.a.createElement(r.a,{exact:!0,path:"/results",component:E}),i.a.createElement(r.a,{exact:!0,path:"/allResults",component:C}))),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.175c6836.chunk.js.map