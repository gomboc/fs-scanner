( function() {
	
	FsScanner.fileTree.Base  = function()
	{

	};
	
	FsScanner.fileTree.Base.prototype = 
	{
		
		element: null,
		
			
		options: {},
		
		
		row: null,
		
		
		uid: null,
		
		
		appendToSelected: function()
		{
			var row = jQuery( "<li>", {
				"class":	this.getUid(),
				text: 		this.getName()
			} );
			
			this.selectedContainer.append( row );
			
			this.element.addClass( "selected" );
		},
		
		
		generateRow: function()
		{
			this.element = jQuery( "<a>", {
				click:	jQuery.proxy( this.onSelect, this ),
				data:	{ obj: this },
				href:	"javascript:void(0);",
				html:  	this.getName(),
				id:		this.getUid(),
				title:  this.getName()
			} );
			
			this.row = jQuery( "<li>", {
				"class": "file",
				html: 	 this.element
			} );

			this.container.append( this.row );
			
			return this;
		},
		
		
		getUid: function()
		{
			if ( this.uid == null ) {
				
				this.uid = "fs" + Math.random().toString(36).substring(7);
			}
			
			return this.uid;
		},
		
		
		isSelected: function()
		{
			return this.element.hasClass( "selected" );
		},
		
		
		onSelect: function( e )
		{
			var method = this.isSelected() ? "removeFromSelected": "appendToSelected";
			
			this[ method ]();
		},
		
		
		removeFromSelected: function()
		{
			jQuery( "." + this.getUid(), this.selectedContainer).remove();
			
			this.element.removeClass( "selected" );
		},
		
		
		setOptions: function( options )
		{
			this.options = options;
			
			return this;
		}
			
	};
	
} )();