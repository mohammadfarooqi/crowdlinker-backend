import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
 	Data = new Meteor.Collection('app_data');

 	// Data.remove({});

 	//temp data 
 	if (Data.find({}).fetch() == 0) {
 		var arrData = [
	 		{
	 			date: new Date("1-Jan-16"),
	 			money: 1000,
	 			like: 435,
	 			views: 6372,
	 			share: 398
	 		},
			{
	 			date: new Date("1-Feb-16"),
	 			money: 1500,
	 			like: 400,
	 			views: 8273,
	 			share: 937
	 		},
	 		{
	 			date: new Date("1-Mar-16"),
	 			money: 1200,
	 			like: 365,
	 			views: 9283,
	 			share: 493
	 		},
	 		{
	 			date: new Date("1-Apr-16"),
	 			money: 1600,
	 			like: 288,
	 			views: 8392,
	 			share: 302
	 		},
	 		{
	 			date: new Date("1-May-16"),
	 			money: 1800,
	 			like: 326,
	 			views: 2384,
	 			share: 238
	 		},
	 		{
	 			date: new Date("1-Jun-16"),
	 			money: 1300,
	 			like: 389,
	 			views: 3749,
	 			share: 293
	 		},
	 		{
	 			date: new Date("1-Jul-16"),
	 			money: 1100,
	 			like: 425,
	 			views: 3927,
	 			share: 492
	 		},
	 		{
	 			date: new Date("1-Aug-16"),
	 			money: 1300,
	 			like: 187,
	 			views: 3398,
	 			share: 376
	 		},
	 		{
	 			date: new Date("1-Sep-16"),
	 			money: 1800,
	 			like: 501,
	 			views: 4587,
	 			share: 283
	 		},
	 		{
	 			date: new Date("1-Oct-16"),
	 			money: 1200,
	 			like: 287,
	 			views: 2937,
	 			share: 283
	 		},
	 		{
	 			date: new Date("1-Nov-16"),
	 			money: 1500,
	 			like: 412,
	 			views: 8378,
	 			share: 763
	 		},
	 		{
	 			date: new Date("1-Dev-16"),
	 			money: 1800,
	 			like: 509,
	 			views: 4893,
	 			share: 238
	 		},
	 		{
	 			date: new Date("1-Jan-17"),
	 			money: 1000,
	 			like: 435,
	 			views: 6372,
	 			share: 398
	 		},
	 		{
	 			date: new Date("1-Feb-17"),
	 			money: 1500,
	 			like: 400,
	 			views: 8273,
	 			share: 937
	 		},
	 		{
	 			date: new Date("1-Mar-17"),
	 			money: 1200,
	 			like: 365,
	 			views: 9283,
	 			share: 493
	 		},
	 		{
	 			date: new Date("1-Apr-17"),
	 			money: 1600,
	 			like: 288,
	 			views: 8392,
	 			share: 302
	 		},
	 		{
	 			date: new Date("1-May-17"),
	 			money: 1800,
	 			like: 326,
	 			views: 2384,
	 			share: 238
	 		},
	 		{
	 			date: new Date("1-Jun-17"),
	 			money: 1300,
	 			like: 389,
	 			views: 3749,
	 			share: 293
	 		},
	 		{
	 			date: new Date("1-Jul-17"),
	 			money: 1100,
	 			like: 425,
	 			views: 3927,
	 			share: 492
	 		},
	 		{
	 			date: new Date("1-Aug-17"),
	 			money: 1300,
	 			like: 187,
	 			views: 3398,
	 			share: 376
	 		},
	 		{
	 			date: new Date("1-Sep-17"),
	 			money: 1800,
	 			like: 501,
	 			views: 4587,
	 			share: 283
	 		},
	 		{
	 			date: new Date("1-Oct-17"),
	 			money: 1200,
	 			like: 287,
	 			views: 2937,
	 			share: 283
	 		},
	 		{
	 			date: new Date("1-Nov-17"),
	 			money: 1500,
	 			like: 412,
	 			views: 8378,
	 			share: 763
	 		},
	 		{
	 			date: new Date("1-Dec-17"),
	 			money: 1800,
	 			like: 509,
	 			views: 4893,
	 			share: 238
	 		},
	 	];

	 	for(var i = 0; i < arrData.length; i++) {
	 		Data.insert(arrData[i]);	//insert data
	 	}

	 	console.log("here1");
 	}
 	console.log("here2");
 	//console.log(Data.find({}).fetch());
});

// GET /values/likes - returns data from MongoDB collection
Router.route('/values/likes',{ where: 'server'	})
    .get(function(){
    	var startDate = this.params.query.start_date
    	var endDate = this.params.query.end_date;
        var response;

        startDate = startDate != undefined ? new Date(startDate) : undefined;
        endDate = endDate != undefined ? new Date(endDate) : undefined;


    	if (startDate != undefined && endDate != undefined) {
    		response = Data.find({ date: { $gte: startDate, $lt: endDate } }).fetch();
    	}
    	else if (startDate != undefined) {
    		response = Data.find({ date: { $gte: startDate} }).fetch();
    	}
    	else if (endDate != undefined) {
    		response = Data.find({ date: { $lt: endDate } }).fetch();	
    	}
    	else {
    		response = Data.find({}).fetch();    		
    	}

        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    });
