### Count documents

`GET /document/:collection/count`

**Group**: [baasbox.data.read](#list-groups)

Returns the number of documents that the **user can read** in a collection. 
Supports [Pagination and Query Criteria](#pagination-and-query-criteria).

Parameter | Description
--------- | -----------
**collection** | The name of the collection. Mandatory.

<aside class="notice">
	A collection could contain documents that the user cannot read. Therefore they are not included in the count.
</aside>

<div class="snippet-title">
	<p>Example of a request to count documents in a collection</p>
</div>

```shell
curl http://localhost:9000/document/mycollection/count \
	 -H X-BB-SESSION:4cbfe03c-632b-4d3e-9a2b-0d4a0326d89e
```

```objective_c
// Assumes Post is a subclass of BAAObject
[Post fetchCountForObjectsWithCompletion:^(NSInteger count, NSError *error) {
                                               
                                                if (error == nil) {
                                                
                                                    NSLog(@"count is %i", count);
                                                    
                                                } else {
                                                
                                                    NSLog(@"error is %@", error);
                                                    
                                                }
                                                
                                            }];
```

```java
BaasDocument.count("collection",new BaasHandler<Long> () {
  @Override
  public void handle(BaasResult<Long> res) {
    if (res.isSuccess()) {
      Log.d("LOG","visible document count is: "+res.value());
    } else {
      Log.e("LOG","Error",res.value());
    }
  }
});
```

```javascript
BaasBox.fetchObjectsCount("posts")
  .done(function(res) {
  	console.log("res ", res['data']['count']);
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
  "data": {
    "count": 1
  },
  "http_code": 200
}
```
