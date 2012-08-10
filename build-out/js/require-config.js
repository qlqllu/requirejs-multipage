require.config({
	paths: {
        "jquery": "lib/jquery"		
    },	
	
	shim: {
		'lib/jquery.plugin1': ['jquery'],
		'lib/jquery.plugin2': ['jquery'],		
	}
});