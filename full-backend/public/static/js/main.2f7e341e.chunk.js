(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{125:function(e,a,t){e.exports=t.p+"static/media/super-hero-logo.defad421.png"},127:function(e,a,t){e.exports=t.p+"static/media/foldedReceipt.74851893.jpg"},128:function(e,a,t){e.exports=t.p+"static/media/receiptPhoto.a36910a9.jpg"},131:function(e,a,t){e.exports=t.p+"static/media/darkenedbg.3455302b.jpg"},139:function(e,a,t){e.exports=t.p+"static/media/vegetables-stall-868110.aed51470.jpg"},162:function(e,a,t){e.exports=t(199)},167:function(e,a,t){},171:function(e,a,t){},193:function(e,a,t){},194:function(e,a,t){},195:function(e,a,t){},198:function(e,a,t){},199:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),o=t.n(l),c=(t(167),t(21)),i=(t(168),t(170),t(18)),s=t(49),u=(t(171),t(30)),m=t.n(u),d=t(237),p=t(236),h=t(264),g=t(243),f=t(238),b=t(244),E=t(256),v=t(5),y=t(57);var C=function(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 Super-Hero ",(new Date).getFullYear(),".")},x=t(140),j=t(235),O=Object(x.a)({palette:{primary:{500:"#313746"}},status:{danger:"red"}}),k=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{width:"380px",height:"260px"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))((function(e){var a=e.classes,t=(e.setCurrentUser,Object(n.useState)("")),l=Object(c.a)(t,2),o=l[0],i=l[1],s=Object(n.useState)(""),u=Object(c.a)(s,2),v=u[0],x=u[1];return r.a.createElement(j.a,{theme:O},r.a.createElement(p.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{container:!0,justify:"flex-start"},r.a.createElement(y.a,{component:"h1",variant:"h5",color:"Primary"},"Sign In"))),r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:function(e){return x(e.target.value)}}),r.a.createElement(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return i(e.target.value)}}),r.a.createElement(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(e){e.preventDefault();var a="http://localhost:5000/signin";console.log("full path",a),m.a.post(a,{username:v,password:o}).then((function(e){console.log(e.data),0===e.data.length?alert("wrong username or password dudes!"):(localStorage.setItem("currentUser",JSON.stringify(e.data[0])),window.location="#/userMenu")}))}},"Sign In"),r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{container:!0,justify:"flex-end"},r.a.createElement(b.a,{href:"/signUp",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(E.a,{mt:8},r.a.createElement(C,null))))})),S=t(126),N=t(246),w=t(245),T=t(127),P=t.n(T),A=t(128),R=t.n(A),D=t(78),U=t.n(D),I=t(247),G=Object(x.a)({palette:{primary:{main:"#313746"},secondary:{main:"#ffffff"}},status:{danger:"red"}}),F=Object(S.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8),display:"flex",flexDirection:"row",justifyContent:"space-around"},card:{height:"200px",width:"260px",display:"flex",flexDirection:"column"},cardMedia:{height:"80%",display:"flex",justifyContent:"center"},cardContent:{paddingTop:e.spacing(16)},text:{textDecoration:"none"},cardFooter:{height:"20%",backgroundColor:"#313746",paddingTop:"6px",paddingBottom:"6px",display:"flex",justifyContent:"center"}}}));function B(){var e=F();return r.a.createElement(j.a,{theme:G},r.a.createElement(d.a,null),r.a.createElement("main",null,r.a.createElement(p.a,{maxWidth:"md"},r.a.createElement(y.a,{variant:"h4",color:"Primary"},"What would you like to do?")),r.a.createElement(p.a,{className:e.cardGrid,maxWidth:"md"},r.a.createElement(f.a,null,r.a.createElement(b.a,{component:i.b,to:"/upload"},r.a.createElement(w.a,{className:e.card},r.a.createElement(N.a,{className:e.cardMedia,image:P.a,title:"uploadReceipt"},r.a.createElement(f.a,{className:e.cardContent},r.a.createElement(y.a,{variant:"body1",color:"Secondary",className:e.text},"Earn 1 credit"))),r.a.createElement(I.a,{className:e.cardFooter},r.a.createElement(y.a,{variant:"h5",color:"secondary"},"Upload Receipt"))))),r.a.createElement(f.a,null,r.a.createElement(b.a,{underline:"none",component:i.b,to:"/insert-receipt"},r.a.createElement(w.a,{className:e.card},r.a.createElement(N.a,{className:e.cardMedia,image:R.a,title:"translateReceipt"},r.a.createElement(f.a,{className:e.cardContent},r.a.createElement(y.a,{variant:"body1",color:"Secondary"},"Earn 1 credit"))),r.a.createElement(I.a,{className:e.cardFooter},r.a.createElement(y.a,{variant:"h5",color:"secondary"},"Fill Receipt Content"))))),r.a.createElement(f.a,null,r.a.createElement(b.a,{underline:"none",component:i.b,to:"/create-shopping-cart"},r.a.createElement(w.a,{className:e.card},r.a.createElement(N.a,{className:e.cardMedia,image:U.a,title:"createShoppingCart"},r.a.createElement(f.a,{className:e.cardContent},r.a.createElement(y.a,{variant:"body1",color:"Secondary"},"Use 2 credits"))),r.a.createElement(I.a,{className:e.cardFooter},r.a.createElement(y.a,{variant:"h5",color:"secondary"},"Create Shopping Cart")))))),r.a.createElement(E.a,{mt:8},r.a.createElement(C,null))))}var L=Object(x.a)({palette:{primary:{main:"#313746"},secondary:{main:"#ffffff"},textSecondary:{main:"#70757a"}},status:{danger:"red"}}),W=Object(S.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8),display:"flex",flexDirection:"row",justifyContent:"space-around"},card:{height:"100%",width:"270px",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"30%",display:"flex",justifyContent:"center"},cardContent:{flexGrow:1},text:{textAlign:"center"},cardFooter:{backgroundColor:"#313746",paddingTop:"6px",paddingBottom:"6px"}}}));function z(e){for(var a=W(),t=Object(n.useState)(!1),l=Object(c.a)(t,2),o=l[0],i=l[1],s=function(){i(!o)},u=0,m=[],h=[],b=0;b<e.Result.length;b++){u+=e.Result[b].price,m.push(e.Result[b].store);for(var v=0;v<e.Result[b].products;v++)h.push(e.Result[b].products[v])}return r.a.createElement(j.a,{theme:L},r.a.createElement(d.a,null),r.a.createElement("main",null,r.a.createElement(p.a,{maxWidth:"md"},r.a.createElement(y.a,{variant:"h4",color:"Primary"},"Here's your optimal buying solution!"),r.a.createElement(y.a,{variant:"h5",color:"primary"},"Overall Price: ",u," $")),r.a.createElement(p.a,{className:a.cardGrid,maxWidth:"md"},!o&&e.Result.map((function(e,t){return r.a.createElement(f.a,{item:!0,value:t,xs:10,sm:4,md:3},r.a.createElement(w.a,{className:a.card},r.a.createElement(N.a,{className:a.cardMedia,image:U.a,title:"createShoppingCart"},r.a.createElement(f.a,null,r.a.createElement(y.a,{variant:"h5",color:"Secondary",className:a.text},e.store))),r.a.createElement(I.a,{className:a.cardContent},e.products.map((function(e,a){return r.a.createElement(y.a,{value:a,color:"Primary"},e)}))),r.a.createElement(I.a,{className:a.cardFooter},r.a.createElement(y.a,{value:t,variant:"body1",color:"secondary"},"Overall: ",e.price," $"))))}))),r.a.createElement(E.a,{align:"center"},r.a.createElement(g.a,{size:"medium",variant:"contained",color:"primary",onClick:function(){return i(s)}},o?"Close":"See full carts")),r.a.createElement(E.a,{pt:4},r.a.createElement(C,null))))}var M=t(10),H=t(19),Y=t(17),q=t(24),K=t(25),J=t(13),V=t(26),$=(t(193),function(e){function a(e){var t;return Object(H.a)(this,a),(t=Object(q.a)(this,Object(K.a)(a).call(this,e))).state={hightlight:!1},t.fileInputRef=r.a.createRef(),t.openFileDialog=t.openFileDialog.bind(Object(J.a)(t)),t.onFilesAdded=t.onFilesAdded.bind(Object(J.a)(t)),t.onDragOver=t.onDragOver.bind(Object(J.a)(t)),t.onDragLeave=t.onDragLeave.bind(Object(J.a)(t)),t.onDrop=t.onDrop.bind(Object(J.a)(t)),t}return Object(V.a)(a,e),Object(Y.a)(a,[{key:"openFileDialog",value:function(){this.props.disabled||this.fileInputRef.current.click()}},{key:"onFilesAdded",value:function(e){if(!this.props.disabled){var a=e.target.files;if(this.props.onFilesAdded){var t=this.fileListToArray(a);this.props.onFilesAdded(t)}}}},{key:"onDragOver",value:function(e){e.preventDefault(),this.props.disabed||this.setState({hightlight:!0})}},{key:"onDragLeave",value:function(e){this.setState({hightlight:!1})}},{key:"onDrop",value:function(e){if(e.preventDefault(),!this.props.disabed){var a=e.dataTransfer.files;if(this.props.onFilesAdded){var t=this.fileListToArray(a);this.props.onFilesAdded(t)}this.setState({hightlight:!1})}}},{key:"fileListToArray",value:function(e){for(var a=[],t=0;t<e.length;t++)a.push(e.item(t));return a}},{key:"render",value:function(){return r.a.createElement("div",{className:"Dropzone ".concat(this.state.hightlight?"Highlight":""),onDragOver:this.onDragOver,onDragLeave:this.onDragLeave,onDrop:this.onDrop,onClick:this.openFileDialog,style:{cursor:this.props.disabled?"default":"pointer"}},r.a.createElement("input",{ref:this.fileInputRef,className:"FileInput",type:"file",multiple:!0,onChange:this.onFilesAdded}),r.a.createElement("img",{alt:"upload",className:"Icon",src:"baseline-cloud_upload-24px.svg"}),r.a.createElement("span",null,"Upload Files"))}}]),a}(n.Component)),Q=(t(194),t(195),function(e){function a(e){var t;return Object(H.a)(this,a),(t=Object(q.a)(this,Object(K.a)(a).call(this,e))).state={},t}return Object(V.a)(a,e),Object(Y.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ProgressBar"},r.a.createElement("div",{className:"Progress",style:{width:this.props.progress+"%"}}))}}]),a}(n.Component)),_=t(22),X=t(54),Z=t(52),ee=function(e){function a(e){var t;return Object(H.a)(this,a),(t=Object(q.a)(this,Object(K.a)(a).call(this,e))).state={files:[],uploading:!1,uploadProgress:{},successfullUploaded:!1,sid:"",sum:0},t.onFilesAdded=t.onFilesAdded.bind(Object(J.a)(t)),t.renderActions=t.renderActions.bind(Object(J.a)(t)),t.handleChange=t.handleChange.bind(Object(J.a)(t)),t.clickHandler=t.clickHandler.bind(Object(J.a)(t)),t}return Object(V.a)(a,e),Object(Y.a)(a,[{key:"onFilesAdded",value:function(e){this.setState((function(a){return{files:a.files.concat(e)}}))}},{key:"clickHandler",value:function(e){console.log("hey my hame is shir"),console.log(this.state)}},{key:"handleChange",value:function(e){var a=this;return function(t){console.log("hello here i changed"),a.setState(Object(M.a)({},e,t.target.value))}}},{key:"renderProgress",value:function(e){var a=this.state.uploadProgress[e.name];if(this.state.uploading||this.state.successfullUploaded)return r.a.createElement("div",{className:"ProgressWrapper"},r.a.createElement(Q,{progress:a?a.percentage:0}),r.a.createElement("img",{className:"CheckIcon",alt:"done",src:"baseline-check_circle_outline-24px.svg",style:{opacity:a&&"done"===a.state?.5:0}}))}},{key:"renderActions",value:function(){return this.state.successfullUploaded?r.a.createElement("button",{onClick:this.clickHandler},"Clear"):r.a.createElement("button",{onClick:this.clickHandler},"Upload")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Botton"},r.a.createElement("div",{className:"TopSpace"},r.a.createElement(_.a,null,r.a.createElement(_.a.Group,{as:X.a,controlId:"formHorizontalEmail"},r.a.createElement(_.a.Label,{column:!0,sm:2},"Total Price:"),r.a.createElement(Z.a,{sm:10},r.a.createElement(_.a.Control,{onChange:this.handleChange("sum"),type:"Price",placeholder:"Total Price"}))),r.a.createElement(_.a.Group,{as:X.a,controlId:"formGridState"},r.a.createElement(_.a.Label,{as:"legend",column:!0,sm:2},"Store"),r.a.createElement(Z.a,{sm:10,className:k.checkBox},["SuperYoda","Shufersal Ramat Aviv","SuperYoda Tel-Aviv","SuperYoda East Tel-Aviv","Shufersal Ramat-Gan","SuperYoda South","Rami Levy TLV Center"].map((function(e){return r.a.createElement(X.a,null,r.a.createElement(_.a.Check,{type:"checkbox",label:e}))})))),r.a.createElement(_.a.Group,{as:X.a}))),r.a.createElement("div",{className:"Upload"},r.a.createElement("span",{className:"Title"},"Upload Files"),r.a.createElement("div",{className:"Content"},r.a.createElement("div",null,r.a.createElement($,{onFilesAdded:this.onFilesAdded,disabled:this.state.uploading||this.state.successfullUploaded})),r.a.createElement("div",{className:"Files"},this.state.files.map((function(e){return r.a.createElement("div",{key:e.name,className:"Row"},r.a.createElement("span",{className:"Filename"},e.name))})))),r.a.createElement("div",{className:"Actions"},this.renderActions())))}}]),a}(n.Component),ae=t(265),te=t(266),ne=t(241),re=t(257),le=function(e,a,t){m.a.post("http://localhost:5000/register",{username:e,password:a,email:t},{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){console.log(e.status)})).catch((function(e){console.log(e.response.data)}))},oe=Object(x.a)({palette:{primary:{500:"#313746"}},status:{danger:"red"}}),ce=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{width:"380px",height:"260px"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},formControl:{margin:e.spacing(1),minWidth:380},selectEmpty:{marginTop:e.spacing(2)},contain:{backgroundImage:"url(".concat("https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",")"),backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"cover"}}}));function ie(){var e=Object(s.f)(),a=ce(),t=r.a.useState(""),l=Object(c.a)(t,2),o=l[0],i=l[1],u=r.a.useRef(null),v=r.a.useState(0),x=Object(c.a)(v,2),O=x[0],k=x[1],S=Object(n.useState)(""),N=Object(c.a)(S,2),w=N[0],T=N[1],P=Object(n.useState)(""),A=Object(c.a)(P,2),R=A[0],D=A[1],U=Object(n.useState)(""),I=Object(c.a)(U,2),G=I[0],F=I[1];r.a.useEffect((function(){k(u.current.offsetWidth)}),[]);return r.a.createElement(j.a,{theme:oe},r.a.createElement(p.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{container:!0,justify:"flex-start"},r.a.createElement(y.a,{component:"h1",variant:"h5",color:"Primary"},"Sign Up"))),r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(f.a,{container:!0,spacing:2},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"User Name",name:"useName",value:w,onChange:function(e){return T(e.target.value)},autoComplete:"username"})),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",value:G,onChange:function(e){return F(e.target.value)},name:"email",autoComplete:"email"})),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:R,onChange:function(e){return D(e.target.value)},autoComplete:"current-password"})),r.a.createElement(ne.a,{variant:"outlined",className:a.formControl},r.a.createElement(ae.a,{ref:u,id:"select-area-label"},"Area *"),r.a.createElement(re.a,{labelId:"select-area-label",id:"select-area",value:o,onChange:function(e){i(e.target.value)},labelWidth:O,autoWidth:!0},["Tel Aviv Center","Tel Aviv Old North","Florentin","Givataim"].map((function(e,a){return r.a.createElement(te.a,{value:a},e)}))))),r.a.createElement(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(){le(w,R,G),setTimeout((function(){!function(){var e="http://localhost:3000/signin?username="+w+"&password="+R;console.log("full path",e),m.a.post(e,{username:w,password:R}).then((function(e){console.log(e.data),0===e.data.length?alert("wrong username or password dudes!"):(localStorage.setItem("currentUser",JSON.stringify(e.data[0])),window.location="/userMenu")}))}()}),2e3),e.push("/userMenu")}},"Sign Up"),r.a.createElement(f.a,{container:!0,justify:"flex-end"},r.a.createElement(f.a,{item:!0},r.a.createElement(b.a,{href:"/signIn",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(E.a,{mt:5},r.a.createElement(C,null))))}var se=t(61),ue=t(248),me=t(249),de=t(134),pe=t(62),he=t(131),ge=t.n(he),fe=t(67),be=t.n(fe);function Ee(){var e=Object(se.a)(["\n  .jumbo {\n    background: url(",") no-repeat fixed bottom;\n    height: 0;\n    padding-bottom: 56.25%;\n    box-sizing: border-box;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: -2;\n    background-position: 50% 50%; \n    -webkit-background-size: cover; \n    -moz-background-size: cover; \n    -o-background-size: cover; \n    background-size: cover;\n    color: #efefef;\n  }\n  .content {\n    margin-top: 30px;\n    margin-left: 150px;\n    padding-right: 300px;\n    z-index: 0;\n   }\n  .innerContent {\n    padding-right: 100px;\n    margin-left: -10px;\n    z-index: 1;\n  }\n  .h1 {\n    font-size: 55px;\n  }\n  .itemIcon{\n    width:55px;\n    height:55px;\n  }\n  .button{\n    background-color: #313746;\n    color: #fff;\n    font-size: 25px;\n    z-index: 100;\n  }\n"]);return Ee=function(){return e},e}var ve=pe.a.div(Ee(),ge.a),ye=function(){return r.a.createElement(ve,null,r.a.createElement(ue.a,{fluid:!0,className:"jumbo"},r.a.createElement(me.a,{className:"content"},r.a.createElement("h1",{className:"h1"},r.a.createElement(be.a,{className:"itemIcon"}),"SUPER-HERO"),r.a.createElement("br",null),r.a.createElement("h1",{className:"h1"},"Find the cheapest shopping cart!"),r.a.createElement(me.a,{className:"innerContent"},r.a.createElement("h3",null,"Divide your groceries between several stores in your selected area. Upload receipts, and fill their information to earn credits")),r.a.createElement("br",null),r.a.createElement(de.a,{variant:"contained",href:"/signUp",className:"button"},"Sign up for free"))),r.a.createElement(C,null))},Ce=t(80),xe=t(2),je=t(141),Oe=(t(198),t(254)),ke=t(263),Se=t(250),Ne=t(252),we=t(253),Te=t(251),Pe=t(81),Ae=t.n(Pe),Re=t(258),De=Object(je.a)(g.a)({color:"#fff",backgroundColor:"#20639B",borderColor:"#20639B",marginRight:"10px"}),Ue=Object(v.a)((function(e){return{root:{margin:0,padding:e.spacing(2),minWidth:"400px"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},popRoot:{minWidth:"400px"}}}))((function(e){var a=e.children,t=e.classes,n=e.onClose,l=Object(xe.a)(e,["children","classes","onClose"]);return r.a.createElement(Se.a,Object.assign({disableTypography:!0,className:t.root},l),r.a.createElement(y.a,{variant:"h6"},a),n?r.a.createElement(Te.a,{"aria-label":"close",className:t.closeButton,onClick:n},r.a.createElement(Ae.a,null)):null)})),Ie=Object(v.a)((function(e){return{root:{padding:e.spacing(2)}}}))(Ne.a),Ge=Object(v.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(we.a),Fe=function(e){function a(e){var t;return Object(H.a)(this,a),(t=Object(q.a)(this,Object(K.a)(a).call(this,e))).state={numRow:0,filterText:"",products:t.props.withPrice?[{id:"0",name:"",price:"",qty:0}]:[{id:"0",name:"",qty:0}]},t}return Object(V.a)(a,e),Object(Y.a)(a,[{key:"handleRowDel",value:function(e){var a=this.state.products.indexOf(e);this.state.products.splice(a,1),this.setState(this.state.products)}},{key:"handleAddEvent",value:function(e){var a=(+new Date+Math.floor(999999*Math.random())).toString(36),t=1==this.props.withPrice?{id:a,name:"",price:"",qty:0}:{id:a,name:"",qty:0};this.state.products.push(t),this.setState(this.state.products),console.log("products",this.state.products)}},{key:"handleProductTable",value:function(e){var a={id:e.target.id,name:e.target.name,value:e.target.value},t=this.state.products.slice().map((function(e){for(var t in e)t==a.name&&e.id==a.id&&(e[t]=a.value);return e}));this.setState({products:t})}},{key:"handleProductTableName",value:function(e,a){var t={id:e.target.id.split("-")[0],value:a},n=this.state.products.slice().map((function(e){return e.id==t.id&&(e.name=t.value),e}));this.setState({products:n})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Be,{withPrice:this.props.withPrice,onProductTableUpdate:this.handleProductTable.bind(this),onProductTableUpdateName:this.handleProductTableName.bind(this),onRowAdd:this.handleAddEvent.bind(this),onRowDel:this.handleRowDel.bind(this),products:this.state.products,handleSubmit:this.props.handleSubmit,filterText:this.state.filterText}))}}]),a}(r.a.Component),Be=function(e){function a(e){var t;return Object(H.a)(this,a),(t=Object(q.a)(this,Object(K.a)(a).call(this,e))).handleClickOpen=function(){1==t.props.withPrice?(console.log("submit products",t.props.products),t.setState({isOpen:!0})):console.log("submit products",t.props.products)},t.handleClose=function(){t.setState({isOpen:!1})},t.state={isOpen:!1,popTitle:"Thank you!",popContent:"You earn 1 point"},t.handleClickOpen=t.handleClickOpen.bind(Object(J.a)(t)),t.handleClose=t.handleClose.bind(Object(J.a)(t)),t}return Object(V.a)(a,e),Object(Y.a)(a,[{key:"render",value:function(){var e=this.props.onProductTableUpdate,a=this.props.onProductTableUpdateName,t=this.props.onRowDel,n=this.props.withPrice,l=this.props.products.map((function(l){return r.a.createElement(Le,{withPrice:n,onProductTableUpdate:e,onProductTableUpdateName:a,product:l,onDelEvent:t.bind(this),key:l.id})}));return r.a.createElement("div",null,r.a.createElement("div",{className:"insertTable"},r.a.createElement("table",{id:"table",className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"text"},"Product Name"),r.a.createElement("th",{className:"text"},"Quantity"),this.props.withPrice&&r.a.createElement("th",{className:"text"},"Price"),r.a.createElement("th",null))),r.a.createElement("tbody",null,l))),r.a.createElement("div",null,r.a.createElement(De,{type:"button",onClick:this.props.onRowAdd},"Add Product "),r.a.createElement(De,{type:"button",onClick:this.props.handleSubmit(this.props.products)},"Submit"),r.a.createElement(ke.a,{onClose:this.handleClose,"aria-labelledby":"customized-dialog-title",open:this.state.isOpen},r.a.createElement(Ue,{id:"customized-dialog-title",onClose:this.handleClose},this.state.popTitle),r.a.createElement(Ie,{dividers:!0},r.a.createElement(y.a,{gutterBottom:!0},this.state.popContent)),r.a.createElement(Ge,null,r.a.createElement(g.a,{autoFocus:!0,onClick:this.handleClose,color:"primary"},"Ok Thanks!")))))}}]),a}(r.a.Component),Le=function(e){function a(){return Object(H.a)(this,a),Object(q.a)(this,Object(K.a)(a).apply(this,arguments))}return Object(V.a)(a,e),Object(Y.a)(a,[{key:"onDelEvent",value:function(){this.props.onDelEvent(this.props.product)}},{key:"render",value:function(){return r.a.createElement("tr",{className:"eachRow"},r.a.createElement("td",null,r.a.createElement(Re.a,{id:this.props.product.id,options:["Milk (1 Liter bottle)","Eggs","Ground Beef (Kilograms)","Water (1.5 Liter bottle)","Cream Cheese (250 Grams cup)","Bread (1 Loaf)","Potatoes (Kilograms)","Tomatoes (Kilograms)","Pasta (500 Grams pack)","Rice (400 Grams pack)","Apples (Kilograms)","Canned Tuna (4 pack)","Soy milk (1 Liter bottle)","Pringles (600 Grams can)","Bamba (70 Grams pack)","Bamba (200 Grams pack)"],name:"name",style:{width:300},onInputChange:this.props.onProductTableUpdateName,renderInput:function(e){return r.a.createElement(h.a,Object.assign({},e,{placeholder:"Product Name ",variant:"outlined",fullWidth:!0}))}})),r.a.createElement("td",null,r.a.createElement(h.a,{id:this.props.product.id,variant:"outlined",name:"qty",onChange:this.props.onProductTableUpdate,placeholder:"Quantity"})),this.props.withPrice&&r.a.createElement("td",null,r.a.createElement(h.a,{id:this.props.product.id,variant:"outlined",name:"price",onChange:this.props.onProductTableUpdate,placeholder:"Price",inputProps:{startAdornment:r.a.createElement(Oe.a,{position:"start"},"$")}})),r.a.createElement("td",null,r.a.createElement("input",{type:"button",onClick:this.onDelEvent.bind(this),value:"X",className:"del-btn",id:"delete"})))}}]),a}(r.a.Component),We=function(e,a){m.a.post("http://localhost:3000/OCR",e,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){var n;n=a,m.a.post("http://localhost:3000/earnCredits",{id:n},{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){console.log(e.status)})).catch((function(e){console.log(e.response.data)})),ze(e.rid),console.log(t.status)})).catch((function(e){console.log(e.response.data)}))},ze=function(e){m.a.post("http://localhost:3000/markRec",{id:e},{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){console.log(e.status)})).catch((function(e){console.log(e.response.data)}))},Me=function(e){function a(e){var t;return Object(H.a)(this,a),(t=Object(q.a)(this,Object(K.a)(a).call(this,e))).state={products:[]},t.handleChange=t.handleChange.bind(Object(J.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(J.a)(t)),t}return Object(V.a)(a,e),Object(Y.a)(a,[{key:"handleChange",value:function(e){var a=this;return function(t){a.setState(Object(M.a)({},e,t.target.value))}}},{key:"handleSubmit",value:function(e){var a=this;return function(t){a.setState({products:a.serializeProducts(e)});var n={shop:"SuperYuda",products:a.serializeProducts(e)};We(n,a.props.currentUser.id)}}},{key:"serializeProducts",value:function(e){return e.reduce((function(e,a){return Object(Ce.a)({},e,Object(M.a)({},a.name,parseInt(a.qty)*parseInt(a.price)))}),{})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(p.a,{component:"main"},r.a.createElement(d.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement("h1",{className:e.headline},"Insert Receipt"),r.a.createElement("div",{className:e.body},r.a.createElement("div",{className:e.img}),r.a.createElement("div",{className:e.form},r.a.createElement(Fe,{withPrice:!0,handleSubmit:this.handleSubmit})))))}}]),a}(r.a.Component),He=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},form:{width:"auto",flexGrow:2,height:"550px",padding:"10px",overflow:"scroll",border:"1px solid #20639B"},img:{width:"auto",flexGrow:1,height:"550px",padding:"10px",marginRight:"10px",border:"1px solid #20639B"},submit:{margin:e.spacing(3,0,2)},avatar:{minWidth:"100%",maxHeight:"100%"},body:{display:"flex"},headline:{color:"#20639B",paddingBottom:"30px"}}}))(Me),Ye=t(85),qe=t(44),Ke=t(239),Je=t(255),Ve=t(261),$e=Object(S.a)((function(e){return{formControl:{minWidth:120,maxWidth:300},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:e.spacing(3)},font:{fontWeight:"bold",color:"#20639B",lineHeight:"normal",paddingTop:"0px"}}})),Qe={PaperProps:{style:{maxHeight:224,width:250}}};function _e(e){var a=$e();Object(qe.a)();return r.a.createElement(ne.a,{className:a.formControl},r.a.createElement(re.a,{labelId:"demo-mutiple-checkbox-label",id:"demo-mutiple-checkbox",multiple:!0,value:e.StoreName,onChange:e.handleChangeStores,input:r.a.createElement(Ke.a,null),renderValue:function(e){return e.join(", ")},MenuProps:Qe},e.names.map((function(a){return r.a.createElement(te.a,{key:a,value:a},r.a.createElement(Ve.a,{checked:e.StoreName.indexOf(a)>-1}),r.a.createElement(Je.a,{primary:a}))}))))}Object(v.a)((function(e){return{root:{margin:0,padding:e.spacing(2),minWidth:"400px"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},popRoot:{minWidth:"400px"}}}))((function(e){var a=e.children,t=e.classes,n=e.onClose,l=Object(xe.a)(e,["children","classes","onClose"]);return r.a.createElement(Se.a,Object.assign({disableTypography:!0,className:t.root},l),r.a.createElement(y.a,{variant:"h6"},a),n?r.a.createElement(Te.a,{"aria-label":"close",className:t.closeButton,onClick:n},r.a.createElement(Ae.a,null)):null)})),Object(v.a)((function(e){return{root:{padding:e.spacing(2)}}}))(Ne.a),Object(v.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(we.a);var Xe={SuperYoda:1,"Shufersal Ramat Aviv":2,"SuperYoda Tel-Aviv":3,"SuperYoda East Tel-Aviv":4,"Shufersal Ramat-Gan":5,"SuperYoda South":6,"Rami Levy TLV Center":7},Ze={"Milk (1 Liter bottle)":1,Eggs:2,"Ground Beef (Kilograms)":3,"Water (1.5 Liter bottle)":4,"Cream Cheese (250 Grams cup)":5,"Bread (1 Loaf)":6,"Potatoes (Kilograms)":7,"Tomatoes (Kilograms)":8,"Pasta (500 Grams pack)":9,"Rice (400 Grams pack)":10,"Apples (Kilograms)":11,"Canned Tuna (4 pack)":12,"Soy milk (1 Liter bottle)":13,"Pringles (600 Grams can)":14,"Bamba (70 Grams pack)":15,"Bamba (200 Grams pack)":16};var ea=function(e,a,t,n,r){var l={basket:{},shopPrice:{},price:0},o=[];!function(e,a){var t;e.forEach((function(e){t=Xe[e],a.push(t)}))}(e,o);var c={};!function(e,a){for(var t in e)e.hasOwnProperty(t)&&(a[Ze[t]]=e[t])}(a,c),m.a.post("http://localhost:3000/getBasket",{maxSplits:t,shops:o,products:c},{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){var a;a=n,m.a.post("http://localhost:3000/payCredits",{id:a},{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){console.log(e.status)})).catch((function(e){console.log(e.response.data)})),function(e,a){a.price=e.price;for(var t,n,r,l=Object.keys(e.basket),o=function(o){if(0===e.shopPrice[l[o]])return"continue";t=Object.keys(Xe).find((function(e){return Xe[e]==l[o]})),a.basket[t]=e.basket[l[o]],a.shopPrice[t]=e.shopPrice[l[o]];for(var c=0;c<a.basket[t].length;c++)n=a.basket[t][c],r=Object.keys(Ze).find((function(e){return Ze[e]==n})),a.basket[t][c]=r},c=0;c<l.length;c++)o(c)}(e.data,l),console.log(l),console.log(e.data),localStorage.setItem("cartResult",JSON.stringify(l)),window.location="#/cartResult"}))},aa=function(e){function a(e){var t;return Object(H.a)(this,a),(t=Object(q.a)(this,Object(K.a)(a).call(this,e))).handleChangeStores=function(e){t.setState({StoreName:e.target.value}),console.log("storeName",t.state.StoreName)},t.findCart=function(e){e.preventDefault(),console.log(t.state.products),ea(t.state.StoreName,t.state.products,t.state.maxSplitAmount,t.props.currentUser.id,t.props.updateResult),window.location.pathname="#/cartResult"},t.handleClose=function(){},console.log("constructor"),t.state={maxSplitAmount:0,maximalDistanceFromLocation:0,area:"",StoreName:[],isOpen:!1,products:[]},t.handleChange=t.handleChange.bind(Object(J.a)(t)),t.handleChangeStores=t.handleChangeStores.bind(Object(J.a)(t)),t.findCart=t.findCart.bind(Object(J.a)(t)),t.handleClose=t.handleClose.bind(Object(J.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(J.a)(t)),t}return Object(V.a)(a,e),Object(Y.a)(a,[{key:"handleChange",value:function(e){var a=this;return function(t){a.setState(Object(M.a)({},e,t.target.value))}}},{key:"handleSubmit",value:function(e){var a=this;return function(t){console.log(a.serializeProducts(e)),a.setState({products:a.serializeProducts(e)})}}},{key:"serializeProducts",value:function(e){return e.reduce((function(e,a){return Object(Ce.a)({},e,Object(M.a)({},a.name,parseInt(a.qty)))}),{})}},{key:"render",value:function(){var e=this.props.classes,a={PaperProps:{style:{maxHeight:224,width:250}}};return r.a.createElement(p.a,{component:"main"},r.a.createElement(d.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement("h1",{className:e.headline},"Create Shopping Cart"),r.a.createElement("div",{className:e.body},r.a.createElement("div",{className:e.img},r.a.createElement(_.a,null,r.a.createElement(_.a.Group,{as:X.a,className:e.input,controlId:"formHorizontalEmail"},r.a.createElement(_.a.Label,{column:!0,sm:5,className:e.font},"Maximal Splits Amount"),r.a.createElement(Z.a,{sm:6},r.a.createElement(_.a.Control,{onChange:this.handleChange("maxSplitAmount")}))),r.a.createElement(_.a.Group,{as:X.a,className:e.input,controlId:"formHorizontalPassword"},r.a.createElement(_.a.Label,{column:!0,sm:5,className:e.font},"Maximal Distance From Location"),r.a.createElement(Z.a,{sm:6},r.a.createElement(Ye.a,null,r.a.createElement(Ye.a.Prepend,null,r.a.createElement(Ye.a.Text,{id:"inputGroupPrepend"},"Km")),r.a.createElement(_.a.Control,{type:"text","aria-describedby":"inputGroupPrepend",onChange:this.handleChange("maximalDistanceFromLocation")})))),r.a.createElement(_.a.Group,{as:X.a,controlId:"formGridState"},r.a.createElement(_.a.Label,{as:"legend",column:!0,sm:5,className:e.font},"Select Area")),r.a.createElement(_.a.Group,{as:X.a,controlId:"formGridState"},r.a.createElement(Z.a,{sm:6},r.a.createElement(ne.a,{className:e.formControl},r.a.createElement(re.a,{labelId:"demo-mutiple-checkbox-label",id:"demo-mutiple-checkbox",value:this.state.area,onChange:this.handleChange("area"),input:r.a.createElement(Ke.a,null),MenuProps:a},["Tel-Aviv North","Tel-Aviv East","Tel-Aviv South","Tel-Aviv West","Tel-Aviv Center","Ramat-Gan"].map((function(e){return r.a.createElement(te.a,{key:e,value:e},r.a.createElement(Je.a,{primary:e}))})))))),r.a.createElement(_.a.Group,{as:X.a,controlId:"formGridState"},r.a.createElement(_.a.Label,{as:"legend",column:!0,sm:5,className:e.font},"Filter by Store")),r.a.createElement(_.a.Group,{as:X.a,controlId:"formGridState"},r.a.createElement(Z.a,{sm:6},r.a.createElement(_e,{names:["SuperYoda","Shufersal Ramat Aviv","SuperYoda Tel-Aviv","SuperYoda East Tel-Aviv","Shufersal Ramat-Gan","SuperYoda South","Rami Levy TLV Center"],handleChangeStores:this.handleChangeStores,StoreName:this.state.StoreName}))),r.a.createElement(_.a.Group,{as:X.a},r.a.createElement(Z.a,{sm:{span:10,offset:0},className:e.buttonDiv},r.a.createElement(de.a,{className:e.button,onClick:this.findCart},"Find The Cheapest Shopping Cart"))))),r.a.createElement("div",{className:e.form},r.a.createElement(Fe,{withPrice:!1,handleSubmit:this.handleSubmit})))))}}]),a}(r.a.Component),ta=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},form:{width:"auto",flexGrow:2,height:"550px",padding:"10px",overflow:"scroll",border:"1px solid #20639B"},img:{width:"auto",flexGrow:1,height:"550px",marginRight:"10px",marginTop:"10px"},submit:{margin:e.spacing(3,0,2)},avatar:{height:"260px"},checkBox:{paddingLeft:"30px"},buttonDiv:{paddingTop:"100px"},button:{backgroundColor:"#20639B"},font:{fontWeight:"bold",color:"#20639B",lineHeight:"normal",paddingTop:"0px"},body:{display:"flex"},root:{display:"flex",flexDirection:"column"},headline:{color:"red",paddingBottom:"30px"},input:{paddingBottom:"10px"},formControl:{minWidth:120,maxWidth:300}}}))(aa),na=function(e){return r.a.createElement(me.a,null,e.children)},ra=t(260),la=t(259);t(125);function oa(){var e=Object(se.a)(["\n  .navbar {\n    background-color: #222;\n  }\n  a, .navbar-brand, .navbar-nav .nav-link {\n    color: #bbb;\n    &:hover {\n      color: white;\n    }\n  }\n"]);return oa=function(){return e},e}var ca=pe.a.div(oa()),ia=function(e){return r.a.createElement(ca,null,!e.currentUser.id&&r.a.createElement(ra.a,{expand:"lg"},r.a.createElement(ra.a.Brand,{href:"/"},r.a.createElement(be.a,{className:"itemIcon"})),r.a.createElement(ra.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(ra.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(la.a,{className:"ml-auto"},r.a.createElement(la.a.Item,null,r.a.createElement(la.a.Link,null,r.a.createElement(i.b,{to:"/signIn"},"Log In")))))),!!e.currentUser.id&&r.a.createElement(ra.a,{expand:"lg"},r.a.createElement(ra.a.Brand,{href:"/userMenu"},r.a.createElement(be.a,{className:"itemIcon"}),"Super-Hero"),r.a.createElement(ra.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(ra.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(la.a,{className:"ml-auto"},r.a.createElement(la.a.Item,null,r.a.createElement(la.a.Link,null,r.a.createElement(i.b,{to:"/userMenu"},"Home"))),r.a.createElement(la.a.Item,null,r.a.createElement(la.a.Link,null,r.a.createElement(i.b,{to:"/upload"},"Upload Receipt"))),r.a.createElement(la.a.Item,null,r.a.createElement(la.a.Link,null,r.a.createElement(i.b,{to:"/insert-receipt"},"Fill Receipt"))),r.a.createElement(la.a.Item,null,r.a.createElement(la.a.Link,null,r.a.createElement(i.b,{to:"/create-shopping-cart"}," Build a Cart"))),r.a.createElement(la.a.Item,null,r.a.createElement(la.a.Link,null,r.a.createElement(i.b,{to:"/",onClick:e.logOut},r.a.createElement("b",null,"Log Out"))))))))},sa=t(139),ua=t.n(sa);function ma(){var e=Object(se.a)(["\n  .jumbo {\n    background: url(",") no-repeat fixed bottom;\n    background-size: cover;\n    color: #efefef;\n    height: 200px;\n    position: relative;\n    z-index: -2;\n  }\n  .overlay {\n    background-color: #000;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: -1;\n  }\n"]);return ma=function(){return e},e}var da=pe.a.div(ma(),ua.a),pa=function(e){return r.a.createElement(da,null,r.a.createElement(ue.a,{fluid:!0,className:"jumbo"},r.a.createElement("div",{className:"overlay"}),!e.currentUser.id&&r.a.createElement(me.a,null,r.a.createElement("h1",null,"Welcome"),r.a.createElement("h5",null,"Build the Cheapest shopping cart")),!!e.currentUser.id&&r.a.createElement(me.a,null,r.a.createElement("h1",null,"Welcome ",e.currentUser.username),r.a.createElement("h5",null,"Your credits balance: ",e.currentUser.credits))))};var ha=Object(s.g)((function(e){var a=Object(n.useState)({}),t=Object(c.a)(a,2),l=t[0],o=t[1],u=JSON.parse(localStorage.getItem("currentUser"))||{},m=Object(n.useState)(!!u.id),d=Object(c.a)(m,2),p=d[0],h=d[1],g=function(){localStorage.setItem("currentUser",JSON.stringify({})),h(!p),console.log("inside logOut")};return console.log("isConnected ",p),console.log("currentUser",u),console.log("resultsss",l),r.a.createElement(r.a.Fragment,null,!p&&r.a.createElement(i.a,null,r.a.createElement(ia,{currentUser:u,logOut:g}),r.a.createElement("div",null,r.a.createElement(s.c,null,r.a.createElement(n.Fragment,null,r.a.createElement(s.a,{path:"/signIn"},r.a.createElement(pa,{currentUser:u}),r.a.createElement(na,null,r.a.createElement(k,null))),r.a.createElement(s.a,{path:"/signUp"},r.a.createElement(pa,{currentUser:u}),r.a.createElement(na,null,r.a.createElement(ie,null))),r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(ye,null)))))),p&&r.a.createElement(i.a,null,r.a.createElement(ia,{currentUser:u,logOut:g}),r.a.createElement(pa,{currentUser:u}),r.a.createElement(na,null,r.a.createElement("div",null,r.a.createElement(s.c,null,r.a.createElement(n.Fragment,null,r.a.createElement(s.a,{path:"/upload"},r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Card"},r.a.createElement(ee,{currentUser:u}))))),r.a.createElement(s.a,{path:"/userMenu"},r.a.createElement(B,null)),r.a.createElement(s.a,{path:"/insert-receipt"},r.a.createElement(He,{withPrice:!0,currentUser:u})),r.a.createElement(s.a,{path:"/create-shopping-cart"},r.a.createElement(ta,{updateResult:function(e){o(e)},currentUser:u})),r.a.createElement(s.a,{path:"/cartResult"},r.a.createElement(z,{Result:l}))))))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ga=t(27),fa=Object(ga.a)();o.a.render(r.a.createElement(s.b,{history:fa},r.a.createElement(ha,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},78:function(e,a,t){e.exports=t.p+"static/media/shoppingCart.b9179ea6.jpg"}},[[162,1,2]]]);
//# sourceMappingURL=main.2f7e341e.chunk.js.map