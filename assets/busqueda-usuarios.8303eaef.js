import{i as d,_ as h,d as p,o as r,c as a,a as e,w as _,v as m,b,h as i,t as n,F as y,r as v}from"./index.18b2798d.js";class g{handleError(l){if(l.response!=null){if(l.response.error=="invalid_grant")return d.checkParam();if(l.response.message=="Invalid token")return d.refreshToken()}else return console.log(l)}}const u=new g;const f=p({data(){return{queryBusqueda:"",queryBusquedaOG:"",code:"",results:{},resultsOG:{},prodTable:[],seller:{}}},mounted(){var s=window.localStorage.getItem("token");s==null&&this.checkParam()},methods:{buscarQuery(){this.queryBusquedaOG=this.queryBusqueda;var s=this.queryBusqueda.replaceAll(" ","%20"),l=window.localStorage.getItem("token");$.ajax({type:"GET",url:"https://api.mercadolibre.com/sites/MLA/search?nickname="+s,authorization:"Bearer "+l}).then(o=>{this.results=o,this.resultsOG=this.results,this.results.seller!=null?(this.buscarUserId(this.results.seller.id),this.results.seller.registration_date=this.formatFecha(new Date(this.results.seller.registration_date)),this.prodTable=o.results):this.prodTable=[]}).catch(o=>{u.handleError(o)})},buscarUserId(s){console.log(s);var l=window.localStorage.getItem("token");$.ajax({type:"GET",url:"https://api.mercadolibre.com/users/"+s,authorization:"Bearer "+l}).then(o=>{this.seller=o}).catch(o=>{u.handleError(o)})},formatFecha(s){return s.getDate()+"/"+(s.getMonth()+1)+"/"+s.getFullYear()}}}),k={class:"container"},q=e("h2",null,"Busqueda de usuarios",-1),w={class:"flex-inline"},B=["disabled"],T=e("div",{style:{"border-top":"1px solid black",width:"100%"},class:"mt-10"},null,-1),z={key:0,class:"flex-inline"},S=e("p",{style:{color:"red"}},"No se encontro un usuario con ese nombre",-1),G=[S],I={key:1,class:"flex-inline-between mt-10"},E={class:"border"},F=e("p",{style:{"font-size":"large"}},"Nombre de usuario",-1),O={key:2,class:"flex-inline-between mt-10"},U={class:"border"},C=e("p",{style:{"font-size":"large"}},"Zona:",-1),D={class:"border"},L=e("p",{style:{"font-size":"large"}},"Reputacion:",-1),N={class:"border"},M=e("p",{style:{"font-size":"large"}},"Status:",-1),Q={class:"border"},V=e("p",{style:{"font-size":"large"}},"Cantidad de ventas historico:",-1),j={class:"border"},x=e("p",{style:{"font-size":"large"}},"Link del usuario:",-1),A=["href"],K=e("div",{style:{"border-top":"1px solid black",width:"100%"},class:"mt-10"},null,-1),P={key:3,class:"table-responsive",style:{"margin-top":"20px"}},R={id:"tabla",class:"table table-bordered"},Y=e("thead",null,[e("tr",null,[e("th",null,"img de portada"),e("th",null,"titulo"),e("th",null,"link de la publicacion"),e("th",null,"condicion"),e("th",null,"precio"),e("th",null,"cantidad disponible"),e("th",null,"cantidad vendidos"),e("th",null,"cuotas"),e("th",null,"interes"),e("th",null,"envio gratis")])],-1),Z=["src"],H=["href"],J=e("p",null,"Las cantidades de items vendidos y disponibles son aproximaciones",-1);function W(s,l,o,X,ee,se){return r(),a("div",k,[q,e("div",w,[_(e("input",{type:"text",class:"form-control",onKeyup:l[0]||(l[0]=b(t=>s.buscarQuery(),["enter"])),"onUpdate:modelValue":l[1]||(l[1]=t=>s.queryBusqueda=t),placeholder:"Ingrese un nombre de usuario"},null,544),[[m,s.queryBusqueda]]),e("button",{disabled:s.queryBusqueda=="",class:"btn btn-primary",onClick:l[2]||(l[2]=t=>s.buscarQuery())},"Buscar",8,B)]),T,s.queryBusquedaOG!=""&&s.results.seller==null?(r(),a("div",z,G)):i("",!0),s.results.seller!=null?(r(),a("div",I,[e("div",E,[F,e("p",null,n(s.results.seller.nickname),1)])])):i("",!0),s.seller.id?(r(),a("div",O,[e("div",U,[C,e("p",null,n(s.seller.address.city),1)]),e("div",D,[L,e("p",null,n(s.seller.seller_reputation.level_id),1)]),e("div",N,[M,e("p",null,n(s.seller.seller_reputation.power_seller_status),1)]),e("div",Q,[V,e("p",null,n(s.seller.seller_reputation.transactions.total),1)]),e("div",j,[x,e("a",{href:s.seller.permalink,target:"_blank"},n(s.seller.permalink),9,A)])])):i("",!0),K,s.prodTable.length>0?(r(),a("div",P,[e("table",R,[Y,e("tbody",null,[(r(!0),a(y,null,v(s.prodTable,(t,c)=>(r(),a("tr",{key:c},[e("td",null,[e("img",{style:{"max-width":"100px","max-height":"100px"},src:t.thumbnail,alt:"logo"},null,8,Z)]),e("td",null,n(t.title),1),e("td",null,[e("a",{href:t.permalink},n(t.permalink),9,H)]),e("td",null,n(t.condition),1),e("td",null,n(t.price),1),e("td",null,n(t.available_quantity),1),e("td",null,n(t.sold_quantity),1),e("td",null,n(t.installments!=null?t.installments.quantity:"-"),1),e("td",null,"%"+n(t.installments!=null?t.installments.rate:"-"),1),e("td",null,n(t.shipping.free_shipping),1)]))),128))])]),J])):i("",!0)])}const le=h(f,[["render",W]]);export{le as default};
