(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{460:function(t,e,o){var content=o(481);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("1ac83a38",content,!0,{sourceMap:!1})},480:function(t,e,o){"use strict";o(460)},481:function(t,e,o){var n=o(24)((function(i){return i[1]}));n.push([t.i,".remove-item-btn[data-v-2a4055e2]{background:none;border:none;color:red;cursor:pointer;font-size:16px;transition:color .2s}.remove-item-btn[data-v-2a4055e2]:hover{color:darkred}.items-section[data-v-2a4055e2]{margin:30px 0;overflow-x:auto}.table-container[data-v-2a4055e2]{overflow-x:auto;width:100%}.items-table[data-v-2a4055e2]{border-collapse:collapse;table-layout:auto;width:100%}.items-table td[data-v-2a4055e2],.items-table th[data-v-2a4055e2]{border:1px solid #ddd;font-size:12px;padding:10px;text-align:center;word-wrap:break-word}.items-table th[data-v-2a4055e2]{background-color:#3282b8;color:#fff}.items-table td input[data-v-2a4055e2]{border:1px solid #ddd;border-radius:4px;color:#aaa;font-style:italic;padding:5px;width:100%}.add-row[data-v-2a4055e2]{align-items:center;background-color:#3282b8;border:none;border-radius:10px;color:#fff;cursor:pointer;display:flex;font-size:16px;font-weight:700;gap:10px;margin-top:20px;padding:7px 12px}.add-icon[data-v-2a4055e2]{height:10px;width:10px}@media (max-width:991px){.items-table td[data-v-2a4055e2],.items-table th[data-v-2a4055e2]{font-size:11px;padding:6px 8px}.add-row[data-v-2a4055e2]{font-size:14px}}",""]),n.locals={},t.exports=n},503:function(t,e,o){"use strict";o.r(e);o(9),o(60),o(161),o(5),o(10);var n={name:"InvoiceItems",data:function(){return{items:[{id:1,item:"",reference:"",price:0,discount:0,tax:0,description:"",quantity:0,total:0},{id:2,item:"",reference:"",price:0,discount:0,tax:0,description:"",quantity:0,total:0},{id:3,item:"",reference:"",price:0,discount:0,tax:0,description:"",quantity:0,total:0}]}},watch:{items:{handler:function(){var t=this;this.items.forEach((function(e){t.calculateTotal(e)}))},deep:!0}},methods:{addItem:function(){this.items.push({id:this.items.length+1,item:"",reference:"",price:0,discount:0,tax:0,description:"",quantity:0,total:0})},removeItem:function(t){this.items.splice(t,1)},calculateTotal:function(t){t.total=t.price*t.quantity-t.price*t.quantity*(t.discount/100)+t.price*t.quantity*(t.tax/100)}}},r=(o(480),o(72)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"items-section",attrs:{"aria-labelledby":"items-heading"}},[e("div",{staticClass:"table-container"},[e("table",{staticClass:"items-table"},[t._m(0),t._v(" "),e("tbody",t._l(t.items,(function(o,n){return e("tr",{key:o.id},[e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:o.item,expression:"item.item"}],attrs:{type:"text",placeholder:"Item"},domProps:{value:o.item},on:{input:function(e){e.target.composing||t.$set(o,"item",e.target.value)}}})]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:o.reference,expression:"item.reference"}],attrs:{type:"text",placeholder:"Referencia"},domProps:{value:o.reference},on:{input:function(e){e.target.composing||t.$set(o,"reference",e.target.value)}}})]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:o.price,expression:"item.price"}],attrs:{type:"number",placeholder:"Precio"},domProps:{value:o.price},on:{input:function(e){e.target.composing||t.$set(o,"price",e.target.value)}}})]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:o.discount,expression:"item.discount"}],attrs:{type:"number",placeholder:"%"},domProps:{value:o.discount},on:{input:function(e){e.target.composing||t.$set(o,"discount",e.target.value)}}})]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:o.tax,expression:"item.tax"}],attrs:{type:"number",placeholder:"Impuesto"},domProps:{value:o.tax},on:{input:function(e){e.target.composing||t.$set(o,"tax",e.target.value)}}})]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:o.description,expression:"item.description"}],attrs:{type:"text",placeholder:"Descripción"},domProps:{value:o.description},on:{input:function(e){e.target.composing||t.$set(o,"description",e.target.value)}}})]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:o.quantity,expression:"item.quantity"}],attrs:{type:"number",placeholder:"Cantidad"},domProps:{value:o.quantity},on:{input:function(e){e.target.composing||t.$set(o,"quantity",e.target.value)}}})]),t._v(" "),e("td",[t._v(t._s(o.total))]),t._v(" "),e("td",[e("button",{staticClass:"remove-item-btn",on:{click:function(e){return t.removeItem(n)}}},[t._v("\n              ✕ ")])])])})),0)])]),t._v(" "),e("button",{staticClass:"add-row",attrs:{type:"button","aria-label":"Add new item row"},on:{click:t.addItem}},[e("img",{staticClass:"add-icon",attrs:{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/8f546edc13a567346e360aa51253094ac447db281dbae4ba879a1d8c6aa4c77a?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6",alt:"Agregar nueva fila","aria-hidden":"true"}}),t._v("\n    Agregar nueva fila\n  ")])])}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("Item")]),t._v(" "),e("th",[t._v("Referencia")]),t._v(" "),e("th",[t._v("Precio")]),t._v(" "),e("th",[t._v("Disc%")]),t._v(" "),e("th",[t._v("Impuesto")]),t._v(" "),e("th",[t._v("Descripción")]),t._v(" "),e("th",[t._v("Cantidad")]),t._v(" "),e("th",[t._v("Total")]),t._v(" "),e("th",[t._v("Acciones")])])])}],!1,null,"2a4055e2",null);e.default=component.exports}}]);