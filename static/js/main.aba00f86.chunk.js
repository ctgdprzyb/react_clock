(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),a=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),m=(n(12),n(0)),h=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={currentTime:(new Date).toUTCString().slice(-12,-4)},e.timerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({currentTime:(new Date).toUTCString().slice(-12,-4)}),console.info(e.state.currentTime)}),1e3)}},{key:"componentDidUpdate",value:function(e){e.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:this.state.currentTime})]})}}]),n}(u.a.Component);function k(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var d=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={clockName:"Clock-0",hasClock:!0},e.timerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({clockName:k()})}),3300),document.addEventListener("contextmenu",(function(t){t.preventDefault(),e.hideClock()})),document.addEventListener("click",(function(){e.showClock()}))}},{key:"componentWillUnmount",value:function(){var e=this;window.clearInterval(this.timerId),document.removeEventListener("contextmenu",(function(t){t.preventDefault(),e.setState({hasClock:!1})})),document.removeEventListener("click",(function(){e.setState({hasClock:!0})}))}},{key:"showClock",value:function(){this.setState({hasClock:!0})}},{key:"hideClock",value:function(){this.setState({hasClock:!1})}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(m.jsx)(h,{clockName:this.state.clockName})]})}}]),n}(u.a.Component);o.a.render(Object(m.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.aba00f86.chunk.js.map