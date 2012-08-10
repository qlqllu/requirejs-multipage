
(function($) {
	$.fn.log1 = function(){
		console.log('log1');
	};
})(jQuery);
define("lib/jquery.plugin1", function(){});

define('page1',['common','lib/jquery.plugin1'],function(){
	console.log('in page1');
	$().log1();
});