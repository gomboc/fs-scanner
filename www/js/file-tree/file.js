( function() {
	
	FsScanner.fileTree.File = function( file, dirName, container )
	{
		jQuery.extend( this, new FsScanner.fileTree.Base() );
		
		this.file = file;
		
		this.dirName = dirName;
		
		this.container = container;
		
		this.generateFile();
		
		this.selectedContainer = jQuery( "#selectedFiles ul" );
	};
	
	
	FsScanner.fileTree.File.prototype = 
	{
		
		container: null,
		
			
		file: null,
		
		
		dirName: null,
		
		
		selectedContainer: null,
		
			
		generateFile: function()
		{
			var fileName = jQuery( "<a>", {
				click:	jQuery.proxy( this.onSelect, this ),
				data:	{ obj: this },
				href:	"javascript:void(0);",
				html:  	this.getFileName(),
				title:  this.getFileName()
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
		}
		
	};
	
} )();