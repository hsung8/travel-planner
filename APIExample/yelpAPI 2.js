// THE RETURN OBJECT FOR A SUCCESSFUL CALL WOULD LOOK LIKE THIS:


// {
//     "events": [
//         {
//             "attending_count": 7,
//             "category": "festivals-fairs",
//             "cost": 45.0,
//             "cost_max": 85.0,
//             "description": "The First Annual King of Prussia Beerfest Royale, the largest Oktoberfest-themed outdoor beer festival in the Greater Philadelphia suburbs - showcasing the...",
//             "event_site_url": "https://www.yelp.com/events/king-of-prussia-king-of-prussia-beerfest-royale?adjust_creative=SViu6FLc0fUaj3Z7rVjORw&utm_campaign=yelp_api_v3&utm_medium=api_v3_event_search&utm_source=SViu6FLc0fUaj3Z7rVjORw",
//             "id": "king-of-prussia-king-of-prussia-beerfest-royale",
//             "image_url": "https://s3-media1.fl.yelpcdn.com/ephoto/ZK-LZSVq3_wS0r3qfo-07w/o.jpg",
//             "interested_count": 46,
//             "is_canceled": false,
//             "is_free": false,
//             "is_official": false,
//             "latitude": 40.088372,
//             "longitude": -75.3915726,
//             "name": "King of Prussia Beerfest Royale",
//             "tickets_url": null,
//             "time_end": "2012-10-06T20:30:00-04:00",
//             "time_start": "2012-10-05T17:00:00-04:00",
//             "location": {
//                 "address1": "160 N Gulph Rd",
//                 "address2": "",
//                 "address3": "",
//                 "city": "King of Prussia",
//                 "zip_code": "19406",
//                 "country": "US",
//                 "state": "PA",
//                 "display_address": [
//                     "160 N Gulph Rd",
//                     "King of Prussia, PA 19406"
//                 ],
//                 "cross_streets": ""
//             },
//             "business_id": "king-of-prussia-king-of-prussia-9"
//         },
//         {
//             "attending_count": 50,
//             "category": "food-and-drink",
//             "cost": null,
//             "cost_max": null,
//             "description": "Dine Out For A Good Cause\n\nPrix-fixe Lunch & Dinner Menus at Great Prices!With a restaurant for every palate, King of Prussia's diverse dining scene offers...",
//             "event_site_url": "https://www.yelp.com/events/king-of-prussia-dinekop-king-of-prussia-restaurant-week?adjust_creative=SViu6FLc0fUaj3Z7rVjORw&utm_campaign=yelp_api_v3&utm_medium=api_v3_event_search&utm_source=SViu6FLc0fUaj3Z7rVjORw",
//             "id": "king-of-prussia-dinekop-king-of-prussia-restaurant-week",
//             "image_url": "https://s3-media2.fl.yelpcdn.com/ephoto/f44Rsd4oMTDop3WzzZDjRw/o.jpg",
//             "interested_count": 43,
//             "is_canceled": false,
//             "is_free": false,
//             "is_official": false,
//             "latitude": 40.088372,
//             "longitude": -75.3915726,
//             "name": "dineKOP (King Of Prussia Restaurant Week)",
//             "tickets_url": "",
//             "time_end": "2017-03-12T00:00:00-05:00",
//             "time_start": "2017-03-06T00:00:00-05:00",
//             "location": {
//                 "address1": "160 N Gulph Rd",
//                 "address2": "",
//                 "address3": "",
//                 "city": "King of Prussia",
//                 "zip_code": "19406",
//                 "country": "US",
//                 "state": "PA",
//                 "display_address": [
//                     "160 N Gulph Rd",
//                     "King of Prussia, PA 19406"
//                 ],
//                 "cross_streets": ""
//             },
//             "business_id": "king-of-prussia-king-of-prussia-9"
//         },
//         {
//             "attending_count": 79,
//             "category": "food-and-drink",
//             "cost": 15.0,
//             "cost_max": 35.0,
//             "description": "Ardmore Restaurant Week is back with budget-friendly offerings showcasing why Ardmore is the hottest culinary destination on the Main Line. Experience the...",
//             "event_site_url": "https://www.yelp.com/events/ardmore-ardmore-restaurant-week-2018?adjust_creative=SViu6FLc0fUaj3Z7rVjORw&utm_campaign=yelp_api_v3&utm_medium=api_v3_event_search&utm_source=SViu6FLc0fUaj3Z7rVjORw",
//             "id": "ardmore-ardmore-restaurant-week-2018",
//             "image_url": "https://s3-media3.fl.yelpcdn.com/ephoto/8lG1Q7vy18sSVMb9K0xfuw/o.jpg",
//             "interested_count": 37,
//             "is_canceled": false,
//             "is_free": false,
//             "is_official": false,
//             "latitude": 40.0021177,
//             "longitude": -75.3004009,
//             "name": "Ardmore Restaurant Week 2018",
//             "tickets_url": "http://destinationardmore.com/restaurantweek/",
//             "time_end": "2018-07-29T00:00:00-04:00",
//             "time_start": "2018-07-16T00:00:00-04:00",
//             "location": {
//                 "address1": "",
//                 "address2": "",
//                 "address3": "",
//                 "city": "Ardmore",
//                 "zip_code": "19003",
//                 "country": "US",
//                 "state": "PA",
//                 "display_address": [
//                     "Ardmore, PA 19003"
//                 ],
//                 "cross_streets": ""
//             },
//             "business_id": null
//         }
//     ],
//     "total": 3
}


// A 404 OBJECT FOR BAD API CALL WOULD LOOK LIKE THIS
// {
//     "events": [],
//     "total": 0
// }

// OR

// {
//     "error": {
//         "code": "INVALID_LOCATION",
//         "description": "The location you specified is not valid or could not be found. Try a more specific location."
//     }
// }

