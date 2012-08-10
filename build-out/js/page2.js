
(function($) {
	$.fn.log2 = function(){
		console.log('log2');
	};
})(jQuery);
define("lib/jquery.plugin2", function(){});

define('page2',['common','lib/jquery.plugin2'],function(){
	console.log('in page2');
	$().log2();
});