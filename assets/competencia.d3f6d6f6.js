import{_,d as y,o as n,c as o,a as t,w as b,v as f,b as v,h as c,F as k,r as g,i as h,t as l}from"./index.a1755328.js";const F=y({data(){return{username:"",competencia:[],code:"",results:[],resultsOG:[],scrollId:"",fecha:"",diasFiltro:1,token:"",notfound:!1,tablaFormateada:[]}},mounted(){var e=window.localStorage.getItem("token");e==null&&this.checkParam(),this.fecha=new Date},methods:{formatFecha(e){return e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()},buscarCompetencia(){this.results=[],this.competencia.forEach(e=>this.buscarQuery(e))},buscarQuery(e){this.tablaFormateada=[],this.token=window.localStorage.getItem("token"),$.ajax({type:"GET",url:"https://api.mercadolibre.com/sites/MLA/search?nickname="+e,authorization:"Bearer "+this.token}).then(s=>{var i=s.paging.total,u=Math.ceil(i/50)-1;if(this.resultsOG=s.results,i>50)for(var r=1;r<=u;r++)this.offsetSearch(e,r);else i>0&&this.applyFilters()}).catch(s=>{s.response.error=="invalid_grant"&&h.checkParam(),s.response.message=="Invalid token"&&h.refreshToken(),console.log(s)})},offsetSearch(e,s){$.ajax({type:"GET",url:"https://api.mercadolibre.com/sites/MLA/search?nickname="+e+"&offset="+s*50,authorization:"Bearer "+this.token}).then(i=>{console.log(i.results),i.results.length>0&&(this.resultsOG.push(...i.results),this.applyFilters())}).catch(i=>{i.response.error=="invalid_grant"&&h.checkParam(),i.response.message=="Invalid token"&&h.refreshToken(),console.log(i)})},buscarUsuario(){if(this.username!=""){var e=window.localStorage.getItem("token");$.ajax({type:"GET",url:"https://api.mercadolibre.com/sites/MLA/search?nickname="+this.username+"&limit=0",authorization:"Bearer "+e}).then(s=>{s.seller!=null?(this.notfound=!1,this.username="",this.competencia.push(s.seller.nickname)):this.notfound=!0}).catch(s=>{errorsService.handleError(s)})}},applyFilters(){this.diasFiltro<1&&(this.diasFiltro=1),this.results=this.resultsOG},borrarUser(e){this.competencia.splice(e,1)},checkDias(){this.diasFiltro<1&&(this.diasFiltro=1)},formatTable(){this.results.forEach(e=>{var i,u,r,p,a,d,m;var s={titulo:e.title||"",linkpubli:e.permalink||"",lastupdate:(r=(u=(i=e.prices)==null?void 0:i.prices)==null?void 0:u[0])!=null&&r.last_updated?this.formatFecha(new Date(e.prices.prices[0].last_updated)):"",nombreeshop:((p=e.seller)==null?void 0:p.nickname)||"",precio:e.price||"",disponibles:e.available_quantity||"",vendidos:e.sold_quantity||"",cuotas:((a=e.installments)==null?void 0:a.quantity)||"-",intereses:((d=e.installments)==null?void 0:d.rate)||"-",envio:((m=e.shipping)==null?void 0:m.free_shipping)||""};this.tablaFormateada.push(s)})},exportXlsx(){this.formatTable();var e="Comparacion-competencia",s=XLSX.utils.json_to_sheet(this.tablaFormateada);const i=XLSX.utils.book_new();XLSX.utils.book_append_sheet(i,s,"Publicaciones"),XLSX.utils.sheet_add_aoa(s,[["titulo","link de la publicacion","ultima modificacion","nombre del usuario","precio","cantidad disponible","cantidad vendidos","cuotas","interes","envio gratis"]],{origin:"A1"}),XLSX.writeFile(i,e+".xlsx",{compression:!0})}},computed:{filterDate(){var e=new Date;return e.setDate(this.fecha.getDate()-this.diasFiltro),e.setHours(0,0,0,0),e}}}),w={class:"container"},S=t("h2",null,"Medicion de Competencia",-1),D={class:"flex-inline"},X=t("label",{for:"dias"},"Rango de dias a buscar cambios",-1),C=t("label",{for:"dias"},"A\xF1adir nombre de usuario competidor",-1),L={key:0,style:{color:"red"}},q={class:"table-responsive",style:{"margin-top":"30px"}},E={id:"tabla",class:"table table-bordered"},T=["onClick"],B={key:0},G=t("td",null,[t("p",null,"No hay nombres de usuarios a\xF1adidos")],-1),M=[G],I={key:1,class:"table-responsive",style:{"margin-top":"20px"}},U={id:"tabla",class:"table table-bordered"},j=t("thead",null,[t("tr",null,[t("th",null,"img de portada"),t("th",null,"titulo"),t("th",null,"link de la publicacion"),t("th",null,"fecha de modificacion"),t("th",null,"nombre del usuario"),t("th",null,"precio"),t("th",null,"cantidad disponible"),t("th",null,"cantidad vendidos"),t("th",null,"cuotas"),t("th",null,"interes"),t("th",null,"envio gratis")])],-1),A=["src"],N=["href"],O=t("p",null,"Las cantidades de items vendidos y disponibles son aproximaciones",-1),x={key:2},z={key:3};function P(e,s,i,u,r,p){return n(),o("div",w,[S,t("div",D,[X,b(t("input",{type:"number",min:"1",max:"10",onChange:s[0]||(s[0]=a=>e.checkDias()),"onUpdate:modelValue":s[1]||(s[1]=a=>e.diasFiltro=a)},null,544),[[f,e.diasFiltro]]),C,b(t("input",{type:"text",class:"form-control",style:{width:"500px"},onKeyup:s[2]||(s[2]=v(a=>e.buscarUsuario(),["enter"])),"onUpdate:modelValue":s[3]||(s[3]=a=>e.username=a)},null,544),[[f,e.username]])]),e.notfound?(n(),o("p",L,"No se encontro el usuario")):c("",!0),t("div",q,[t("table",E,[t("tbody",null,[(n(!0),o(k,null,g(e.competencia,(a,d)=>(n(),o("tr",{key:d},[t("td",null,l(a),1),t("td",null,[t("button",{class:"btn btn-danger",onClick:m=>e.borrarUser(e.competencia.indexOf(a))},"borrar",8,T)])]))),128)),e.competencia.length==0?(n(),o("tr",B,M)):c("",!0)])])]),t("button",{class:"btn btn-primary",style:{"margin-top":"50px"},onClick:s[4]||(s[4]=a=>e.buscarCompetencia())},"Buscar"),e.results.length>0?(n(),o("div",I,[t("table",U,[j,t("tbody",null,[(n(!0),o(k,null,g(e.results,(a,d)=>(n(),o("tr",{key:d},[t("td",null,[t("img",{style:{"max-width":"100px","max-height":"100px"},src:a.thumbnail,alt:"logo"},null,8,A)]),t("td",null,l(a.title),1),t("td",null,[t("a",{href:a.permalink},l(a.permalink),9,N)]),t("td",null,l(a.seller.nickname),1),t("td",null,l(a.price),1),t("td",null,l(a.available_quantity),1),t("td",null,l(a.sold_quantity),1),t("td",null,l(a.installments!=null?a.installments.quantity:"-"),1),t("td",null,"%"+l(a.installments!=null?a.installments.rate:"-"),1),t("td",null,l(a.shipping.free_shipping),1)]))),128))])]),O])):c("",!0),e.results.length==0?(n(),o("p",x,"Realize una busqueda")):c("",!0),e.results.length==0?(n(),o("p",z,"No hay registro de cambios")):(n(),o("button",{key:4,onClick:s[5]||(s[5]=a=>e.exportXlsx())},"Exportar xlsx"))])}const K=_(F,[["render",P]]);export{K as default};
