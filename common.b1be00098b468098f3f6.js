(self.webpackChunktecdmx_ifyc=self.webpackChunktecdmx_ifyc||[]).push([[592],{4101:(t,e,a)=>{"use strict";a.d(e,{G:()=>d});var i=a(7716),r=a(8583),n=a(6738);let o=(()=>{class t{constructor(){this.labelDate=""}ngOnInit(){this.today=n(new Date).add(1,"days");var t=this.today,e=this.today,a=this;function i(t,e){a.labelDate=t.format("DD-MM-YYYY")+" - "+e.format("DD-MM-YYYY")}$("#reportrange").daterangepicker({locale:{direction:"ltr",format:"DD/MM/YYYY",separator:" - ",applyLabel:"Aplicar",cancelLabel:"Cancelar",fromLabel:"De",toLabel:"Al",customRangeLabel:"Personalizada",daysOfWeek:["Do","Lu","Ma","Mi","Ju","Vi","Sa"],monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],firstDay:1},startDate:t,endDate:e,minDate:"01-01-2020",ranges:{Hoy:[n(),n()],Ayer:[n().subtract(1,"days"),n().subtract(1,"days")],"Ultimos 7 d\xedas":[n().subtract(6,"days"),n()],"Ultimos 30 d\xedas":[n().subtract(29,"days"),n()],"Este Mes":[n().startOf("month"),n().endOf("month")],"Mes pasado":[n().subtract(1,"month").startOf("month"),n().subtract(1,"month").endOf("month")],"Este A\xf1o":[n().startOf("year"),n().endOf("year")],"Inicio de los tiempos":["01-01-2020",n()]}},i),i(t,e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-calendar"]],decls:4,vars:1,consts:[["id","reportrange",1,"btn","btn-white","p-3"],["aria-hidden","true",1,"fa","fa-calendar","mr-2","text-primary"]],template:function(t,e){1&t&&(i.TgZ(0,"button",0),i._UZ(1,"i",1),i.TgZ(2,"span"),i._uU(3),i.qZA(),i.qZA()),2&t&&(i.xp6(3),i.Oqu(e.labelDate))},styles:[""]}),t})();function s(t,e){if(1&t&&(i.TgZ(0,"a",14),i._uU(1),i.qZA()),2&t){const t=e.$implicit;i.xp6(1),i.hij(" ",t,"")}}function l(t,e){if(1&t&&(i.TgZ(0,"div",8),i.TgZ(1,"div",9),i.TgZ(2,"button",10),i._UZ(3,"i",11),i._uU(4),i.qZA(),i.TgZ(5,"div",12),i.YNc(6,s,2,1,"a",13),i.qZA(),i.qZA(),i.qZA()),2&t){const t=i.oxw();i.xp6(4),i.hij(" ",t.filter," "),i.xp6(2),i.Q6J("ngForOf",t.dataFilter)}}let d=(()=>{class t{constructor(){this.title="",this.filter="",this.dataFilter=[],this.visibleFilter=!0}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-header"]],inputs:{title:"title",filter:"filter",dataFilter:"dataFilter",visibleFilter:"visibleFilter"},decls:13,vars:2,consts:[[1,"container","mt-5"],[1,"d-flex","justify-content-between","align-items-sm-center","flex-column","flex-sm-row","mb-4"],[1,"mr-4","mb-3","mb-sm-0"],[1,"mb-0","title-header"],[1,"small"],[1,"font-weight-500","text-primary"],[1,"row"],["class","col-md-auto",4,"ngIf"],[1,"col-md-auto"],[1,"dropdown","mr-2","mb-4","mb-sm-0"],["id","dropdownNoAnimation","type","button","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-white","p-3","dropdown-toggle"],["data-feather","trending-up",1,"mr-2","text-primary"],["aria-labelledby","dropdownNoAnimation",1,"dropdown-menu"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"dropdown-item"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"h1",3),i._uU(4),i.qZA(),i.TgZ(5,"div",4),i.TgZ(6,"span",5),i._uU(7,"Martes"),i.qZA(),i._uU(8," \xb7 Julio 06, 2021 "),i.qZA(),i.qZA(),i.TgZ(9,"div",6),i.YNc(10,l,7,2,"div",7),i.TgZ(11,"div",8),i._UZ(12,"app-calendar"),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(4),i.Oqu(e.title),i.xp6(6),i.Q6J("ngIf",e.visibleFilter))},directives:[r.O5,o,r.sg],styles:[".title-header[_ngcontent-%COMP%]{font-size:5vh}"]}),t})()}}]);