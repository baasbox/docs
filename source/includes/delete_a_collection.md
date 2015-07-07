### Delete a Collection

`DELETE /admin/collection/:collection-name`

Deletes an existing collection with the name specified in the URL. The user calling this API must be the admin or belong to the admin role.

Parameter | Description
--------- | -----------
**collection-name** | The name of the collection to be deleted. Mandatory.

<aside class="warning">
	The deletion of a collection deletes all the objects belonging to it. 
</aside>

<div class="snippet-title">
	<p>Example of a request to delete a collection</p>
</div>

```shell
curl -X DELETE http://localhost:9000/admin/collection/mycollection \
	 -H X-BB-SESSION:53331bd8-3dbb-40af-8bcb-252ac908f142
```

```objective_c
NOT SUPPORTED
```

```java
/* this API is usable only as administrator using the raw request interface */
BaasBox client = BaasBox.getDefault();
String collectionName = "mycollection";
client.rest(HttpRequest.DELETE,"admin/collection/"+collectionName,null,true,
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
BaasBox.deleteCollection("pizzas")
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
  "http_code": 200
}
```