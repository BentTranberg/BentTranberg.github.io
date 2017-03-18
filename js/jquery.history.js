if(typeof JSON!=='object'){JSON={};}
(function(){'use strict';function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());(function(window,undefined){"use strict";var
History=window.History=window.History||{},jQuery=window.jQuery;if(typeof History.Adapter!=='undefined'){throw new Error('History.js Adapter has already been loaded...');}
History.Adapter={bind:function(el,event,callback){jQuery(el).bind(event,callback);},trigger:function(el,event,extra){jQuery(el).trigger(event,extra);},extractEventData:function(key,event,extra){var result=(event&&event.originalEvent&&event.originalEvent[key])||(extra&&extra[key])||undefined;return result;},onDomLoad:function(callback){jQuery(callback);}};if(typeof History.init!=='undefined'){History.init();}})(window);(function(window,undefined){"use strict";var
document=window.document,setTimeout=window.setTimeout||setTimeout,clearTimeout=window.clearTimeout||clearTimeout,setInterval=window.setInterval||setInterval,History=window.History=window.History||{};if(typeof History.initHtml4!=='undefined'){throw new Error('History.js HTML4 Support has already been loaded...');}
History.initHtml4=function(){if(typeof History.initHtml4.initialized!=='undefined'){return false;}
else{History.initHtml4.initialized=true;}
History.enabled=true;History.savedHashes=[];History.isLastHash=function(newHash){var oldHash=History.getHashByIndex(),isLast;isLast=newHash===oldHash;return isLast;};History.isHashEqual=function(newHash,oldHash){newHash=encodeURIComponent(newHash).replace(/%25/g,"%");oldHash=encodeURIComponent(oldHash).replace(/%25/g,"%");return newHash===oldHash;};History.saveHash=function(newHash){if(History.isLastHash(newHash)){return false;}
History.savedHashes.push(newHash);return true;};History.getHashByIndex=function(index){var hash=null;if(typeof index==='undefined'){hash=History.savedHashes[History.savedHashes.length-1];}
else if(index<0){hash=History.savedHashes[History.savedHashes.length+index];}
else{hash=History.savedHashes[index];}
return hash;};History.discardedHashes={};History.discardedStates={};History.discardState=function(discardedState,forwardState,backState){var discardedStateHash=History.getHashByState(discardedState),discardObject;discardObject={'discardedState':discardedState,'backState':backState,'forwardState':forwardState};History.discardedStates[discardedStateHash]=discardObject;return true;};History.discardHash=function(discardedHash,forwardState,backState){var discardObject={'discardedHash':discardedHash,'backState':backState,'forwardState':forwardState};History.discardedHashes[discardedHash]=discardObject;return true;};History.discardedState=function(State){var StateHash=History.getHashByState(State),discarded;discarded=History.discardedStates[StateHash]||false;return discarded;};History.discardedHash=function(hash){var discarded=History.discardedHashes[hash]||false;return discarded;};History.recycleState=function(State){var StateHash=History.getHashByState(State);if(History.discardedState(State)){delete History.discardedStates[StateHash];}
return true;};if(History.emulated.hashChange){History.hashChangeInit=function(){History.checkerFunction=null;var lastDocumentHash='',iframeId,iframe,lastIframeHash,checkerRunning,startedWithHash=Boolean(History.getHash());if(History.isInternetExplorer()){iframeId='historyjs-iframe';iframe=document.createElement('iframe');iframe.setAttribute('id',iframeId);iframe.setAttribute('src','#');iframe.style.display='none';document.body.appendChild(iframe);iframe.contentWindow.document.open();iframe.contentWindow.document.close();lastIframeHash='';checkerRunning=false;History.checkerFunction=function(){if(checkerRunning){return false;}
checkerRunning=true;var
documentHash=History.getHash(),iframeHash=History.getHash(iframe.contentWindow.document);if(documentHash!==lastDocumentHash){lastDocumentHash=documentHash;if(iframeHash!==documentHash){lastIframeHash=iframeHash=documentHash;iframe.contentWindow.document.open();iframe.contentWindow.document.close();iframe.contentWindow.document.location.hash=History.escapeHash(documentHash);}
History.Adapter.trigger(window,'hashchange');}
else if(iframeHash!==lastIframeHash){lastIframeHash=iframeHash;if(startedWithHash&&iframeHash===''){History.back();}
else{History.setHash(iframeHash,false);}}
checkerRunning=false;return true;};}
else{History.checkerFunction=function(){var documentHash=History.getHash()||'';if(documentHash!==lastDocumentHash){lastDocumentHash=documentHash;History.Adapter.trigger(window,'hashchange');}
return true;};}
History.intervalList.push(setInterval(History.checkerFunction,History.options.hashChangeInterval));return true;};History.Adapter.onDomLoad(History.hashChangeInit);}
if(History.emulated.pushState){History.onHashChange=function(event){var currentUrl=((event&&event.newURL)||History.getLocationHref()),currentHash=History.getHashByUrl(currentUrl),currentState=null,currentStateHash=null,currentStateHashExits=null,discardObject;if(History.isLastHash(currentHash)){History.busy(false);return false;}
History.doubleCheckComplete();History.saveHash(currentHash);if(currentHash&&History.isTraditionalAnchor(currentHash)){History.Adapter.trigger(window,'anchorchange');History.busy(false);return false;}
currentState=History.extractState(History.getFullUrl(currentHash||History.getLocationHref()),true);if(History.isLastSavedState(currentState)){History.busy(false);return false;}
currentStateHash=History.getHashByState(currentState);discardObject=History.discardedState(currentState);if(discardObject){if(History.getHashByIndex(-2)===History.getHashByState(discardObject.forwardState)){History.back(false);}else{History.forward(false);}
return false;}
History.pushState(currentState.data,currentState.title,encodeURI(currentState.url),false);return true;};History.Adapter.bind(window,'hashchange',History.onHashChange);History.pushState=function(data,title,url,queue){url=encodeURI(url).replace(/%25/g,"%");if(History.getHashByUrl(url)){throw new Error('History.js does not support states with fragment-identifiers (hashes/anchors).');}
if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.pushState,args:arguments,queue:queue});return false;}
History.busy(true);var newState=History.createStateObject(data,title,url),newStateHash=History.getHashByState(newState),oldState=History.getState(false),oldStateHash=History.getHashByState(oldState),html4Hash=History.getHash(),wasExpected=History.expectedStateId==newState.id;History.storeState(newState);History.expectedStateId=newState.id;History.recycleState(newState);History.setTitle(newState);if(newStateHash===oldStateHash){History.busy(false);return false;}
History.saveState(newState);if(!wasExpected)
History.Adapter.trigger(window,'statechange');if(!History.isHashEqual(newStateHash,html4Hash)&&!History.isHashEqual(newStateHash,History.getShortUrl(History.getLocationHref()))){History.setHash(newStateHash,false);}
History.busy(false);return true;};History.replaceState=function(data,title,url,queue){url=encodeURI(url).replace(/%25/g,"%");if(History.getHashByUrl(url)){throw new Error('History.js does not support states with fragment-identifiers (hashes/anchors).');}
if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.replaceState,args:arguments,queue:queue});return false;}
History.busy(true);var newState=History.createStateObject(data,title,url),newStateHash=History.getHashByState(newState),oldState=History.getState(false),oldStateHash=History.getHashByState(oldState),previousState=History.getStateByIndex(-2);History.discardState(oldState,newState,previousState);if(newStateHash===oldStateHash){History.storeState(newState);History.expectedStateId=newState.id;History.recycleState(newState);History.setTitle(newState);History.saveState(newState);History.Adapter.trigger(window,'statechange');History.busy(false);}
else{History.pushState(newState.data,newState.title,newState.url,false);}
return true;};}
if(History.emulated.pushState){if(History.getHash()&&!History.emulated.hashChange){History.Adapter.onDomLoad(function(){History.Adapter.trigger(window,'hashchange');});}}};if(typeof History.init!=='undefined'){History.init();}})(window);(function(window,undefined){"use strict";var
console=window.console||undefined,document=window.document,navigator=window.navigator,sessionStorage=false,setTimeout=window.setTimeout,clearTimeout=window.clearTimeout,setInterval=window.setInterval,clearInterval=window.clearInterval,JSON=window.JSON,alert=window.alert,History=window.History=window.History||{},history=window.history;try{sessionStorage=window.sessionStorage;sessionStorage.setItem('TEST','1');sessionStorage.removeItem('TEST');}catch(e){sessionStorage=false;}
JSON.stringify=JSON.stringify||JSON.encode;JSON.parse=JSON.parse||JSON.decode;if(typeof History.init!=='undefined'){throw new Error('History.js Core has already been loaded...');}
History.init=function(options){if(typeof History.Adapter==='undefined'){return false;}
if(typeof History.initCore!=='undefined'){History.initCore();}
if(typeof History.initHtml4!=='undefined'){History.initHtml4();}
return true;};History.initCore=function(options){if(typeof History.initCore.initialized!=='undefined'){return false;}
else{History.initCore.initialized=true;}
History.options=History.options||{};History.options.hashChangeInterval=History.options.hashChangeInterval||100;History.options.safariPollInterval=History.options.safariPollInterval||500;History.options.doubleCheckInterval=History.options.doubleCheckInterval||500;History.options.disableSuid=History.options.disableSuid||false;History.options.storeInterval=History.options.storeInterval||1000;History.options.busyDelay=History.options.busyDelay||250;History.options.debug=History.options.debug||false;History.options.initialTitle=History.options.initialTitle||document.title;History.options.html4Mode=History.options.html4Mode||false;History.options.delayInit=History.options.delayInit||false;History.intervalList=[];History.clearAllIntervals=function(){var i,il=History.intervalList;if(typeof il!=="undefined"&&il!==null){for(i=0;i<il.length;i++){clearInterval(il[i]);}
History.intervalList=null;}};History.debug=function(){if((History.options.debug||false)){History.log.apply(History,arguments);}};History.log=function(){var
consoleExists=!(typeof console==='undefined'||typeof console.log==='undefined'||typeof console.log.apply==='undefined'),textarea=document.getElementById('log'),message,i,n,args,arg;if(consoleExists){args=Array.prototype.slice.call(arguments);message=args.shift();if(typeof console.debug!=='undefined'){console.debug.apply(console,[message,args]);}
else{console.log.apply(console,[message,args]);}}
else{message=("\n"+arguments[0]+"\n");}
for(i=1,n=arguments.length;i<n;++i){arg=arguments[i];if(typeof arg==='object'&&typeof JSON!=='undefined'){try{arg=JSON.stringify(arg);}
catch(Exception){}}
message+="\n"+arg+"\n";}
if(textarea){textarea.value+=message+"\n-----\n";textarea.scrollTop=textarea.scrollHeight-textarea.clientHeight;}
else if(!consoleExists){alert(message);}
return true;};History.getInternetExplorerMajorVersion=function(){var result=History.getInternetExplorerMajorVersion.cached=(typeof History.getInternetExplorerMajorVersion.cached!=='undefined')?History.getInternetExplorerMajorVersion.cached:(function(){var v=3,div=document.createElement('div'),all=div.getElementsByTagName('i');while((div.innerHTML='<!--[if gt IE '+(++v)+']><i></i><![endif]-->')&&all[0]){}
return(v>4)?v:false;})();return result;};History.isInternetExplorer=function(){var result=History.isInternetExplorer.cached=(typeof History.isInternetExplorer.cached!=='undefined')?History.isInternetExplorer.cached:Boolean(History.getInternetExplorerMajorVersion());return result;};if(History.options.html4Mode){History.emulated={pushState:true,hashChange:true};}
else{History.emulated={pushState:!Boolean(window.history&&window.history.pushState&&window.history.replaceState&&!((/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i).test(navigator.userAgent)||(/AppleWebKit\/5([0-2]|3[0-2])/i).test(navigator.userAgent))),hashChange:Boolean(!(('onhashchange'in window)||('onhashchange'in document))||(History.isInternetExplorer()&&History.getInternetExplorerMajorVersion()<8))};}
History.enabled=!History.emulated.pushState;History.bugs={setHash:Boolean(!History.emulated.pushState&&navigator.vendor==='Apple Computer, Inc.'&&/AppleWebKit\/5([0-2]|3[0-3])/.test(navigator.userAgent)),safariPoll:Boolean(!History.emulated.pushState&&navigator.vendor==='Apple Computer, Inc.'&&/AppleWebKit\/5([0-2]|3[0-3])/.test(navigator.userAgent)),ieDoubleCheck:Boolean(History.isInternetExplorer()&&History.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(History.isInternetExplorer()&&History.getInternetExplorerMajorVersion()<7)};History.isEmptyObject=function(obj){for(var name in obj){if(obj.hasOwnProperty(name)){return false;}}
return true;};History.cloneObject=function(obj){var hash,newObj;if(obj){hash=JSON.stringify(obj);newObj=JSON.parse(hash);}
else{newObj={};}
return newObj;};History.getRootUrl=function(){var rootUrl=document.location.protocol+'//'+(document.location.hostname||document.location.host);if(document.location.port||false){rootUrl+=':'+document.location.port;}
rootUrl+='/';return rootUrl;};History.getBaseHref=function(){var
baseElements=document.getElementsByTagName('base'),baseElement=null,baseHref='';if(baseElements.length===1){baseElement=baseElements[0];baseHref=baseElement.href.replace(/[^\/]+$/,'');}
baseHref=baseHref.replace(/\/+$/,'');if(baseHref)baseHref+='/';return baseHref;};History.getBaseUrl=function(){var baseUrl=History.getBaseHref()||History.getBasePageUrl()||History.getRootUrl();return baseUrl;};History.getPageUrl=function(){var
State=History.getState(false,false),stateUrl=(State||{}).url||History.getLocationHref(),pageUrl;pageUrl=stateUrl.replace(/\/+$/,'').replace(/[^\/]+$/,function(part,index,string){return(/\./).test(part)?part:part+'/';});return pageUrl;};History.getBasePageUrl=function(){var basePageUrl=(History.getLocationHref()).replace(/[#\?].*/,'').replace(/[^\/]+$/,function(part,index,string){return(/[^\/]$/).test(part)?'':part;}).replace(/\/+$/,'')+'/';return basePageUrl;};History.getFullUrl=function(url,allowBaseHref){var fullUrl=url,firstChar=url.substring(0,1);allowBaseHref=(typeof allowBaseHref==='undefined')?true:allowBaseHref;if(/[a-z]+\:\/\//.test(url)){}
else if(firstChar==='/'){fullUrl=History.getRootUrl()+url.replace(/^\/+/,'');}
else if(firstChar==='#'){fullUrl=History.getPageUrl().replace(/#.*/,'')+url;}
else if(firstChar==='?'){fullUrl=History.getPageUrl().replace(/[\?#].*/,'')+url;}
else{if(allowBaseHref){fullUrl=History.getBaseUrl()+url.replace(/^(\.\/)+/,'');}else{fullUrl=History.getBasePageUrl()+url.replace(/^(\.\/)+/,'');}}
return fullUrl.replace(/\#$/,'');};History.getShortUrl=function(url){var shortUrl=url,baseUrl=History.getBaseUrl(),rootUrl=History.getRootUrl();if(History.emulated.pushState){shortUrl=shortUrl.replace(baseUrl,'');}
shortUrl=shortUrl.replace(rootUrl,'/');if(History.isTraditionalAnchor(shortUrl)){shortUrl='./'+shortUrl;}
shortUrl=shortUrl.replace(/^(\.\/)+/g,'./').replace(/\#$/,'');return shortUrl;};History.getLocationHref=function(doc){doc=doc||document;if(doc.URL===doc.location.href)
return doc.location.href;if(doc.location.href===decodeURIComponent(doc.URL))
return doc.URL;if(doc.location.hash&&decodeURIComponent(doc.location.href.replace(/^[^#]+/,""))===doc.location.hash)
return doc.location.href;if(doc.URL.indexOf('#')==-1&&doc.location.href.indexOf('#')!=-1)
return doc.location.href;return doc.URL||doc.location.href;};History.store={};History.idToState=History.idToState||{};History.stateToId=History.stateToId||{};History.urlToId=History.urlToId||{};History.storedStates=History.storedStates||[];History.savedStates=History.savedStates||[];History.normalizeStore=function(){History.store.idToState=History.store.idToState||{};History.store.urlToId=History.store.urlToId||{};History.store.stateToId=History.store.stateToId||{};};History.getState=function(friendly,create){if(typeof friendly==='undefined'){friendly=true;}
if(typeof create==='undefined'){create=true;}
var State=History.getLastSavedState();if(!State&&create){State=History.createStateObject();}
if(friendly){State=History.cloneObject(State);State.url=State.cleanUrl||State.url;}
return State;};History.getIdByState=function(newState){var id=History.extractId(newState.url),str;if(!id){str=History.getStateString(newState);if(typeof History.stateToId[str]!=='undefined'){id=History.stateToId[str];}
else if(typeof History.store.stateToId[str]!=='undefined'){id=History.store.stateToId[str];}
else{while(true){id=(new Date()).getTime()+String(Math.random()).replace(/\D/g,'');if(typeof History.idToState[id]==='undefined'&&typeof History.store.idToState[id]==='undefined'){break;}}
History.stateToId[str]=id;History.idToState[id]=newState;}}
return id;};History.normalizeState=function(oldState){var newState,dataNotEmpty;if(!oldState||(typeof oldState!=='object')){oldState={};}
if(typeof oldState.normalized!=='undefined'){return oldState;}
if(!oldState.data||(typeof oldState.data!=='object')){oldState.data={};}
newState={};newState.normalized=true;newState.title=oldState.title||'';newState.url=History.getFullUrl(oldState.url?oldState.url:(History.getLocationHref()));newState.hash=History.getShortUrl(newState.url);newState.data=History.cloneObject(oldState.data);newState.id=History.getIdByState(newState);newState.cleanUrl=newState.url.replace(/\??\&_suid.*/,'');newState.url=newState.cleanUrl;dataNotEmpty=!History.isEmptyObject(newState.data);if((newState.title||dataNotEmpty)&&History.options.disableSuid!==true){newState.hash=History.getShortUrl(newState.url).replace(/\??\&_suid.*/,'');if(!/\?/.test(newState.hash)){newState.hash+='?';}
newState.hash+='&_suid='+newState.id;}
newState.hashedUrl=History.getFullUrl(newState.hash);if((History.emulated.pushState||History.bugs.safariPoll)&&History.hasUrlDuplicate(newState)){newState.url=newState.hashedUrl;}
return newState;};History.createStateObject=function(data,title,url){if(/^file\:\/\/\/?/i.test(url)){url=url.substr(url.lastIndexOf("\/")+1);}
var State={'data':data,'title':title,'url':url};State=History.normalizeState(State);return State;};History.getStateById=function(id){id=String(id);var State=History.idToState[id]||History.store.idToState[id]||undefined;return State;};History.getStateString=function(passedState){var State,cleanedState,str;State=History.normalizeState(passedState);cleanedState={data:State.data,title:passedState.title,url:passedState.url};str=JSON.stringify(cleanedState);return str;};History.getStateId=function(passedState){var State,id;State=History.normalizeState(passedState);id=State.id;return id;};History.getHashByState=function(passedState){var State,hash;State=History.normalizeState(passedState);hash=State.hash;return hash;};History.extractId=function(url_or_hash){var id,parts,url,tmp;if(url_or_hash.indexOf('#')!=-1)
{tmp=url_or_hash.split("#")[0];}
else
{tmp=url_or_hash;}
parts=/(.*)\&_suid=([0-9]+)$/.exec(tmp);url=parts?(parts[1]||url_or_hash):url_or_hash;id=parts?String(parts[2]||''):'';return id||false;};History.isTraditionalAnchor=function(url_or_hash){var isTraditional=!(/[\/\?\.]/.test(url_or_hash));return isTraditional;};History.extractState=function(url_or_hash,create){var State=null,id,url;create=create||false;id=History.extractId(url_or_hash);if(id){State=History.getStateById(id);}
if(!State){url=History.getFullUrl(url_or_hash);id=History.getIdByUrl(url)||false;if(id){State=History.getStateById(id);}
if(!State&&create&&!History.isTraditionalAnchor(url_or_hash)){State=History.createStateObject(null,null,url);}}
return State;};History.getIdByUrl=function(url){var id=History.urlToId[url]||History.store.urlToId[url]||undefined;return id;};History.getLastSavedState=function(){return History.savedStates[History.savedStates.length-1]||undefined;};History.getLastStoredState=function(){return History.storedStates[History.storedStates.length-1]||undefined;};History.hasUrlDuplicate=function(newState){var hasDuplicate=false,oldState;oldState=History.extractState(newState.url);hasDuplicate=oldState&&oldState.id!==newState.id;return hasDuplicate;};History.storeState=function(newState){History.urlToId[newState.url]=newState.id;History.storedStates.push(History.cloneObject(newState));return newState;};History.isLastSavedState=function(newState){var isLast=false,newId,oldState,oldId;if(History.savedStates.length){newId=newState.id;oldState=History.getLastSavedState();oldId=oldState.id;isLast=(newId===oldId);}
return isLast;};History.saveState=function(newState){if(History.isLastSavedState(newState)){return false;}
History.savedStates.push(History.cloneObject(newState));return true;};History.getStateByIndex=function(index){var State=null;if(typeof index==='undefined'){State=History.savedStates[History.savedStates.length-1];}
else if(index<0){State=History.savedStates[History.savedStates.length+index];}
else{State=History.savedStates[index];}
return State;};History.getCurrentIndex=function(){var index=null;if(History.savedStates.length<1){index=0;}
else{index=History.savedStates.length-1;}
return index;};History.getHash=function(doc){var url=History.getLocationHref(doc),hash;hash=History.getHashByUrl(url);return hash;};History.unescapeHash=function(hash){var result=History.normalizeHash(hash);result=decodeURIComponent(result);return result;};History.normalizeHash=function(hash){var result=hash.replace(/[^#]*#/,'').replace(/#.*/,'');return result;};History.setHash=function(hash,queue){var State,pageUrl;if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.setHash,args:arguments,queue:queue});return false;}
History.busy(true);State=History.extractState(hash,true);if(State&&!History.emulated.pushState){History.pushState(State.data,State.title,State.url,false);}
else if(History.getHash()!==hash){if(History.bugs.setHash){pageUrl=History.getPageUrl();History.pushState(null,null,pageUrl+'#'+hash,false);}
else{document.location.hash=hash;}}
return History;};History.escapeHash=function(hash){var result=History.normalizeHash(hash);result=window.encodeURIComponent(result);if(!History.bugs.hashEscape){result=result.replace(/\%21/g,'!').replace(/\%26/g,'&').replace(/\%3D/g,'=').replace(/\%3F/g,'?');}
return result;};History.getHashByUrl=function(url){var hash=String(url).replace(/([^#]*)#?([^#]*)#?(.*)/,'$2');hash=History.unescapeHash(hash);return hash;};History.setTitle=function(newState){var title=newState.title,firstState;if(!title){firstState=History.getStateByIndex(0);if(firstState&&firstState.url===newState.url){title=firstState.title||History.options.initialTitle;}}
try{document.getElementsByTagName('title')[0].innerHTML=title.replace('<','&lt;').replace('>','&gt;').replace(' & ',' &amp; ');}
catch(Exception){}
document.title=title;return History;};History.queues=[];History.busy=function(value){if(typeof value!=='undefined'){History.busy.flag=value;}
else if(typeof History.busy.flag==='undefined'){History.busy.flag=false;}
if(!History.busy.flag){clearTimeout(History.busy.timeout);var fireNext=function(){var i,queue,item;if(History.busy.flag)return;for(i=History.queues.length-1;i>=0;--i){queue=History.queues[i];if(queue.length===0)continue;item=queue.shift();History.fireQueueItem(item);History.busy.timeout=setTimeout(fireNext,History.options.busyDelay);}};History.busy.timeout=setTimeout(fireNext,History.options.busyDelay);}
return History.busy.flag;};History.busy.flag=false;History.fireQueueItem=function(item){return item.callback.apply(item.scope||History,item.args||[]);};History.pushQueue=function(item){History.queues[item.queue||0]=History.queues[item.queue||0]||[];History.queues[item.queue||0].push(item);return History;};History.queue=function(item,queue){if(typeof item==='function'){item={callback:item};}
if(typeof queue!=='undefined'){item.queue=queue;}
if(History.busy()){History.pushQueue(item);}else{History.fireQueueItem(item);}
return History;};History.clearQueue=function(){History.busy.flag=false;History.queues=[];return History;};History.stateChanged=false;History.doubleChecker=false;History.doubleCheckComplete=function(){History.stateChanged=true;History.doubleCheckClear();return History;};History.doubleCheckClear=function(){if(History.doubleChecker){clearTimeout(History.doubleChecker);History.doubleChecker=false;}
return History;};History.doubleCheck=function(tryAgain){History.stateChanged=false;History.doubleCheckClear();if(History.bugs.ieDoubleCheck){History.doubleChecker=setTimeout(function(){History.doubleCheckClear();if(!History.stateChanged){tryAgain();}
return true;},History.options.doubleCheckInterval);}
return History;};History.safariStatePoll=function(){var
urlState=History.extractState(History.getLocationHref()),newState;if(!History.isLastSavedState(urlState)){newState=urlState;}
else{return;}
if(!newState){newState=History.createStateObject();}
History.Adapter.trigger(window,'popstate');return History;};History.back=function(queue){if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.back,args:arguments,queue:queue});return false;}
History.busy(true);History.doubleCheck(function(){History.back(false);});history.go(-1);return true;};History.forward=function(queue){if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.forward,args:arguments,queue:queue});return false;}
History.busy(true);History.doubleCheck(function(){History.forward(false);});history.go(1);return true;};History.go=function(index,queue){var i;if(index>0){for(i=1;i<=index;++i){History.forward(queue);}}
else if(index<0){for(i=-1;i>=index;--i){History.back(queue);}}
else{throw new Error('History.go: History.go requires a positive or negative integer passed.');}
return History;};if(History.emulated.pushState){var emptyFunction=function(){};History.pushState=History.pushState||emptyFunction;History.replaceState=History.replaceState||emptyFunction;}
else{History.onPopState=function(event,extra){var stateId=false,newState=false,currentHash,currentState;History.doubleCheckComplete();currentHash=History.getHash();if(currentHash){currentState=History.extractState(currentHash||History.getLocationHref(),true);if(currentState){History.replaceState(currentState.data,currentState.title,currentState.url,false);}
else{History.Adapter.trigger(window,'anchorchange');History.busy(false);}
History.expectedStateId=false;return false;}
stateId=History.Adapter.extractEventData('state',event,extra)||false;if(stateId){newState=History.getStateById(stateId);}
else if(History.expectedStateId){newState=History.getStateById(History.expectedStateId);}
else{newState=History.extractState(History.getLocationHref());}
if(!newState){newState=History.createStateObject(null,null,History.getLocationHref());}
History.expectedStateId=false;if(History.isLastSavedState(newState)){History.busy(false);return false;}
History.storeState(newState);History.saveState(newState);History.setTitle(newState);History.Adapter.trigger(window,'statechange');History.busy(false);return true;};History.Adapter.bind(window,'popstate',History.onPopState);History.pushState=function(data,title,url,queue){if(History.getHashByUrl(url)&&History.emulated.pushState){throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');}
if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.pushState,args:arguments,queue:queue});return false;}
History.busy(true);var newState=History.createStateObject(data,title,url);if(History.isLastSavedState(newState)){History.busy(false);}
else{History.storeState(newState);History.expectedStateId=newState.id;history.pushState(newState.id,newState.title,newState.url);History.Adapter.trigger(window,'popstate');}
return true;};History.replaceState=function(data,title,url,queue){if(History.getHashByUrl(url)&&History.emulated.pushState){throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');}
if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.replaceState,args:arguments,queue:queue});return false;}
History.busy(true);var newState=History.createStateObject(data,title,url);if(History.isLastSavedState(newState)){History.busy(false);}
else{History.storeState(newState);History.expectedStateId=newState.id;history.replaceState(newState.id,newState.title,newState.url);History.Adapter.trigger(window,'popstate');}
return true;};}
if(sessionStorage){try{History.store=JSON.parse(sessionStorage.getItem('History.store'))||{};}
catch(err){History.store={};}
History.normalizeStore();}
else{History.store={};History.normalizeStore();}
History.Adapter.bind(window,"unload",History.clearAllIntervals);History.saveState(History.storeState(History.extractState(History.getLocationHref(),true)));if(sessionStorage){History.onUnload=function(){var currentStore,item,currentStoreString;try{currentStore=JSON.parse(sessionStorage.getItem('History.store'))||{};}
catch(err){currentStore={};}
currentStore.idToState=currentStore.idToState||{};currentStore.urlToId=currentStore.urlToId||{};currentStore.stateToId=currentStore.stateToId||{};for(item in History.idToState){if(!History.idToState.hasOwnProperty(item)){continue;}
currentStore.idToState[item]=History.idToState[item];}
for(item in History.urlToId){if(!History.urlToId.hasOwnProperty(item)){continue;}
currentStore.urlToId[item]=History.urlToId[item];}
for(item in History.stateToId){if(!History.stateToId.hasOwnProperty(item)){continue;}
currentStore.stateToId[item]=History.stateToId[item];}
History.store=currentStore;History.normalizeStore();currentStoreString=JSON.stringify(currentStore);try{sessionStorage.setItem('History.store',currentStoreString);}
catch(e){if(e.code===DOMException.QUOTA_EXCEEDED_ERR){if(sessionStorage.length){sessionStorage.removeItem('History.store');sessionStorage.setItem('History.store',currentStoreString);}else{}}else{throw e;}}};History.intervalList.push(setInterval(History.onUnload,History.options.storeInterval));History.Adapter.bind(window,'beforeunload',History.onUnload);History.Adapter.bind(window,'unload',History.onUnload);}
if(!History.emulated.pushState){if(History.bugs.safariPoll){History.intervalList.push(setInterval(History.safariStatePoll,History.options.safariPollInterval));}
if(navigator.vendor==='Apple Computer, Inc.'||(navigator.appCodeName||'')==='Mozilla'){History.Adapter.bind(window,'hashchange',function(){History.Adapter.trigger(window,'popstate');});if(History.getHash()){History.Adapter.onDomLoad(function(){History.Adapter.trigger(window,'hashchange');});}}}};if(!History.options||!History.options.delayInit){History.init();}})(window);
