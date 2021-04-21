// Garden Gnome Software - Skin
// Pano2VR 6.1.8/17956
// Filename: skin_nvsu.ggsk
// Generated 2021-04-21T05:49:29

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._nav_buttons=document.createElement('div');
		el.ggId="nav_buttons";
		el.ggDx=-0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 8px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 347px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nav_buttons.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._nav_buttons.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._pan_left=document.createElement('div');
		els=me._pan_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjUxMnB4IiBpZD0iQ2FwYV8xIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzg0Ljk3IDM4NC45NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzg0Ljk3IDM4NC45Nz'+
			'siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiPgogPGc+CiAgPGcgaWQ9IkNoZXZyb25fTGVmdF9DaXJjbGUiPgogICA8cGF0aCBkPSJNMTkyLjQ4NSwwQzg2LjE4NSwwLDAsODYuMTg1LDAsMTkyLjQ4NUMwLDI5OC43OTcsODYuMTczLDM4NC45NywxOTIuNDg1LDM4NC45N1MzODQuOTcsMjk4Ljc5NywzODQuOTcsMTkyLjQ4NSAgICBDMzg0Ljk3LDg2LjE4NSwyOTguNzk3LDAsMTkyLjQ4NSwweiBNMTkyLjQ4NSwzNjEuMjgyYy05Mi44NzQsMC0xNjguNDI0LTc1LjkyMy0xNjguNDI0LTE2OC43OTdTOTkuNjExLDI0LjA2MSwxOTIuNDg1LDI0LjA2MSAg'+
			'ICBzMTY4LjQyNCw3NS41NSwxNjguNDI0LDE2OC40MjRTMjg1LjM1OSwzNjEuMjgyLDE5Mi40ODUsMzYxLjI4MnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTTIzNS44NzgsOTkuODc2Yy00LjcwNC00Ljc0LTEyLjMxOS00Ljc0LTE3LjAxMSwwbC04My4wMDksODQuMmMtNC41NzIsNC42Mi00LjU4NCwxMi41NiwwLDE3LjE5MWw4Mi45OTcsODQuMiAgICBjNC43MDQsNC43NCwxMi4zMTksNC43NCwxNy4wMTEsMGM0LjcwNC00Ljc1Miw0LjcwNC0xMi40MzksMC0xNy4xOTFsLTc0LjUyOC03NS42MWw3NC41NC03NS42MSAgICBDMjQwLjU3LDExMi4zMTUsMjQwLjU3LDEwNC42MjgsMjM1Lj'+
			'g3OCw5OS44NzZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogPC9nPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgo8L3N2Zz4K';
		me._pan_left__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pan_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pan_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pan_left.onmouseout=function (e) {
			me.elementMouseDown['pan_left']=false;
		}
		me._pan_left.onmousedown=function (e) {
			me.elementMouseDown['pan_left']=true;
		}
		me._pan_left.onmouseup=function (e) {
			me.elementMouseDown['pan_left']=false;
		}
		me._pan_left.ontouchend=function (e) {
			me.elementMouseDown['pan_left']=false;
		}
		me._pan_left.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._pan_left);
		el=me._pan_right=document.createElement('div');
		els=me._pan_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjUxMnB4IiBpZD0iQ2FwYV8xIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzg0Ljk3IDM4NC45NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzg0Ljk3IDM4NC45Nz'+
			'siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiPgogPGc+CiAgPGcgaWQ9IkNoZXZyb25fUmlnaHRfQ2lyY2xlIj4KICAgPHBhdGggZD0iTTE5Mi40ODUsMEM4Ni4xNzMsMCwwLDg2LjE3MywwLDE5Mi40ODVjMCwxMDYuMyw4Ni4xNzMsMTkyLjQ4NSwxOTIuNDg1LDE5Mi40ODVjMTA2LjMsMCwxOTIuNDg1LTg2LjE4NSwxOTIuNDg1LTE5Mi40ODUgICAgQzM4NC45Nyw4Ni4xNzMsMjk4Ljc4NSwwLDE5Mi40ODUsMHogTTE5Mi40ODUsMzYwLjkwOWMtOTIuODc0LDAtMTY4LjQyNC03NS41NS0xNjguNDI0LTE2OC40MjRTOTkuNjExLDIzLjY4OCwxOTIuNDg1'+
			'LDIzLjY4OCAgICBzMTY4LjQyNCw3NS45MjMsMTY4LjQyNCwxNjguNzk3UzI4NS4zNTksMzYwLjkwOSwxOTIuNDg1LDM2MC45MDl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0xNjYuMTE0LDk5LjUwM2MtNC43MDQtNC43NC0xMi4zMTktNC43NC0xNy4wMTEsMGMtNC43MDQsNC43NTItNC43MDQsMTIuNDM5LDAsMTcuMTkxbDc0LjUyOCw3NS42MWwtNzQuNTQsNzUuNjEgICAgYy00LjcwNCw0Ljc0LTQuNzA0LDEyLjQzOSwwLDE3LjE5MWM0LjcwNCw0Ljc0LDEyLjMxOSw0Ljc0LDE3LjAxMSwwbDgzLjAwOS04NC4yYzQuNTcyLTQuNjMyLDQuNTg0LTEyLjU2LDAtMTcuMTkxICAgIEwxNj'+
			'YuMTE0LDk5LjUwM3oiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiA8L2c+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+Cjwvc3ZnPgo=';
		me._pan_right__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pan_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pan_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pan_right.onmouseout=function (e) {
			me.elementMouseDown['pan_right']=false;
		}
		me._pan_right.onmousedown=function (e) {
			me.elementMouseDown['pan_right']=true;
		}
		me._pan_right.onmouseup=function (e) {
			me.elementMouseDown['pan_right']=false;
		}
		me._pan_right.ontouchend=function (e) {
			me.elementMouseDown['pan_right']=false;
		}
		me._pan_right.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._pan_right);
		el=me._tilt_down=document.createElement('div');
		els=me._tilt_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjUxMnB4IiBpZD0iQ2FwYV8xIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzg0Ljk3IDM4NC45NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzg0Ljk3IDM4NC45Nz'+
			'siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiPgogPGc+CiAgPGcgaWQ9IkNoZXZyb25fRG93bl9DaXJjbGUiPgogICA8cGF0aCBkPSJNMTkyLjQ4NSwwQzg2LjE4NSwwLDAsODYuMTczLDAsMTkyLjQ4NWMwLDEwNi4zLDg2LjE4NSwxOTIuNDg1LDE5Mi40ODUsMTkyLjQ4NSAgICBjMTA2LjMxMiwwLDE5Mi40ODUtODYuMTg1LDE5Mi40ODUtMTkyLjQ4NUMzODQuOTcsODYuMTczLDI5OC43OTcsMCwxOTIuNDg1LDB6IE0xOTIuNDg1LDM2MC45MDkgICAgYy05Mi44NzQsMC0xNjguNDI0LTc1LjU1LTE2OC40MjQtMTY4LjQyNFM5OS42MTEsMjQuMDYxLDE5'+
			'Mi40ODUsMjQuMDYxczE2OC43OTcsNzUuNTUsMTY4Ljc5NywxNjguNDI0ICAgIFMyODUuMzU5LDM2MC45MDksMTkyLjQ4NSwzNjAuOTA5eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNMjY4LjI3NiwxNDkuMDkybC03NS42MSw3NC41MjhsLTc1LjYxLTc0LjU0Yy00Ljc0LTQuNzA0LTEyLjQzOS00LjcwNC0xNy4xOTEsMGMtNC43NCw0LjcwNC00Ljc0LDEyLjMxOSwwLDE3LjAxMSAgICBsODQuMiw4My4wMDljNC42Miw0LjU3MiwxMi41Niw0LjU4NCwxNy4xOTEsMGw4NC4yLTgyLjk5N2M0Ljc0LTQuNzA0LDQuNzQtMTIuMzE5LDAtMTcuMDExICAgIEMyODAuNzE1LDE0NC40LDI3My4wMj'+
			'gsMTQ0LjQsMjY4LjI3NiwxNDkuMDkyeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KIDwvZz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KPC9zdmc+Cg==';
		me._tilt_down__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tilt_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tilt_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tilt_down.onmouseout=function (e) {
			me.elementMouseDown['tilt_down']=false;
		}
		me._tilt_down.onmousedown=function (e) {
			me.elementMouseDown['tilt_down']=true;
		}
		me._tilt_down.onmouseup=function (e) {
			me.elementMouseDown['tilt_down']=false;
		}
		me._tilt_down.ontouchend=function (e) {
			me.elementMouseDown['tilt_down']=false;
		}
		me._tilt_down.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._tilt_down);
		el=me._tilt_up=document.createElement('div');
		els=me._tilt_up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjUxMnB4IiBpZD0iQ2FwYV8xIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzg0Ljk3IDM4NC45NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzg0Ljk3IDM4NC45Nz'+
			'siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiPgogPGc+CiAgPGcgaWQ9IkNoZXZyb25fVXBfQ2lyY2xlIj4KICAgPHBhdGggZD0iTTE5Mi40ODUsMEM4Ni4xNzMsMCwwLDg2LjE4NSwwLDE5Mi40ODVDMCwyOTguNzk3LDg2LjE3MywzODQuOTcsMTkyLjQ4NSwzODQuOTdjMTA2LjMsMCwxOTIuNDg1LTg2LjE3MywxOTIuNDg1LTE5Mi40ODUgICAgQzM4NC45Nyw4Ni4xODUsMjk4Ljc4NSwwLDE5Mi40ODUsMHogTTE5Mi40ODUsMzYwLjkwOWMtOTIuODc0LDAtMTY4Ljc5Ny03NS41NS0xNjguNzk3LTE2OC40MjRTOTkuNjExLDI0LjA2MSwxOTIuNDg1LDI0'+
			'LjA2MSAgICBzMTY4LjQyNCw3NS41NSwxNjguNDI0LDE2OC40MjRTMjg1LjM1OSwzNjAuOTA5LDE5Mi40ODUsMzYwLjkwOXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTTIwMC44OTQsMTM1Ljg1OGMtNC42Mi00LjU3Mi0xMi41Ni00LjU4NC0xNy4xOTEsMGwtODQuMiw4Mi45OTdjLTQuNzQsNC43MDQtNC43NCwxMi4zMTksMCwxNy4wMTEgICAgYzQuNzUyLDQuNzA0LDEyLjQzOSw0LjcwNCwxNy4xOTEsMGw3NS42MS03NC41MjhsNzUuNjEsNzQuNTRjNC43NCw0LjcwNCwxMi40MzksNC43MDQsMTcuMTkxLDBjNC43NC00LjcwNCw0Ljc0LTEyLjMxOSwwLTE3LjAxMSAgICBMMjAwLjg5NC'+
			'wxMzUuODU4eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KIDwvZz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KPC9zdmc+Cg==';
		me._tilt_up__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tilt_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 106px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tilt_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tilt_up.onmouseout=function (e) {
			me.elementMouseDown['tilt_up']=false;
		}
		me._tilt_up.onmousedown=function (e) {
			me.elementMouseDown['tilt_up']=true;
		}
		me._tilt_up.onmouseup=function (e) {
			me.elementMouseDown['tilt_up']=false;
		}
		me._tilt_up.ontouchend=function (e) {
			me.elementMouseDown['tilt_up']=false;
		}
		me._tilt_up.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._tilt_up);
		el=me._zoom_in=document.createElement('div');
		els=me._zoom_in__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8c3ZnIHZlcnNpb249IjEuMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQ0LjQ4NyAyNDQuNDg3IiBoZWlnaHQ9IjUxMnB4IiB3aWR0aD0iNTEycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQ0LjQ4NyAyNDQuNDg3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Im0yNDEuODc3LDIzMC4xMzFsLTcyLjkyOS03Mi45MjljMTMuOTczLTE2LjY3IDIyLjQ2NS0zOC4wMDQgMjIuNDY1LTYxLj'+
			'A2MSAwLTUyLjIwNC00My41MDMtOTUuNzA3LTk1LjcwNy05NS43MDdzLTk1LjcwNiw0My41MDQtOTUuNzA2LDk1LjcwOCA0My41MDMsOTUuNzA3IDk1LjcwNyw5NS43MDdjMjIuNjIxLDAgNDMuNTczLTguMTc5IDYwLjEwNC0yMS42ODJsNzIuMTQ1LDcyLjE0NWMxLjc0LDEuNzQgMy40OCwxLjc0IDYuOTYsMS43NHM1LjIyLDAgNi45Ni0xLjc0YzMuNDgyLTMuNDggMy40ODItOC43IDAuMDAxLTEyLjE4MXptLTE0Ni4xNy01NS42ODNjLTQzLjUwMywwLTc4LjMwNS0zNC44MDItNzguMzA1LTc4LjMwNXMzNC44MDItNzguMzA1IDc4LjMwNS03OC4zMDUgNzguMzA1LDM0LjgwMiA3OC4zMDUsNzguMzA1'+
			'LTM0LjgwMiw3OC4zMDUtNzguMzA1LDc4LjMwNXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0ibTEyMS44MDksODcuNDQyaC0xNy40MDF2LTE3LjQwMWMwLTUuMjItMy40OC04LjcwMS04LjcwMS04LjcwMS01LjIyLDAtOC43MDEsMy40OC04LjcwMSw4LjcwMXYxNy40MDFoLTE3LjQwMWMtNS4yMiwwLTguNzAxLDMuNDgtOC43MDEsOC43MDFzMy40OCw4LjcwMSA4LjcwMSw4LjcwMWgxNy40MDF2MTcuNDAxYzAsNS4yMiAzLjQ4LDguNzAxIDguNzAxLDguNzAxIDUuMjIsMCA4LjcwMS0zLjQ4IDguNzAxLTguNzAxdi0xNy40MDFoMTcuNDAxYzUuMjIsMCA4LjcwMS0zLjQ4IDguNzAxLTguNz'+
			'AxIDAtNS4yMjEtMy40ODEtOC43MDEtOC43MDEtOC43MDF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._zoom_in__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoom_in";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 140px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_in.onmouseout=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.onmousedown=function (e) {
			me.elementMouseDown['zoom_in']=true;
		}
		me._zoom_in.onmouseup=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.ontouchend=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._zoom_in);
		el=me._zoom_out=document.createElement('div');
		els=me._zoom_out__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8c3ZnIHZlcnNpb249IjEuMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQ0LjQ4NyAyNDQuNDg3IiBoZWlnaHQ9IjUxMnB4IiB3aWR0aD0iNTEycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQ0LjQ4NyAyNDQuNDg3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Im0yNDEuODc3LDIzMC4xMzFsLTcyLjkyOS03Mi45MjljMTMuOTczLTE2LjY3IDIyLjQ2NS0zOC4wMDQgMjIuNDY1LTYxLj'+
			'A2MSAwLTUyLjIwNC00My41MDMtOTUuNzA3LTk1LjcwNy05NS43MDdzLTk1LjcwNiw0My41MDQtOTUuNzA2LDk1LjcwOCA0My41MDMsOTUuNzA3IDk1LjcwNyw5NS43MDdjMjIuNjIxLDAgNDMuNTczLTguMTc5IDYwLjEwNC0yMS42ODJsNzIuMTQ1LDcyLjE0NWMxLjc0LDEuNzQgMy40OCwxLjc0IDYuOTYsMS43NHM1LjIyLDAgNi45Ni0xLjc0YzMuNDgyLTMuNDggMy40ODItOC43IDAuMDAxLTEyLjE4MXptLTE0Ni4xNy01NS42ODNjLTQzLjUwMywwLTc4LjMwNS0zNC44MDItNzguMzA1LTc4LjMwNXMzNC44MDItNzguMzA1IDc4LjMwNS03OC4zMDUgNzguMzA1LDM0LjgwMiA3OC4zMDUsNzguMzA1'+
			'LTM0LjgwMiw3OC4zMDUtNzguMzA1LDc4LjMwNXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0ibTEyMS44MDksODcuNDQyaC01Mi4yMDRjLTUuMjIsMC04LjcwMSwzLjQ4LTguNzAxLDguNzAxczMuNDgsOC43MDEgOC43MDEsOC43MDFoNTIuMjA0YzUuMjIsMCA4LjcwMS0zLjQ4IDguNzAxLTguNzAxIDAtNS4yMjEtMy40ODEtOC43MDEtOC43MDEtOC43MDF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._zoom_out__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoom_out";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_out.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_out.onmouseout=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.onmousedown=function (e) {
			me.elementMouseDown['zoom_out']=true;
		}
		me._zoom_out.onmouseup=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.ontouchend=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._zoom_out);
		el=me._sound_off=document.createElement('div');
		els=me._sound_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8c3ZnIHZlcnNpb249IjEuMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjYxLjAxOCAyNjEuMDE4IiBoZWlnaHQ9IjUxMnB4IiB3aWR0aD0iNTEycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjYxLjAxOCAyNjEuMDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGc+CiAgPHBhdGggZD0ibTI1OC40MDgsMjQ2LjY2MmwtNTIuMjA0LTUyLjIwNHYtMzYuNTQzaDguNzAxYzEzLjkyMSwwIDI2LjEwMi0xMi4xODEgMjYuMTAyLT'+
			'I2LjEwMnYtNS4yMmMwLTEzLjkyMS0xMi4xODEtMjYuMTAyLTI2LjEwMi0yNi4xMDJoLTguNzAxdi03MS4zNDRjMC0xMy45MjEtMTIuMTgxLTI2LjEwMi0yNi4xMDItMjYuMTAyLTUuMjIsMC0xMC40NDEsMS43NC0xNS42NjEsNS4yMmwtNzkuNTIzLDY0LjkwNy03MC4xMjctNzAuMTI3Yy0zLjQ4LTMuNDgtOC43MDEtMy40OC0xMi4xODEtMS43NzYzNmUtMTVzLTMuNDgsOC43MDEgMCwxMi4xODFsNjAuOTA0LDYwLjkwNGgtMzMuMDYyYy01LjIyLDAtOC43MDEsMy40OC04LjcwMSw4LjcwMXY5Mi4yMjZjMCw1LjIyIDMuNDgsOC43MDEgOC43MDEsOC43MDFoNTAuODQ2bDgzLjE0Myw2Ny44NjVjMy40'+
			'OCwzLjQ4IDEwLjQ0MSw1LjIyIDE1LjY2MSw1LjIyIDEzLjkyMSwwIDI2LjEwMi0xMi4xODEgMjYuMTAyLTI0LjM2MnYtMTUuNjYxbDQwLjAyMyw0MC4wMjNjMS43NCwxLjc0IDUuMjIsMS43NCA2Ljk2LDEuNzQgMS43NCwwIDUuMjIsMCA1LjIyLTEuNzQgMy40ODEtMy40OCAzLjQ4MS04LjcgMC4wMDEtMTIuMTgxem0tNDMuNTAzLTEyOC43NjhjNS4yMiwwIDguNzAxLDMuNDggOC43MDEsOC43MDF2NS4yMmMwLDUuMjItMy40OCw4LjcwMS04LjcwMSw4LjcwMWgtOC43MDF2LTIyLjYyMWg4LjcwMXptLTQxLjc2My05Ny40NDhjNS4yMi0zLjQ4IDEzLjkyMS0xLjc0IDEzLjkyMSw2Ljk2djE0Ny45MW'+
			'wtOTAuOTU2LTkwLjk1NiA3Ny4wMzUtNjMuOTE0em0tOTkuMTg3LDE0Ny45MWgtMzQuODAydi03NC44MjVoMzQuODAydjc0LjgyNXptMTEzLjEwOCw2NC4zODVjMCw4LjcwMS04LjcwMSwxMC40NDEtMTMuOTIxLDYuOTZsLTgxLjc4Ni02Ny44NjV2LTY3Ljg2NWw5NS43MDcsOTUuNzA3djMzLjA2M3oiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._sound_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sound_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 280px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sound_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_off.onclick=function (e) {
				player.playSound("_main","0");
			me._sound_on.style[domTransition]='none';
			me._sound_on.style.visibility=(Number(me._sound_on.style.opacity)>0||!me._sound_on.style.opacity)?'inherit':'hidden';
			me._sound_on.ggVisible=true;
			me._sound_off.style[domTransition]='none';
			me._sound_off.style.visibility='hidden';
			me._sound_off.ggVisible=false;
		}
		me._sound_off.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._sound_off);
		el=me._sound_on=document.createElement('div');
		els=me._sound_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8c3ZnIHZlcnNpb249IjEuMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjU1Ljc5NyAyNTUuNzk3IiBoZWlnaHQ9IjUxMnB4IiB3aWR0aD0iNTEycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjU1Ljc5NyAyNTUuNzk3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGc+CiAgPHBhdGggZD0ibTIxMS40MjQsOTcuNDQ3aC04LjcwMXYtNzEuMzQ1YzAuMDAxLTEzLjkyMS0xMi4xOC0yNi4xMDItMjYuMTAxLTI2LjEwMi01LjIyLD'+
			'AtMTAuNDQxLDEuNzQtMTUuNjYxLDUuMjJsLTgzLjE0Myw2Ny44NjVoLTUwLjg0N2MtNS4yMiwwLTguNzAxLDMuNDgtOC43MDEsOC43MDF2OTIuMjI2YzAsNS4yMiAzLjQ4LDguNzAxIDguNzAxLDguNzAxaDUwLjg0Nmw4My4xNDMsNjcuODY1YzMuNDgsMy40OCAxMC40NDEsNS4yMiAxNS42NjEsNS4yMiAxMy45MjEsMCAyNi4xMDItMTIuMTgxIDI2LjEwMi0yNC4zNjJ2LTc2LjU2Nmg4LjcwMWMxMy45MjEsMCAyNi4xMDItMTIuMTgxIDI2LjEwMi0yNi4xMDJ2LTUuMjJjMi44NDIxN2UtMTQtMTMuOTItMTIuMTgtMjYuMTAxLTI2LjEwMi0yNi4xMDF6bS0xNDAuOTUsNjcuODY0aC0zNC44MDJ2LTc0'+
			'LjgyNWgzNC44MDJ2NzQuODI1em0xMTMuMTA4LDY0LjM4NWMwLDguNzAxLTguNzAxLDEwLjQ0MS0xMy45MjEsNi45NmwtODEuNzg2LTY3Ljg2NXYtODMuNTI1bDgxLjc4Ni02Ny44NjVjNS4yMi0zLjQ4IDEzLjkyMS0xLjc0IDEzLjkyMSw2Ljk2djIwNS4zMzV6bTM2LjU0My0xMDAuOTI3YzAsNS4yMi0zLjQ4LDguNzAxLTguNzAxLDguNzAxaC04LjcwMXYtMjIuNjIxaDguNzAxYzUuMjIsMCA4LjcwMSwzLjQ4IDguNzAxLDguNzAxdjUuMjE5eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._sound_on__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sound_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 280px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sound_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_on.onclick=function (e) {
				player.stopSound("_main");
			me._sound_off.style[domTransition]='none';
			me._sound_off.style.visibility=(Number(me._sound_off.style.opacity)>0||!me._sound_off.style.opacity)?'inherit':'hidden';
			me._sound_off.ggVisible=true;
			me._sound_on.style[domTransition]='none';
			me._sound_on.style.visibility='hidden';
			me._sound_on.ggVisible=false;
		}
		me._sound_on.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._sound_on);
		el=me._rotate=document.createElement('div');
		els=me._rotate__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjUxMnB4IiBpZD0iQ2FwYV8xIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjEyIDYxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEyIDYxMjsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiPgogPGc+CiAgPGcgaWQ9Il94MzJfXzMxXyI+CiAgIDxnPgogICAgPHBhdGggZD0iTTQ1NC4wMjcsMzguMjVoMTM4Ljg0OGMxMC41NTcsMCwxOS4xMjUtOC41NjgsMTkuMTI1LTE5LjEyNVM2MDMuNDMyLDAsNTkyLjg3NSwwaC0xOTEuMjUgICAgIEMzOTkuMzExLDAsMzgyLjUsMCwzODIuNSwxOS4xMjV2MTkxLjI1YzAsMTAuNTU3LDguNTY4LDE5LjEy'+
			'NSwxOS4xMjUsMTkuMTI1czE5LjEyNS04LjU2OCwxOS4xMjUtMTkuMTI1VjY0LjI0MSAgICAgYzkwLjQyMyw0Mi45NTUsMTUzLDEzNC45ODQsMTUzLDI0MS43NTljMCwxNDcuODc1LTExOS44NzUsMjY3Ljc1LTI2Ny43NSwyNjcuNzVDMTU4LjEyNSw1NzMuNzUsMzguMjUsNDUzLjg3NSwzOC4yNSwzMDYgICAgIGMwLTEzNC44NTEsOTkuNzk0LTI0Ni4xMDEsMjI5LjUtMjY0LjcwOVYyLjYzOUMxMTYuODU0LDIxLjQ5NywwLDE0OS45NzksMCwzMDZjMCwxNjkuMDA4LDEzNi45OTIsMzA2LDMwNiwzMDYgICAgIHMzMDYtMTM2Ljk5MiwzMDYtMzA2QzYxMiwxOTAuNzE0LDU0OC4xOTksOTAuNDIzLDQ1NC'+
			'4wMjcsMzguMjV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+Cjwvc3ZnPgo=';
		me._rotate__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 210px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._rotate.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._rotate);
		el=me._fullscreen_exit=document.createElement('div');
		els=me._fullscreen_exit__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjUxMnB4IiBpZD0iQ2FwYV8xIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjEyIDYxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEyIDYxMjsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiPgogPGc+CiAgPGcgaWQ9Il94MzZfIj4KICAgPGc+CiAgICA8cGF0aCBkPSJNMjQ4LjU0MiwzNDMuOTI5SDc4Ljg3OWMtMTAuNDUyLDAtMTguOTE3LDguNDI4LTE4LjkxNywxOC44NDJjMCwxMC4zOTUsOC40NjUsMTguODQsMTguOTE3LDE4Ljg0aDEyNS4zNTFMMCw1ODQuOTc5ICAgICBsMjYuNzUxLDI2LjYzOWwyMDQuMDE5LTIwMy4xOGwtMC41OTIs'+
			'MTIzLjgyMmMwLDEwLjM5NSw4LjQ2NSwxOC44NCwxOC45MTcsMTguODRjMTAuNDUyLDAsMTguOTE3LTguNDI2LDE4LjkxNy0xOC44NHYtMTY5LjUxICAgICBjMC01LjU4LTIuMzEyLTEwLjA5LTUuOTgxLTEzLjE4NkMyNTguNTczLDM0Ni4xMjYsMjUzLjgxNSwzNDMuOTI5LDI0OC41NDIsMzQzLjkyOXogTTUzMy4xNDEsMjMwLjM4OEg0MDcuNzlMNjEyLDI3LjAxOSAgICAgTDU4NS4yNDgsMC4zODJsLTIwNCwyMDMuMTc4bDAuNTkzLTEyMy44MjJjMC0xMC4zOTUtOC40NjUtMTguODQxLTE4LjkxNy0xOC44NDFzLTE4LjkxNyw4LjQyNy0xOC45MTcsMTguODQxdjE2OS41MSAgICAgYzAsNS41OCwyLj'+
			'MxMiwxMC4wODksNS45NjEsMTMuMTY2YzMuNDM5LDMuNDc4LDguMTc5LDUuNjc1LDEzLjQ3Miw1LjY3NWgxNjkuNjYyYzEwLjQ1MiwwLDE4LjkxOC04LjQyNywxOC45MTgtMTguODQxICAgICBDNTUyLjAzOCwyMzguODM0LDU0My41NzMsMjMwLjM4OCw1MzMuMTQxLDIzMC4zODh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+Cjwvc3ZnPgo=';
		me._fullscreen_exit__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="fullscreen_exit";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 245px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_exit.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_exit.onclick=function (e) {
			player.exitFullscreen();
			me._fullscreen_enter.style[domTransition]='none';
			me._fullscreen_enter.style.visibility=(Number(me._fullscreen_enter.style.opacity)>0||!me._fullscreen_enter.style.opacity)?'inherit':'hidden';
			me._fullscreen_enter.ggVisible=true;
			me._fullscreen_exit.style[domTransition]='none';
			me._fullscreen_exit.style.visibility='hidden';
			me._fullscreen_exit.ggVisible=false;
		}
		me._fullscreen_exit.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._fullscreen_exit);
		el=me._fullscreen_enter=document.createElement('div');
		els=me._fullscreen_enter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjUxMnB4IiBpZD0iQ2FwYV8xIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjEyIDYxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEyIDYxMjsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiPgogPGc+CiAgPGcgaWQ9Il94MzVfIj4KICAgPGc+CiAgICA8cGF0aCBkPSJNMjQzLjk1OCwzNDAuMTc3TDM3LjY1Nyw1NDYuNDk3TDM4LjI1LDQyMC43NWMwLTEwLjU1Ny04LjU2OC0xOS4xMjUtMTkuMTI1LTE5LjEyNVMwLDQxMC4xOTMsMCw0MjAuNzV2MTcyLjEyNSAgICAgYzAsNS42NjEsMi4zMzMsMTAuMjMyLDYuMDQzLDEzLjM2OEM5LjUwNSw2'+
			'MDkuNzgxLDE0LjMyNSw2MTIsMTkuNjgsNjEyaDE3MS41N2MxMC41NTcsMCwxOS4xMjUtOC41NjcsMTkuMTI1LTE5LjEyNSAgICAgYzAtMTAuNTU3LTguNTY4LTE5LjEyNS0xOS4xMjUtMTkuMTI1SDY0LjQ3bDIwNi41MzEtMjA2LjUxMkwyNDMuOTU4LDM0MC4xNzd6IE02MDUuOTU2LDUuNzU3QzYwMi40OTUsMi4yMTksNTk3LjY3NiwwLDU5Mi4zNCwwICAgICBINDIwLjc1Yy0xMC41NTcsMC0xOS4xMjUsOC41NjgtMTkuMTI1LDE5LjEyNWMwLDEwLjU1Nyw4LjU2OCwxOS4xMjUsMTkuMTI1LDE5LjEyNWgxMjYuNzYxTDM0MC45OTksMjQ0Ljc4MWwyNy4wNDIsMjcuMDQyICAgICBsMjA2LjMyMS0yMD'+
			'YuMzJMNTczLjc1LDE5MS4yNWMwLDEwLjU1Nyw4LjU2OCwxOS4xMjUsMTkuMTI1LDE5LjEyNVM2MTIsMjAxLjgwNyw2MTIsMTkxLjI1VjE5LjEyNSAgICAgQzYxMiwxMy40NjQsNjA5LjY2Nyw4Ljg5NCw2MDUuOTU2LDUuNzU3eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgo8L3N2Zz4K';
		me._fullscreen_enter__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="fullscreen_enter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 245px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_enter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_enter.onclick=function (e) {
			player.enterFullscreen();
			me._fullscreen_exit.style[domTransition]='none';
			me._fullscreen_exit.style.visibility=(Number(me._fullscreen_exit.style.opacity)>0||!me._fullscreen_exit.style.opacity)?'inherit':'hidden';
			me._fullscreen_exit.ggVisible=true;
			me._fullscreen_enter.style[domTransition]='none';
			me._fullscreen_enter.style.visibility='hidden';
			me._fullscreen_enter.ggVisible=false;
		}
		me._fullscreen_enter.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._fullscreen_enter);
		el=me._home=document.createElement('div');
		els=me._home__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjUxMnB4IiBpZD0iQ2FwYV8xIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjEyLjI1IDYxMi4yNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEyLjI1IDYxMi4yNTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiPgogPGc+CiAgPGc+CiAgIDxwb2x5Z29uIHBvaW50cz0iMC4xMjUsMjM2LjcwNSAwLjEyNSwyNzguNDMyIDMwNi4xMjUsNDEuNzI3IDYxMi4xMjUsMjc4LjQzMiA2MTIuMTI1LDIzNi43MDUgMzA2LjEyNSwwICAgIiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwb2x5Z29uIHBvaW50cz0iNTU2LjQ4OCwxNjMuMTgxIDU1Ni40ODgsMTQu'+
			'MTU5IDQ3My4wMzQsMTQuMTU5IDQ3My4wMzQsOTcuNjE0IDUwMC44NTMsMTIxLjg3MSA1MDAuODUzLDQxLjk3OCA1MjguNjcxLDQxLjk3OCAgICAgNTI4LjY3MSwxMzkuMzQxICAgIiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwb2x5Z29uIHBvaW50cz0iNDE4LjIwNCw1ODQuNDMyIDQxOC4yMDQsNjEyLjI1IDU1Ni42ODQsNjEyLjI1IDU1Ni42ODQsMjc0Ljg0MyA1MjguODY1LDI1Mi42MTcgNTI4Ljg2NSw1ODQuNDMyICAgIiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0yMjIuNjcsNjEyaDE2Ni45MDlWMzMzLjgxOEgyMjIuNjdWNjEyeiBNMjUwLjQ4OSwzNjEuNjM2aDExMS4yNzN2MjIyLj'+
			'U0NkgyNTAuNDg5VjM2MS42MzZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwb2x5Z29uIHBvaW50cz0iNTUuNzYxLDI3NS45IDU1Ljc2MSw2MTIuMjUgMTk0LjI5Niw2MTIuMjUgMTk0LjI5Niw1ODQuNDMyIDgzLjU4LDU4NC40MzIgODMuNTgsMjUzLjM2OCAgICIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KPC9zdmc+Cg==';
		me._home__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="home";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 315px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._home.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._home.onclick=function (e) {
			player.moveToDefaultViewEx(0,0);
		}
		me._home.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._home);
		me.divSkin.appendChild(me._nav_buttons);
		el=me._loading_screen=document.createElement('div');
		el.ggId="loading_screen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.784314);';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 49px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 199px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_screen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading_screen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._hourglass=document.createElement('div');
		els=me._hourglass__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjUxMnB4IiBpZD0iQ2FwYV8xIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNzkyIDc5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzkyIDc5MjsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiPgogPGc+CiAgPGcgaWQ9Il94MzFfMF8xOV8iPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik02NDMuNSw3NDIuNUg1OTRWNTY5LjI1QzU5NCw0NzMuNTY2LDUxNi40MzQsMzk2LDQyMC43NSwzOTZDNTE2LjQzNCwzOTYsNTk0LDMxOC40MzQsNTk0LDIyMi43NVY0OS41aDQ5LjUgICAgIGMxMy42NjIsMCwyNC43NS0xMS4wODgsMjQuNzUtMjQuNzVTNjU3LjE2'+
			'MiwwLDY0My41LDBoLTQ5NWMtMTMuNjYyLDAtMjQuNzUsMTEuMDg4LTI0Ljc1LDI0Ljc1UzEzNC44MzgsNDkuNSwxNDguNSw0OS41SDE5OCAgICAgdjE3My4yNUMxOTgsMzE4LjQzNCwyNzUuNTY2LDM5NiwzNzEuMjUsMzk2QzI3NS41NjYsMzk2LDE5OCw0NzMuNTY2LDE5OCw1NjkuMjVWNzQyLjVoLTQ5LjVjLTEzLjY2MiwwLTI0Ljc1LDExLjA4OC0yNC43NSwyNC43NSAgICAgUzEzNC44MzgsNzkyLDE0OC41LDc5Mmg0OTVjMTMuNjYyLDAsMjQuNzUtMTEuMDg4LDI0Ljc1LTI0Ljc1UzY1Ny4xNjIsNzQyLjUsNjQzLjUsNzQyLjV6IE0yNDcuNSwyMjIuNzUgICAgIGMwLTQzLjM4NywwLTE3My4yNS'+
			'wwLTE3My4yNWgyOTdjMCwwLDAsMTMzLjQyNywwLDE3My4yNWMwLDY4LjMzNS01OC4xODgsMTIzLjc1LTEyOS45MzgsMTIzLjc1aC0zNy4xMjUgICAgIEMzMDUuNjg3LDM0Ni41LDI0Ny41LDI5MS4wODUsMjQ3LjUsMjIyLjc1eiBNNTQ0LjUsNzQyLjVoLTI5N2MwLDAsMC0xMjkuODg4LDAtMTczLjI1YzAtNjguMzM1LDU4LjE4Ny0xMjMuNzUsMTI5LjkzOC0xMjMuNzUgICAgIGgzNy4xMjVjNzEuNzUsMCwxMjkuOTM4LDU1LjQxNSwxMjkuOTM4LDEyMy43NUM1NDQuNSw2MDkuMDcyLDU0NC41LDc0Mi41LDU0NC41LDc0Mi41eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgog'+
			'PGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgo8L3N2Zz4K';
		me._hourglass__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hourglass";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hourglass.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hourglass.ggUpdatePosition=function (useTransition) {
		}
		me._loading_screen.appendChild(me._hourglass);
		el=me._loading_bar=document.createElement('div');
		el.ggId="loading_bar";
		el.ggDy=15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loading_bar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_bar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._loading_screen.appendChild(me._loading_bar);
		el=me._loading_text=document.createElement('div');
		els=me._loading_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loading_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 26px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 165px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 165px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loading_text.ggUpdateText=function() {
			var hs="<b>\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e "+(player.getPercentLoaded()*100.0).toFixed(0)+"%<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loading_text.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loading_text.ggUpdateText();
		});
		el.appendChild(els);
		me._loading_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_text.ggUpdatePosition=function (useTransition) {
		}
		me._loading_screen.appendChild(me._loading_text);
		me.divSkin.appendChild(me._loading_screen);
		el=me._photo_container=document.createElement('div');
		els=me._photo_container__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._photo_container.ggUpdatePosition();}
		el.ggText="https://i.ytimg.com/vi/evi_iaJJmZE/maxresdefault.jpg";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="photo_container";
		el.ggDx=10;
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 320px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 624px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._photo_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._photo_container.logicBlock_externalurl = function() {
			var newLogicStateExternalUrl;
			if (
				((player.getViewerSize().width == 0))
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._photo_container.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._photo_container.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._photo_container.style[domTransition]='';
				if (me._photo_container.ggCurrentLogicStateExternalUrl == 0) {
					me._photo_container.ggText="https://i.ytimg.com/vi/evi_iaJJmZE/maxresdefault.jpg";
					me._photo_container__img.style.width = '0px';
					me._photo_container__img.style.height = '0px';
					me._photo_container__img.src=me._photo_container.ggText;
				}
				else {
					me._photo_container.ggText="https://i.ytimg.com/vi/evi_iaJJmZE/maxresdefault.jpg";
					me._photo_container__img.style.width = '0px';
					me._photo_container__img.style.height = '0px';
					me._photo_container__img.src=me._photo_container.ggText;
				}
			}
		}
		me._photo_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._photo_container.clientWidth;
			var parentHeight = me._photo_container.clientHeight;
			var img = me._photo_container__img;
			var aspectRatioDiv = me._photo_container.clientWidth / me._photo_container.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			img.style.left='0px';
			img.style.top='0px';
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 320px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 624px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._photo_container.appendChild(me._image_1);
		el=me._close_photo=document.createElement('div');
		els=me._close_photo__img=document.createElement('img');
		els.className='ggskin ggskin_close_photo';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABYUlEQVQ4jb3UsU6DQBgH8O8aQ3HheARYWo7pSHkYExdXY5w1aUw69AmMg+wObr6JvYXL4XKz47ULoYmfSzGU3GG1xv8E98Evl/wPCCJCnuej2Wz2Ab9MURRf1yMAgGOwfkZ/BQ2CUsqlECJxvSSESKSUy4NApdQ9Y2weRdGrDRVCJHEcrxhjc6XUwyBYluXNZDK5JoRAGIancRyvumiLUUp9QghMp9Or/k5Pujfb7fZls9ksKKU+AACl1N+hGQBAi7XPr9frummaJ+cOOedvWuvMGFO3ay3ax4wxtdY645wrJ7hDlQ09BLOCLvQQzAkOBRFxaG4Fu232Z7b2B0EbZoypbUXZ0D3QhWmtM1f7fXQP9DzvPAgCa5u2ooIg8D3PO3OCaZreVVX1iIjWNr'+
			'soIkJVVUWapouusfelAAAkSXIppXxvmubZdjQ450oIkY3H4wvG2G1/Tr45BT/O//wPj8kn5EjsoPx26isAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAB6klEQVQ4jaXUPYujQBgH8L8TmNTmUBKMsYjExq9x3DYH+RJnc8V6EMRqi2Uru6TdL3ILlypfwXRG8kJeHHYJqYQBzVURzY0hyz3dPMP85pl5hpEcx4Esy43ZbPZTVdUnVVW/4BPBGPtgjD3btj0BAMlxHERR9Ns0zW+fga4jiqI30zQfGs1m84dlWb8kSfofD7Ism/P5fEcURXm5xgzDAKW0djGlFIZhVHKSJEFRlBciy7JSnhgMBvB9H6PRSIhSSuF5Hnzfh2VZ11UqhFJalKdpGlzXBSEEhmHA87wKesF0XQchBK7rViqllEqkvANjDLvdrhjrul6gZewS2+0W+/2+enTHcc6iI5UXbjabYoNyLggCcM4rYKVCAOCcIwiCArlA92BCsA69B6sFb0'+
			'We5zfnhaDoHi8h6v5NsK4p13dah1bAOiwIAmGjRGgF7HQ60DTtH4xzLmyUpmlot9tVkHNevMPVaoXxeIw8z4XdLKN5nmMymWC9Xpfnz9JwOHy//gN7vR4Oh0Pt06CUotvtIo7jSp4x9tFotVpHRVG+l3+c0+mELMuEGABkWYbj8VjJnc9nLJdLl9i2/bpYLN5qV98ZcRz/sW37lQDAdDp9CMPwMUkSlqbp7ZdbijRN8yRJWBiGj/1+/ysA/AVYLPnDrxmIRAAAAABJRU5ErkJggg==';
		me._close_photo__img.ggOverSrc=hs;
		el.ggId="close_photo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 624px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close_photo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_photo.onclick=function (e) {
			me._photo_container.style[domTransition]='none';
			me._photo_container.style.visibility='hidden';
			me._photo_container.ggVisible=false;
			var list=me.findElements("btn_photo",false);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility=(Number(e.style.opacity)>0||!e.style.opacity)?'inherit':'hidden';
				e.ggVisible=true;
			}
		}
		me._close_photo.onmouseover=function (e) {
			me._close_photo__img.src=me._close_photo__img.ggOverSrc;
		}
		me._close_photo.onmouseout=function (e) {
			me._close_photo__img.src=me._close_photo__img.ggNormalSrc;
		}
		me._close_photo.ggUpdatePosition=function (useTransition) {
		}
		me._photo_container.appendChild(me._close_photo);
		me.divSkin.appendChild(me._photo_container);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('imagesready', function() {
			me._loading_screen.style[domTransition]='none';
			me._loading_screen.style.visibility='hidden';
			me._loading_screen.ggVisible=false;
		});
		player.addListener('beforechangenode', function() {
			me._loading_screen.style[domTransition]='none';
			me._loading_screen.style.visibility=(Number(me._loading_screen.style.opacity)>0||!me._loading_screen.style.opacity)?'inherit':'hidden';
			me._loading_screen.ggVisible=true;
		});
		player.addListener('fullscreenenter', function() {
			me._fullscreen_exit.style[domTransition]='none';
			me._fullscreen_exit.style.visibility=(Number(me._fullscreen_exit.style.opacity)>0||!me._fullscreen_exit.style.opacity)?'inherit':'hidden';
			me._fullscreen_exit.ggVisible=true;
			me._fullscreen_enter.style[domTransition]='none';
			me._fullscreen_enter.style.visibility='hidden';
			me._fullscreen_enter.ggVisible=false;
		});
		player.addListener('fullscreenexit', function() {
			me._fullscreen_enter.style[domTransition]='none';
			me._fullscreen_enter.style.visibility=(Number(me._fullscreen_enter.style.opacity)>0||!me._fullscreen_enter.style.opacity)?'inherit':'hidden';
			me._fullscreen_enter.ggVisible=true;
			me._fullscreen_exit.style[domTransition]='none';
			me._fullscreen_exit.style.visibility='hidden';
			me._fullscreen_exit.ggVisible=false;
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['pan_left']) {
			player.changePanLog(3,true);
		}
		if (me.elementMouseDown['pan_right']) {
			player.changePanLog(-3,true);
		}
		if (me.elementMouseDown['tilt_down']) {
			player.changeTiltLog(-3,true);
		}
		if (me.elementMouseDown['tilt_up']) {
			player.changeTiltLog(3,true);
		}
		if (me.elementMouseDown['zoom_in']) {
			player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoom_out']) {
			player.changeFovLog(1,true);
		}
		var hs='';
		if (me._loading_screen.ggParameter) {
			hs+=parameterToTransform(me._loading_screen.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loading_screen.style[domTransform]=hs;
		var hs='';
		if (me._loading_bar.ggParameter) {
			hs+=parameterToTransform(me._loading_bar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loading_bar.style[domTransform]=hs;
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_hotspot_photo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_photo=document.createElement('div');
		el.ggId="hotspot_photo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 76px;';
		hs+='position : absolute;';
		hs+='top : 64px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_photo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_photo.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_photo.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_photo.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_photo.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_photo.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_photo=document.createElement('div');
		els=me._btn_photo__img=document.createElement('img');
		els.className='ggskin ggskin_btn_photo';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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'+
			'TkSuQmCC';
		me._btn_photo__img.ggOverSrc=hs;
		el.ggId="btn_photo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_photo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._btn_photo.onclick=function (e) {
			skin._photo_container.ggText=basePath + me.hotspot.url;
			skin._photo_container.ggSubElement.style.width = '0px';
			skin._photo_container.ggSubElement.style.height = '0px';
			skin._photo_container.ggSubElement.src='';
			skin._photo_container.ggSubElement.src=skin._photo_container.ggText;
			skin._photo_container.style[domTransition]='none';
			skin._photo_container.style.visibility=(Number(skin._photo_container.style.opacity)>0||!skin._photo_container.style.opacity)?'inherit':'hidden';
			skin._photo_container.ggVisible=true;
			var list=me.findElements("btn_photo",false);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._btn_photo.onmouseover=function (e) {
			me._btn_photo__img.src=me._btn_photo__img.ggOverSrc;
		}
		me._btn_photo.onmouseout=function (e) {
			me._btn_photo__img.src=me._btn_photo__img.ggNormalSrc;
		}
		me._btn_photo.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_photo.appendChild(me._btn_photo);
		me.__div = me._hotspot_photo;
	};
	function SkinHotspotClass_hotspot_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_info=document.createElement('div');
		el.ggId="hotspot_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 240px;';
		hs+='position : absolute;';
		hs+='top : 164px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_info.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_info=document.createElement('div');
		els=me._btn_info__img=document.createElement('img');
		els.className='ggskin ggskin_btn_info';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAj0lEQVRYhe3YQQqAMAxE0Yn0YL253mxciFDEbJqBhpK/ciUPUw1oJE8kqQGAma12gCSO1YixwnjthSHZSXaBJYYZEQrQPmMys+vverYWvYEC8bbPmNSlwoTPzPhKR8/PFEb1kfs2hRmfgBKW6swUxqswXoXxKoxXYbykizK6wcOLUlmqMRXGKxWmAc+PmgzdaJ0sictIDD0AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_info";
		el.ggDx=1;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._btn_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._btn_info.onclick=function (e) {
			me._info_caption_bar.style[domTransition]='none';
			me._info_caption_bar.style.visibility=(Number(me._info_caption_bar.style.opacity)>0||!me._info_caption_bar.style.opacity)?'inherit':'hidden';
			me._info_caption_bar.ggVisible=true;
			me._btn_info.style[domTransition]='none';
			me._btn_info.style.visibility='hidden';
			me._btn_info.ggVisible=false;
		}
		me._btn_info.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._btn_info.style[domTransition]='none';
			} else {
				me._btn_info.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._btn_info.ggParameter.sx=1;me._btn_info.ggParameter.sy=1;
			me._btn_info.style[domTransform]=parameterToTransform(me._btn_info.ggParameter);
		}
		me._btn_info.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._btn_info.style[domTransition]='none';
			} else {
				me._btn_info.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._btn_info.ggParameter.sx=0.7;me._btn_info.ggParameter.sy=0.7;
			me._btn_info.style[domTransform]=parameterToTransform(me._btn_info.ggParameter);
		}
		me._btn_info.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_info.appendChild(me._btn_info);
		el=me._info_caption_bar=document.createElement('div');
		el.ggId="info_caption_bar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 24px;';
		hs+='left : -138px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -95px;';
		hs+='visibility : hidden;';
		hs+='width : 264px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_caption_bar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_caption_bar.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_close=document.createElement('div');
		els=me._info_close__img=document.createElement('img');
		els.className='ggskin ggskin_info_close';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABYUlEQVQ4jb3UsU6DQBgH8O8aQ3HheARYWo7pSHkYExdXY5w1aUw69AmMg+wObr6JvYXL4XKz47ULoYmfSzGU3GG1xv8E98Evl/wPCCJCnuej2Wz2Ab9MURRf1yMAgGOwfkZ/BQ2CUsqlECJxvSSESKSUy4NApdQ9Y2weRdGrDRVCJHEcrxhjc6XUwyBYluXNZDK5JoRAGIancRyvumiLUUp9QghMp9Or/k5Pujfb7fZls9ksKKU+AACl1N+hGQBAi7XPr9frummaJ+cOOedvWuvMGFO3ay3ax4wxtdY645wrJ7hDlQ09BLOCLvQQzAkOBRFxaG4Fu232Z7b2B0EbZoypbUXZ0D3QhWmtM1f7fXQP9DzvPAgCa5u2ooIg8D3PO3OCaZreVVX1iIjWNr'+
			'soIkJVVUWapouusfelAAAkSXIppXxvmubZdjQ450oIkY3H4wvG2G1/Tr45BT/O//wPj8kn5EjsoPx26isAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAB6klEQVQ4jaXUPYujQBgH8L8TmNTmUBKMsYjExq9x3DYH+RJnc8V6EMRqi2Uru6TdL3ILlypfwXRG8kJeHHYJqYQBzVURzY0hyz3dPMP85pl5hpEcx4Esy43ZbPZTVdUnVVW/4BPBGPtgjD3btj0BAMlxHERR9Ns0zW+fga4jiqI30zQfGs1m84dlWb8kSfofD7Ism/P5fEcURXm5xgzDAKW0djGlFIZhVHKSJEFRlBciy7JSnhgMBvB9H6PRSIhSSuF5Hnzfh2VZ11UqhFJalKdpGlzXBSEEhmHA87wKesF0XQchBK7rViqllEqkvANjDLvdrhjrul6gZewS2+0W+/2+enTHcc6iI5UXbjabYoNyLggCcM4rYKVCAOCcIwiCArlA92BCsA69B6sFb0'+
			'We5zfnhaDoHi8h6v5NsK4p13dah1bAOiwIAmGjRGgF7HQ60DTtH4xzLmyUpmlot9tVkHNevMPVaoXxeIw8z4XdLKN5nmMymWC9Xpfnz9JwOHy//gN7vR4Oh0Pt06CUotvtIo7jSp4x9tFotVpHRVG+l3+c0+mELMuEGABkWYbj8VjJnc9nLJdLl9i2/bpYLN5qV98ZcRz/sW37lQDAdDp9CMPwMUkSlqbp7ZdbijRN8yRJWBiGj/1+/ysA/AVYLPnDrxmIRAAAAABJRU5ErkJggg==';
		me._info_close__img.ggOverSrc=hs;
		el.ggId="info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 244px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_close.onclick=function (e) {
			me._info_caption_bar.style[domTransition]='none';
			me._info_caption_bar.style.visibility='hidden';
			me._info_caption_bar.ggVisible=false;
			me._btn_info.style[domTransition]='none';
			me._btn_info.style.visibility=(Number(me._btn_info.style.opacity)>0||!me._btn_info.style.opacity)?'inherit':'hidden';
			me._btn_info.ggVisible=true;
		}
		me._info_close.onmouseover=function (e) {
			me._info_close__img.src=me._info_close__img.ggOverSrc;
		}
		me._info_close.onmouseout=function (e) {
			me._info_close__img.src=me._info_close__img.ggNormalSrc;
		}
		me._info_close.ggUpdatePosition=function (useTransition) {
		}
		me._info_caption_bar.appendChild(me._info_close);
		el=me._info_caption_text=document.createElement('div');
		els=me._info_caption_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_caption_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 239px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<p class=\"info_caption\">\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f<\/p>";
		el.appendChild(els);
		me._info_caption_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_caption_text.ggUpdatePosition=function (useTransition) {
		}
		me._info_caption_bar.appendChild(me._info_caption_text);
		el=me._info_main_text=document.createElement('div');
		els=me._info_main_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_main_text";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -81px;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 264px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 266px;';
		hs+='height: auto;';
		hs+='background: #1f1f1f;';
		hs+='background: rgba(31,31,31,0.784314);';
		hs+='border: 1px solid #ffffff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<p class=\"info_main_text\">"+me.hotspot.title+"<\/p>";
		el.appendChild(els);
		me._info_main_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_main_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._info_caption_bar.appendChild(me._info_main_text);
		me._hotspot_info.appendChild(me._info_caption_bar);
		me.__div = me._hotspot_info;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='hotspot_photo') {
			hotspot.skinid = 'hotspot_photo';
			hsinst = new SkinHotspotClass_hotspot_photo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
			hotspot.skinid = 'hotspot_info';
			hsinst = new SkinHotspotClass_hotspot_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['hotspot_photo']) {
			var i;
			for(i = 0; i < hotspotTemplates['hotspot_photo'].length; i++) {
				hotspotTemplates['hotspot_photo'][i] = null;
			}
		}
		if(hotspotTemplates['hotspot_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['hotspot_info'].length; i++) {
				hotspotTemplates['hotspot_info'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._photo_container.logicBlock_externalurl();
	player.addListener('sizechanged', function(args) { me._photo_container.logicBlock_externalurl(); });
	me.skinTimerEvent();
};