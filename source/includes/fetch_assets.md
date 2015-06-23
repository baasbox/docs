### Fetch assets

`GET /admin/asset` 

Allows to retrieve all the assets. Supports [Pagination and query criteria](#pagination-and-query-criteria).

<div class="snippet-title">
	<p>Example of a request to fetch assets</p>
</div>  

```shell
curl http://localhost:9000/admin/asset  \
	 -H X-BB-SESSION:f24c0ccb-e2bd-4741-8133-86fea6ea1e01
```

```objective_c
BAAClient *client = [BAAClient sharedClient];

[client getPath:@"admin/asset"
        parameters:nil
           success:^(id responseObject) {
               
               NSLog(@"resp %@", responseObject);
               
           }
 
           failure:^(NSError *error) {
               
               NSLog(@"err %@", error);
               
           }];
```

```java
TO BE IMPLEMENTED
```

```javascript
TO BE IMPLEMENTED
```

<div class="snippet-title">
	<p>Example of a response</p>
</div>  

```json
{
  "result": "ok",
  "data": [
    {
      "@rid": "#19:7",
      "@version": 18,
      "@class": "_BB_Asset",
      "_creation_date": "2014-02-08T11:54:09.009+0100",
      "id": "63db6a92-5e74-4bbe-aeff-982eaba10d3e",
      "_author": "admin",
      "name": "margherita",
      "meta": {
        "pizzaname": "Margherita",
        "price": 5
      }
    },
    {
      "@rid": "#19:8",
      "@version": 27,
      "@class": "_BB_Asset",
      "_creation_date": "2014-02-08T11:56:20.020+0100",
      "id": "591c583c-dd78-4ba1-acab-331b9559b8fd",
      "_author": "admin",
      "name": "marinara",
      "meta": {
        "pizzaname": "Marinara",
        "price": 4
      }
    }
  ],
  "http_code": 200
}
```

<aside class="notice">	
	Only a user with an admin role can call this API.
</aside>