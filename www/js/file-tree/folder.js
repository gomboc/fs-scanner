var FsScanner = FsScanner || {};

( function() {
	
	FsScanner.fileTree.Folder = function( folderData )
	{
		jQuery.extend( this, new FsScanner.fileTree.Base() );
		
		this.data = folderData;
		
		this.container = jQuery( "#mainLeft ul.root" );
		
		this.generateRow()
			.generateFiles();
		
		this.selectedContainer = jQuery( "#selectedDirs ul" );
	};
	
	FsScanner.fileTree.Folder.prototype = 
	{
		
		container: null,
		
			
		data: {},
		
		
		row: null,
		
			
			
		generateOneFile: function( key, fileName )
		{
			new FsScanner.fileTree.File( fileName, this.data.dir, this.row );
		},
		
		
		generateFiles: function()
		{
			var list = jQuery( "<ul>", {} );
			
			this.row.append( list );
			
			jQuery.each( this.data.files, jQuery.proxy( this.generateOneFile, this ) );
		},
		
		
		getName: function()
		{
			return this.data.dir;
		}
		
	};
	
} )();