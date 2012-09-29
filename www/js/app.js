var FsScanner = FsScanner || {};

( function() {
	
	FsScanner.App = function()
	{
		jQuery( document ).ready( jQuery.proxy( this.onReady, this ) );
	};
	
	FsScanner.App.prototype = 
	{
	
		initControls: function()
		{
			jQuery( "#newData" ).click( jQuery.proxy( this.onNewData, this ) );
			jQuery( "#addNewData" ).click( jQuery.proxy( this.onAddNewData, this ) )
		},
		
		
		onAddNewData: function()
		{
			var json = jQuery.trim( jQuery( "#newDataContainer textarea" ).val() );
			
			if ( json.length > 0 ) {
				
				json = json.replace( /\",\s*\]/g, '"]' );
				
				console.log( JSON.parse( json ) );
				
				jQuery( "#newDataContainer" ).hide();
				jQuery( "#newDataContainer textarea" ).val( "" );
			}
		},
		
		
		onNewData: function()
		{
			jQuery( "#newDataContainer" ).show();
		},
		
			
		onReady: function()
		{
			this.initControls();
		}
		
	}

} ) ();