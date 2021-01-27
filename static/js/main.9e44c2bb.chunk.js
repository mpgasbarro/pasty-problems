(this["webpackJsonppasty-problems"]=this["webpackJsonppasty-problems"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(1),a=n.n(i),o=n(10),c=n.n(o),r=(n(24),n(3)),l=n(4),u=n(2),h=n(6),d=n(5),j=(n(25),n(26),function(){return Object(s.jsx)("div",{className:"homeContainer",children:Object(s.jsx)("header",{children:Object(s.jsx)("h1",{className:"homeText",children:" Pasty Problems "})})})}),b=(n(37),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).onPress=function(e){"SkinType 1"===e.target.innerText?setTimeout(function(){this.setState({showBurnTime1:!0})}.bind(Object(u.a)(s)),2e3):"SkinType 2"===e.target.innerText?setTimeout(function(){this.setState({showBurnTime2:!0})}.bind(Object(u.a)(s)),2e3):"SkinType 3"===e.target.innerText?setTimeout(function(){this.setState({showBurnTime3:!0})}.bind(Object(u.a)(s)),2e3):"SkinType 4"===e.target.innerText?setTimeout(function(){this.setState({showBurnTime4:!0})}.bind(Object(u.a)(s)),2e3):"SkinType 5"===e.target.innerText?setTimeout(function(){this.setState({showBurnTime5:!0})}.bind(Object(u.a)(s)),2e3):"SkinType 6"===e.target.innerText&&setTimeout(function(){this.setState({showBurnTime6:!0})}.bind(Object(u.a)(s)),2e3)},s.state={uvIndex:"",lat:s.props.lat,long:s.props.long,showBurnTime1:!1,showBurnTime2:!1,showBurnTime3:!1,showBurnTime4:!1,showBurnTime5:!1,showBurnTime6:!1},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.state.lat,n=this.state.long,s="https://api.openuv.io/api/v1/uv?lat=".concat(t,"&lng=").concat(n);fetch(s,{method:"GET",headers:{"content-type":"application/json","x-access-token":"".concat("7469fa7008ca4c729b71acc469c72468")}}).then((function(e){return e.json()})).then((function(t){e.setState({uvIndex:t})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"skinTypeContainer",children:[Object(s.jsx)("h2",{id:"skinQuestion",children:" What is your skin type? "}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{id:"skinBox1",children:[Object(s.jsxs)("button",{className:"skinType",id:"skinType1",onClick:this.onPress,children:[" ","SkinType 1"," "]}),Object(s.jsx)("h6",{children:"Very fair skin, white; red or blond hair; light-colored eyes; freckles likely"})]}),Object(s.jsxs)("div",{id:"skinBox2",children:[Object(s.jsxs)("button",{className:"skinType",id:"skinType2",onClick:this.onPress,children:[" ","SkinType 2"," "]}),Object(s.jsx)("h6",{children:"Fair skin, white; light eyes; light hair."})]})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{id:"skinBox3",children:[Object(s.jsxs)("button",{className:"skinType",id:"skinType3",onClick:this.onPress,children:[" ","SkinType 3"," "]}),Object(s.jsxs)("h6",{children:[" ","Fair skin, cream white; any eye or hair color (very common skin type)"," "]})]}),Object(s.jsxs)("div",{id:"skinBox4",children:[Object(s.jsxs)("button",{className:"skinType",id:"skinType4",onClick:this.onPress,children:[" ","SkinType 4"," "]}),Object(s.jsxs)("h6",{children:[" ","Olive skin, typical Mediterranean Caucasian skin; dark brown hair; medium to heavy pigmentation"," "]})]})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{id:"skinBox5",children:[Object(s.jsxs)("button",{className:"skinType",id:"skinType5",onClick:this.onPress,children:[" ","SkinType 5"," "]}),Object(s.jsx)("h6",{children:"Brown skin, typical Middle Eastern skin; dark hair; rarely sun sensitive"})]}),Object(s.jsxs)("div",{id:"skinBox6",children:[Object(s.jsxs)("button",{className:"skinType",id:"skinType6",onClick:this.onPress,children:[" ","SkinType 6"," "]}),Object(s.jsx)("h6",{children:" Black skin; rarely sun sensitive"})]})]}),this.state.showBurnTime1&&Object(s.jsxs)("h3",{className:"uvInfo",children:[" ","The UV Level is currently at ",this.state.uvIndex.result.uv,", meaning as a VERY fair skinned individual, you will burn in"," ",this.state.uvIndex.result.safe_exposure_time.st1," minutes"]}),this.state.showBurnTime2&&Object(s.jsxs)("h3",{className:"uvInfo",children:[" ","The UV Level is currently at ",this.state.uvIndex.result.uv,", meaning as a fair skinned individual, you will burn in"," ",this.state.uvIndex.result.safe_exposure_time.st2," minutes"," "]}),this.state.showBurnTime3&&Object(s.jsxs)("h3",{className:"uvInfo",children:[" ","The UV Level is currently at ",this.state.uvIndex.result.uv,", meaning as a creamed skinned individual, you will burn in"," ",this.state.uvIndex.result.safe_exposure_time.st3," minutes"," "]}),this.state.showBurnTime4&&Object(s.jsxs)("h3",{className:"uvInfo",children:["The UV Level is currently at ",this.state.uvIndex.result.uv,", meaning as an olive skinned individual, you will burn in"," ",this.state.uvIndex.result.safe_exposure_time.st4," minutes"]}),this.state.showBurnTime5&&Object(s.jsxs)("h3",{className:"uvInfo",children:[" ","The UV Level is currently at ",this.state.uvIndex.result.uv,", meaning as an brown skinned individual, you will burn in"," ",this.state.uvIndex.result.safe_exposure_time.st5," minutes"," "]}),this.state.showBurnTime6&&Object(s.jsxs)("h3",{className:"uvInfo",children:[" ","The UV Level is currently at ",this.state.uvIndex.result.uv,", meaning as an black skinned individual, you will burn in"," ",this.state.uvIndex.result.safe_exposure_time.st6," minutes"," "]})]})}}]),n}(i.Component)),m=(n(38),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).onClose=function(t){e.props.onClose&&e.props.onClose(t)},e}return Object(l.a)(n,[{key:"render",value:function(){return this.props.showModal?Object(s.jsxs)("div",{className:"modal",id:"modal",children:[Object(s.jsx)("h2",{children:" Welcome to Pasty Problems!"}),Object(s.jsx)("div",{class:"content",children:this.props.children}),Object(s.jsx)("div",{class:"actions",children:Object(s.jsx)("div",{children:Object(s.jsx)("button",{class:"toggle-button",onClick:this.onClose,children:"close"})})})]}):null}}]),n}(a.a.Component)),p=(n(39),"http://www.mapquestapi.com/geocoding/v1/address?key=".concat("plg35TrBNDTQ5WNoBSfXSA3RqCvJMgFd")),x=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).showModal=function(e){s.setState({showModal1:!s.state.showModal1})},s.onChange=function(e){s.setState({inputVal:e.target.value})},s.onSubmit=function(e){e.preventDefault(),fetch("".concat(p,"&location=").concat(s.state.inputVal),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){s.setState({lat:e.results[0].locations[0].latLng.lat,long:e.results[0].locations[0].latLng.lng,map:e.results[0].locations[0].mapUrl}),setTimeout(function(){this.setState({showUvIndex:!0})}.bind(Object(u.a)(s)),3e3)})).catch((function(e){console.error(e)}))},s.state={lat:"",long:"",inputVal:"",map:null,showUvIndex:!1,showModal1:!1},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"mainContainer",children:[Object(s.jsxs)("header",{className:"headerContainer",children:[Object(s.jsx)(j,{className:"homeClass"}),Object(s.jsxs)("button",{className:"aboutButton",onClick:function(t){e.showModal(t)},children:["About"," "]}),Object(s.jsx)("div",{id:"modalFont",children:Object(s.jsx)(m,{onClose:this.showModal,showModal:this.state.showModal1,children:"The sun is roughly 91.534 million miles away and yet, has the audacity to burn us all. As a pasty individual myself, the struggle is real. Enter your location below and follow the prompts, to see how long you should be staying out in the sun, before getting burned."})})]}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("form",{className:"inputContainer",children:[Object(s.jsx)("input",{type:"text",value:this.state.inputVal,placeHolder:"Your Location",id:"inputBox",onChange:this.onChange}),Object(s.jsxs)("button",{className:"aboutButton",onClick:this.onSubmit,children:[" ","enter"," "]})]}),this.state.map&&Object(s.jsx)("div",{className:"locationContainer",children:Object(s.jsx)("img",{id:"locationPic",src:this.state.map,alt:"picture of the input location"})})]}),Object(s.jsx)("div",{children:this.state.showUvIndex&&Object(s.jsx)(b,{lat:this.state.lat,long:this.state.long})}),Object(s.jsx)("div",{})]})}}]),n}(i.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),i(e),a(e),o(e)}))};c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),v()}},[[40,1,2]]]);
//# sourceMappingURL=main.9e44c2bb.chunk.js.map