### Follow a user

``POST /follow/:username``

**Group**: [baasbox.friendship.create](#list-groups)

This API allows a user to follow another user. Once the relation is established
the follower will be able to see the documents and files created by the followed 
user as well as its `visibleByFriends` data in the user profile.

Parameter | Description
--------- | -----------
**username** | Username of the user to be followed. Mandatory.

<div class="snippet-title">
	<p>Example of a request to follow the user "cesare"</p>
</div>

```shell
curl -X POST http://localhost:9000/follow/cesare \
	 -H X-BB-SESSION:c6fb7001-ccb5-4048-8935-80ef197e1390
```

```objective_c
BAAUser *user = ...; // Instance of user to be followed

[BAAUser followUser:user
         completion:^(BAAUser *user, NSError *error) {
             
             if (error == nil) {
                 NSLog(@"now following user %@", user);                 
             } else {
                 // deal with error             
             }
                          
         }];
```

```java
BaasUser user = BaasUser.withUsername("cesare");
user.follow(new BaasHandler<BaasUser>() {

  @Override
  public void handle(BaasResult<BaasUser> res) {
    if(res.isSuccess()) {
     JsonObject profile = res.value().getScope(Scope.FRIEND);
     Log.d("LOG", "It's profile "+profile);
    } else{
      // there was an error
    }
  } 
});
```

```javascript
BaasBox.followUser("cesare")
  .done(function(res) {
  	console.log("res ", res['data']);
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
    "user": {
      "name": "cesare",
      "roles": [
        {
          "name": "registered"
        },
        {
          "name": "friends_of_cesare"
        }
      ],
      "status": "ACTIVE"
    },
    "signUpDate": "2014-01-24T11:28:09.009+0100",
    "visibleByFriends": {
      "phoneNumber": "+1123456"
    }
  },
  "http_code": 201
}
```
