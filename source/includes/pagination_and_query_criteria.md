## Pagination and query criteria

Some queries support pagination. There are two important parameters in paginated calls.

Parameter | Description
--------- | -----------
**recordsPerPage** | Number of elements to be retrieved per page. Optional
**skip**	|	similar to the [‘skip’ keyword](https://github.com/orientechnologies/orientdb/wiki/Pagination) available for OrientDB queries, it allows to specify the number of records to be skipped before BaasBox starts collecting them as a result set.
**where** | In order to search a condition, set a filter criteria in a SQL-like fashion (i.e.: ``“color=’yellow’ or address.city=’rome’”``). It is possible to use the positional mode, for example: ``“color=? or address.city=?”``. In this case you must supply the parameters’ values using the ``params`` querystring parameter.
**params** | an array of value for the where clause. For example: ``/API\_URL/WHERECLAUSE/&params=yellow&params=cyan``
**orderBy** | set an order by clause in a SQL-like fashion (i.e.: orderBy name desc). NOTE: the direction of ordering (asc or desc) is mandatory if pagination is used (see below)
**page** | a 0 based index indicating the page requested
**fields** | allows to specify a subset of fields (projections) to return instead of the entire record. It is also possibile to specify aggregate functions and execute all the operations allowed by OrientDB into the "select" statements. An exhaustive list of available functions is available at [https://github.com/orientechnologies/orientdb/wiki/SQL-Where#wiki-field-operators](https://github.com/orientechnologies/orientdb/wiki/SQL-Where#wiki-field-operators), meanwhile the explanation of how to specify projections is at [https://github.com/orientechnologies/orientdb/wiki/SQL-Query#projections](https://github.com/orientechnologies/orientdb/wiki/SQL-Query#projections)
**groupBy** | allows to indicate a "group by" criteria to group the result-set by one or more fields just like in standard SQL statements. This criteria is used in conjunction with the aggregate functions expressed into the "fields"
**count** | if set to "true", it returns the number of records that match the query instead of the entire record-set

**Example of valid calls**:

* ``/document/mycollection/count?where=color%3D’yellow’``
* ``/document/mycollection/count?where=color%3D%3F&params%3dyellow``
* ``/document/documents/count?where=color%3D%3F%20or%20color%3D%3F&params=yellow&params=cyan``


<div class="snippet-title">
	<p>Example of a paginated query</p>
</div>

```shell
curl 'http://localhost:9000/users?page=0&recordsPerPage=1' \
	 -H X-BB-SESSION:f083f676-65d0-45bd-bfe5-e876ef3f659e
	
```

```objective_c
NSDictionary *parameters = 
  @{kPageNumberKey : @0,
    kPageSizeKey : [NSNumber numberWithInteger:kPageLength]};
[BAAUser loadUsersWithParameters:parameters
                      completion:^(NSArray *users, NSError *e) {
						  if (error == nil) {
                          	NSLog(@"users are %@", users);
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
Criteria paginate = BaasQuery.builder()
                           .pagination(0,30)
                           .orderBy("user.name")
                           .criteria();

BaasUser.fetchAll(paginate,new BaasHandler<List<BaasUser>>() {
  @Override
  public void handle(BaasResult<List<BaasUser>> res) {
    if (res.isSuccess()) {
      for(BaasUser user:res.value()) {
        Log.d("LOG","User is: "+user);
      }
    } else {
      Log.e("LOG","error",res.error());
    }
  }
});

// aggregate operations and complex queries
private static final BaasQuery PREPARED_QUERY =
   BaasQuery.builder()
            .collection("collection")
            .projection("field","aggreateOp")
            .where("condition")
            .whereParams("positionalParam","positionalParam2")
            .groupBy("field")
            .orderBy("field asc")
            .pagination(2,20)
            .build();
// then
PREPARED_QUERY.query(new BaasHandler<List<JsonObject>>(){
  @Override
  public void handle(BaasResult<List<JsonObjec>> res){
    // handle result or failure
  }
});
```

```javascript
NOTHING HERE
```

<aside class="notice">
	The value of the parameter must be URL encoded.
</aside>
