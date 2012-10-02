( function() {
	
	FsScanner.fileTree.Base  = function()
	{

	};
	
	FsScanner.fileTree.Base.prototype = 
	{
		
		options: {},
		
		
		generateRow: function()
		{
			var link = jQuery( "<a>", {
				click:	jQuery.proxy( this.onSelect, this ),
				data:	{ obj: this },
				href:	"javascript:void(0);",
				html:  	this.getName(),
				title:  this.getName()
			} );
			
			this.row = jQuery( "<li>", {
				"class": "file",
				html: 	 link
			} );

			this.container.append( this.row );
			
			return this;
		},
		
		
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