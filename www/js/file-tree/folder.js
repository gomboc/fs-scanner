var FsScanner = FsScanner || {};

( function() {
	
	FsScanner.fileTree.Folder = function( folderData )
	{
		this.data = folderData;
		
		this.container = jQuery( "#mainLeft ul.root" );
		
		this.generateDir()
			.generateFiles();
	};
	
	FsScanner.fileTree.Folder.prototype = 
	{
		
		container: null,
		
			
		data: {},
		
		
		dirRow: null,
		
			
			
		generateOneFile: function( key, fileName )
		{
			new FsScanner.fileTree.File( fileName, this.data.dir, this.dirRow );
		},
		
		
		generateFiles: function()
		{
			var list = jQuery( "<ul>", {} );
			
			this.dirRow.append( list );
			
			jQuery.each( this.data.files, jQuery.proxy( this.generateOneFile, this ) );
		},
		
		
		generateDir: function()
		{
			var dirName = jQuery( "<a>", {
				click:	jQuery.proxy( FsScanner.Selected.addDir, FsScanner.Selected ),
				data:	{ obj: this },
				href:	"javascript:void(0);",
				html:  	this.data.dir
			} );
			
			this.dirRow = jQuery( "<li>", {
											"class": 	"dir",
											html:		dirName
										  } );
			
			this.container.append( this.dirRow );
			
			return this;
		},
		
		
		getName: function()
		{
			return this.data.dir;
		},
		
		
		onAddDir: function()
		{
			console.log( "onAddDir" );
		}
		
	};
	
} )();