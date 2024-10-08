import{_,d as y,o as a,c as r,a as t,w as l,v as k,b as g,e as v,f as b,g as p,h,t as i,F as q,r as E,i as m}from"./index.9731f496.js";const P=y({data(){return{queryBusqueda:"",queryBusquedaOG:"",code:"",results:[],resultsOG:[],precioAsc:!1,vendidosAsc:!1,eshopAsc:!1,tablaFormateada:[],filtroCuotas:"yes",filtraCuotas:!1,filtroEstado:"2230284",filtraEstado:!1,filtroEnvios:"free",filtraEnvios:!1,ordenPrecios:!0,itmPrice:"",keyword:""}},mounted(){var e=window.localStorage.getItem("token");e==null&&this.checkParam()},methods:{checkParam(){console.log("checkparam"),this.$nextTick(()=>{console.log("checkparam 2");const e=new URLSearchParams(window.location.search);this.keyword=e.get("key"),this.itmPrice=e.get("price"),key&&(this.queryBusqueda=key,this.buscarQuery())})},queryFiltros(){var e="";return this.filtraCuotas&&(e="&installments="+this.filtroCuotas),this.filtraEstado&&(e+="&ITEM_CONDITION="+this.filtroEstado),this.filtraEnvios&&this.filtroEnvios!=""&&(e+="&shipping_cost="+this.filtroEnvios),e},ordenPorPrecios(){this.ordenPrecios?this.results=this.results.sort((e,o)=>o.price-e.price):this.results=this.results.sort((e,o)=>e.price-o.price),this.ordenPrecios=!this.ordenPrecios},buscarQuery(){var e=this.queryFiltros();this.tablaFormateada=[];var o=window.localStorage.getItem("token");this.queryBusquedaOG=this.queryBusqueda;var d=this.queryBusqueda.replaceAll(" ","%20");$.ajax({type:"GET",url:"https://api.mercadolibre.com/sites/MLA/search?q="+d+e,authorization:"Bearer "+o}).then(n=>{var c=n.paging.total,f=Math.ceil(c/50)-1;this.results=n.results,this.resultsOG=this.results;for(var s=1;s<=f;s++)$.ajax({type:"GET",url:"https://api.mercadolibre.com/sites/MLA/search?q="+d+e+"&offset="+s*50,authorization:"Bearer "+o}).then(u=>{this.results.push(...u.results),this.resultsOG=this.results}).catch(u=>{u.response.error=="invalid_grant"&&m.checkParam(),u.response.message=="Invalid token"&&m.refreshToken(),console.log(u)})}).catch(n=>{n.response.error=="invalid_grant"&&m.checkParam(),n.response.message=="Invalid token"&&m.refreshToken(),console.log(n)})},formatTable(){this.results.forEach(e=>{var d,n,c,f;var o={titulo:e.title,linkpubli:e.permalink,linkvendedor:e.seller.permalink,nombreeshop:e.seller.eshop!=null?e.seller.eshop.nick_name:"-",condicion:e.condition,precio:e.price,disponibles:e.available_quantity,vendidos:e.sold_quantity,cuotas:(n=(d=e.installments)==null?void 0:d.quantity)!=null?n:"-",intereses:(f=(c=e.installments)==null?void 0:c.rate)!=null?f:"-",envio:e.shipping.free_shipping};e.installments==null&&console.log(e),this.tablaFormateada.push(o)})},exportXlsx(){this.formatTable();var e=this.queryBusquedaOG.replaceAll(" ","-"),o=XLSX.utils.json_to_sheet(this.tablaFormateada);const d=XLSX.utils.book_new();XLSX.utils.book_append_sheet(d,o,"Publicaciones"),XLSX.utils.sheet_add_aoa(o,[["titulo","link de la publicacion","link del vendedor","nombre del Eshop","condicion","precio","cantidad disponible","cantidad vendidos","cuotas","interes","envio gratis"]],{origin:"A1"}),XLSX.writeFile(d,e+".xlsx",{compression:!0})}}}),C={class:"container"},w=t("h2",null,"Metricas de de busqueda por producto",-1),B={class:"flex-inline"},V=["disabled"],T={class:"flex-inline-left",style:{"margin-top":"15px","margin-bottom":"5px"}},U={class:"flex-inline-left"},X={for:"festado"},S={key:0},F={class:"gap"},L=t("br",null,null,-1),A=t("label",{for:"nuevo"},"Nuevo",-1),G={class:"gap"},I=t("br",null,null,-1),M=t("label",{for:"usado"},"Usado",-1),O={class:"gap"},N=t("label",{for:"reacondicionado"},"Reacondicionado",-1),j={class:"flex-inline-left"},Q={for:"fcuotas"},D={key:0},R={class:"gap"},z=t("br",null,null,-1),K=t("label",{for:"interes"},"Todos",-1),H={class:"gap"},J=t("br",null,null,-1),W=t("label",{for:"nointeres"},"Sin interes",-1),Y={class:"flex-inline-left"},Z={for:"fenvios"},x={key:0},ee={class:"gap"},te=t("br",null,null,-1),se=t("label",{for:"enviogratis"},"Envio gratis",-1),oe={class:"gap"},ie=t("br",null,null,-1),le=t("label",{for:"enviopago"},"Todos",-1),ne={class:"flex-inline-between",style:{"margin-top":"15px","margin-bottom":"5px"}},ae={key:0},re={key:1},de={key:0,class:"table-responsive",style:{"margin-top":"20px"}},ue={id:"tabla",class:"table table-bordered"},pe=t("th",null,"img de portada",-1),he=t("th",null,"titulo",-1),ce=t("th",null,"link de la publicacion",-1),fe=t("th",null,"nombre del vendedor",-1),me=t("th",null,"condicion",-1),ve=t("th",null,"cantidad disponible",-1),be=t("th",null,"cantidad vendidos",-1),_e=t("th",null,"cuotas",-1),ye=t("th",null,"interes",-1),ke=t("th",null,"envio gratis",-1),ge=["src"],qe=["href"],Ee=t("p",null,"Las cantidades de items vendidos y disponibles son aproximaciones",-1);function Pe(e,o,d,n,c,f){return a(),r("div",C,[w,t("div",B,[l(t("input",{type:"text",class:"form-control",onKeyup:o[0]||(o[0]=g(s=>e.buscarQuery(),["enter"])),"onUpdate:modelValue":o[1]||(o[1]=s=>e.queryBusqueda=s)},null,544),[[k,e.queryBusqueda]]),t("button",{disabled:e.queryBusqueda=="",class:"btn btn-primary",onClick:o[2]||(o[2]=s=>e.buscarQuery())},"Buscar",8,V)]),t("div",T,[t("div",U,[t("label",X,[v("Estado del Item "),l(t("input",{id:"festado",type:"checkbox","onUpdate:modelValue":o[3]||(o[3]=s=>e.filtraEstado=s)},null,512),[[b,e.filtraEstado]])]),e.filtraEstado?(a(),r("div",S,[t("div",F,[l(t("input",{"onUpdate:modelValue":o[4]||(o[4]=s=>e.filtroEstado=s),value:"2230284",type:"radio",id:"nuevo",name:"estado",checked:""},null,512),[[p,e.filtroEstado]]),L,A]),t("div",G,[l(t("input",{"onUpdate:modelValue":o[5]||(o[5]=s=>e.filtroEstado=s),value:"2230581",type:"radio",id:"usado",name:"estado"},null,512),[[p,e.filtroEstado]]),I,M]),t("div",O,[l(t("input",{"onUpdate:modelValue":o[6]||(o[6]=s=>e.filtroEstado=s),value:"2230582",type:"radio",id:"reacondicionado",name:"estado"},null,512),[[p,e.filtroEstado]]),N])])):h("",!0)]),t("div",j,[t("label",Q,[v("Cuotas "),l(t("input",{id:"fcuotas",type:"checkbox","onUpdate:modelValue":o[7]||(o[7]=s=>e.filtraCuotas=s)},null,512),[[b,e.filtraCuotas]])]),e.filtraCuotas?(a(),r("div",D,[t("div",R,[l(t("input",{"onUpdate:modelValue":o[8]||(o[8]=s=>e.filtroCuotas=s),value:"yes",type:"radio",id:"interes",name:"cuotas",checked:""},null,512),[[p,e.filtroCuotas]]),z,K]),t("div",H,[l(t("input",{"onUpdate:modelValue":o[9]||(o[9]=s=>e.filtroCuotas=s),value:"no_interest",type:"radio",id:"nointeres",name:"cuotas"},null,512),[[p,e.filtroCuotas]]),J,W])])):h("",!0)]),t("div",Y,[t("label",Z,[v("Envio "),l(t("input",{id:"fenvios",type:"checkbox","onUpdate:modelValue":o[10]||(o[10]=s=>e.filtraEnvios=s)},null,512),[[b,e.filtraEnvios]])]),e.filtraEnvios?(a(),r("div",x,[t("div",ee,[l(t("input",{"onUpdate:modelValue":o[11]||(o[11]=s=>e.filtroEnvios=s),value:"free",type:"radio",id:"enviogratis",name:"envio",checked:""},null,512),[[p,e.filtroEnvios]]),te,se]),t("div",oe,[l(t("input",{"onUpdate:modelValue":o[12]||(o[12]=s=>e.filtroEnvios=s),value:"",type:"radio",id:"enviopago",name:"envio"},null,512),[[p,e.filtroEnvios]]),ie,le])])):h("",!0)])]),t("div",ne,[e.results.length>0?(a(),r("p",ae,"Cantidad: "+i(e.results.length),1)):h("",!0),e.itmPrice?(a(),r("p",re,i(e.itmPrice.toFixed(2)),1)):h("",!0),e.results.length>0?(a(),r("button",{key:2,onClick:o[13]||(o[13]=s=>e.exportXlsx()),class:"btn btn-outline-success"},"Exportar")):h("",!0)]),e.results.length>0?(a(),r("div",de,[t("table",ue,[t("thead",null,[t("tr",null,[pe,he,ce,fe,me,t("th",{class:"cursor-pointer",onClick:o[14]||(o[14]=s=>e.ordenPorPrecios())},"precio"),ve,be,_e,ye,ke])]),t("tbody",null,[(a(!0),r(q,null,E(e.results,(s,u)=>(a(),r("tr",{key:u},[t("td",null,[t("img",{style:{"max-width":"100px","max-height":"100px"},src:s.thumbnail,alt:"logo"},null,8,ge)]),t("td",null,i(s.title),1),t("td",null,[t("a",{href:s.permalink},i(s.permalink),9,qe)]),t("td",null,i(s.seller.nickname!=null?s.seller.nickname:"-"),1),t("td",null,i(s.condition),1),t("td",null,i(s.price),1),t("td",null,i(s.available_quantity),1),t("td",null,i(s.sold_quantity),1),t("td",null,i(s.installments!=null?s.installments.quantity:"-"),1),t("td",null,"%"+i(s.installments!=null?s.installments.rate:"-"),1),t("td",null,i(s.shipping.free_shipping),1)]))),128))])]),Ee])):h("",!0)])}const we=_(P,[["render",Pe]]);export{we as default};
