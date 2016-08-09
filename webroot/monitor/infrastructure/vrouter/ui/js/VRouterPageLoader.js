define([
	'controller-basedir/monitor/infrastructure/vrouter/ui/js/views/VRouterView',
], function(VRouterView) {
	var VRPageLoader = function(){
		this.load = function(paramObject) {
			var self = this, 
				currMenuObj = globalObj.currMenuObj,
	            hashParams = paramObject['hashParams'],
	            renderFn = paramObject['function'],
	            loadingStartedDefObj = paramObject['loadingStartedDefObj'];

	            self.vrView = new VRouterView();
	            self.renderView(renderFn, hashParams);
	            if(contrail.checkIfExist(loadingStartedDefObj)) {
	                loadingStartedDefObj.resolve();
	            }
		};

		this.renderView = function(renderFn, hashParams){
			$(contentContainer).html("");
	        switch (renderFn) {
	            default :
	            	this.vrView[renderFn]({
	                	hashParams: hashParams
	                });
	                break;
	        }
		}

		this.destroy = function () {};
	};

	return VRPageLoader;
});