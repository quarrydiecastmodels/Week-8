module.exports = function ( app, dbo ) {

	app.get('/remove', (req,res) => {
		var id = req.query.id;

		var myquery = { address: id };
		dbo.collection("products").deleteOne(myquery, function(err, obj) {
		    if (err) throw err;
		    console.log("1 document deleted");
		    console.log(dbo);
		});
	});
	
}


  