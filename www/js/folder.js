var FsScanner = FsScanner || {};

( function() {
	
	FsScanner.Folder = function( data )
	{
		this.data = data;
		
		this.container = jQuery( "#mainLeft ul.root" );
		
		this.generateDir()
			.generateFiles();
	};
	
	FsScanner.Folder.prototype = 
	{
		
		container: null,
		
			
		data: {},
		
		
		dirRow: null,
		
			
			
		generateOneFile: function( key, value )
		{
			var fileName = jQuery( "<a>", {
											click:		jQuery.proxy( this.onAddFile, this ),
											href:		"javascript:void(0);",
											html:  		this.getFileName( value )
						   				  } );
			
			var fileRow = jQuery( "<li>", {
											"class": 	"file",
											html:  		fileName
										  } );

			jQuery( "ul", this.dirRow ).append( fileRow );
		},
		
		
		generateFiles: function()
		{
			var list = jQuery( "<ul>", {} );
			
			this.dirRow.append( list );
			
			jQuery.each( this.data.files, jQuery.proxy( this.generateOneFile, this ) );
		},
		
		
		generateDir: function()
		{
			var dirName = jQuery( "<a>", {
											click:		jQuery.proxy( this.onAddDir, this ),
											href:		"javascript:void(0);",
											html:  		this.data.dir
										 } );
			
			this.dirRow = jQuery( "<li>", {
											"class": 	"dir",
											html:		dirName
										  } );
			
			this.container.append( this.dirRow );
			
			return this;
		},
		
		
		getFileName: function( fullFileName )
		{
			return fullFileName.replace( this.data.dir, "" );
		},
		
		
		onAddDir: function()
		{
			console.log( "onAddDir" );
		},
		
		
		onAddFile: function()
		{
			console.log( "onAddFile" );
		}
		
	};
	
} )();