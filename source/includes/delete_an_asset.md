### Delete an asset

`DELETE /admin/asset/:name`

Allows to delete an asset.

Parameter | Description
--------- | -----------
**name** | The name of the asset. Mandatory.

> Example of a request to delete an asset

```shell
curl -X DELETE http://localhost:9000/admin/asset/margherita  \
	 -H X-BB-SESSION:f24c0ccb-e2bd-4741-8133-86fea6ea1e01
```

```objective_c
BAAClient *client = [BAAClient sharedClient];

[client deletePath:@"admin/asset/margherita"
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
  "data": "",
  "http_code": 200
}
```

<aside class="notice">	
	Only a user with an admin role can delete an asset.
</aside>