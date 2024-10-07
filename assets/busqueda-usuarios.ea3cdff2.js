import{_ as d,d as c,o,c as a,a as e,w as h,v as p,b as m,h as r,t as l,F as _,r as b}from"./index.149b2932.js";const y=c({data(){return{queryBusqueda:"",queryBusquedaOG:"",code:"",results:{},resultsOG:{},prodTable:[]}},mounted(){var t=window.localStorage.getItem("token");t==null&&this.checkParam()},methods:{buscarQuery(){this.queryBusquedaOG=this.queryBusqueda;var t=this.queryBusqueda.replaceAll(" ","%20"),n=window.localStorage.getItem("token");$.ajax({type:"GET",url:"https://api.mercadolibre.com/sites/MLA/search?nickname="+t,authorization:"Bearer "+n}).then(i=>{this.results=i,this.resultsOG=this.results,this.results.seller!=null?(this.results.seller.registration_date=this.formatFecha(new Date(this.results.seller.registration_date)),this.prodTable=i.results):this.prodTable=[]}).catch(i=>{errorsService.handleError(i)})},formatFecha(t){return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()}}}),q={class:"container"},v=e("h2",null,"Busqueda de usuarios",-1),g={class:"flex-inline"},f=["disabled"],k=e("div",{style:{"border-top":"1px solid black",width:"100%"},class:"mt-10"},null,-1),B={key:0,class:"flex-inline"},w=e("p",{style:{color:"red"}},"No se encontro un usuario con ese nombre",-1),x=[w],T={key:1,class:"flex-inline-between mt-10"},G={class:"border"},F=e("p",{style:{"font-size":"large"}},"Nombre de usuario",-1),O={key:2,class:"flex-inline-between mt-10"},D=e("div",{style:{"border-top":"1px solid black",width:"100%"},class:"mt-10"},null,-1),N={key:3,class:"table-responsive",style:{"margin-top":"20px"}},S={id:"tabla",class:"table table-bordered"},C=e("thead",null,[e("tr",null,[e("th",null,"img de portada"),e("th",null,"titulo"),e("th",null,"link de la publicacion"),e("th",null,"condicion"),e("th",null,"precio"),e("th",null,"cantidad disponible"),e("th",null,"cantidad vendidos"),e("th",null,"cuotas"),e("th",null,"interes"),e("th",null,"envio gratis")])],-1),E=["src"],I=["href"],L=e("p",null,"Las cantidades de items vendidos y disponibles son aproximaciones",-1);function M(t,n,i,Q,U,V){return o(),a("div",q,[v,e("div",g,[h(e("input",{type:"text",class:"form-control",onKeyup:n[0]||(n[0]=m(s=>t.buscarQuery(),["enter"])),"onUpdate:modelValue":n[1]||(n[1]=s=>t.queryBusqueda=s),placeholder:"Ingrese un nombre de usuario"},null,544),[[p,t.queryBusqueda]]),e("button",{disabled:t.queryBusqueda=="",class:"btn btn-primary",onClick:n[2]||(n[2]=s=>t.buscarQuery())},"Buscar",8,f)]),k,t.queryBusquedaOG!=""&&t.results.seller==null?(o(),a("div",B,x)):r("",!0),t.results.seller!=null?(o(),a("div",T,[e("div",G,[F,e("p",null,l(t.results.seller.nickname),1)])])):r("",!0),t.results.seller!=null?(o(),a("div",O)):r("",!0),D,t.prodTable.length>0?(o(),a("div",N,[e("table",S,[C,e("tbody",null,[(o(!0),a(_,null,b(t.prodTable,(s,u)=>(o(),a("tr",{key:u},[e("td",null,[e("img",{style:{"max-width":"100px","max-height":"100px"},src:s.thumbnail,alt:"logo"},null,8,E)]),e("td",null,l(s.title),1),e("td",null,[e("a",{href:s.permalink},l(s.permalink),9,I)]),e("td",null,l(s.condition),1),e("td",null,l(s.price),1),e("td",null,l(s.available_quantity),1),e("td",null,l(s.sold_quantity),1),e("td",null,l(s.installments!=null?s.installments.quantity:"-"),1),e("td",null,"%"+l(s.installments!=null?s.installments.rate:"-"),1),e("td",null,l(s.shipping.free_shipping),1)]))),128))])]),L])):r("",!0)])}const A=d(y,[["render",M]]);export{A as default};
