### Create a new Collection

``POST /admin/collection/:collection-name``

Creates a new collection.

Parameter | Description
--------- | -----------
**collection-name** | The name of the new collection. Mandatory.

<aside class="warning">
  The user calling this API must be the admin or belong to the admin role.
</aside>

<div class="snippet-title">
	<p>Example of a request to create a collection</p>
</div>

```shell
curl -X POST http://localhost:9000/admin/collection/mycollection \
	 -H X-BB-SESSION:53331bd8-3dbb-40af-8bcb-252ac908f142
```

```objective_c
BAAClient *client = [BAAClient sharedClient];
[client createCollection:@"mynewcollection"
              completion:^(id object, NSError *error) {
                  
                  NSLog(@"collection created");
                  
              }];
```

```java
/* this api is usable only as administrator using the raw request interface */
BaasBox client = BaasBox.getDefault();
String collectionName = "mycollection";
client.rest(HttpRequest.POST,"admin/collection/"+collectionName,null,true,
            new BaasHandler<JsonObject>(){
              @Override
              public void handle(BaasResult<JsonObject> res) {
                if (res.isSuccess()) {
                  Log.d("LOG","Collection created");
                } else {
                  Log.e("LOG","Error",res.error());
                }
              }
            });
```

```javascript
BaasBox.createCollection("pizzas")
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
  "data": "",
  "http_code": 201
}
```