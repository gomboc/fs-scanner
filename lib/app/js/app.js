var FsScanner = FsScanner || {};

( function() {
	
	FsScanner.App = function()
	{
		jQuery( document ).ready( jQuery.proxy( this.onReady, this ) );
		
		this.fileTree = new FsScanner.fileTree.FileTree();
	};
	
	FsScanner.App.prototype = 
	{
	
			
		initControls: function()
		{
			jQuery( "#newData" ).click( jQuery.proxy( this.onNewData, this ) );
			jQuery( "#addNewData" ).click( jQuery.proxy( this.onAddNewData, this ) );
			jQuery( "#cancelNewData" ).click( jQuery.proxy( this.onCancelNewData, this ) );
			jQuery( "#generateSh").click( jQuery.proxy( this.onGenerateSh, this ) );
		},
		
		
		onAddNewData: function()
		{
			var json = jQuery.trim( jQuery( "#newDataContainer textarea" ).val() );
			
			if ( json.length > 0 ) {
				
				json = json.replace( /\",\s*\]/g, '"]' );
				
				this.fileTree.setData( JSON.parse( json ) )
							 .generate();
				
				this.onCancelNewData();

				jQuery( "#main" ).show();
			}
		},
		
		
		onCancelNewData: function()
		{
			jQuery( "#newDataContainer" ).hide();
			jQuery( "#newDataContainer textarea" ).val( "" );
			
			return this;
		},
		
		
		onGenerateSh: function()
		{
			jQuery( ".containers" ).hide();
			jQuery( "#generateShContainer" ).show();
			
			var commands = "";
			
			jQuery( "#mainLeft ul.root a.selected" ).each( function() {
				
				var obj = jQuery( this ).data( "obj" );
				
				commands += obj.getCommand() + "\n";
			} );
			
			jQuery( "#generateShContainer textarea" ).val( commands );
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