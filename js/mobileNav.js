/*! Help & Manual WebHelp 3 Script functions
Copyright (c) 2014-2016 by Tim Green. All rights reserved. Contact tg@it-authoring.com
*/
navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate;hmWebHelp.funcs.doVibrate=function(a){if(!a){a=20}if(navigator.vibrate){navigator.vibrate(a)}};hmWebHelp.closeTopNav=function(){$("div#unclicker").off(hmBrowser.touchstart+".closemenu").hide();$("ul.topnav > li > a.current").removeClass("current");hmpage.$mHamMenuSub.hide();hmpage.$mHamMenu.slideUp("fast")};hmWebHelp.mobNavLinks=function(b){var a=$("div#mobnavprevious"),c=$("div#mobnavhome"),d=$("div#mobnavnext");if(b.phf=="none"){a.addClass("off").removeClass("on").removeAttr("data-href").removeAttr("data-bs")}else{a.removeClass("off").addClass("on").attr("data-href",b.phf).attr("data-bs",b.pbs)}if(b.hhf=="none"){c.addClass("off").removeClass("on").removeAttr("data-href").removeAttr("data-bs")}else{c.removeClass("off").addClass("on").attr("data-href",b.hhf).attr("data-bs",b.hbs)}if(b.nhf=="none"){d.addClass("off").removeClass("on").removeAttr("data-href").removeAttr("data-bs")}else{d.removeClass("off").addClass("on").attr("data-href",b.nhf).attr("data-bs",b.nbs)}$("div.mobnav.off").off("click").off(hmBrowser.touchstart);$("div.mobnav.on").off("click").off(hmBrowser.touchstart).on("click",function(e){e.preventDefault();e.stopPropagation()}).on(hmBrowser.touchstart,function(e){hmWebHelp.tocNav({action:"set",href:$(this).attr("data-href"),bs:parseInt($(this).attr("data-bs"),10)})})};hmpage.$mToolbar=$("div#mob_toolbar_wrapper");hmpage.$mToolbarBody=$("div#mob_toolbar");hmpage.$mToolbarCombo=$("div#mob_toolbar_wrapper,div#mob_toolbar");hmpage.$navTopicCombo=$("div#navwrapper, div#topicbox");hmpage.$mToolbarHeight=$("div#mob_toolbar").height()+2;hmpage.$navTabs=$("div#toolbar_updown, div#dragwrapper");hmpage.navOp=$(hmpage.$navTabs[0]).css("opacity");hmpage.showTimer=null;hmpage.$mHambutton=$("div#phone_hamburger_icon");hmpage.$mHamnavbutton=$("div#phone_mobnav_hamburger_icon");hmpage.$mHamMenu=$("div#header_menu");hmpage.$mHamMenuA=$("div#header_menu a");hmpage.$mHamMenuSub=$("ul.subnav");hmpage.$mHamMenuUl=$("ul.topnav, ul.subnav");hmpage.$mHamMenuWd=0;hmpage.$mHamMenu.css({visibility:"hidden"}).show();hmpage.$mHamMenu.prepend("<div id='sizecheck' style='font-weight: bold;'></div>");var $sizecheck=$("div#sizecheck");var paddingOffset=Math.ceil(parseFloat(($("ul.topnav li a").first().css("padding-right")),10)*2.5)+10;hmpage.$mHamMenuA.each(function(){$sizecheck.html($(this).html());var a=$sizecheck.outerWidth();hmpage.$mHamMenuWd=hmpage.$mHamMenuWd>a?hmpage.$mHamMenuWd:a});hmpage.$mHamMenu.attr("style","");$sizecheck.remove();hmpage.$mHamMenuWd+=paddingOffset;hmpage.$mHamMenuWd=((hmpage.$mHamMenuWd*1.2)/parseFloat($("html").first().css("font-size"),10)).toFixed(3);hmpage.$mHamMenu.css("width",hmpage.$mHamMenuWd+"rem");hmWebHelp.funcs.mHamburgerDo=function(){if(hmpage.$mHamMenu.is(":hidden")){hmpage.$mHamMenu.slideDown("fast",function(){$("ul.topnav > li:visible").last().not(".last").addClass("last")});if(!hmpage.navclosed&&hmpage.topicleft){hmWebHelp.pageDimensions.dragHandle(false)}$("div#unclicker").show().on(hmBrowser.touchstart+".closemenu",function(){hmWebHelp.closeTopNav()})}else{hmWebHelp.closeTopNav()}hmWebHelp.funcs.doVibrate()};hmWebHelp.funcs.mobTBfix=function(){var a=$("div#pagewrapper").height()-window.innerHeight;a=a>4?a:0;hmpage.$mToolbar.css("bottom",a+"px");hmpage.$scrollBox.css("padding-bottom",a+"px");hmpage.$navwrapper.css("bottom",(a+hmpage.$mToolbar.height()+5)+"px");$("body").scrollTop(0);if(hmBrowser.Flandscape()){$("table.mobtoolbar").addClass("landscape");if(hmDevice.iphone){hmpage.$mHamnavbutton.show();hmpage.$mHambutton.hide()}}else{$("table.mobtoolbar").removeClass("landscape");if(hmDevice.iphone){hmpage.$mHamnavbutton.hide();hmpage.$mHambutton.show()}}};hmpage.$mHambutton.on(hmBrowser.touchstart,hmWebHelp.funcs.mHamburgerDo);hmpage.$mHamnavbutton.on(hmBrowser.touchstart,hmWebHelp.funcs.mHamburgerDo);$("body").on(hmBrowser.touchmove,function(){if(typeof hmpage.navOp=="undefined"){hmpage.navOp=0.3}else{hmpage.navOp=parseFloat(hmpage.navOp)}if(hmpage.navOp>0.1){hmpage.$navTabs.css("opacity","0.1");$("body").on(hmBrowser.touchend+".navtabs",function(){hmpage.$navTabs.css("opacity","0.3");$("body").off(hmBrowser.touchend+".navtabs")});if(hmDevice.winphone){if(hmpage.showTimer===null){hmpage.showTimer=setTimeout(function(){clearTimeout(hmpage.showTimer);hmpage.showTimer=null;hmpage.$navTabs.css("opacity","0.3")},2500)}}}});hmWebHelp.funcs.mobileUpDown=function(b){if(b){b.stopPropagation()}hmWebHelp.closeTopNav();var a=hmpage.Fpix2em(hmpage.$headerbox.height());if(hmpage.$mToolbar.attr("data")=="open"){hmpage.$headerbox.animate({top:(-a+"rem")},300,function(){$(this).hide()});hmpage.$navwrapper.animate({top:"0.7rem",bottom:"0"},300);hmpage.$topicbox.animate({top:"0",bottom:"0"},300);hmpage.$mToolbarCombo.animate({height:("-="+hmpage.$mToolbarHeight+"px"),bottom:0},300,function(){hmpage.$mToolbar.attr("data","closed");hmpage.$mToolbarBody.hide();hmWebHelp.funcs.mobTBfix();if(hmpage.hmPicture!==""){hmWebHelp.extFuncs("hmFeatureHeaderM","resize")}sessionVariable.setSV("headerState","closed")});$("div#featureheader").animate({top:0})}else{hmpage.$headerbox.show().animate({top:"0"},300);hmpage.$headerbox.slideDown(300);hmpage.$navwrapper.animate({top:(hmpage.Fpix2em(hmpage.FheaderHeight()+7)+"rem"),bottom:(hmpage.Fpix2em(hmpage.$mToolbarHeight+7)+"rem")},300);hmpage.$topicbox.animate({top:(hmpage.Fpix2em(hmpage.FheaderHeight())+"rem"),bottom:(hmpage.Fpix2em(hmpage.$mToolbarHeight)+"rem")},300);hmpage.$mToolbarBody.show();hmpage.$mToolbarCombo.animate({height:("+="+hmpage.$mToolbarHeight+"px")},300,function(){hmpage.$mToolbar.attr("data","open");hmWebHelp.funcs.mobTBfix();if(hmpage.hmPicture!==""){hmWebHelp.extFuncs("hmFeatureHeaderM","resize")}sessionVariable.setSV("headerState","open")});$("div#featureheader").animate({top:hmpage.$headerbox.height()})}hmWebHelp.funcs.doVibrate()};$("div#toolbar_updown").on(hmBrowser.touchstart,function(a){hmWebHelp.funcs.mobileUpDown(a)});(function(){function b(e){$(e).animate({opacity:"-=0.3"},200,function(){$(e).animate({opacity:"+=0.3"},200,function(){if($(e).attr("style").length>0){var f=$(e).attr("style").replace(/opacity:.*?;/,"");if(f!==""){$(e).attr("style",f)}else{$(e).removeAttr("style")}}})})}function d(e){hmWebHelp.pageDimensions.dragHandle();b(e);hmWebHelp.funcs.doVibrate()}function c(f,e){hmWebHelp.extFuncs("fontSize",[f,"global"]);b(e);hmpage.$mToolbarHeight=$("div#mob_toolbar").height()+2;hmpage.$navwrapper.css({top:(hmpage.Fpix2em(hmpage.FheaderHeight()+7)+"rem"),bottom:(hmpage.Fpix2em(hmpage.$mToolbarHeight+7)+"rem")});hmWebHelp.funcs.doVibrate()}function a(f,e){var g=$(f).attr("href");if(hmFlags.hmCurrentPage===g||typeof g=="undefined"){return}History.pushState(null,null,g);b(e);hmWebHelp.funcs.doVibrate()}$("div#mobnavtextplus").on(hmBrowser.touchstart,function(){c(true,"div#mobnavtextplus")});$("div#mobnavtextminus").on(hmBrowser.touchstart,function(){c(false,"div#mobnavtextminus")});$("div#mobnavtoc").on(hmBrowser.touchstart,function(){d("div#mobnavtoc")});$("div#dragwrapper").css("visibility","visible");$("a#topicnavlinkprevious,a#topicnavlinkhome,a#topicnavlinknext").removeAttr("href");hmpage.$scrollBox.on("scroll",function(){hmWebHelp.funcs.mobTBfix()});hmWebHelp.funcs.mobTBfix();hmpage.$topicbox.animate({top:(hmpage.Fpix2em(hmpage.headerheight)+"rem"),bottom:(hmpage.Fpix2em(hmpage.$mToolbarHeight)+"rem")},300)})();
