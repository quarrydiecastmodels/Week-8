module.exports = function ( app, dbo ) {
	console.log("create");
	app.get('/api/create', (req,res) => {
		console.log("Yes");
		dbo.createCollection("products", function(err, res) {
		    if (err) throw err;
		    console.log("Collection created!");
		});
	});
}


  