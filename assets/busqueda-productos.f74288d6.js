import{_,d as y,o as n,c as a,a as e,w as l,v as k,b as g,e as f,f as v,g as u,h as p,t as i,F as q,r as E,i as m}from"./index.19952466.js";const P=y({data(){return{queryBusqueda:"",queryBusquedaOG:"",code:"",results:[],resultsOG:[],precioAsc:!1,vendidosAsc:!1,eshopAsc:!1,tablaFormateada:[],filtroCuotas:"yes",filtraCuotas:!1,filtroEstado:"2230284",filtraEstado:!1,filtroEnvios:"free",filtraEnvios:!1,ordenPrecios:!0,itmPrice:"",keyword:""}},mounted(){var t=window.localStorage.getItem("token");t==null&&this.checkParam(),this.checkParam()},methods:{checkParam(){console.log("checkparam"),this.$nextTick(()=>{console.log("checkparam 2");const t=new URLSearchParams(window.location.search);this.keyword=t.get("key"),this.itmPrice=t.get("price"),this.keyword&&(this.queryBusqueda=this.keyword,this.buscarQuery())})},queryFiltros(){var t="";return this.filtraCuotas&&(t="&installments="+this.filtroCuotas),this.filtraEstado&&(t+="&ITEM_CONDITION="+this.filtroEstado),this.filtraEnvios&&this.filtroEnvios!=""&&(t+="&shipping_cost="+this.filtroEnvios),t},ordenPorPrecios(){this.ordenPrecios?this.results=this.results.sort((t,s)=>s.price-t.price):this.results=this.results.sort((t,s)=>t.price-s.price),this.ordenPrecios=!this.ordenPrecios},buscarQuery(){var t=this.queryFiltros();this.tablaFormateada=[];var s=window.localStorage.getItem("token");this.queryBusquedaOG=this.queryBusqueda;var r=this.queryBusqueda.replaceAll(" ","%20"),d=0;this.results=[];var c=this;function h(){$.ajax({type:"GET",url:"https://api.mercadolibre.com/sites/MLA/search?q="+r+t+"&offset="+d,authorization:"Bearer "+s}).then(o=>{c.results.push(...o.results),o.results.length>0&&d<1e3&&(d+=50,h())}).catch(o=>{o.response.error=="invalid_grant"&&m.checkParam(),o.response.message=="Invalid token"&&m.refreshToken(),console.log(o)})}h()},formatTable(){this.results.forEach(t=>{var r,d,c,h;var s={titulo:t.title,linkpubli:t.permalink,linkvendedor:t.seller.permalink,nombreeshop:t.seller.eshop!=null?t.seller.eshop.nick_name:"-",condicion:t.condition,precio:t.price,disponibles:t.available_quantity,vendidos:t.sold_quantity,cuotas:(d=(r=t.installments)==null?void 0:r.quantity)!=null?d:"-",intereses:(h=(c=t.installments)==null?void 0:c.rate)!=null?h:"-",envio:t.shipping.free_shipping};t.installments==null&&console.log(t),this.tablaFormateada.push(s)})},exportXlsx(){this.formatTable();var t=this.queryBusquedaOG.replaceAll(" ","-"),s=XLSX.utils.json_to_sheet(this.tablaFormateada);const r=XLSX.utils.book_new();XLSX.utils.book_append_sheet(r,s,"Publicaciones"),XLSX.utils.sheet_add_aoa(s,[["titulo","link de la publicacion","link del vendedor","nombre del Eshop","condicion","precio","cantidad disponible","cantidad vendidos","cuotas","interes","envio gratis"]],{origin:"A1"}),XLSX.writeFile(r,t+".xlsx",{compression:!0})}}}),w={class:"container"},C=e("h2",null,"Metricas de de busqueda por producto",-1),B={class:"flex-inline"},V=["disabled"],U={class:"flex-inline-left",style:{"margin-top":"15px","margin-bottom":"5px"}},X={class:"flex-inline-left"},S={for:"festado"},T={key:0},F={class:"gap"},L=e("br",null,null,-1),A=e("label",{for:"nuevo"},"Nuevo",-1),I={class:"gap"},M=e("br",null,null,-1),N=e("label",{for:"usado"},"Usado",-1),O={class:"gap"},G=e("label",{for:"reacondicionado"},"Reacondicionado",-1),Q={class:"flex-inline-left"},R={for:"fcuotas"},j={key:0},D={class:"gap"},K=e("br",null,null,-1),z=e("label",{for:"interes"},"Todos",-1),H={class:"gap"},J=e("br",null,null,-1),W=e("label",{for:"nointeres"},"Sin interes",-1),Y={class:"flex-inline-left"},Z={for:"fenvios"},x={key:0},ee={class:"gap"},te=e("br",null,null,-1),oe=e("label",{for:"enviogratis"},"Envio gratis",-1),se={class:"gap"},ie=e("br",null,null,-1),le=e("label",{for:"enviopago"},"Todos",-1),ne={class:"flex-inline-between",style:{"margin-top":"15px","margin-bottom":"5px"}},ae={key:0},re={key:1},de={key:0,class:"table-responsive",style:{"margin-top":"20px"}},ue={id:"tabla",class:"table table-bordered"},pe=e("th",null,"img de portada",-1),he=e("th",null,"titulo",-1),ce=e("th",null,"cantidad disponible",-1),fe=e("th",null,"cantidad vendidos",-1),ve=e("th",null,"cuotas",-1),me=e("th",null,"interes",-1),be=e("th",null,"envio gratis",-1),_e=e("th",null,"link de la publicacion",-1),ye=e("th",null,"nombre del vendedor",-1),ke=e("th",null,"condicion",-1),ge=["src"],qe=["href"],Ee=e("p",null,"Las cantidades de items vendidos y disponibles son aproximaciones",-1);function Pe(t,s,r,d,c,h){return n(),a("div",w,[C,e("div",B,[l(e("input",{type:"text",class:"form-control",onKeyup:s[0]||(s[0]=g(o=>t.buscarQuery(),["enter"])),"onUpdate:modelValue":s[1]||(s[1]=o=>t.queryBusqueda=o)},null,544),[[k,t.queryBusqueda]]),e("button",{disabled:t.queryBusqueda=="",class:"btn btn-primary",onClick:s[2]||(s[2]=o=>t.buscarQuery())},"Buscar",8,V)]),e("div",U,[e("div",X,[e("label",S,[f("Estado del Item "),l(e("input",{id:"festado",type:"checkbox","onUpdate:modelValue":s[3]||(s[3]=o=>t.filtraEstado=o)},null,512),[[v,t.filtraEstado]])]),t.filtraEstado?(n(),a("div",T,[e("div",F,[l(e("input",{"onUpdate:modelValue":s[4]||(s[4]=o=>t.filtroEstado=o),value:"2230284",type:"radio",id:"nuevo",name:"estado",checked:""},null,512),[[u,t.filtroEstado]]),L,A]),e("div",I,[l(e("input",{"onUpdate:modelValue":s[5]||(s[5]=o=>t.filtroEstado=o),value:"2230581",type:"radio",id:"usado",name:"estado"},null,512),[[u,t.filtroEstado]]),M,N]),e("div",O,[l(e("input",{"onUpdate:modelValue":s[6]||(s[6]=o=>t.filtroEstado=o),value:"2230582",type:"radio",id:"reacondicionado",name:"estado"},null,512),[[u,t.filtroEstado]]),G])])):p("",!0)]),e("div",Q,[e("label",R,[f("Cuotas "),l(e("input",{id:"fcuotas",type:"checkbox","onUpdate:modelValue":s[7]||(s[7]=o=>t.filtraCuotas=o)},null,512),[[v,t.filtraCuotas]])]),t.filtraCuotas?(n(),a("div",j,[e("div",D,[l(e("input",{"onUpdate:modelValue":s[8]||(s[8]=o=>t.filtroCuotas=o),value:"yes",type:"radio",id:"interes",name:"cuotas",checked:""},null,512),[[u,t.filtroCuotas]]),K,z]),e("div",H,[l(e("input",{"onUpdate:modelValue":s[9]||(s[9]=o=>t.filtroCuotas=o),value:"no_interest",type:"radio",id:"nointeres",name:"cuotas"},null,512),[[u,t.filtroCuotas]]),J,W])])):p("",!0)]),e("div",Y,[e("label",Z,[f("Envio "),l(e("input",{id:"fenvios",type:"checkbox","onUpdate:modelValue":s[10]||(s[10]=o=>t.filtraEnvios=o)},null,512),[[v,t.filtraEnvios]])]),t.filtraEnvios?(n(),a("div",x,[e("div",ee,[l(e("input",{"onUpdate:modelValue":s[11]||(s[11]=o=>t.filtroEnvios=o),value:"free",type:"radio",id:"enviogratis",name:"envio",checked:""},null,512),[[u,t.filtroEnvios]]),te,oe]),e("div",se,[l(e("input",{"onUpdate:modelValue":s[12]||(s[12]=o=>t.filtroEnvios=o),value:"",type:"radio",id:"enviopago",name:"envio"},null,512),[[u,t.filtroEnvios]]),ie,le])])):p("",!0)])]),e("div",ne,[t.results.length>0?(n(),a("p",ae,"Cantidad: "+i(t.results.length),1)):p("",!0),t.itmPrice?(n(),a("p",re,"Precio propio: $"+i(t.itmPrice),1)):p("",!0),t.results.length>0?(n(),a("button",{key:2,onClick:s[13]||(s[13]=o=>t.exportXlsx()),class:"btn btn-outline-success"},"Exportar")):p("",!0)]),t.results.length>0?(n(),a("div",de,[e("table",ue,[e("thead",null,[e("tr",null,[pe,he,e("th",null,[e("p",{class:"cursor-pointer",onClick:s[14]||(s[14]=o=>t.ordenPorPrecios())},"precio")]),ce,fe,ve,me,be,_e,ye,ke])]),e("tbody",null,[(n(!0),a(q,null,E(t.results,(o,b)=>(n(),a("tr",{key:b},[e("td",null,[e("img",{style:{"max-width":"100px","max-height":"100px"},src:o.thumbnail,alt:"logo"},null,8,ge)]),e("td",null,i(o.title),1),e("td",null,i(o.price),1),e("td",null,i(o.available_quantity),1),e("td",null,i(o.sold_quantity),1),e("td",null,i(o.installments!=null?o.installments.quantity:"-"),1),e("td",null,"%"+i(o.installments!=null?o.installments.rate:"-"),1),e("td",null,i(o.shipping.free_shipping),1),e("td",null,[e("a",{href:o.permalink},i(o.permalink),9,qe)]),e("td",null,i(o.seller.nickname!=null?o.seller.nickname:"-"),1),e("td",null,i(o.condition),1)]))),128))])]),Ee])):p("",!0)])}const Ce=_(P,[["render",Pe]]);export{Ce as default};
