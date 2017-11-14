/**
* bj_modal.js v1.0
*
* http://www.bugjun.cn
*/
(function($){
	var modal = {
		_init : function(obj,settings){
			$(obj).addClass(settings.animationType);
			if(settings.width!="auto"){
				$(obj).find(".bj-modal").css("width",settings.width+"px");
			}
			$(obj).attr("data-scrollable",settings.scrollable);
			if(settings.height!="auto"){
				$(obj).find(".bj-modal").css("height",settings.height+"px");
			}
			if(settings.modal){
				$(".bj-modal-warp").addClass("backdrop");
			}else{
				$(obj).find(".bj-modal").css("margin-top",($(obj).find(".bj-modal").height()/2*(-1))+"px");
			}
			return (function(){
				//绑定事件
				modal._bindEvent(obj,settings);
			})();
		},

		_show : function(obj){
			return (function(){
				if(!$(obj).hasClass("show")){
					$(obj).addClass("show");
				}
				if($(obj).attr("data-scrollable")!="true"){
					$("body").css("overflow","hidden");
				}
				if($(obj).find(".bj-modal-body").outerHeight()>$(obj).find(".bj-modal").height()-$(obj).find(".bj-modal-header").outerHeight()-$(obj).find(".bj-modal-footer").outerHeight()){
					$(obj).find(".bj-modal-body").css("height",($(obj).find(".bj-modal").height()-$(obj).find(".bj-modal-header").outerHeight()-$(obj).find(".bj-modal-footer").outerHeight()-30)+"px");
				}
				$(obj).trigger('bj.modal.show');
			})();
		},

		_hide : function(obj){
			return (function(){
				if($(obj).hasClass("show")){
					$(obj).removeClass("show");
				}

				if($(obj).attr("data-scrollable")!="true"){
					$("body").css("overflow","auto");
				}
				$(obj).trigger('bj.modal.hide');
			})();
		},

		_bindEvent:function(obj,settings){
			return (function(){
				//阻止浏览器事件冒泡
				$(obj).find(".bj-modal").on("click",function(){
					event.stopPropagation();
				})
				//点击按钮关闭模态框
				$(obj).find("[data-close='bj-modal']").on("click",function(){
					modal._hide(obj,settings);
				});
				//点击按钮显示模态框
				$("[data-toggle='bj-modal'][data-target='"+$(obj).attr("id")+"']").on("click",function(){
					modal._show(obj,settings);
				});
				//点击遮罩层关闭模态框
				$(obj).on("click",function(){
					if(settings.modal){
						modal._hide(obj,settings);
					}
				});
				$(window).resize(function(){
					$(obj).find(".bj-modal-body").css("height","auto");
					$(obj).find(".bj-modal-body").css("height",($(obj).find(".bj-modal").height()-$(obj).find(".bj-modal-header").outerHeight()-$(obj).find(".bj-modal-footer").outerHeight()-30)+"px");
					if(!settings.modal){
						$(obj).find(".bj-modal").css("margin-top",($(obj).find(".bj-modal").height()/2*(-1))+"px");
					}
				});
			})();
		},
	}

	$.fn.bj_modal=function(options){
		return this.each(function () {
			var default_data ={
		            animationType: 'fade',
		            modal: true,
		            scrollable:false,
		            width:"auto",
		            height:"auto"
		        },settings;

			if(typeof(options)==="object" || typeof(options)=="undefined"){
				settings = $.extend(default_data, options);
		        modal._init(this,settings);
			}
			else if(typeof(options)==="string"){
				switch(options){
					case "show":
						modal._show(this);
						break;
					case "hide":
						modal._hide(this);
						break;
					case "toggle":
						if($(this).hasClass("show")){
							modal._hide(this);
						}else{
							modal._show(this);
						}
						break;
				}
			}

			
		});
	}

})(jQuery);