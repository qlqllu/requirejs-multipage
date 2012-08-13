require(['common'],function(){
	require(['lib/jquery.plugin1'],function(){
		console.log('in page1');
		$().log1();
	});
});