;
( function() {
	
	FsScanner.Selected = ( function() 
	{
	
		return {
			
			addDir: function( e )
			{
				console.log( jQuery( e.currentTarget ).data( "obj" ).getName() );
			},
			
			addFile: function( e )
			{
				console.log( jQuery( e.currentTarget ).data( "obj" ).getName() );
			}
			
		};
		
	} )();
	
} )();