(window.webpackJsonp=window.webpackJsonp||[]).push([[3,17,19],{450:function(t,e,o){var content=o(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("74820097",content,!0,{sourceMap:!1})},451:function(t,e,o){"use strict";o(450)},452:function(t,e,o){var r=o(24)((function(i){return i[1]}));r.push([t.i,'.action-buttons[data-v-4f7a3d66]{display:flex;gap:20px;justify-content:center;margin-top:20px}.button[data-v-4f7a3d66]{border:none;border-radius:25px;box-shadow:0 4px 6px rgba(0,0,0,.1);cursor:pointer;font-family:"Poppins-SemiBold",Helvetica,Arial,sans-serif;font-size:16px;padding:10px 20px;text-align:center;transition:all .3s ease;width:150px}.button.save[data-v-4f7a3d66]{background-color:#3282b8;color:#fff}.button.save[data-v-4f7a3d66]:hover{background-color:#0f4c75;transform:scale(1.05)}.button.save[data-v-4f7a3d66]:active{background-color:#063a55;transform:scale(.98)}.button.close[data-v-4f7a3d66]{background-color:#f05454;color:#fff}.button.close[data-v-4f7a3d66]:hover{background-color:#d43535;transform:scale(1.05)}.button.close[data-v-4f7a3d66]:active{background-color:#a82222;transform:scale(.98)}.registrate[data-v-4f7a3d66],.template[data-v-4f7a3d66]{background-color:#0f4c75}.registrate[data-v-4f7a3d66]{display:flex;height:100vh;justify-content:center;width:100%}.overlap-wrapper[data-v-4f7a3d66]{background-color:#0f4c75;height:1024px;width:1440px}.overlap[data-v-4f7a3d66]{background-color:#fff;border-radius:15px;box-shadow:0 4px 4px rgba(0,0,0,.251);box-sizing:border-box;height:681px;left:121px;padding:40px;position:inherit;top:247px;width:1216px}.text-wrapper[data-v-4f7a3d66]{color:#000;font-family:"Roboto-Regular",Helvetica;font-size:28px;margin-bottom:30px;text-align:center}.input-group[data-v-4f7a3d66]{left:165px;margin:15px 0;position:relative;width:870px}.label[data-v-4f7a3d66]{display:block;font-size:20px;margin-bottom:5px}.input[data-v-4f7a3d66],.label[data-v-4f7a3d66]{color:#3c2f3d;font-family:"Poppins-Regular",Helvetica}.input[data-v-4f7a3d66]{background-color:#f0f0f0;border:1px solid #ccc;border-radius:20px;box-sizing:border-box;font-size:16px;padding:10px;width:100%}.overlap-group[data-v-4f7a3d66]{align-items:center;background-color:#1b262c;border-radius:15px;display:flex;height:49px;justify-content:center;left:410px;position:absolute;top:552px;width:369px}.register-button[data-v-4f7a3d66]{background-color:#1b262c;border:none;border-radius:15px;color:#fff;cursor:pointer;font-family:"Poppins-Regular",Helvetica;font-size:22px;padding:10px;width:100%}.login-link[data-v-4f7a3d66]{align-items:center;display:flex;height:24px;left:482px;position:absolute;top:615px}.text-wrapper-4[data-v-4f7a3d66]{color:#3c2f3d;font-family:"Poppins-Regular",Helvetica;font-size:16px;margin-right:5px}.text-wrapper-5[data-v-4f7a3d66]{color:#0f4c75;cursor:pointer;font-family:"Poppins-SemiBold",Helvetica;font-size:16px;font-weight:600;-webkit-text-decoration:underline;text-decoration:underline}',""]),r.locals={},t.exports=r},453:function(t,e,o){"use strict";o.r(e);var r={name:"RegisterForm",props:{onSubmit:{type:Function,required:!0},onClose:{type:Function,required:!0}},data:function(){return{formData:{usuario:"",password:"",confirmPassword:"",telefono:"",observaciones:""},errorMessage:""}},methods:{handleRegister:function(){var t=this.formData,e=t.usuario,o=t.password,r=t.confirmPassword,n=t.telefono,c=t.observaciones;return e&&o&&r&&n?o!==r?(this.errorMessage="Las contraseñas no coinciden.",void alert(this.errorMessage)):void this.onSubmit({usuario:e,password:o,telefono:n,observaciones:c}):(this.errorMessage="Por favor, completa todos los campos.",void alert(this.errorMessage))},handleClose:function(){this.onClose()}}},n=(o(451),o(72)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"registrate"},[e("div",{staticClass:"overlap-wrapper"},[e("div",{staticClass:"overlap"},[e("h1",{staticClass:"text-wrapper"},[t._v("\n        Registrarse\n      ")]),t._v(" "),e("div",{staticClass:"input-group"},[e("label",{staticClass:"label",attrs:{for:"usuario"}},[t._v("Usuario")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.usuario,expression:"formData.usuario"}],staticClass:"input",attrs:{id:"usuario",type:"text"},domProps:{value:t.formData.usuario},on:{input:function(e){e.target.composing||t.$set(t.formData,"usuario",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-group"},[e("label",{staticClass:"label",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"input",attrs:{id:"password",type:"password"},domProps:{value:t.formData.password},on:{input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-group"},[e("label",{staticClass:"label",attrs:{for:"confirm-password"}},[t._v("Confirmar Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.confirmPassword,expression:"formData.confirmPassword"}],staticClass:"input",attrs:{id:"confirm-password",type:"password"},domProps:{value:t.formData.confirmPassword},on:{input:function(e){e.target.composing||t.$set(t.formData,"confirmPassword",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-group"},[e("label",{staticClass:"label",attrs:{for:"telefono"}},[t._v("Teléfono")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.telefono,expression:"formData.telefono"}],staticClass:"input",attrs:{id:"telefono",type:"text"},domProps:{value:t.formData.telefono},on:{input:function(e){e.target.composing||t.$set(t.formData,"telefono",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-group"},[e("label",{staticClass:"label",attrs:{for:"observaciones"}},[t._v("Observaciones")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.observaciones,expression:"formData.observaciones"}],staticClass:"input",attrs:{id:"observaciones",rows:"4"},domProps:{value:t.formData.observaciones},on:{input:function(e){e.target.composing||t.$set(t.formData,"observaciones",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"action-buttons"},[e("button",{staticClass:"button save",on:{click:t.handleRegister}},[t._v("\n          Guardar\n        ")]),t._v(" "),e("button",{staticClass:"button close",on:{click:t.handleClose}},[t._v("\n          Cerrar\n        ")])])])])])}),[],!1,null,"4f7a3d66",null);e.default=component.exports},463:function(t,e,o){var content=o(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("55329cc4",content,!0,{sourceMap:!1})},486:function(t,e,o){"use strict";o(463)},487:function(t,e,o){var r=o(24)((function(i){return i[1]}));r.push([t.i,".dialog-card[data-v-b1d7ae66]{background:#fff;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,.1)}.dialog-title[data-v-b1d7ae66]{color:#3282b8;font-size:18px;font-weight:700}.dialog-message[data-v-b1d7ae66]{color:#333;font-size:16px;text-align:center}.dialog-btn[data-v-b1d7ae66]{font-weight:700;padding:10px 20px}.dialog-btn[data-v-b1d7ae66]:first-child{margin-right:10px}.dialog-overlay[data-v-b1d7ae66]{align-items:center;background:rgba(0,0,0,.5);display:flex;height:100vh;justify-content:center;left:0;position:fixed;top:0;width:100vw;z-index:1000}.dialog[data-v-b1d7ae66]{background:#fff;border-radius:10px;padding:20px;position:relative;width:600px}.close-btn[data-v-b1d7ae66]{background:red;border:none;border-radius:5px;color:#fff;cursor:pointer;padding:5px 10px;position:absolute;right:10px;top:10px}.add-contact-btn[data-v-b1d7ae66]{background:#3282b8;border:none;border-radius:10px;color:#fff;cursor:pointer;display:flex;font:700 16px Nunito,sans-serif;gap:15px;margin:20px 95px 20px auto;padding:7px 12px;transform:translateY(85px)}.add-icon[data-v-b1d7ae66]{height:10px;margin:auto 0;width:10px}.contacts-table[data-v-b1d7ae66]{margin-top:20px;width:100%}.table-header[data-v-b1d7ae66]{background:#3282b8;color:#fff;font:700 16px Lato,sans-serif;gap:70px;padding:15px 40px;width:932px}.table-header[data-v-b1d7ae66],.table-row[data-v-b1d7ae66]{border-radius:15px;box-shadow:0 4px 4px rgba(0,0,0,.25);display:flex;margin:35px 95px;transform:translateY(85px)}.table-row[data-v-b1d7ae66]{background:#fff;justify-content:space-around;padding:23px 5px}.contact-info[data-v-b1d7ae66]{color:#000;display:contents;font:700 16px Lato,sans-serif}.action-buttons[data-v-b1d7ae66]{display:flex;gap:10px}.action-btn[data-v-b1d7ae66]{background:none;border:none;cursor:pointer;padding:0}.action-icon[data-v-b1d7ae66]{height:20px;-o-object-fit:contain;object-fit:contain;width:20px}",""]),r.locals={},t.exports=r},496:function(t,e,o){var content=o(528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("09e7a807",content,!0,{sourceMap:!1})},506:function(t,e,o){"use strict";o.r(e);var r=o(549),n=o(509),c=o(449),l=o(536),d=o(447),f=o(1),v=o(109),x=o.n(v),m=o(453),h=Object(f.b)({name:"ContactosCotiForm",components:{RegisterForm:m.default},setup(){const t=Object(f.d)([]),e=Object(f.d)(""),o=Object(f.d)(!1),r=Object(f.d)(!1),n=Object(f.d)(!1),c=Object(f.d)(null),l=Object(f.d)(null),d=async()=>{try{const e=await x.a.get("http://localhost:3020/api/v1/cotizaciones");t.value=e.data.cotizaciones}catch(t){e.value="Error al cargar los contactos.",console.error(t)}},v=async data=>{try{await x.a.post("http://localhost:3020/api/v1/empleados/create",data),alert("Contacto registrado exitosamente."),o.value=!1,d()}catch(t){alert("Error al registrar el contacto."),console.error(t)}};return Object(f.c)((()=>{d()})),{contacts:t,error:e,dialogCreate:o,dialogBorrar:r,dialogUpdate:n,selectedContact:c,idBorrar:l,handleRegisterSubmit:v,deleteEmpleado:t=>{l.value=t,r.value=!0},borralo:async()=>{if(l.value)try{(await x.a.delete(`http://localhost:3020/api/v1/cotizaciones/delete/${l.value}`)).data.success?(alert("Contacto eliminado exitosamente."),d()):alert("Error al eliminar el contacto.")}catch(t){console.error("Error al borrar contacto:",t),alert("Ocurrió un error al intentar eliminar el contacto.")}finally{r.value=!1,l.value=null}},closeDialog:()=>{o.value=!1,n.value=!1},handleContactSubmit:async data=>{if(data._id)try{await x.a.put(`http://localhost:3020/api/v1/cotizaciones/update/${data._id}`,data),alert("Contacto actualizado exitosamente."),n.value=!1,d()}catch(t){alert("Error al actualizar el contacto."),console.error(t)}else await v(data)},openUpdateDialog:t=>{console.log("contactData received:",t),c.value={...t},n.value=!0}}},methods:{GoAddVentas(){this.$router.push("/ventas/Cotizacion")}}}),_=(o(486),o(72)),component=Object(_.a)(h,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("button",{staticClass:"add-contact-btn",on:{click:t.GoAddVentas}},[e("img",{staticClass:"add-icon",attrs:{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/8f546edc13a567346e360aa51253094ac447db281dbae4ba879a1d8c6aa4c77a?placeholderIfAbsent=true&apiKey=275ebdc6715d4357b6c0187273c37968",alt:"Add new contact"}}),t._v(" "),e("span",[t._v("Agregar nueva cotizacion")])]),t._v(" "),t.error?e("div",{staticClass:"error-message"},[t._v("\n    "+t._s(t.error)+"\n  ")]):t._e(),t._v(" "),0===t.contacts.length?e("section",{staticClass:"no-contacts"},[e("p",[t._v("No hay ventas disponibles.")])]):e("section",{staticClass:"contacts-table"},[t._m(0),t._v(" "),t._l(t.contacts,(function(o){return e("article",{key:o.id,staticClass:"table-row"},[e("div",{staticClass:"contact-info"},[e("span",{staticClass:"cell"},[t._v(t._s(o.numero))]),t._v(" "),e("span",{staticClass:"cell"},[t._v(t._s(o.cliente))]),t._v(" "),e("span",{staticClass:"cell"},[t._v(t._s(o.creacion))]),t._v(" "),e("span",{staticClass:"cell"},[t._v(t._s(o.vencimiento))]),t._v(" "),e("span",{staticClass:"cell"},[t._v(t._s(o.estado))]),t._v(" "),e("span",{staticClass:"cell"},[t._v(t._s(o.total))])]),t._v(" "),e("div",{staticClass:"action-buttons"},[e("button",{staticClass:"action-btn",on:{click:function(e){return t.openUpdateDialog(o)}}},[e("img",{staticClass:"action-icon",attrs:{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/d16dded88dff2685de4c2f871b8006b3d96b70bcd7ba563ba85419abbabdd82f?placeholderIfAbsent=true&apiKey=275ebdc6715d4357b6c0187273c37968",alt:"Editar contacto"}})]),t._v(" "),e("button",{staticClass:"action-btn",on:{click:function(e){return t.deleteEmpleado(o.id)}}},[e("img",{staticClass:"action-icon",attrs:{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/d4a520a2d2ae93ae806fe2bb693c3197a3883a1884d510838ac11fed0f71ff99?placeholderIfAbsent=true&apiKey=275ebdc6715d4357b6c0187273c37968",alt:"Eliminar contacto"}})])])])}))],2),t._v(" "),t.dialogCreate?e("div",{staticClass:"dialog-overlay"},[e("div",{staticClass:"dialog"},[e("RegisterForm",{attrs:{"on-submit":t.handleRegisterSubmit,"navigate-to-login":t.closeDialog,"on-close":t.closeDialog}})],1)]):t._e(),t._v(" "),e(l.a,{attrs:{width:"500",persistent:""},model:{value:t.dialogBorrar,callback:function(e){t.dialogBorrar=e},expression:"dialogBorrar"}},[e(n.a,{staticClass:"dialog-card"},[e(c.c,{staticClass:"pa-3 ma-3"},[e(d.a,{attrs:{align:"center",justify:"center"}},[e("span",{staticClass:"dialog-title"},[t._v("Borrar Venta")])])],1),t._v(" "),e(c.b,{staticClass:"pa-3 ma-3"},[e(d.a,{attrs:{align:"center",justify:"center"}},[e("span",{staticClass:"dialog-message"},[t._v("¿Estás seguro de que quieres eliminar esta venta?")])])],1),t._v(" "),e(c.a,{staticClass:"pa-3 ma-3"},[e(d.a,{attrs:{align:"center",justify:"center"}},[e(r.a,{staticClass:"dialog-btn",attrs:{color:"yellow"},on:{click:function(e){t.dialogBorrar=!1}}},[t._v("\n            Cancelar\n          ")]),t._v(" "),e(r.a,{staticClass:"dialog-btn",attrs:{color:"red"},on:{click:t.borralo}},[t._v("\n            Borrar\n          ")])],1)],1)],1)],1)],1)}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("header",{staticClass:"table-header"},[e("span",{staticClass:"header-cell"},[t._v("Numero")]),t._v(" "),e("span",{staticClass:"header-cell"},[t._v("Cliente")]),t._v(" "),e("span",{staticClass:"header-cell"},[t._v("Creacion")]),t._v(" "),e("span",{staticClass:"header-cell"},[t._v("Vencimiento")]),t._v(" "),e("span",{staticClass:"header-cell"},[t._v("Estado")]),t._v(" "),e("span",{staticClass:"header-cell"},[t._v("Total")]),t._v(" "),e("span",{staticClass:"header-cell"},[t._v("Acciones")])])}],!1,null,"b1d7ae66",null);e.default=component.exports},527:function(t,e,o){"use strict";o(496)},528:function(t,e,o){var r=o(24)((function(i){return i[1]}));r.push([t.i,'.invoice-container[data-v-599178cc]{display:flex;font-family:"Nunito",sans-serif;justify-content:center;padding:20px}.layout[data-v-599178cc]{display:flex;flex-direction:row;max-width:1200px;width:100%}.content[data-v-599178cc]{flex-grow:1;padding:20px}.title[data-v-599178cc]{color:#1b262c;font-size:24px;font-weight:700;margin-bottom:20px}.button-container[data-v-599178cc]{align-items:center;display:flex;justify-content:space-between;margin-bottom:20px}.invoice-button[data-v-599178cc]{align-items:center;background-color:#3282b8;border:none;border-radius:10px;color:#fff;cursor:pointer;display:flex;font-size:16px;font-weight:700;gap:10px;padding:10px 15px;transition:background-color .2s ease}.invoice-button[data-v-599178cc]:hover{background-color:#2878ae}.invoice-filter[data-v-599178cc]{align-items:center;border:1px solid #3282b8;border-radius:50px;color:#3282b8;cursor:pointer;display:flex;font-size:16px;gap:10px;padding:8px 20px;position:relative}.filter-icon[data-v-599178cc]{height:auto;width:12px}.dropdown-menu[data-v-599178cc]{background:#fff;border:1px solid #ddd;border-radius:8px;box-shadow:0 4px 6px rgba(0,0,0,.1);left:0;list-style:none;margin:0;padding:10px 0;position:absolute;top:calc(100% + 10px);width:200px;z-index:10}.dropdown-menu li[data-v-599178cc]{color:#1b262c;cursor:pointer;font-size:16px;padding:10px 15px;transition:background-color .3s ease}.dropdown-menu li[data-v-599178cc]:hover{background:#f1f1f1}.table-container[data-v-599178cc]{margin-top:20px;overflow-x:auto}.invoice-table[data-v-599178cc]{background-color:#fff;border:1px solid #ddd;border-collapse:collapse;text-align:left;width:100%}.table-header[data-v-599178cc]{background-color:#3282b8;color:#fff}.table-header th[data-v-599178cc]{font-size:16px;font-weight:700;padding:12px 15px;text-transform:uppercase}.table-row[data-v-599178cc]{border-bottom:1px solid #ddd;transition:background-color .2s ease}.table-row[data-v-599178cc]:hover{background-color:#f9f9f9}.table-row td[data-v-599178cc]{color:#333;font-size:14px;padding:10px 15px}.actions[data-v-599178cc]{display:flex;gap:10px;justify-content:center}.action-btn[data-v-599178cc]{background:none;border:none;cursor:pointer;padding:5px;transition:transform .2s ease}.action-btn[data-v-599178cc]:hover{transform:scale(1.1)}.action-icon[data-v-599178cc]{height:auto;width:20px}@media (max-width:768px){.button-container[data-v-599178cc]{flex-direction:column;gap:15px}.invoice-button[data-v-599178cc],.invoice-filter[data-v-599178cc]{width:100%}}',""]),r.locals={},t.exports=r},534:function(t,e,o){"use strict";o.r(e);o(161);var r={components:{ventaCotiForm:o(506).default},data:function(){return{isMenuOpen:!1,invoices:[{name:"Good Shoes",taxId:"RU123456",phone:"314502365",notes:"Pending approval"},{name:"Fast Cars",taxId:"CA654321",phone:"314789456",notes:"Delivered"}]}},methods:{toggleMenu:function(){this.isMenuOpen=!this.isMenuOpen},selectOption:function(option){"Facturas recurrentes"===option?this.$router.push("/ventas"):"Cotizaciones"===option&&this.$router.push("/ventas/cotizacionesTabla"),this.isMenuOpen=!1},handleAddInvoice:function(){this.$router.push("/ventas/AddVenta"),alert("Redirigiendo para agregar una nueva factura...")},editInvoice:function(t){alert("Editando la factura con índice: ".concat(t))},deleteInvoice:function(t){confirm("¿Estás seguro de eliminar esta factura?")&&(this.invoices.splice(t,1),alert("Factura eliminada."))}}},n=(o(527),o(72)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"invoice-container"},[e("div",{staticClass:"layout"},[e("aside",{staticClass:"sidebar"}),t._v(" "),e("section",{staticClass:"content"},[t._m(0),t._v(" "),e("section",{staticClass:"invoice-section"},[e("div",{staticClass:"button-container"},[e("div",{staticClass:"invoice-filter",on:{click:t.toggleMenu}},[e("h2",{staticClass:"filter-title"},[t._v("\n              COTIZACION\n            ")]),t._v(" "),e("img",{staticClass:"filter-icon",attrs:{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/879512853f4f9f066c4a0ca115ff454d1e1662e69bd2f0e04dc30daf21f6ca5e?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6",alt:"Filter icon"}}),t._v(" "),t.isMenuOpen?e("ul",{staticClass:"dropdown-menu"},[e("li",{on:{click:function(e){return t.selectOption("Facturas recurrentes")}}},[t._v("\n                Facturas recurrentes\n              ")]),t._v(" "),e("li",{on:{click:function(e){return t.selectOption("Cotizaciones")}}},[t._v("\n                Cotizaciones\n              ")])]):t._e()])]),t._v(" "),e("ventaCotiForm")],1)])])])}),[function(){var t=this._self._c;return t("header",{staticClass:"header"},[t("h1",{staticClass:"title"},[this._v("\n          Cotizacion\n        ")])])}],!1,null,"599178cc",null);e.default=component.exports}}]);