### Unfollow a user

``DELETE /follow/:username``

**Group**: [baasbox.friendship.create](#list-groups)

This API allows a user to unfollow another user. Once the relation has been deleted, the user 
won't be able to see the documents and files created by the unfollowed user anymore.

Parameter | Description
--------- | -----------
**username** | Username of the user to be unfollowed. Mandatory.

<div class="snippet-title">
	<p>Example of an unfollow request</p>
</div>

```shell
curl -X DELETE http://localhost:9000/follow/cesare \
 	 -H X-BB-SESSION:c6fb7001-ccb5-4048-8935-80ef197e1390
```

```objective_c
BAAUser *user = ...; // Instance of user to be unfollowed

[BAAUser unfollowUser:user
           completion:^(BAAUser *user, NSError *error) {
             
	             if (error == nil) {
	                 NSLog(@"not following anymore user %@", user);                 
	             } else {
	                 // deal with error             
	             }
                          
         }];
```

```java
BaasUser.withUserName("cesare").unfollow(
  new BaasHandler<BaasUser>() {
    @Override
    public void handle(BaasResult<BaasUser> res) {
      if(res.isSuccess()) {
        JsonObject data = res.value().getScope(Scope.FRIEND);
        Log.d("LOG", "No more friend data:"+(data==null));
      } else {
        // there was an error
      }
    }
  });
```

```javascript
BaasBox.unfollowUser("cesare")
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
