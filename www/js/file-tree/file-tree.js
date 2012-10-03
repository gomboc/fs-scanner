var FsScanner = FsScanner || {};

( function() {
	
	FsScanner.fileTree.FileTree = function()
	{

	};
	
	FsScanner.fileTree.FileTree.prototype = 
	{
		
		data: [],
		
			
		generate: function()
		{
			var list = jQuery( "<ul>", {
											"class": "root"
										} );
			
			jQuery( "#mainLeft" ).html( list );
			jQuery( "#selectedDirs ul, #selectedFiles ul" ).html( "" );
			
			jQuery.each( this.data, jQuery.proxy( this.addFolder, this ) );
		},
		
		
				
		addFolder: function( key, folderData )
		{
			new FsScanner.fileTree.Folder( folderData );
		},
		
		
		setData: function( data )
		{
			this.data = data;
			
			return this;
		}
	};
	
} )();