(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{246:function(e,t){},255:function(e,t){},273:function(e,t){},275:function(e,t){},294:function(e,t){},295:function(e,t){},358:function(e,t){},360:function(e,t){},393:function(e,t){},395:function(e,t){},396:function(e,t){},401:function(e,t){},403:function(e,t){},409:function(e,t){},411:function(e,t){},424:function(e,t){},436:function(e,t){},439:function(e,t){},444:function(e,t){},452:function(e,t){},461:function(e,t){},463:function(e,t){},533:function(e,t,n){},534:function(e,t,n){"use strict";n.r(t);var c,r,a,o,i,s,l,d,u,p,x,h,j,b,f,g,O=n(1),m=n(85),y=n.n(m),v=n(16),C=n.n(v),w=n(43),E=n(69),A=n(14),S=n(58),T=n(68),N=n.n(T),_=n(220),k=n.n(_),M=n(70),D=n(221),I=n(19),L={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},L),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},L),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},e),{},{account:t.payload.account});default:return e}},P={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},P),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},K=Object(M.b)({blockchain:R,data:F}),U=[D.a],W=Object(M.c)(M.a.apply(void 0,U)),B=Object(M.d)(K,W),Y=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},z=function(){return function(){var e=Object(w.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,B.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(Y("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},H=function(e){return{type:"CONNECTION_FAILED",payload:e}},G=function(e){return function(){var t=Object(w.a)(C.a.mark((function t(n){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(z());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},J=n(15),q=J.a.div(c||(c=Object(A.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),Q=J.a.div(r||(r=Object(A.a)(["\n  height: 8px;\n  width: 8px;\n"]))),X=J.a.div(a||(a=Object(A.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=J.a.div(o||(o=Object(A.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=J.a.div(i||(i=Object(A.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=J.a.div(s||(s=Object(A.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),ee=J.a.p(l||(l=Object(A.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),te=(J.a.p(d||(d=Object(A.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),J.a.p(u||(u=Object(A.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),ne=(J.a.div(p||(p=Object(A.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(2)),ce=J.a.button(x||(x=Object(A.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),re=(J.a.button(h||(h=Object(A.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),J.a.div(j||(j=Object(A.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"])))),ae=J.a.img(b||(b=Object(A.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),oe=J.a.img(f||(f=Object(A.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),ie=J.a.a(g||(g=Object(A.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var se=function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.blockchain})),n=Object(S.c)((function(e){return e.data})),c=Object(O.useState)(!1),r=Object(E.a)(c,2),a=r[0],o=r[1],i=Object(O.useState)("Click buy to mint your NFT."),s=Object(E.a)(i,2),l=s[0],d=s[1],u=Object(O.useState)(1),p=Object(E.a)(u,2),x=p[0],h=(p[1],Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1})),j=Object(E.a)(h,2),b=j[0],f=j[1],g=function(){""!==t.account&&null!==t.smartContract&&e(z(t.account))},m=function(){var e=Object(w.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,f(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.useEffect)((function(){m()}),[]),Object(O.useEffect)((function(){g()}),[t.account]),Object(ne.jsx)(q,{children:Object(ne.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:b.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(ne.jsx)(ae,{alt:"logo",src:"/config/images/logo.png"}),Object(ne.jsx)(X,{}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)",paddingBottom:"1em",maxWidth:"600px"},children:[Object(ne.jsx)("p",{style:{fontSize:20},children:"JEEPNEY RUSH?"}),Object(ne.jsx)("p",{children:"It's 10,000 one-of-a-kind jeepney type collection."}),Object(ne.jsxs)("p",{children:["Each trait is meticulously crafted, then generated by an algorithm to create unique art pieces and hold a special ability. When someone mints a JEEP, that person's wallet address get added to a ",Object(ne.jsx)("u",{children:"gift list"}),"."]}),Object(ne.jsx)("br",{}),Object(ne.jsx)("p",{children:"What's a gift list?"}),Object(ne.jsx)("p",{children:"Every mint kicks off a process where someone's wallet address gets randomly selected from the list. The 30% of the NFT cost is transferred to the person's wallet automatically."}),Object(ne.jsx)("br",{}),Object(ne.jsx)("p",{children:"The more mint you have, the more times your wallet address gets added to the list."}),Object(ne.jsx)("p",{children:"Wait there's more! The very last mint one person recieves the ultimate gift. 5% (vary based on the NFT price) of the entire contract's balance."})]}),Object(ne.jsxs)(re,{flex:1,style:{padding:24},test:!0,children:[Object(ne.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(ne.jsx)(oe,{alt:"example",src:"/config/images/example.gif"})}),Object(ne.jsx)(Z,{}),Object(ne.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)",paddingBottom:"1em",maxWidth:"600px"},children:Object(ne.jsxs)("p",{style:{marginTop:"1em",fontSize:15},children:["You can free mint "," JEEP when you hold",Object(ne.jsx)(ie,{target:"_blank",href:"https://oasis.cash/wallet/0xE138eA5464A36Ba6f8Cf0d7538942FC5234ED930",children:" SmartBCH DP "}),"or ",Object(ne.jsx)(ie,{target:"_blank",href:"https://oasis.cash/collection/0x669765aE975d4BeA5C557E2639968D91b9f85056",children:" Cryptobug"})," NFT. ",Object(ne.jsx)("br",{}),"Click ",Object(ne.jsx)(ie,{target:"_blank",href:"https://jeepney-rush-vip.onrender.com/",children:"here"})]})}),Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[n.totalSupply," / ",b.MAX_SUPPLY]}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)"}}),Object(ne.jsx)(X,{}),Number(n.totalSupply)>=b.MAX_SUPPLY?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",b.NFT_NAME," on"]}),Object(ne.jsx)(X,{}),Object(ne.jsx)(ie,{target:"_blank",href:b.MARKETPLACE_LINK,children:b.MARKETPLACE})]}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsxs)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",b.SYMBOL," costs ",b.DISPLAY_COST," ",b.NETWORK.SYMBOL,"."]}),Object(ne.jsx)(Q,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(ne.jsx)(X,{}),""===t.account||null===t.smartContract?Object(ne.jsxs)($,{ai:"center",jc:"center",children:[Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",b.NETWORK.NAME," network"]}),Object(ne.jsx)(X,{}),Object(ne.jsx)(ce,{onClick:function(t){t.preventDefault(),e(function(){var e=Object(w.a)(C.a.mark((function e(t){var n,c,r,a,o,i,s,l,d;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=e.sent,e.next=12,r.json();case 12:if(a=e.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){e.next=33;break}return N.a.setProvider(i),s=new k.a(i),e.prev=18,e.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,i.request({method:"net_version"});case 24:e.sent==a.NETWORK.ID?(d=new N.a(c,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(e){t(G(e[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(H("Change network to ".concat(a.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(H("Something went wrong."));case 31:e.next=34;break;case 33:t(H("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),g()},children:"CONNECT"}),""!==t.errorMsg?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(X,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:t.errorMsg})]}):null]}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:l}),Object(ne.jsx)(V,{}),Object(ne.jsx)(X,{}),Object(ne.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(ne.jsx)(ce,{disabled:a?1:0,onClick:function(n){n.preventDefault(),function(){var n=b.WEI_COST,c=b.GAS_LIMIT,r=String(n*x),a=String(c*x);console.log("Cost: ",r),console.log("Gas limit: ",a),d("Minting your ".concat(b.NFT_NAME,"...")),o(!0),t.smartContract.methods.mint().send({gasLimit:String(a),to:b.CONTRACT_ADDRESS,from:t.account,value:r}).once("error",(function(e){console.log(e),d("Sorry, something went wrong please try again later."),o(!1)})).then((function(n){console.log(n),d("WOW, the ".concat(b.NFT_NAME," is yours! go visit Oasis.cash to view it.")),o(!1),e(z(t.account))}))}(),g()},children:a?"BUSY":"BUY"})})]})]}),Object(ne.jsx)(V,{})]}),Object(ne.jsx)(Z,{}),Object(ne.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(ne.jsx)(oe,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(ne.jsx)(V,{}),Object(ne.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",b.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(ne.jsx)(X,{}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",b.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,538)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};n(533);y.a.render(Object(ne.jsx)(S.a,{store:B,children:Object(ne.jsx)(se,{})}),document.getElementById("root")),le()}},[[534,1,2]]]);
//# sourceMappingURL=main.4b9c77a7.chunk.js.map