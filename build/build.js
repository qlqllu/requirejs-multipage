({    
	appDir: '../src',
    baseUrl: 'js',    
    dir: '../build-out',	
	optimize: "none",
	mainConfigFile: '../src/js/require-config.js',
	
    modules: [        
        {           
            name: 'common'
        },       
        {            
            name: 'page1',            
            exclude: ['common']
        },
		{            
            name: 'page2',            
            exclude: ['common']
        }

    ]
})
