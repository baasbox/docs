## Geospatial Queries

Since BaasBox is based on OrientDB, you can use any function that this NoSQL database has.
One of these functions is _distance()_ that returns the distance in Km between two points on the globe.
How can you use this feature?

Let's say you have a collection of POIs, and each record has a latitude and longitude stored as degrees in two fields, you can get all the POIs within a certain radius:

```json
"poi" collection:
    {
      "lat": 41.890210,
	  "long": 12.492231,
	  "name": "Colosseum"
    },
    {
      "lat": 41.902916,
	  "long": 12.453389,
	  "name": "Vatican City"
    },
    {
      "lat": 40.690050,
	  "long": -74.045068,
	  "name": "Liberty Island"
    }
```

Once you have retrieved the device position through its sensors, you can perform a query like "Hey, BaasBox, gimme the POIs around me in a radius of 5 Km".
For example, if you are visiting Rome:

`GET /document/poi?where=distance(lat,long,41.872389,12.480180) < 5 `

What if you also want know the distance?

`GET /document/poi?fields=name,distance(lat,long,41.872389,12.480180) as dist&where=distance(lat,long,41.872389,12.480180) < 5 `

BaasBox returns the name and distance of the POIs that satisfy the where criteria.

Remember that by default the query is executed only on records that the user can actually read. 

This is amazing if you want to manage private and public POIs, because the filter is automatically applied.


```shell
curl -X GET -H "x-baasbox-appcode:1234567890" -H "Authorization:Basic YWRtaW46YWRtaW4="  http://localhost:9000/document/poi?where=distance\(lat,long,41.872389,12.480180\)+%3C+5
```

```objective_c
// Assumes Poi as a subclass of BAAObject
NSDictionary *parameters = @{@"where" : "distance(lat,long,41.872389,12.480180) < 5"};
[Poi getObjectsWithParams:parameters
                completion:^(NSArray *pois, NSError *error) {
                    if (error == nil) {
                        NSLog(@"POIs are %@", pois);
                    } else {
                        // deal with error
                    }
                }];
```

```java
private static final BaasQuery PREPARED_QUERY =
   BaasQuery.builder()
            .collection("poi")
            .where("distance(lat,long,41.872389,12.480180) < 5")
            .build();
			
PREPARED_QUERY.query(new BaasHandler<List<JsonObject>>(){
  @Override
  public void handle(BaasResult<List<JsonObjec>> res){
    // handle result or failure
  }
});
```

```javascript
BaasBox.loadCollectionWithParams("poi", {where:"distance(lat,long,41.872389,12.480180) < 5"})
  .done(function(res) {
    console.log("res ", res);
  })
  .fail(function(error) {
    console.log("error ", error);
  })
```