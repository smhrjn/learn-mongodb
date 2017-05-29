const mongodb = require('mongodb');

// const _ = require('underscore');
// _.each([1, 2, 3], v => console.log(v));

const uri = 'mongodb://localhost:27017/example';

mongodb.MongoClient.connect(uri, (error, db) => {
	if (error) {
		console.log(error);
		process.exit(1);
	}

	const doc = {
		title: 'Jaws',
		year: 1975,
		director: 'Someone1',
		rating: 'PGG'
	}

	db.collection('movies').insert(doc, (error, result) => {
		if (error) {
			console.log(error);
			process.exit(1);
		}

		const query = { year: 1975, rating: 'PGG' };
		db.collection('movies').find(query).toArray((error, docs) => {
			if (error) {
				console.log(error);
				process.exit(1);
			}

			console.log('Found Movies: ');
			docs.forEach(doc => console.log(JSON.stringify(doc)));
			process.exit(0);
		});
	});
});
