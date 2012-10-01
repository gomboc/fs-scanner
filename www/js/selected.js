;
( function() {
	
	FsScanner.Selected = ( function() 
	{
	
		return {
			
			addDir: function( e )
			{
				var row = jQuery( "<li>", {
					text: this.getName( e )
				} );
				
				jQuery( "#selectedDirs ul" ).append( row );
			},
			
			addFile: function( e )
			{
				var row = jQuery( "<li>", {
					text: this.getName( e )
				} );
				
				jQuery( "#selectedFiles ul" ).append( row );
			},
			
			
			getName: function( invokerEvent )
			{
				return jQuery( invokerEvent.currentTarget ).data( "obj" ).getName();
			}
			
		};
		
	} )();
	
} )();