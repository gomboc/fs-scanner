( function() {
	
	FsScanner.fileTree.File = function( file, dirName, container )
	{
		this.file = file;
		
		this.dirName = dirName;
		
		this.container = container;
		
		this.generateFile();
	};
	
	FsScanner.fileTree.File.prototype = 
	{
		
		container: null,
		
			
		file: null,
		
		
		dirName: null,
		
		
			
		generateFile: function()
		{
			var fileName = jQuery( "<a>", {
				click:	jQuery.proxy( FsScanner.Selected.addFile, FsScanner.Selected ),
				data:	{ obj: this },
				href:	"javascript:void(0);",
				html:  	this.getFileName()
			} );
			
			var fileRow = jQuery( "<li>", {
				"class": "file",
				html: 	 fileName
			} );

			jQuery( "ul", this.container ).append( fileRow );
		},
		
		
		getFileName: function()
		{
			return this.file.replace( this.dirName, "" );
		},
		
		
		getName: function()
		{
			return this.file;
		},
		
		
		onAddFile: function()
		{
			console.log( "onAddFile" );
		}
		
	};
	
} )();