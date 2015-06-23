#### Retrieve documents by a query

`GET /document/:collection`

**Group**: [baasbox.data.read](#list-groups)

Returns the documents that the **user can read** in a collection. This API supports [Pagination and Query Criteria](#pagination-and-query-criteria). 
This means that you can use, for example, the _where_ criteria to filter the result, the _recordsPerPage_ criteria to limit the number of records to retrieve, and so on.
In the _where_ clause you can use the [SQL-FILTERING](http://www.orientechnologies.com/docs/last/orientdb.wiki/SQL-Where.html) syntax of OrientDB

Parameter | Description
--------- | -----------
**collection** | The name of the collection. Mandatory.

<aside class="notice">
	A collection could contain documents that the user cannot read and therefore they are not included in the result.
</aside>

<div class="snippet-title">
	<p>Example of a request to retrieve a list of documents using default pagination</p>
</div>

```shell
curl http://localhost:9000/document/mycollection \
	 -H X-BB-SESSION:4cbfe03c-632b-4d3e-9a2b-0d4a0326d89e
	
// Version with pagination
curl 'http://localhost:9000/document/mycollection?page=0&recordsPerPage=1' \
	 -H X-BB-SESSION:4cbfe03c-632b-4d3e-9a2b-0d4a0326d89e
```

```objective_c
// Assumes Post as a subclass of BAAObject
[Post getObjectsWithCompletion:^(NSArray *posts, NSError *error) {
    
    if (error == nil) {
        NSLog(@"Posts are %@", posts);
    } else {
        // deal with error
    }
    
}];

// Version with pagination
NSDictionary *parameters = @{kPageNumberKey : @0,
                             kPageSizeKey : @20};
[Post getObjectsWithParams:parameters
                completion:^(NSArray *posts, NSError *error) {

                    if (error == nil) {
                        NSLog(@"Posts are %@", posts);
                    } else {
                        // deal with error
                    }

                }];
				
// Apply a filter using the where keyword
NSDictionary *parameters = @{@"where" : "color='red'"};
[Post getObjectsWithParams:parameters
                completion:^(NSArray *posts, NSError *error) {
                    if (error == nil) {
                        NSLog(@"Posts are %@", posts);
                    } else {
                        // deal with error
                    }
                }];
```

```java
BaasDocument.fetchAll("collection",
  new BaasHandler<List<BaasDocument>>() {
    @Override
    public void handle(BaasResult<List<BaasDocument>> res) {
    
      if (res.isSuccess()) {
        for (BaasDocument doc:res.value()) {
          Log.d("LOG","Doc: "+doc);
        }
      } else {
        Log.e("LOG","Error",res.error());
      }
    }
});

// using pagination and selection
Criteria filter = BaasQuery.builder().pagination(0,20)
                      .orderBy("field desc")
                      .where("_author = ?")
                      .whereParams("Cesare")
                      .criteria();

BaasDocument.fetchAll("collection",filter,
  new BaasHandler<List<BaasDocument>() {
    @Override
    public void handle(BaasResult<List<BaasDocument>> res) {
      if (res.isSuccess()) {
        for (BaasDocument doc:res.value()) {
          Log.d("LOG","Doc: "+doc);
        }
      } else {
        Log.e("LOG","Error",res.error());
      }
    }
});
```

```javascript
BaasBox.loadCollection("posts")
  .done(function(res) {
  	console.log("res ", res);
  })
  .fail(function(error) {
  	console.log("error ", error);
  })
  
// Version with pagination
BaasBox.loadCollectionWithParams("pizzas", {page: 0, recordsPerPage: BaasBox.pagelength})
  .done(function(res) {
  	console.log("res ", res);
  })
  .fail(function(error) {
  	console.log("error ", error);
  })
```

<div class="snippet-title">
	<p>Example of a response</p>
</div>

```json
{
  "result": "ok",
  "data": [
    {
      "@rid": "#25:1",
      "@version": 5,
      "@class": "mycollection",
      "title": "My new post title",
      "body": "Body of my post.",
      "id": "af1d66fe-c8b6-436f-866b-e4c823ae7666",
      "_creation_date": "2014-01-30T22:22:36.036+0100",
      "_author": "cesare"
    },
	{
      "@rid": "#26:1",
      "@version": 5,
      "@class": "mycollection",
      "title": "My second post title",
      "body": "Body of my second post.",
      "id": "af1236fe-c8bs-4r6f-866b-e4cnkutd8636",
      "_creation_date": "2014-01-30T22:22:38.031+0100",
      "_author": "cesare"
    }
  ],
  "http_code": 200
}
```
