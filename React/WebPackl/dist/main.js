(()=>{var t={648:()=>{var t;(t=window).Bideo=function(){this.opt=null,this.videoEl=null,this.approxLoadingRate=null,this._resize=null,this._progress=null,this.startTime=null,this.onLoadCalled=!1,this.init=function(e){this.opt=e=e||{};var o=this;o._resize=o.resize.bind(this),o.videoEl=e.videoEl,o.videoEl.addEventListener("loadedmetadata",o._resize,!1),o.videoEl.addEventListener("canplay",(function(){o.opt.isMobile||(o.opt.onLoad&&o.opt.onLoad(),!1!==o.opt.autoplay&&o.videoEl.play())})),o.opt.resize&&t.addEventListener("resize",o._resize,!1),this.startTime=(new Date).getTime(),this.opt.src.forEach((function(t,e,i){var n,a,l=document.createElement("source");for(n in t)t.hasOwnProperty(n)&&(a=t[n],l.setAttribute(n,a));o.videoEl.appendChild(l)})),o.opt.isMobile&&o.opt.playButton&&(o.opt.videoEl.addEventListener("timeupdate",(function(){o.onLoadCalled||(o.opt.onLoad&&o.opt.onLoad(),o.onLoadCalled=!0)})),o.opt.playButton.addEventListener("click",(function(){o.opt.pauseButton.style.display="inline-block",this.style.display="none",o.videoEl.play()}),!1),o.opt.pauseButton.addEventListener("click",(function(){this.style.display="none",o.opt.playButton.style.display="inline-block",o.videoEl.pause()}),!1))},this.resize=function(){if(!("object-fit"in document.body.style)){var e=this.videoEl.videoWidth,o=this.videoEl.videoHeight,i=(e/o).toFixed(2),n=this.opt.container,a=t.getComputedStyle(n),l=parseInt(a.getPropertyValue("width")),s=parseInt(a.getPropertyValue("height"));if("border-box"!==a.getPropertyValue("box-sizing")){var d=a.getPropertyValue("padding-top"),r=a.getPropertyValue("padding-bottom"),p=a.getPropertyValue("padding-left"),u=a.getPropertyValue("padding-right");d=parseInt(d),r=parseInt(r),l+=(p=parseInt(p))+(u=parseInt(u)),s+=d+r}if(l/e>s/o)var h=l,v=Math.ceil(h/i);else v=s,h=Math.ceil(v*i);this.videoEl.style.width=h+"px",this.videoEl.style.height=v+"px"}}}}},e={};function o(i){var n=e[i];if(void 0!==n)return n.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,o),a.exports}(()=>{const t=o(648);console.log("objeto importado."),console.log(t)})()})();