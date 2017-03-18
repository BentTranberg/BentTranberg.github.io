/*! Help & Manual WebHelp 3 Script functions
Copyright (c) 2014-2016 by Tim Green. All rights reserved. Contact tg@it-authoring.com
*/
hmWebHelp.funcs.hmDoInlineToggle=function(e){function a(l,i){var m=l.text(),j,h=0,k=m.length;if(i){l.text("");l.show();j=setInterval(function(){l.text(l.text()+m.charAt(h));h++;if(h==k){clearInterval(j);return}},0)}else{j=setInterval(function(){l.text(l.text().substr(0,l.text().length-1));h++;if(h==k){l.hide().text(m);clearInterval(j);return}},0)}}var b=e.attr("data-state"),g=e.attr("id"),c=g.substr(0,g.indexOf("_")),f=$("span#"+c),d=f.is(":visible");if(b==="0"||!d){a(f,true);e.attr("data-state","1")}else{a(f,false);e.attr("data-state","0")}};
