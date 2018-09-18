module.exports = function ( app, dbo ) {

	app.get('/add', (req,res) => {
		var myobj = [ 
			{id: 1, name: "Toy Story 1", price: "$24.99", type: "Movie", description: "It is a disc, that goes inside the thingy."},
			{id: 2, name: "Toy Story 2", price: "$19.95", type: "Movie", description: "It is a disc, that goes inside the thingy."},
			{id: 3, name: "Toy Story 3", price: "$5", type: "Movie", description: "It is a disc, that goes inside the thingy."}
		];
		dbo.collection("products").insertMany(myobj, function(err, res) {
		    if (err) throw err;
		    console.log(res.insertedCount);
		});
	});
	
}


  