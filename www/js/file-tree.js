var FsScanner = FsScanner || {};

( function() {
	
	FsScanner.FileTree = function()
	{

	};
	
	FsScanner.FileTree.prototype = 
	{
		
		data: [],
		
			
		generate: function()
		{
			var list = jQuery( "<ul>", {
											"class": "root"
										} );
			
			jQuery( "#mainLeft" ).html( list );
			
			jQuery.each( this.data, jQuery.proxy( this.addFolder, this ) );
		},
		
		
				
		addFolder: function( key, folderData )
		{
			new FsScanner.Folder( folderData );
		},
		
		
		setData: function( data )
		{
			this.data = data;
			
			return this;
		}
	};
	
} )();