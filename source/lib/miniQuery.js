/*!
 * minQuery
 */


var SweetSelector = {
	select: function(element){
		return document.querySelector(element);
	}
};


var Dom = {

	hide: function(element){
		SweetSelector.select(element).style.display = 'none';
	},
	show: function(element){
		SweetSelector.select(element).style.display = '';
	},
	addClass: function(element,newElement){
		SweetSelector.select(element).classList.add(newElement);
	},
	removeClass: function(element,newElement){
		SweetSelector.select(element).classList.remove(newElement);
	}
};


var EventDispatcher = {

	on: function(element,action,eventHandler){
		SweetSelector.select(element).addEventListener(action,eventHandler);
	},
	trigger: function(element,action){
		var test = new MouseEvent(action);
		var selector = SweetSelector.select(element).dispatchEvent(test);
		if(selector){
			alert('SUCCESS');
		}
		
	}

};

var AjaxWrapper = {
	request: function(url,route){

		function reqListener () {
		  console.log(this.responseText);
		}

		var oReq = new XMLHttpRequest();
		oReq.onload = reqListener;
		oReq.open(route, url, true);
		oReq.send();
	}
	
};

function miniQuery(element){

	SweetSelector.select(element);
	function domject(){
		
	}

	domject.prototype = {
		hide: function(){
			Dom.hide(element);
		},
		show: function(){
			Dom.show(element);
		},
		addClass: function(newClass){
			Dom.addClass(element,newClass);
		},
		removeClass: function(newClass){
			Dom.removeClass(element,newClass);
		},
		on: function(action,eventHandler){
			EventDispatcher.on(element,action,eventHandler);
		},
		toggle: function(action){
			EventDispatcher.toggle(element,action);
		},
		ajax: function(url,route){
			AjaxWrapper.request(url,route);
		}

	};
return new domject();

}
