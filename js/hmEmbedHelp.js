/*! Help & Manual WebHelp 3 Script functions
Copyright (c) 2014-2016 by Tim Green. All rights reserved. Contact tg@it-authoring.com
*/
var hmDevice={};hmDevice.agent=navigator.userAgent.toLowerCase();hmDevice.platform=navigator.platform.toLowerCase();hmDevice.touch=/touch/.test(hmDevice.agent);hmDevice.mb=/mobi|mobile/.test(hmDevice.agent);hmDevice.ipad=/ipad/.test(hmDevice.platform);hmDevice.iphone=/iphone/.test(hmDevice.platform);hmDevice.goodandroid=(/android.+?applewebkit\/(?:(?:537\.(?:3[6-9]|[4-9][0-9]))|(?:53[8-9]\.[0-9][0-9])|(?:54[0-9]\.[0-9][0-9]))|android.+?gecko\/[345][0-9]\.\d{1,2} firefox/.test(hmDevice.agent));hmDevice.deadandroid=(/android.+?applewebkit\/(?:53[0-6]\.\d{1,2})|firefox\/[0-2]\d\.\d{1,2}/.test(hmDevice.agent));hmDevice.android=(/android/.test(hmDevice.agent)&&!hmDevice.deadandroid);hmDevice.w8desktop=(/windows nt 6\.[2345]/m.test(hmDevice.agent));hmDevice.w8metro=(function(){var a=true;try{new ActiveXObject("htmlfile")}catch(b){a=false}return(!a&&hmDevice.w8desktop)})();hmDevice.tb=(/tablet/.test(hmDevice.agent)&&(!/trident/.test(hmDevice.agent)||(hmDevice.w8metro&&hmDevice.touch)));hmDevice.phone=(hmDevice.mb&&!hmDevice.ipad&&!hmDevice.tb);hmDevice.tablet=(hmDevice.ipad||hmDevice.tb||(!hmDevice.phone&&hmDevice.android));hmDevice.desktop=((!hmDevice.tablet&&!hmDevice.phone));hmDevice.device=hmDevice.phone?"phone":hmDevice.tablet?"tablet":hmDevice.desktop?"desktop":"default";hmDevice.ppversion=3.2;var hmHelp;function hmH(g,u,e){this.showhelp=false;this.startupOn=jQuery("div#helpwrapper").is(":visible");this.firstLoad=true;var c=u,o=g,l=e,v=document.location.search.substr(1).split("&"),p=v.length,a,f="",k=false,i=document.getElementById("helpwrapper"),s=document.getElementById("hmHelpButton"),d=false,r=null;this.helpWrapper=i;if(v[0]!==""){var m=true;if(/^hmhelp=/.test(v[0])&&m){f=document.location.hash!==""?"anchor="+document.location.hash.substr(1):"";a=v[0].substr(7);m=false;d=true;if(p>1){for(var h=1;h<p;h++){if(h==1){a+="?"+v[h]}else{a+="&"+v[h]}}if(f!==""){a+="&"+f}}else{if(f!==""){a+="?"+f}}}}this.showhelp=d;this.mobileHelp=function(x,w){if(r!==null){r.close();r=null}r=window.open(o+x,"hm_mobilehelp","",false);if(typeof w=="function"){setTimeout(function(){w("mobile")},500)}};this.showHelp=function(z,w){var B=false,A=false,y="",x="";if(typeof w=="function"){B=true}if(/\&/.test(z)){A=true;y=z.replace(/\&/,"?").replace(/\#/,"&anchor=")}if(l!="desktop"){if(A){this.mobileHelp(y,w)}else{if(typeof z!=="undefined"&&z!==null){this.mobileHelp(z,w)}else{if(typeof a!=="undefined"){this.mobileHelp(a,w);a=undefined}else{this.mobileHelp(c,w)}}}return}if(!k){if(A){x=o+y}else{if(typeof z!="undefined"&&typeof a=="undefined"&&z!==null){x=o+z;c=z}else{if(typeof a!="undefined"){x=o+a;c=a}else{x=o+c}}}jQuery("div#helpwrapper").append('<iframe id="hmhelp" class="webhelp" src="'+x+'" frameborder="0"></iframe>')}if(k&&typeof z!="undefined"&&!A){xMessage.sendObject("hmhelp",{action:"loadtopic",href:z,bs:false})}else{if(A){jQuery("iframe#hmhelp").attr("src",o+y)}}k=true;if(!this.firstLoad||!this.startupOn){if(jQuery("div#helpwrapper").is(":hidden")){jQuery("div#helpwrapper").hide().css("visibility","visible").fadeIn(400,function(){if(B){w("open")}});jQuery(".hmHelpToggle").text("Hide Embedded Help")}else{if(typeof z=="undefined"||z===null){jQuery("div#helpwrapper").fadeOut(400,function(){jQuery(this).css("visibility","hidden").css("display","none");if(B){w("close")}});jQuery(".hmHelpToggle").text("Show Embedded Help")}}}this.firstLoad=false};var j="",b="",t=false,n=jQuery("body").css("overflow"),q=jQuery("html").css("overflow");this.doFullWindow=function(){if(!k){return}if(t){jQuery("div#helpwrapper").attr("style",j);jQuery("iframe#hmhelp").attr("style",b);jQuery("body").css("overflow",n);jQuery("html").css("overflow",q);t=false}else{j=("position:"+jQuery("div#helpwrapper").css("position")+"; float: "+jQuery("div#helpwrapper").css("float")+"; display: block;");b=jQuery("iframe#hmhelp").attr("style");jQuery("body,html").css("overflow","hidden");jQuery("div#helpwrapper").attr("style","display: block; position: absolute; width: auto; float: none; height: auto; top: -12px; left: 0; right: 0; bottom: -10px; border-radius: 0;");jQuery("iframe#hmhelp").attr("style","");window.scrollTo(0,0);t=true;if(this.showhelp){this.showHelp()}}};if(this.showhelp&&hmDevice.desktop){this.showHelp(c)}}function initHmHelp(c,b){c=c.slice(-1)=="/"?c:c+"/";if(!window.jQuery){var d=document.createElement("script");d.setAttribute("type","text/javascript");d.setAttribute("src",c+"js/jquery.js");document.getElementsByTagName("head")[0].appendChild(d)}var a=setInterval(function(){if(window.jQuery){clearInterval(a);jQuery(document).ready(function(){if(hmDevice.desktop){jQuery.ajaxPrefilter("json script",function(e){e.crossDomain=true});jQuery.getScript(c+"js/xmessage.js",function(e,g,f){xMessage=new xMsg("EMBED PARENT: ");hmHelp=new hmH(c,b,"desktop");if(hmHelp.startupOn){hmHelp.showHelp()}})}else{hmHelp=new hmH(c,b,"mobile");if(hmHelp.startupOn){hmHelp.helpWrapper.style.display="none"}}})}},50)};
