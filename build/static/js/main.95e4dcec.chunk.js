(this["webpackJsonpredux-example"]=this["webpackJsonpredux-example"]||[]).push([[0],{12:function(t,e,a){t.exports={cartItem:"CartItem_cartItem__K1WIv",cartItem__image:"CartItem_cartItem__image__3skMI",cartItem__details:"CartItem_cartItem__details__2i3rg",details__title:"CartItem_details__title__3CVho",details__desc:"CartItem_details__desc__1jgze",details__price:"CartItem_details__price__1GKDY",cartItem__actions:"CartItem_cartItem__actions__3_8eY",cartItem__qty:"CartItem_cartItem__qty__2l2vF",actions__deleteItemBtn:"CartItem_actions__deleteItemBtn__3-xO1"}},15:function(t,e,a){t.exports={navbar:"Navbar_navbar__mk32v",navbar__logo:"Navbar_navbar__logo__23SML",navbar__cart:"Navbar_navbar__cart__UVSRt",cart__title:"Navbar_cart__title__195cg",cart__image:"Navbar_cart__image__15ucC",cart__counter:"Navbar_cart__counter__1wWF8",modal:"Navbar_modal__RBGcd"}},16:function(t,e,a){t.exports={singleItem:"SingleItem_singleItem__2JMl6",singleItem__image:"SingleItem_singleItem__image__pIdbq",singleItem__details:"SingleItem_singleItem__details__13aUY",details__title:"SingleItem_details__title__3tZuZ",details__price:"SingleItem_details__price__S8qKz",details__description:"SingleItem_details__description__1uSAB",details__addBtn:"SingleItem_details__addBtn__DLree"}},18:function(t,e,a){t.exports={cart:"Cart_cart__215Sa",cart__items:"Cart_cart__items__3r8eC",cart__summary:"Cart_cart__summary__2RrLH",summary__title:"Cart_summary__title__3GTSR",summary__price:"Cart_summary__price__1wC_n",summary__checkoutBtn:"Cart_summary__checkoutBtn__1d5gh"}},31:function(t,e,a){t.exports={products:"Products_products__3fILu"}},36:function(t,e,a){t.exports=a(48)},41:function(t,e,a){},42:function(t,e,a){},48:function(t,e,a){"use strict";a.r(e);var c=a(0),r=a.n(c),n=a(10),i=a.n(n),_=(a(41),a(13)),o=a(2),s=(a(42),a(3)),l=a(14),m=a(15),u=a.n(m),d=a(53),p=a(18),b=a.n(p),f=function(t){return{type:"ADD_TO_CART",payload:{id:t}}},g=a(12),E=a.n(g),v=Object(s.b)(null,(function(t){return{adjustQty:function(e,a){return t({type:"ADJUST_ITEM_QTY",payload:{id:e,qty:a}})},removeFromCart:function(e){return t({type:"REMOVE_FROM_CART",payload:{id:e}})}}}))((function(t){var e=t.item,a=t.adjustQty,n=t.removeFromCart,i=Object(c.useState)(e.qty),_=Object(l.a)(i,2),o=_[0],s=_[1];return r.a.createElement("div",{className:E.a.cartItem},r.a.createElement("img",{className:E.a.cartItem__image,src:e.image,alt:e.title}),r.a.createElement("div",{className:E.a.cartItem__details},r.a.createElement("p",{className:E.a.details__title},e.title),r.a.createElement("p",{className:E.a.details__desc},e.description),r.a.createElement("p",{className:E.a.details__price},"$ ",e.price)),r.a.createElement("div",{className:E.a.cartItem__actions},r.a.createElement("div",{className:E.a.cartItem__qty},r.a.createElement("label",{htmlFor:"qty"},"Qty"),r.a.createElement("input",{min:"1",type:"number",id:"qty",name:"qty",value:o,onChange:function(t){s(t.target.value),a(e.id,t.target.value)}})),r.a.createElement("button",{onClick:function(){return n(e.id)},className:E.a.actions__deleteItemBtn},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/709/709519.svg",alt:""}))))})),y=Object(s.b)((function(t,e){return{cart:t.shop.cart}}))((function(t){var e=t.cart,a=t.data,n=Object(s.c)(),i=Object(c.useState)(0),_=Object(l.a)(i,2),m=_[0],u=_[1],d=Object(c.useState)(0),p=Object(l.a)(d,2),f=p[0],g=p[1],E=Object(o.g)();console.log(a),Object(c.useEffect)((function(){var t=0,a=0;e.forEach((function(e){t+=e.qty,a+=e.qty*e.price})),g(t),u(a)}),[e,m,f,u,g]);return r.a.createElement("div",{className:b.a.cart},r.a.createElement("div",{className:b.a.cart__items},e.map((function(t){return r.a.createElement(v,{key:t.id,item:t})}))),r.a.createElement("div",{className:b.a.cart__summary},r.a.createElement("h4",{className:b.a.summary__title},"Cart Summary"),r.a.createElement("div",{className:b.a.summary__price},r.a.createElement("span",null,"TOTAL: (",f," items)"),r.a.createElement("span",null,"$ ",m)),r.a.createElement("button",{onClick:function(){n({type:"CHECKOUT_CART"}),a(),E.push("/")},className:b.a.summary__checkoutBtn},"Proceed To Checkout")))})),h=Object(s.b)((function(t){return{cart:t.shop.cart}}))((function(t){var e=t.cart,a=Object(c.useState)(!1),n=Object(l.a)(a,2),i=n[0],o=n[1],s=function(){o(!1)},m=Object(c.useState)(0),p=Object(l.a)(m,2),b=p[0],f=p[1];return Object(c.useEffect)((function(){var t=0;e.forEach((function(e){t+=e.qty})),f(t)}),[e,b]),r.a.createElement("div",{className:u.a.navbar},r.a.createElement(_.b,{to:"/"},r.a.createElement("h2",{className:u.a.navbar__logo},"React-Redux Shopping Cart")),r.a.createElement(_.b,{to:"/cart",onClick:function(){return o(!0)}},r.a.createElement("div",{className:u.a.navbar__cart},r.a.createElement("h3",{className:u.a.cart__title},"Cart"),r.a.createElement("img",{className:u.a.cart__image,src:"https://image.flaticon.com/icons/svg/102/102276.svg",alt:"shopping cart"}),r.a.createElement("div",{className:u.a.cart__counter},b))),r.a.createElement(d.a,{className:u.a.modal,open:i,onClose:s},r.a.createElement(y,{data:s})))})),I=a(31),C=a.n(I),O=a(9),N=a.n(O),j=Object(s.b)(null,(function(t){return{addToCart:function(e){return t(f(e))},loadCurrentItem:function(e){return t(function(t){return{type:"LOAD_CURRENT_ITEM",payload:t}}(e))}}}))((function(t){var e=t.product,a=t.addToCart,c=t.loadCurrentItem;return r.a.createElement("div",{className:N.a.product},r.a.createElement("img",{className:N.a.product__image,src:e.image,alt:e.title}),r.a.createElement("div",{className:N.a.product__details},r.a.createElement("p",{className:N.a.details__title},e.title),r.a.createElement("p",{className:N.a.details__desc},e.description),r.a.createElement("p",{className:N.a.details__price},"$ ",e.price)),r.a.createElement("div",{className:N.a.product__buttons},r.a.createElement(_.b,{to:"/product/".concat(e.id)},r.a.createElement("button",{onClick:function(){return c(e)},className:"".concat(N.a.buttons__btn," ").concat(N.a.buttons__view)},"View Item")),r.a.createElement("button",{onClick:function(){return a(e.id)},className:"".concat(N.a.buttons__btn," ").concat(N.a.buttons__add)},"Add To Cart")))})),T=Object(s.b)((function(t){return{products:t.shop.products}}))((function(t){var e=t.products;return r.a.createElement("div",{className:C.a.products},e.map((function(t){return r.a.createElement(j,{key:t.id,product:t})})))})),S=a(16),k=a.n(S),w=Object(s.b)((function(t){return{current:t.shop.currentItem}}),(function(t){return{addToCart:function(e){return t(f(e))}}}))((function(t){var e=t.current,a=t.addToCart;return r.a.createElement("div",{className:k.a.singleItem},r.a.createElement("img",{className:k.a.singleItem__image,src:e.image,alt:e.title}),r.a.createElement("div",{className:k.a.singleItem__details},r.a.createElement("p",{className:k.a.details__title},e.title),r.a.createElement("p",{className:k.a.details__description},e.description),r.a.createElement("p",{className:k.a.details__price},"$ ",e.price),r.a.createElement("button",{onClick:function(){return a(e.id)},className:k.a.details__addBtn},"Add To Cart")))}));var R=Object(s.b)((function(t){return{current:t.shop.currentItem}}))((function(t){var e=t.current;return r.a.createElement(_.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(h,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:T}),e?r.a.createElement(o.b,{exact:!0,path:"/product/:id",component:w}):r.a.createElement(o.a,{to:"/"}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(17),x=a(32),A=a(34),B=a(4),M={products:[{id:1,title:"This is the COOLEST Cube Ever",description:"This cube will keep you busy the entire day and it is very fun to play with",price:15,image:"https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{id:2,title:"Large Coffee Cup",description:"Get a big cup of coffee every morning before the day starts",price:20,image:"https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:3,title:"Books That CHANGED My Life",description:"These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",price:150,image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80"},{id:4,title:"NIKE Red Shoes",description:"Shoes that adds color to your foot",price:250,image:"https://res.cloudinary.com/dbnx45o9v/image/upload/v1626025384/images/revolt-164_6wVEHfI-unsplash_mp9krl.jpg"},{id:5,title:"LA Grey Cap",description:"Best Head Gear",price:50,image:"https://res.cloudinary.com/dbnx45o9v/image/upload/v1626025565/images/pexels-jens-mahnke-844867_suswbe.jpg"}],cart:[],currentItem:null},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TO_CART":var a=t.products.find((function(t){return t.id===e.payload.id})),c=t.cart.find((function(t){return t.id===e.payload.id}));return Object(B.a)(Object(B.a)({},t),{},{cart:c?t.cart.map((function(t){return t.id===e.payload.id?Object(B.a)(Object(B.a)({},t),{},{qty:t.qty+1}):t})):[].concat(Object(A.a)(t.cart),[Object(B.a)(Object(B.a)({},a),{},{qty:1})])});case"REMOVE_FROM_CART":return Object(B.a)(Object(B.a)({},t),{},{cart:t.cart.filter((function(t){return t.id!==e.payload.id}))});case"ADJUST_ITEM_QTY":return Object(B.a)(Object(B.a)({},t),{},{cart:t.cart.map((function(t){return t.id===e.payload.id?Object(B.a)(Object(B.a)({},t),{},{qty:+e.payload.qty}):t}))});case"LOAD_CURRENT_ITEM":return Object(B.a)(Object(B.a)({},t),{},{currentItem:e.payload});case"CHECKOUT_CART":return Object(B.a)(Object(B.a)({},t),{},{cart:[]});default:return t}},P=Object(q.combineReducers)({shop:D}),L=Object(q.createStore)(P,Object(x.composeWithDevTools)());i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:L},r.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,a){t.exports={product:"Product_product__3oRz8",product__image:"Product_product__image__3V2qG",product__details:"Product_product__details__mLPhM",details__title:"Product_details__title__1qgTg",details__desc:"Product_details__desc__1DfOB",details__price:"Product_details__price__3vwN_",product__buttons:"Product_product__buttons__1KGAy",buttons__btn:"Product_buttons__btn__cnkO1",buttons__view:"Product_buttons__view__19ciP",buttons__add:"Product_buttons__add__zcX_R"}}},[[36,1,2]]]);
//# sourceMappingURL=main.95e4dcec.chunk.js.map