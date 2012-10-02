( function() {
	
	FsScanner.fileTree.Base  = function()
	{

	};
	
	FsScanner.fileTree.Base.prototype = 
	{
		
		options: {},
		
		
		onSelect: function( e )
		{
			jQuery( e.currentTarget ).addClass( "selected" );
			
			var row = jQuery( "<li>", {
				text: this.getName()
			} );
			
			this.selectedContainer.append( row );
		},
		
		
		setOptions: function( options )
		{
			this.options = options;
			
			return this;
		}
			
	};
	
} )();