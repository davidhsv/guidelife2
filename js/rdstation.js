/*! Resultados Digitais - rd-js-integration 2016-03-10 */
function RDStationFormIntegration(a,b,c){"use strict";RdIntegration.integrate(a,b,c)}var RdIntegration=function(){"use strict";var a,b,c,d,e,f,g=["captcha","_wpcf7","_wpcf7_version","_wpcf7_unit_tag","_wpnonce","_wpcf7_is_ajax_call","_wpcf7_locale"],h=["email","e-mail","e_mail","email_lead","your-email"],i=function(a){"undefined"==typeof jQuery?l("https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js",a):a()},j=function(a,b,c){i(function(){f=jQuery,k(a,b,c),m()})},k=function(a,e,f){d=f||{},b=a,c=e},l=function(a,b){var c=document.getElementsByTagName("head")[0],d=document.createElement("script");d.type="text/javascript",d.src=a,d.onload=b,d.onreadystatechange=function(){"complete"===this.readyState&&b()},c.appendChild(d)},m=function(){f(":submit").click(n)},n=function(b){if(e=y(),a=o(b.target)){var c=p();z(c)&&("function"!=typeof a[0].checkValidity||a[0].checkValidity())&&(H(c,s),b.preventDefault())}},o=function(a){return f(a).closest("form:not([data-internal-rdstation-form])")},p=function(){var b=f(a).find(":input");return b=v(b),b=b.serializeArray(),b=q(b),b.push(e.identifier,e.token,e.c_utmz,e.traffic_source,C()),b},q=function(a){return d.fieldMapping&&(a=r(a)),a},r=function(a){return f.each(a,function(){var a=d.fieldMapping[this.name];a&&(this.name=a)}),a},s=function(){t(a)?a.submit():a.find(":submit").unbind("click",n).click()},t=function(a){var b=a.attr("action");return"undefined"!=typeof b&&""!==b.trim()},u=function(a){return f(a).is(":password")},v=function(a){return a=a.map(function(){return w(this)?this:void 0})},w=function(a){return A(a)||!(u(a)||x(a))},x=function(a){var b=f(a).attr("name")||"";return b&&g.indexOf(b.toLowerCase())>=0},y=function(){return{identifier:{name:"identificador",value:c},token:{name:"token_rdstation",value:b},c_utmz:{name:"c_utmz",value:B("__utmz")},traffic_source:{name:"traffic_source",value:B("__trf.src")}}},z=function(a){var b=!1;return f.each(a,function(){return A(this)?(this.name="email",b=!0,!1):void 0}),b},A=function(a){return h.indexOf(a.name.toLowerCase())>=0},B=function(a){var b,c,d=document.cookie.split(";");for(a+="=",b=0;b<d.length;b++){for(c=d[b];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(a))return c.substring(a.length,c.length)}return null},C=function(){return{name:"query_params",value:location.search.substring(1)}},D=function(){var a=B("rdtrk");return null!==a?(a=JSON.parse(unescape(a)),a.id):void 0},E=function(a){var b=D();return"undefined"!=typeof b&&a.push({name:"client_id",value:b}),a},F=function(a){return a.push({name:"c_utmz",value:B("__utmz")}),a.push({name:"traffic_source",value:B("__trf.src")}),a},G=function(a){return a.push({name:"_is",value:3}),a},H=function(a,b){a=E(a),a=F(a),a=G(a),i(function(){jQuery.ajax({type:"POST",url:"https://www.rdstation.com.br/api/1.3/conversions",data:a,crossDomain:!0,xhrFields:{withCredentials:!0},error:function(a){console.log("ERROR - "),console.log(a)},complete:function(a,c){b&&b(a,c)}})})};return{integrate:j,post:H}}();

var meus_campos = {
    'Email': 'Email',
    'Nome': 'Nome'
};
options = { fieldMapping: meus_campos };
RdIntegration.integrate('45d23cc958be17da0beb95104c284fbf', 'Site-Newsletter-Topo de Funil', options);  