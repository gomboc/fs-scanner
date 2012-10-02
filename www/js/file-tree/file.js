( function() {
	
	FsScanner.fileTree.File = function( file, dirName, container )
	{
		jQuery.extend( this, new FsScanner.fileTree.Base() );
		
		this.file = file;
		
		this.dirName = dirName;
		
		this.container = jQuery( "ul", container );
		
		this.removeFolderNameFromFile()
			.generateRow();
		
		this.selectedContainer = jQuery( "#selectedFiles ul" );
	};
	
	
	FsScanner.fileTree.File.prototype = 
	{
		
		container: null,
		
			
		file: null,
		
		
		dirName: null,
		
		
		row: null,
		
		
		selectedContainer: null,
		
		
		
		getName: function()
		{
			return this.file;
		},
		
		
		removeFolderNameFromFile: function()
		{
			this.file.replace( this.dirName, "" );
			
			return this;
		}
		
	};
	
} )();