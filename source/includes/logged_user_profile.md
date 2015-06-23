### Logged user profile

``GET /me``

**Group**: [baasbox.account](#list-groups)

Retrieves details about the logged in user.

<div class="snippet-title">
	<p> Request to fetch the currently logged in user profile</p>
</div> 

```shell
curl http://localhost:9000/me \
	-H X-BB-SESSION:196f48ed-6154-4b49-8dc6-8b9b2ce4900a
```

```objective_c
[BAAUser loadCurrentUserWithCompletion:^(BAAUser *user, NSError *error) {
    
	if (error == nil) {
		// deal with user object
	} else {
		// deal with error
	}
		
}];
``` 

```java
BaasUser.current().refresh(new BaasHandler<BaasUser>() {
  @Override
  public void handle(BaasResult<BaasUser> result) {
    if(result.isSuccess()) {
      BaasUser user = result.value();
      JsonObject data = user.getScope(Scope.PRIVATE);
      Log.d("LOG","Log some private data: "+data);
    } else {
      Log.e("LOG","error:",result.error());
    }
  }
});
```

```javascript
BaasBox.fetchCurrentUser()
  .done(function(res) {
  	console.log("res ", res['data']);
  })
  .fail(function(error) {
  	console.log("error ", error);
  })
```

<div class="snippet-title">
	<p>Sample response</p>
</div>  

```json
{
"result": "ok",
    "data": {
        "user": {
            "name": "cesare",
            "status": "ACTIVE",
            "roles": [{"name": "registered"}]
        },
        "id": "6d5d8300-4339-40a5-8688-d1547fec6e05",
        "visibleByAnonymousUsers": { },
        "visibleByTheUser": { },
        "visibleByFriends": { },
        "visibleByRegisteredUsers": {
            "_social": { }
        },
        "signUpDate": "2015-06-16T16:20:32.032+0200",
        "generated_username": false,
        "X-BB-SESSION": "7f943d99-5872-4f0e-9865-a02386ef882b"
        },
    "http_code": 201
}
```
