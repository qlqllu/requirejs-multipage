
(function($) {
	$.fn.log1 = function(){
		console.log('log1');
	};
})(jQuery);
define("lib/jquery.plugin1", function(){});

require(['common'],function(){
	require(['lib/jquery.plugin1'],function(){
		console.log('in page1');
		$().log1();
	});
});
define("page1", function(){});
