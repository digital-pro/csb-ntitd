parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VZgN":[function(require,module,exports) {
var e=[{id:"traffic-street-link-bg",type:"line",metadata:{"mapbox:group":"4053de47c16e55481b10fd748eaa994c"},source:"mapbox://mapbox.mapbox-traffic-v1","source-layer":"traffic",minzoom:15,filter:["all",["==","$type","LineString"],["all",["has","congestion"],["in","class","link","motorway_link","service","street"]]],layout:{visibility:"visible","line-join":"round","line-cap":"round"},paint:{"line-width":{base:1.5,stops:[[14,2.5],[20,15.5]]},"line-color":{base:1,type:"categorical",property:"congestion",stops:[["low","hsl(145, 95%, 30%)"],["moderate","hsl(30, 100%, 42%)"],["heavy","hsl(355, 100%, 37%)"],["severe","hsl(355, 70%, 22%)"]]},"line-offset":{base:1.5,stops:[[14,2],[20,18]]},"line-opacity":{base:1,stops:[[15,0],[16,1]]}}},{id:"traffic-secondary-tertiary-bg",type:"line",metadata:{"mapbox:group":"4053de47c16e55481b10fd748eaa994c"},source:"mapbox://mapbox.mapbox-traffic-v1","source-layer":"traffic",minzoom:6,filter:["all",["==","$type","LineString"],["all",["has","congestion"],["in","class","secondary","tertiary"]]],layout:{visibility:"visible","line-join":"round","line-cap":"round"},paint:{"line-width":{base:1.5,stops:[[9,1.5],[18,11],[20,16.5]]},"line-color":{base:1,type:"categorical",property:"congestion",stops:[["low","hsl(145, 95%, 30%)"],["moderate","hsl(30, 100%, 42%)"],["heavy","hsl(355, 100%, 37%)"],["severe","hsl(355, 70%, 22%)"]]},"line-offset":{base:1.5,stops:[[10,.5],[15,5],[18,11],[20,14.5]]},"line-opacity":{base:1,stops:[[13,0],[14,1]]}}},{id:"traffic-primary-bg",type:"line",metadata:{"mapbox:group":"4053de47c16e55481b10fd748eaa994c"},source:"mapbox://mapbox.mapbox-traffic-v1","source-layer":"traffic",minzoom:6,filter:["all",["==","$type","LineString"],["all",["==","class","primary"],["has","congestion"]]],layout:{visibility:"visible","line-join":"round","line-cap":"round"},paint:{"line-width":{base:1.5,stops:[[10,.75],[15,6],[20,18]]},"line-color":{base:1,type:"categorical",property:"congestion",stops:[["low","hsl(145, 95%, 30%)"],["moderate","hsl(30, 100%, 42%)"],["heavy","hsl(355, 100%, 37%)"],["severe","hsl(355, 70%, 22%)"]]},"line-offset":{base:1.2,stops:[[10,0],[12,1.5],[18,13],[20,16]]},"line-opacity":{base:1,stops:[[11,0],[12,1]]}}},{id:"traffic-trunk-bg",type:"line",metadata:{"mapbox:group":"4053de47c16e55481b10fd748eaa994c"},source:"mapbox://mapbox.mapbox-traffic-v1","source-layer":"traffic",minzoom:6,filter:["all",["==","$type","LineString"],["all",["==","class","trunk"],["has","congestion"]]],layout:{visibility:"visible","line-join":"round","line-cap":"round"},paint:{"line-width":{base:1.5,stops:[[8,.5],[9,2.25],[18,13],[20,17.5]]},"line-color":{base:1,type:"categorical",property:"congestion",stops:[["low","hsl(145, 95%, 30%)"],["moderate","hsl(30, 100%, 42%)"],["heavy","hsl(355, 100%, 37%)"],["severe","hsl(355, 70%, 22%)"]]},"line-offset":{base:1.5,stops:[[7,0],[9,1],[18,13],[20,18]]},"line-opacity":1}},{id:"traffic-motorway-bg",type:"line",metadata:{"mapbox:group":"4053de47c16e55481b10fd748eaa994c"},source:"mapbox://mapbox.mapbox-traffic-v1","source-layer":"traffic",minzoom:6,filter:["all",["==","$type","LineString"],["all",["==","class","motorway"],["has","congestion"]]],layout:{visibility:"visible","line-join":"round","line-cap":"round"},paint:{"line-width":{base:1.5,stops:[[6,.5],[9,3],[18,16],[20,20]]},"line-color":{base:1,type:"categorical",property:"congestion",stops:[["low","hsl(145, 95%, 30%)"],["moderate","hsl(30, 100%, 42%)"],["heavy","hsl(355, 100%, 37%)"],["severe","hsl(355, 70%, 22%)"]]},"line-opacity":1,"line-offset":{base:1.5,stops:[[7,0],[9,1.2],[11,1.2],[18,10],[20,15.5]]}}},{id:"traffic-primary",metadata:{"mapbox:group":"4053de47c16e55481b10fd748eaa994c"},ref:"traffic-primary-bg",paint:{"line-width":{base:1.5,stops:[[10,1],[15,4],[20,16]]},"line-color":{base:1,type:"categorical",property:"congestion",stops:[["low","hsl(142, 55%, 50%)"],["moderate","hsl(30, 100%, 55%)"],["heavy","hsl(355, 100%, 50%)"],["severe","hsl(355, 70%, 35%)"]]},"line-offset":{base:1.2,stops:[[10,0],[12,1.5],[18,13],[20,16]]},"line-opacity":1}},{id:"traffic-secondary-tertiary",metadata:{"mapbox:group":"4053de47c16e55481b10fd748eaa994c"},ref:"traffic-secondary-tertiary-bg",paint:{"line-width":{base:1.5,stops:[[9,.5],[18,9],[20,14]]},"line-color":{base:1,type:"categorical",property:"congestion",stops:[["low","hsl(142, 55%, 50%)"],["moderate","hsl(30, 100%, 55%)"],["heavy","hsl(355, 100%, 50%)"],["severe","hsl(355, 70%, 35%)"]]},"line-offset":{base:1.5,stops:[[10,.5],[15,5],[18,11],[20,14.5]]},"line-opacity":1}},{id:"traffic-street-link",metadata:{"mapbox:group":"4053de47c16e55481b10fd748eaa994c"},ref:"traffic-street-link-bg",paint:{"line-width":{base:1.5,stops:[[14,1.5],[20,13.5]]},"line-color":{base:1,type:"categorical",property:"congestion",stops:[["low","hsl(142, 55%, 50%)"],["moderate","hsl(30, 100%, 55%)"],["heavy","hsl(355, 100%, 50%)"],["severe","hsl(355, 70%, 35%)"]]},"line-offset":{base:1.5,stops:[[14,2],[20,18]]},"line-opacity":1}},{id:"traffic-trunk",metadata:{"mapbox:group":"4053de47c16e55481b10fd748eaa994c"},ref:"traffic-trunk-bg",paint:{"line-width":{base:1.5,stops:[[8,.75],[18,11],[20,15]]},"line-color":{base:1,type:"categorical",property:"congestion",stops:[["low","hsl(142, 55%, 50%)"],["moderate","hsl(30, 100%, 55%)"],["heavy","hsl(355, 100%, 50%)"],["severe","hsl(355, 70%, 35%)"]]},"line-offset":{base:1.5,stops:[[7,0],[9,1],[18,13],[20,18]]},"line-opacity":1}},{id:"traffic-motorway",metadata:{"mapbox:group":"4053de47c16e55481b10fd748eaa994c"},ref:"traffic-motorway-bg",paint:{"line-width":{base:1.5,stops:[[6,.5],[9,1.5],[18,14],[20,18]]},"line-color":{base:1,type:"categorical",property:"congestion",stops:[["low","hsl(142, 55%, 50%)"],["moderate","hsl(30, 100%, 55%)"],["heavy","hsl(355, 100%, 50%)"],["severe","hsl(355, 70%, 35%)"]]},"line-opacity":1,"line-offset":{base:1.5,stops:[[7,0],[9,1.2],[11,1.2],[18,10],[20,15.5]]}}}];function t(e,t,o){for(var i=0;i<e.layers.length;i++){if(o===e.layers[i].id){var a=e.layers.slice(0,i).concat(t).concat(e.layers.slice(i));return Object.assign({},e,{layers:a})}}return e}function o(e){if(!(this instanceof o))throw new Error("MapboxTraffic needs to be called with the new keyword");this.options=Object.assign({showTraffic:!1,showTrafficButton:!0,trafficSource:/mapbox-traffic-v\d/},e),this.render=this.render.bind(this),this.toggleTraffic=this.toggleTraffic.bind(this),this._hideTraffic=this._hideTraffic.bind(this),this._showTraffic=this._showTraffic.bind(this),this._hasTraffic=this._hasTraffic.bind(this),this._toggle=new s({show:this.options.showTrafficButton,onToggle:this.toggleTraffic.bind(this)})}function i(e,t){var o=document.createElement("div");return o.className="mapboxgl-ctrl mapboxgl-ctrl-group",o.appendChild(e),t||(o.style.display="none"),o}function a(){var e=document.createElement("button");return e.className="mapboxgl-ctrl-icon mapboxgl-ctrl-traffic",e.type="button",e["aria-label"]="Inspect",e}function s(e){e=Object.assign({show:!0,onToggle:function(){}},e),this._btn=a(),this._btn.onclick=e.onToggle,this.elem=i(this._btn,e.show)}o.prototype._hasTraffic=function(){var e=this._map.getStyle(),t=this.options.trafficSource;return Object.keys(e.sources).filter(function(e){return t.test(e)}).length>0},o.prototype.toggleTraffic=function(){this.options.showTraffic=!this.options.showTraffic,this.render()},o.prototype.render=function(){if(!this._hasTraffic()){this._map.addSource("mapbox://mapbox.mapbox-traffic-v1",{type:"vector",url:"mapbox://mapbox.mapbox-traffic-v1"});var o=this._map.getStyle().layers.filter(function(e){return"road"===e["source-layer"]}),i=o[o.length-1].id,a=t(this._map.getStyle(),e,i);this._map.setStyle(a)}this.options.showTraffic?(this._showTraffic(),this._toggle.setMapIcon()):(this._hideTraffic(),this._toggle.setTrafficIcon())},o.prototype._hideTraffic=function(){var e=this._map.getStyle(),t=this.options.trafficSource;e.layers.forEach(function(e){t.test(e.source)&&(e.layout=e.layout||{},e.layout.visibility="none")}),this._map.setStyle(e)},o.prototype._showTraffic=function(){var e=this._map.getStyle(),t=this.options.trafficSource;e.layers.forEach(function(e){t.test(e.source)&&(e.layout=e.layout||{},e.layout.visibility="visible")}),this._map.setStyle(e)},o.prototype.onAdd=function(e){return this._map=e,e.on("load",this.render),this._toggle.elem},o.prototype.onRemove=function(){this._map.off("load",this.render);var e=this._toggle.elem;e.parentNode.removeChild(e),this._map=void 0},s.prototype.setTrafficIcon=function(){this._btn.className="mapboxgl-ctrl-icon mapboxgl-ctrl-traffic"},s.prototype.setMapIcon=function(){this._btn.className="mapboxgl-ctrl-icon mapboxgl-ctrl-map"},"undefined"!=typeof module&&void 0!==module.exports?module.exports=o:window.MapboxTraffic=o;
},{}]},{},["VZgN"], null)
//# sourceMappingURL=/csb-ntitd/mapbox-gl-traffic.31b6a6ed.js.map