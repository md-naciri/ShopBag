(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[53],{114:function(e,t,n){"use strict";var c=n(15),s=n.n(c),a=n(0),i=n(150),o=n(6),l=n.n(o);n(214);const r=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,decimalScale:null==e?void 0:e.minorUnit,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});t.a=e=>{let{className:t,value:n,currency:c,onValueChange:o,displayType:p="text",...d}=e;const b="string"==typeof n?parseInt(n,10):n;if(!Number.isFinite(b))return null;const u=b/10**c.minorUnit;if(!Number.isFinite(u))return null;const m=l()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),g={...d,...r(c),value:void 0,currency:void 0,onValueChange:void 0},h=o?e=>{const t=+e.value*10**c.minorUnit;o(t)}:()=>{};return Object(a.createElement)(i.a,s()({className:m,displayType:p},g,{value:u,onValueChange:h}))}},148:function(e,t,n){"use strict";var c=n(0);n(215),t.a=()=>Object(c.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},149:function(e,t,n){"use strict";var c=n(0),s=n(1),a=n(6),i=n.n(a),o=(n(216),n(148));t.a=e=>{let{children:t,className:n,screenReaderLabel:a,showSpinner:l=!1,isLoading:r=!0}=e;return Object(c.createElement)("div",{className:i()(n,{"wc-block-components-loading-mask":r})},r&&l&&Object(c.createElement)(o.a,null),Object(c.createElement)("div",{className:i()({"wc-block-components-loading-mask__children":r}),"aria-hidden":r},t),r&&Object(c.createElement)("span",{className:"screen-reader-text"},a||Object(s.__)("Loading…","woocommerce")))}},21:function(e,t,n){"use strict";var c=n(0),s=n(6),a=n.n(s);t.a=e=>{let t,{label:n,screenReaderLabel:s,wrapperElement:i,wrapperProps:o={}}=e;const l=null!=n,r=null!=s;return!l&&r?(t=i||"span",o={...o,className:a()(o.className,"screen-reader-text")},Object(c.createElement)(t,o,s)):(t=i||c.Fragment,l&&r&&n!==s?Object(c.createElement)(t,o,Object(c.createElement)("span",{"aria-hidden":"true"},n),Object(c.createElement)("span",{className:"screen-reader-text"},s)):Object(c.createElement)(t,o,n))}},214:function(e,t){},215:function(e,t){},216:function(e,t){},281:function(e,t,n){"use strict";var c=n(0),s=n(6),a=n.n(s),i=n(282);t.a=e=>{let{checked:t,name:n,onChange:s,option:o}=e;const{value:l,label:r,description:p,secondaryLabel:d,secondaryDescription:b}=o;return Object(c.createElement)("label",{className:a()("wc-block-components-radio-control__option",{"wc-block-components-radio-control__option-checked":t}),htmlFor:`${n}-${l}`},Object(c.createElement)("input",{id:`${n}-${l}`,className:"wc-block-components-radio-control__input",type:"radio",name:n,value:l,onChange:e=>s(e.target.value),checked:t,"aria-describedby":a()({[`${n}-${l}__label`]:r,[`${n}-${l}__secondary-label`]:d,[`${n}-${l}__description`]:p,[`${n}-${l}__secondary-description`]:b})}),Object(c.createElement)(i.a,{id:`${n}-${l}`,label:r,secondaryLabel:d,description:p,secondaryDescription:b}))}},282:function(e,t,n){"use strict";var c=n(0);t.a=e=>{let{label:t,secondaryLabel:n,description:s,secondaryDescription:a,id:i}=e;return Object(c.createElement)("div",{className:"wc-block-components-radio-control__option-layout"},Object(c.createElement)("div",{className:"wc-block-components-radio-control__label-group"},t&&Object(c.createElement)("span",{id:i&&i+"__label",className:"wc-block-components-radio-control__label"},t),n&&Object(c.createElement)("span",{id:i&&i+"__secondary-label",className:"wc-block-components-radio-control__secondary-label"},n)),(s||a)&&Object(c.createElement)("div",{className:"wc-block-components-radio-control__description-group"},s&&Object(c.createElement)("span",{id:i&&i+"__description",className:"wc-block-components-radio-control__description"},s),a&&Object(c.createElement)("span",{id:i&&i+"__secondary-description",className:"wc-block-components-radio-control__secondary-description"},a)))}},285:function(e,t,n){"use strict";var c=n(15),s=n.n(c),a=n(0),i=n(6),o=n.n(i);n(286),t.a=e=>{let{children:t,className:n,headingLevel:c,...i}=e;const l=o()("wc-block-components-title",n),r="h"+c;return Object(a.createElement)(r,s()({className:l},i),t)}},286:function(e,t){},288:function(e,t){},289:function(e,t,n){"use strict";var c=n(1);t.a=e=>{let{defaultTitle:t=Object(c.__)("Step","woocommerce"),defaultDescription:n=Object(c.__)("Step description text.","woocommerce"),defaultShowStepNumber:s=!0}=e;return{title:{type:"string",default:t},description:{type:"string",default:n},showStepNumber:{type:"boolean",default:s}}}},293:function(e,t,n){"use strict";var c=n(0),s=n(6),a=n.n(s),i=n(9),o=n(281);n(294);const l=e=>{let{className:t="",id:n,selected:s,onChange:r,options:p=[]}=e;const d=Object(i.useInstanceId)(l),b=n||d;return p.length?Object(c.createElement)("div",{className:a()("wc-block-components-radio-control",t)},p.map(e=>Object(c.createElement)(o.a,{key:`${b}-${e.value}`,name:"radio-control-"+b,checked:e.value===s,option:e,onChange:t=>{r(t),"function"==typeof e.onChange&&e.onChange(t)}}))):null};t.a=l},294:function(e,t){},306:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(7),s=n(3);const a=()=>{const{customerData:e,isInitialized:t}=Object(c.useSelect)(e=>{const t=e(s.CART_STORE_KEY);return{customerData:t.getCustomerData(),isInitialized:t.hasFinishedResolution("getCartData")}}),{setShippingAddress:n,setBillingAddress:a}=Object(c.useDispatch)(s.CART_STORE_KEY);return{isInitialized:t,billingAddress:e.billingAddress,shippingAddress:e.shippingAddress,setBillingAddress:a,setShippingAddress:n}}},311:function(e,t,n){"use strict";var c=n(0),s=n(6),a=n.n(s),i=n(285);n(288);const o=e=>{let{title:t,stepHeadingContent:n}=e;return Object(c.createElement)("div",{className:"wc-block-components-checkout-step__heading"},Object(c.createElement)(i.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},t),!!n&&Object(c.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},n))};t.a=e=>{let{id:t,className:n,title:s,legend:i,description:l,children:r,disabled:p=!1,showStepNumber:d=!0,stepHeadingContent:b=(()=>{})}=e;const u=i||s?"fieldset":"div";return Object(c.createElement)(u,{className:a()(n,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":d,"wc-block-components-checkout-step--disabled":p}),id:t,disabled:p},!(!i&&!s)&&Object(c.createElement)("legend",{className:"screen-reader-text"},i||s),!!s&&Object(c.createElement)(o,{title:s,stepHeadingContent:b()}),Object(c.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!l&&Object(c.createElement)("p",{className:"wc-block-components-checkout-step__description"},l),Object(c.createElement)("div",{className:"wc-block-components-checkout-step__content"},r)))}},334:function(e,t){},348:function(e,t,n){"use strict";var c=n(0),s=n(1),a=n(149),i=n(11),o=n(246),l=n(42),r=n(45),p=n(121),d=n(6),b=n.n(d),u=n(31),m=n(21),g=n(73),h=n(335),O=n.n(h);const _=["a","b","em","i","strong","p","br"],j=["target","href","rel","name","download"],k=(e,t)=>{const n=(null==t?void 0:t.tags)||_,c=(null==t?void 0:t.attr)||j;return O.a.sanitize(e,{ALLOWED_TAGS:n,ALLOWED_ATTR:c})};var E=n(293),w=n(282),f=n(43),S=n(114),v=n(2);const N=e=>{const t=Object(v.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(e.price,10)+parseInt(e.taxes,10):parseInt(e.price,10);return{label:Object(u.decodeEntities)(e.name),value:e.rate_id,description:Object(c.createElement)(c.Fragment,null,Number.isFinite(t)&&Object(c.createElement)(S.a,{currency:Object(f.getCurrencyFromPriceResponse)(e),value:t}),Number.isFinite(t)&&e.delivery_time?" — ":null,Object(u.decodeEntities)(e.delivery_time))}};var y=e=>{let{className:t="",noResultsMessage:n,onSelectRate:s,rates:a,renderOption:i=N,selectedRate:o}=e;const l=(null==o?void 0:o.rate_id)||"",[r,p]=Object(c.useState)(l);if(Object(c.useEffect)(()=>{l&&p(l)},[l]),Object(c.useEffect)(()=>{!r&&a[0]&&(p(a[0].rate_id),s(a[0].rate_id))},[s,a,r]),0===a.length)return n;if(a.length>1)return Object(c.createElement)(E.a,{className:t,onChange:e=>{p(e),s(e)},selected:r,options:a.map(i)});const{label:d,secondaryLabel:b,description:u,secondaryDescription:m}=i(a[0]);return Object(c.createElement)(w.a,{label:d,secondaryLabel:b,description:u,secondaryDescription:m})};n(334);var C=e=>{let{packageId:t,className:n="",noResultsMessage:a,renderOption:o,packageData:l,collapsible:r,showItems:d}=e;const{selectShippingRate:h}=Object(p.a)(),{dispatchCheckoutEvent:O}=Object(g.a)(),_=document.querySelectorAll(".wc-block-components-shipping-rates-control__package").length>1,j=null!=d?d:_,E=null!=r?r:_,w=Object(c.createElement)(c.Fragment,null,(E||j)&&Object(c.createElement)("div",{className:"wc-block-components-shipping-rates-control__package-title",dangerouslySetInnerHTML:{__html:k(l.name)}}),j&&Object(c.createElement)("ul",{className:"wc-block-components-shipping-rates-control__package-items"},Object.values(l.items).map(e=>{const t=Object(u.decodeEntities)(e.name),n=e.quantity;return Object(c.createElement)("li",{key:e.key,className:"wc-block-components-shipping-rates-control__package-item"},Object(c.createElement)(m.a,{label:n>1?`${t} × ${n}`:""+t,screenReaderLabel:Object(s.sprintf)(
/* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */
Object(s._n)("%1$s (%2$d unit)","%1$s (%2$d units)",n,"woocommerce"),t,n)}))}))),f={className:n,noResultsMessage:a,rates:l.shipping_rates,onSelectRate:e=>{h(e,t),O("set-selected-shipping-rate",{shippingRateId:e})},selectedRate:l.shipping_rates.find(e=>e.selected),renderOption:o};return E?Object(c.createElement)(i.Panel,{className:"wc-block-components-shipping-rates-control__package",initialOpen:!1,title:w},Object(c.createElement)(y,f)):Object(c.createElement)("div",{className:b()("wc-block-components-shipping-rates-control__package",n)},w,Object(c.createElement)(y,f))},R=n(28);const A=e=>{let{packages:t,showItems:n,collapsible:s,noResultsMessage:a,renderOption:i}=e;return t.length?Object(c.createElement)(c.Fragment,null,t.map(e=>{let{package_id:t,...o}=e;return Object(c.createElement)(C,{key:t,packageId:t,packageData:o,collapsible:s,showItems:n,noResultsMessage:a,renderOption:i})})):null};t.a=e=>{let{shippingRates:t,isLoadingRates:n,className:d,collapsible:b,showItems:u,noResultsMessage:m,renderOption:g,context:h}=e;Object(c.useEffect)(()=>{var e,c;n||(e=Object(o.a)(t),c=Object(o.b)(t),1===e?Object(R.speak)(Object(s.sprintf)(
/* translators: %d number of shipping options found. */
Object(s._n)("%d shipping option was found.","%d shipping options were found.",c,"woocommerce"),c)):Object(R.speak)(Object(s.sprintf)(
/* translators: %d number of shipping packages packages. */
Object(s._n)("Shipping option searched for %d package.","Shipping options searched for %d packages.",e,"woocommerce"),e)+" "+Object(s.sprintf)(
/* translators: %d number of shipping options available. */
Object(s._n)("%d shipping option was found","%d shipping options were found",c,"woocommerce"),c)))},[n,t]);const{extensions:O,receiveCart:_,...j}=Object(l.a)(),k={className:d,collapsible:b,showItems:u,noResultsMessage:m,renderOption:g,extensions:O,cart:j,components:{ShippingRatesControlPackage:C},context:h},{isEditor:E}=Object(r.a)(),{hasSelectedLocalPickup:w}=Object(p.a)();return Object(c.createElement)(a.a,{isLoading:n,screenReaderLabel:Object(s.__)("Loading shipping rates…","woocommerce"),showSpinner:!0},Object(c.createElement)(i.ExperimentalOrderShippingPackages.Slot,k),w&&t.length>1&&!E&&Object(c.createElement)(i.StoreNotice,{className:"wc-block-components-notice",isDismissible:!1,status:"warning"},Object(s.__)("Multiple shipments must have the same pickup location","woocommerce")),Object(c.createElement)(i.ExperimentalOrderShippingPackages,null,Object(c.createElement)(A,{packages:t,noResultsMessage:m,renderOption:g})))}},402:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(2),s=n(0),a=n(7),i=n(3),o=n(306),l=n(121);const r=()=>{const{needsShipping:e}=Object(l.a)(),{useShippingAsBilling:t,prefersCollection:n}=Object(a.useSelect)(e=>({useShippingAsBilling:e(i.CHECKOUT_STORE_KEY).getUseShippingAsBilling(),prefersCollection:e(i.CHECKOUT_STORE_KEY).prefersCollection()})),{__internalSetUseShippingAsBilling:r}=Object(a.useDispatch)(i.CHECKOUT_STORE_KEY),{billingAddress:p,setBillingAddress:d,shippingAddress:b,setShippingAddress:u}=Object(o.a)(),m=Object(s.useCallback)(e=>{d({email:e})},[d]),g=Object(s.useCallback)(e=>{d({phone:e})},[d]),h=Object(s.useCallback)(e=>{u({phone:e})},[u]),O=Object(c.getSetting)("forcedBillingAddress",!1);return{shippingAddress:b,billingAddress:p,setShippingAddress:u,setBillingAddress:d,setEmail:m,setBillingPhone:g,setShippingPhone:h,defaultAddressFields:c.defaultAddressFields,useShippingAsBilling:t,setUseShippingAsBilling:r,needsShipping:e,showShippingFields:!O&&e&&!n,showShippingMethods:e&&!n,showBillingFields:!e||!t||n,forcedBillingAddress:O,useBillingAsShipping:O||n}}},446:function(e,t){},447:function(e,t){},503:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(6),a=n.n(s),i=n(137),o=n(311),l=n(402),r=n(7),p=n(3),d=n(1),b=n(121),u=n(348),m=n(246),g=n(43),h=n(114),O=n(45),_=n(47),j=n(11),k=n(31),E=n(218),w=n(2),f=n(394),S=n(55),v=n(76),N=n(444);n(447);var y=()=>Object(c.createElement)(f.a,{icon:Object(c.createElement)(v.a,{icon:N.a}),label:Object(d.__)("Shipping options","woocommerce"),className:"wc-block-checkout__no-shipping-placeholder"},Object(c.createElement)("span",{className:"wc-block-checkout__no-shipping-placeholder-description"},Object(d.__)("Your store does not have any Shipping Options configured. Once you have added your Shipping Options they will appear here.","woocommerce")),Object(c.createElement)(S.a,{isSecondary:!0,href:w.ADMIN_URL+"admin.php?page=wc-settings&tab=shipping",target:"_blank",rel:"noopener noreferrer"},Object(d.__)("Configure Shipping Options","woocommerce")));n(446);const C=e=>{const t=Object(w.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(e.price,10)+parseInt(e.taxes,10):parseInt(e.price,10);return{label:Object(k.decodeEntities)(e.name),value:e.rate_id,description:Object(k.decodeEntities)(e.description),secondaryLabel:Object(c.createElement)(h.a,{currency:Object(g.getCurrencyFromPriceResponse)(e),value:t}),secondaryDescription:Object(k.decodeEntities)(e.delivery_time)}};var R=()=>{const{isEditor:e}=Object(O.a)(),{shippingRates:t,needsShipping:n,isLoadingRates:s,hasCalculatedShipping:i,isCollectable:o}=Object(b.a)(),l=o?t.map(e=>({...e,shipping_rates:e.shipping_rates.filter(e=>!Object(m.c)(e.method_id))})):t;if(!n)return null;const r=Object(m.a)(t);return e||i||r?Object(c.createElement)(c.Fragment,null,Object(c.createElement)(j.StoreNoticesContainer,{context:_.d.SHIPPING_METHODS}),e&&!r?Object(c.createElement)(y,null):Object(c.createElement)(u.a,{noResultsMessage:Object(c.createElement)(E.a,{isDismissible:!1,className:a()("wc-block-components-shipping-rates-control__no-results-notice","woocommerce-error")},Object(d.__)("There are no shipping options available. Please check your shipping address.","woocommerce")),renderOption:C,collapsible:!1,shippingRates:l,isLoadingRates:s,context:"woocommerce/checkout"})):Object(c.createElement)("p",null,Object(d.__)("Shipping options will be displayed here after entering your full shipping address.","woocommerce"))},A=n(289),I={...Object(A.a)({defaultTitle:Object(d.__)("Shipping options","woocommerce"),defaultDescription:""}),className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}};t.default=Object(i.withFilteredAttributes)(I)(e=>{let{title:t,description:n,showStepNumber:s,children:i,className:d}=e;const b=Object(r.useSelect)(e=>e(p.CHECKOUT_STORE_KEY).isProcessing()),{showShippingMethods:u}=Object(l.a)();return u?Object(c.createElement)(o.a,{id:"shipping-option",disabled:b,className:a()("wc-block-checkout__shipping-option",d),title:t,description:n,showStepNumber:s},Object(c.createElement)(R,null),i):null})}}]);